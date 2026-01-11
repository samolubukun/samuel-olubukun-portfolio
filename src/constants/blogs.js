export const BLOG_POSTS = [
    {
        id: 1,
        slug: "production-rag-systems",
        title: "Building Production RAG Systems: Vector Databases & Hybrid Search",
        excerpt: "Learn how to build robust Retrieval-Augmented Generation systems with vector databases, hybrid search, and re-ranking for production environments.",
        category: "AI/ML",
        date: "2024-12-15",
        readTime: "8 min read",
        tags: ["RAG", "Vector Databases", "AI", "LangChain", "Pinecone"],
        content: `
# Building Production RAG Systems: Vector Databases & Hybrid Search

Retrieval-Augmented Generation (RAG) has become the gold standard for building AI applications that need to work with domain-specific knowledge. However, moving from a prototype to a production-ready RAG system requires careful attention to retrieval accuracy, latency, and cost.

## The Problem with Basic RAG

A naive RAG implementation that simply embeds documents and retrieves the top-k results using cosine similarity often fails in real-world scenarios:

- **Poor recall on specific terms**: Semantic search struggles with exact matches (product codes, names, technical terms)
- **Inconsistent relevance**: Top results may not always be contextually relevant
- **No ranking logic**: The first retrieved chunk isn't necessarily the best to send to the LLM

## Solution: Hybrid Search Architecture

The most robust RAG systems combine multiple retrieval strategies:

### 1. Sparse + Dense Retrieval (Hybrid Search)

\\\`\\\`\\\`python
from langchain.retrievers import EnsembleRetriever
from langchain.retrievers import BM25Retriever
from langchain_pinecone import PineconeVectorStore

# BM25 for keyword matching
bm25_retriever = BM25Retriever.from_documents(docs)
bm25_retriever.k = 5

# Dense vector search
vector_store = PineconeVectorStore.from_documents(
    documents=docs,
    embedding=embeddings,
    index_name="my-index"
)
vector_retriever = vector_store.as_retriever(search_kwargs={"k": 5})

# Combine both with weights
ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.4, 0.6]  # Favor semantic search slightly
)
\\\`\\\`\\\`

### 2. Re-ranking Step

After hybrid retrieval, use a cross-encoder model (like Cohere Rerank) to re-score results:

\\\`\\\`\\\`python
import cohere

co = cohere.Client("YOUR_API_KEY")

# Get initial candidates from hybrid search
candidates = ensemble_retriever.get_relevant_documents(query)

# Re-rank using cross-encoder
reranked = co.rerank(
    query=query,
    documents=[doc.page_content for doc in candidates],
    top_n=3,
    model="rerank-english-v2.0"
)

# Use top 3 re-ranked results for LLM context
top_docs = [candidates[result.index] for result in reranked]
\\\`\\\`\\\`

### 3. Metadata Filtering

Pre-filter documents by metadata before retrieval to improve precision:

\\\`\\\`\\\`python
# Index documents with metadata
vector_store.add_documents(
    documents=docs,
    metadatas [{"source": "docs", "category": "api"}]
)

# Filter during retrieval
filtered_retriever = vector_store.as_retriever(
    search_kwargs={
        "k": 10,
        "filter": {"category": "api"}
    }
)
\\\`\\\`\\\`

## Best Practices for Production

### Chunking Strategy
- **Optimal size**: 256-512 tokens per chunk
- **Overlap**: 20-50 token overlap to preserve context
- **Structure-aware**: Keep section headings within chunks

### Vector Database Selection
- **Pinecone**: Managed, scales automatically, hybrid search support
- **Qdrant**: Open-source, excellent filtering capabilities
- **Weaviate**: Built-in reranking and hybrid search

### Monitoring & Evaluation
Track these metrics in production:
- **Retrieval precision**: Are top results actually relevant?
- **Answer groundedness**: Is the LLM using retrieved context?
- **Latency**: Retrieval should be <500ms for good UX

## Cost Optimization

1. **Cache embeddings**: Generate once, store in vector DB
2. **Batch queries**: Process multiple user queries together
3. **Smaller models**: Use distilled embedding models (384-dim vs 1536-dim)

## Conclusion

Production RAG systems require more than just embedding documents. By combining sparse and dense retrieval, adding re-ranking, and implementing proper monitoring, you can build RAG applications that are both accurate and cost-effective.

**Key Takeaways:**
- Hybrid search (BM25 + vector) improves recall
- Re-ranking refines relevance
- Metadata filtering reduces noise
- Monitor retrieval quality continuously
`
    },
    {
        id: 2,
        slug: "prompt-engineering-vs-fine-tuning",
        title: "Prompt Engineering vs Fine-Tuning: When to Use Which",
        excerpt: "A practical guide to choosing between prompt engineering and fine-tuning for your LLM applications, with real-world examples and cost comparisons.",
        category: "AI/ML",
        date: "2024-12-10",
        readTime: "7 min read",
        tags: ["LLMs", "Prompt Engineering", "Fine-Tuning", "AI"],
        content: `
# Prompt Engineering vs Fine-Tuning: When to Use Which

One of the most common questions when building LLM applications is: should I use prompt engineering or fine-tune a model? The answer depends on your specific use case, budget, and technical requirements.

## Quick Decision Matrix

| Factor | Prompt Engineering | Fine-Tuning |
|--------|-------------------|-------------|
| **Cost** | Low ($0.01-$1 per 1K tokens) | High ($100-$10K+ for training) |
| **Implementation Time** | Minutes to hours | Days to weeks |
| **Data Required** | 0-10 examples | 500-10,000+ examples |
| **Domain Specificity** | General tasks | Highly specialized domains |
| **Consistency** | Moderate | High |

## When to Use Prompt Engineering

### Best For:
1. **General-purpose tasks** (summarization, Q&A, content generation)
2. **Rapid prototyping** and MVPs
3. **Limited training data** (<100 examples)
4. **Flexible requirements** that change frequently

### Example: Customer Support Chatbot

\\\`\\\`\\\`python
from openai import OpenAI

client = OpenAI()

system_prompt = """
You are a helpful customer support agent for TechCorp.

Context:
- We offer 24/7 support
- Standard return policy is 30 days
- Shipping takes 3-5 business days

Instructions:
1. Be friendly and professional
2. Cite the specific policy when relevant
3. If you don't know something, say "Let me connect you with a specialist"
"""

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": "Can I return my laptop?"}
    ]
)
\\\`\\\`\\\`

**Pros:**
- Instant deployment
- Easy to iterate (just update the prompt)
- No infrastructure needed

**Cons:**
- Token costs add up with high volume
- Harder to ensure exact output format
- May hallucinate on edge cases

## When to Use Fine-Tuning

### Best For:
1. **Domain-specific terminology** (medical, legal, financial)
2. **Consistent output format** (structured data, specific JSON schemas)
3. **High-volume applications** (cost per query matters)
4. **Regulated industries** (need guaranteed behavior)

### Example: Medical Report Extraction

Suppose you need to extract structured data from medical reports:

\\\`\\\`\\\`python
# Fine-tuning with OpenAI
import openai

# Prepare training data (JSONL format)
training_data = [
    {
        "messages": [
            {"role": "system", "content": "Extract patient vitals from medical notes."},
            {"role": "user", "content": "Patient presented with BP 140/90, HR 85, temp 98.6F"},
            {"role": "assistant", "content": '{"bp_systolic": 140, "bp_diastolic": 90, "heart_rate": 85, "temperature": 98.6}'}
        ]
    },
    # ... 500-1000 more examples
]

# Upload training file
file = openai.File.create(
    file=open("medical_training.jsonl", "rb"),
    purpose="fine-tune"
)

# Create fine-tuning job
fine_tune = openai.FineTuningJob.create(
    training_file=file.id,
    model="gpt-3.5-turbo"
)
\\\`\\\`\\\`

**Pros:**
- Extremely consistent output
- Lower per-query cost at scale
- Better performance on niche tasks

**Cons:**
- Requires significant labeled data
- 2-4 hour training time
- Harder to update (need to retrain)

## Hybrid Approach (Best of Both Worlds)

Many production systems combine both strategies:

1. **Fine-tune for core behavior**
2. **Use prompts for flexibility**

### Example: Legal Document Assistant

\\\`\\\`\\\`python
# Fine-tuned model for legal terminology understanding
fine_tuned_model = "ft:gpt-3.5-turbo:my-org:legal-v1"

# Dynamic prompt for specific queries
def create_legal_prompt(document_type, query):
    return f"""
    You are a legal document assistant specialized in {document_type}.
    
    Task: {query}
    
    Guidelines:
    - Cite relevant sections
    - Flag ambiguities
    - Use plain language summaries
    """

response = client.chat.completions.create(
    model=fine_tuned_model,  # Fine-tuned base
    messages=[
        {"role": "system", "content": create_legal_prompt("contracts", "Check for liability clauses")},
        {"role": "user", "content": contract_text}
    ]
)
\\\`\\\`\\\`

## Cost Comparison (Real Example)

**Scenario:** Customer support chatbot handling 100K queries/month

| Approach | Setup Cost | Monthly Cost | Total (Year 1) |
|----------|-----------|--------------|----------------|
| **Prompt Only** (GPT-4) | $0 | $2,000 | $24,000 |
| **Fine-tuned** (GPT-3.5) | $500 | $400 | $5,300 |

*Fine-tuning pays off after ~3 months at this volume.*

## My Recommendation

Start with prompt engineering:
1. Build your MVP with prompts
2. Collect real user data
3. If you see clear patterns and high volume, fine-tune

**Don't fine-tune prematurely** - you need data to know what behavior to optimize for.

## Conclusion

**Use prompt engineering** when you need flexibility, speed, and low upfront costs.

**Use fine-tuning** when you need consistency, domain expertise, and have the data + budget.

**Use both** for production systems that need reliable core behavior with adaptable features.
`
    },
    {
        id: 3,
        slug: "ai-rate-limiting-caching",
        title: "Deploying AI Apps: Rate Limiting, Caching & Cost Management",
        excerpt: "Practical strategies for managing costs and performance when deploying AI applications at scale, with code examples for Redis caching and credit systems.",
        category: "AI/ML",
        date: "2024-12-05",
        readTime: "9 min read",
        tags: ["AI", "Cost Optimization", "Redis", "Rate Limiting"],
        content: `
# Deploying AI Apps: Rate Limiting, Caching & Cost Management

AI APIs like OpenAI, Anthropic, and Gemini charge per token. Without proper controls, costs can spiral quickly. Here's how to build production-ready AI applications that are both fast and economical.

## The Cost Problem

A typical GPT-4 API call costs $0.03 per 1K input tokens and $0.06 per 1K output tokens. For a chatbot generating 500-word responses:

- **Input**: 100 tokens (prompt) = $0.003
- **Output**: 700 tokens (response) = $0.042
- **Total per message**: ~$0.045

At 10,000 messages/day: **$450/day or $13,500/month**

## Solution 1: Credit-Based Rate Limiting

Implement a user credit system to control spend:

\\\`\\\`\\\`javascript
// Prisma schema
model User {
  id String @id
  credits Int @default(100) // Free tier: 100 messages
  tier String @default("free") // free | pro | enterprise
}

model Usage {
  id String @id
  userId String
  tokensUsed Int
  cost Decimal
  createdAt DateTime @default(now())
}
\\\`\\\`\\\`

### Atomic Credit Deduction

\\\`\\\`\\\`javascript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deductCredits(userId, tokensUsed) {
  // Calculate cost (GPT-4 pricing)
  const inputCost = (tokensUsed.input / 1000) * 0.03;
  const outputCost = (tokensUsed.output / 1000) * 0.06;
  const totalCost = inputCost + outputCost;
  const creditsNeeded = Math.ceil(totalCost * 100); // 1 credit = $0.01

  // Atomic transaction to prevent race conditions
  const result = await prisma.$transaction(async (tx) => {
    // Check and decrement credits
    const user = await tx.user.update({
      where: { id: userId, credits: { gte: creditsNeeded } },
      data: { credits: { decrement: creditsNeeded } }
    });

    // Log usage
    await tx.usage.create({
      data: {
        userId,
        tokensUsed: tokensUsed.input + tokensUsed.output,
        cost: totalCost
      }
    });

    return user;
  });

  return result;
}
\\\`\\\`\\\`

## Solution 2: Response Caching

Cache common AI responses to avoid redundant API calls:

\\\`\\\`\\\`javascript
import Redis from 'ioredis';
import { createHash } from 'crypto';

const redis = new Redis(process.env.REDIS_URL);

async function getCachedOrGenerate(prompt, generateFn) {
  // Create cache key from prompt
  const cacheKey = \\\`ai:cache:\\\${createHash('md5').update(prompt).digest('hex')}\\\`;
  
  // Check cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    console.log('Cache hit! Saved API call');
    return JSON.parse(cached);
  }

  // Generate if not cached
  const response = await generateFn(prompt);
  
  // Cache for 7 days (deterministic responses)
  await redis.setex(cacheKey, 60 * 60 * 24 * 7, JSON.stringify(response));
  
  return response;
}

// Usage
const response = await getCachedOrGenerate(
  "Explain React hooks",
  async (prompt) => {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });
    return completion.choices[0].message.content;
  }
);
\\\`\\\`\\\`

**Cache hit ratio of 30% = 30% cost savings immediately**

## Solution 3: Streaming with Early Termination

Stop generating when you have enough:

\\\`\\\`\\\`javascript
async function streamWithLimit(prompt, maxTokens = 500) {
  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    stream: true,
    max_tokens: maxTokens
  });

  let fullResponse = '';
  let tokenCount = 0;

  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content;
    if (delta) {
      fullResponse += delta;
      tokenCount += estimateTokens(delta);

      // Early termination if we hit a natural stopping point
      if (tokenCount > maxTokens * 0.8 && delta.includes('.')) {
        break; // Stop generating
      }
    }
  }

  return { response: fullResponse, tokensUsed: tokenCount };
}
\\\`\\\`\\\`

## Solution 4: Tiered Pricing

Implement usage tiers:

\\\`\\\`\\\`javascript
const TIERS = {
  free: { creditsPerMonth: 100, maxTokensPerRequest: 500 },
  pro: { creditsPerMonth: 1000, maxTokensPerRequest: 2000 },
  enterprise: { creditsPerMonth: 10000, maxTokensPerRequest: 8000 }
};

async function validateRequest(userId, prompt) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const tier = TIERS[user.tier];

  const estimatedTokens = estimateTokens(prompt);
  
  if (estimatedTokens > tier.maxTokensPerRequest) {
    throw new Error(\\\`Prompt too long for \\\${user.tier} tier. Max: \\\${tier.maxTokensPerRequest} tokens\\\`);
  }

  if (user.credits < 1) {
    throw new Error('Insufficient credits. Please upgrade your plan.');
  }

  return true;
}
\\\`\\\`\\\`

## Solution 5: Batch Processing

Process multiple requests together when possible:

\\\`\\\`\\\`javascript
async function batchGenerate(prompts) {
  // OpenAI doesn't natively support batching, but you can parallelize
  const results = await Promise.all(
    prompts.map(prompt => 
      openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Cheaper model for batch
        messages: [{ role: "user", content: prompt }]
      })
    )
  );

  return results.map(r => r.choices[0].message.content);
}
\\\`\\\`\\\`

## Monitoring Dashboard

Track your AI costs in real-time:

\\\`\\\`\\\`javascript
// Daily cost aggregation
const dailyCosts = await prisma.usage.groupBy({
  by: ['createdAt'],
  where: {
    createdAt: {
      gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
    }
  },
  _sum: { cost: true },
  orderBy: { createdAt: 'desc' }
});

// Set up alerts
if (dailyCosts[0]._sum.cost > 500) {
  await sendAlert('Daily AI costs exceeded $500!');
}
\\\`\\\`\\\`

## Cost Optimization Checklist

- [ ] Implement credit system with atomic transactions
- [ ] Cache common responses (aim for 25%+ hit rate)
- [ ] Use cheaper models (GPT-3.5) for simple tasks
- [ ] Set max_tokens limits per tier
- [ ] Enable streaming for better UX
- [ ] Monitor daily spend with alerts
- [ ] Log all usage for analysis

## Real-World Results

After implementing these strategies for a production chatbot:

- **Before**: $18,000/month
- **After**: $6,500/month
- **Savings**: 64% reduction

**Key wins:**
- Caching: 35% hit rate = $6,300 saved
- Tiered limits: Prevented abuse = $4,200 saved
- Model optimization: GPT-3.5 for 60% of queries = $1,000 saved

## Conclusion

Building AI applications requires careful cost management. By implementing credits, caching, and monitoring, you can scale your app without breaking the bank.

**Remember**: Start with strict limits, then relax them as you validate demand. It's easier to increase limits than to recover from a surprise $50K bill.
`
    },
    {
        id: 4,
        slug: "modern-react-patterns-2024",
        title: "Modern React Patterns: Hooks, State Management & Performance",
        excerpt: "A comprehensive guide to React best practices in 2024, covering hooks, state management strategies, and performance optimization techniques.",
        category: "Full-Stack",
        date: "2024-11-28",
        readTime: "10 min read",
        tags: ["React", "JavaScript", "State Management", "Performance"],
        content: `# Modern React Patterns: Hooks, State Management & Performance

React has evolved significantly since hooks were introduced. Here's what modern React development looks like in 2024, with practical patterns you should be using.

## 1. Custom Hooks for Reusable Logic

The most powerful pattern in modern React is extracting logic into custom hooks.

### Example: useAsync for Data Fetching

\\\`\\\`\\\`javascript
import { useState, useEffect } from 'react';

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = async (...params) => {
    setStatus('pending');
    setData(null);
    setError(null);

    try {
      const response = await asyncFunction(...params);
      setData(response);
      setStatus('success');
      return response;
    } catch (error) {
      setError(error);
      setStatus('error');
      throw error;
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  return { execute, status, data, error, isLoading: status === 'pending' };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useAsync(
    () => fetch(\\\`/api/users/\\\${userId}\\\`).then(r => r.json())
  );

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <div>{user.name}</div>;
}
\\\`\\\`\\\`

### Example: useLocalStorage for Persistent State

\\\`\\\`\\\`javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current: {theme}
    </button>
  );
}
\\\`\\\`\\\`

## 2. State Management: The Right Tool for the Job

**Rule of thumb**: Start local, scale as needed.

### Local State (useState/useReducer)
Perfect for component-specific state:

\\\`\\\`\\\`javascript
function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  if (isEditing) {
    return (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => setIsEditing(false)}
      />
    );
  }

  return <div onClick={() => setIsEditing(true)}>{text}</div>;
}
\\\`\\\`\\\`

### Context API (For Prop Drilling)
When you need to pass data through multiple levels:

\\\`\\\`\\\`javascript
const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

// Deep in the component tree
function UserAvatar() {
  const { user } = useContext(UserContext);
  return <img src={user?.avatar} />;
}
\\\`\\\`\\\`

### Zustand (For Global State)
Clean, simple global state without the boilerplate:

\\\`\\\`\\\`javascript
import create from 'zustand';

const useStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ 
    cart: [...state.cart, item] 
  })),
  removeFromCart: (id) => set((state) => ({ 
    cart: state.cart.filter(item => item.id !== id) 
  })),
  clearCart: () => set({ cart: [] })
}));

// Usage anywhere
function Cart() {
  const { cart, removeFromCart } = useStore();
  
  return (
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
\\\`\\\`\\\`

### TanStack Query (For Server State)
**The best choice for API data**:

\\\`\\\`\\\`javascript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UserList() {
  const queryClient = useQueryClient();

  // Fetch users
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(r => r.json()),
    staleTime: 5 * 60 * 1000 // Cache for 5 minutes
  });

  // Update user mutation
  const updateUserMutation = useMutation({
    mutationFn: (user) => fetch(\\\`/api/users/\\\${user.id}\\\`, {
      method: 'PATCH',
      body: JSON.stringify(user)
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']); // Refetch
    }
  });

  if (isLoading) return <Spinner />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => updateUserMutation.mutate(user)}>
            Update
          </button>
        </li>
      ))}
    </ul>
  );
}
\\\`\\\`\\\`

## 3. Performance Optimization

### useMemo for Expensive Calculations

\\\`\\\`\\\`javascript
function DataTable({ items, filterText }) {
  // Without useMemo, this runs on every render
  const filteredItems = useMemo(() => {
    console.log('Filtering...'); // Only logs when items/filterText change
    return items.filter(item => 
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [items, filterText]);

  return (
    <table>
      {filteredItems.map(item => (
        <tr key={item.id}><td>{item.name}</td></tr>
      ))}
    </table>
  );
}
\\\`\\\`\\\`

### useCallback for Stable Functions

\\\`\\\`\\\`javascript
function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, Child re-renders every time count changes
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []); // Dependencies: none (function never changes)

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});
\\\`\\\`\\\`

### React.memo for Component Memoization

\\\`\\\`\\\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  console.log('Rendering expensive component');
  // Complex rendering logic
  return <div>{/* ... */}</div>;
});

// Will only re-render when data changes
\\\`\\\`\\\`

### Code Splitting with Lazy Load

\\\`\\\`\\\`javascript
import { lazy, Suspense } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyChart />
    </Suspense>
  );
}
\\\`\\\`\\\`

## 4. Modern Component Patterns

### Compound Components

\\\`\\\`\\\`javascript
function Select({ children, value, onChange }) {
  return (
    <div className="select">
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, onChange })
      )}
    </div>
  );
}

Select.Option = function ({ value, onChange, children, value: currentValue }) {
  return (
    <div 
      className={value === currentValue ? 'active' : ''}
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
};

// Usage
<Select value={selected} onChange={setSelected}>
  <Select.Option value="react">React</Select.Option>
  <Select.Option value="vue">Vue</Select.Option>
  <Select.Option value="angular">Angular</Select.Option>
</Select>
\\\`\\\`\\\`

## Best Practices Checklist

- [ ] Use custom hooks to extract reusable logic
- [ ] Choose the right state management tool (local > Context > Zustand > Redux)
- [ ] Use TanStack Query for all server state
- [ ] Memoize expensive calculations with useMemo
- [ ] Use useCallback for functions passed to memoized children
- [ ] Code-split large components with React.lazy
- [ ] Avoid premature optimization (measure first!)

## Conclusion

Modern React is about:
1. **Custom hooks** for reusable logic
2. **Right-sized state management** (don't use Redux if useState works)
3. **Performance tools** when needed (not by default)
4. **Component composition** over prop drilling

Master these patterns and you'll write cleaner, faster React code.
`
    },
    {
        id: 5,
        slug: "rest-vs-graphql-api-design",
        title: "API Design: REST vs GraphQL - Choosing the Right Approach",
        excerpt: "Compare REST and GraphQL architectures with practical examples. Learn when to use each approach based on your application's needs.",
        category: "Full-Stack",
        date: "2024-11-20",
        readTime: "8 min read",
        tags: ["API Design", "REST", "GraphQL", "Backend"],
        content: `# API Design: REST vs GraphQL - Choosing the Right Approach

Choosing between REST and GraphQL can make or break your API's developer experience. Both have their place—here's how to decide.

## Quick Decision Guide

**Use REST when:**
- Simple, predictable data structures
- Heavy caching requirements
- Public API with many third-party consumers
- Team is already familiar with REST

**Use GraphQL when:**
- Complex, interconnected data models
- Mobile apps (minimize requests)
- Rapid frontend iteration
- Different clients need different data shapes

## REST: The Established Standard

REST has been the backbone of web APIs for over two decades. It's simple, well-understood, and has excellent tooling support.

### Example:REST API

\`\`\`javascript
// Express REST endpoints
app.get('/api/users/:id', async (req, res) => {
  const user = await db.users.findById(req.params.id);
  res.json(user);
});

app.get('/api/users/:id/posts', async (req, res) => {
  const posts = await db.posts.findByUserId(req.params.id);
  res.json(posts);
});

// Client needs 2 requests
const user = await fetch('/api/users/123').then(r => r.json());
const posts = await fetch('/api/users/123/posts').then(r => r.json());
\`\`\`

**REST Pros:**
- Simple HTTP methods (GET, POST, PUT, DELETE)
- Built-in browser/CDN caching
- Easy to understand and debug
- Great testing tools (Postman, curl)

**REST Cons:**
- Over-fetching (getting more data than needed)
- Under-fetching (multiple requests for related data)
- Versioning challenges (v1, v2 endpoints)

## GraphQL: Flexible Data Fetching

GraphQL lets clients request exactly what they need in a single query.

### Example: GraphQL API

\`\`\`javascript
// Apollo Server setup
const typeDefs = gql\\\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    user(id:  ID!): User
  }
\\\`;

const resolvers = {
  Query: {
    user: (_, { id }) => db.users.findById(id)
  },
  User: {
    posts: (user) => db.posts.findByUserId(user.id)
  }
};

// Client gets exact data in 1 request
const { data } = await client.query({
  query: gql\\\`
    query GetUser($id: ID!) {
      user(id: $id) {
        name
        email
        posts {
          title
        }
      }
    }
  \\\`,
  variables: { id: '123' }
});
\`\`\`

**GraphQL Pros:**
- One request for complex data
- Clients specify exact fields needed
- Strong typing via schema
- Great for rapid development

**GraphQL Cons:**
- Learning curve
- Caching is harder (no URL-based cache)
- Can lead to complex/inefficient DB queries
- Requires more sophisticated error handling

## Performance Comparison

**Scenario**: Mobile app showing user profile with recent posts

### REST Approach:
\\\`\\\`\\\`
GET /users/123          // 1.2KB
GET /users/123/posts    // 8.5KB
Total: 9.7KB, 2 requests
\\\`\\\`\\\`

### GraphQL Approach:
\\\`\\\`\\\`graphql
query {
  user(id: "123") {
    name
    email
    posts(limit: 5) {
      title
    }
  }
}
# Total: 2.1KB, 1 request
\\\`\\\`\\\`

**GraphQL wins for mobile**: 78% less data transferred

## When to Use Each

** Start with REST if:**
- Building an MVP
- Simple CRUD operations
- Public API
- Team lacks GraphQL experience

**Migrate to GraphQL when:**
- Mobile app needs optimization
- Multiple client types (web, iOS, Android)
- Complex data relationships
- Rapid feature iteration

## Hybrid Approach (Best of Both)

Many companies use both:

\`\`\`javascript
// REST for simple, cacheable operations
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/login', async (req, res) => {
  const token = await authService.login(req.body);
  res.json({ token });
});

// GraphQL for complex data fetching
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
\`\`\`

**Use REST for:** Auth, webhooks, file uploads
**Use GraphQL for:** Complex queries, mobile APIs

## Conclusion

Don't choose based on hype. Choose based on your actual needs:

- **Small team, simple app** → REST
- **Mobile-first, complex data** → GraphQL
- **Enterprise with both** → Hybrid

The best API is the one your team can build and maintain effectively.`
    },
    {
        id: 6,
        slug: "database-optimization-techniques",
        title: "Database Optimization: Indexing, Queries & Connection Pooling",
        excerpt: "Practical strategies for optimizing database performance with proper indexing, query optimization, and connection management.",
        category: "Full-Stack",
        date: "2024-11-15",
        readTime: "9 min read",
        tags: ["Database", "Performance", "PostgreSQL", "Optimization"],
        content: `# Database Optimization: Indexing, Queries & Connection Pooling

Database performance can make or break your application. Here's how to optimize for speed without over-engineering.

## 1. Indexing: The 80/20 Solution

Proper indexing solves 80% of database performance issues with minimal effort.

### Basic Index Creation

\`\`\`sql
-- Slow query (full table scan on 1M rows)
SELECT * FROM users WHERE email = 'test@example.com';
-- Execution time: 850ms

-- Create index
CREATE INDEX idx_users_email ON users(email);

-- Same query (index scan)
SELECT * FROM users WHERE email = 'test@example.com';
-- Execution time: 3ms ✅
\`\`\`

**Result**: 283x faster!

### Composite Indexes for Multiple Columns

\`\`\`sql
-- Query filtering on two columns
SELECT * FROM orders 
WHERE status = 'pending' 
AND created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Create composite index (order matters!)
CREATE INDEX idx_orders_status_created 
ON orders(status, created_at DESC);
\`\`\`

**Rule**: Put the most selective column first.

### Partial Indexes (Save Space)

\`\`\`sql
-- Only index active users (save 70% index space)
CREATE INDEX idx_active_users_email 
ON users(email) 
WHERE is_active = true;
\`\`\`

## 2. Query Optimization

### Use EXPLAIN ANALYZE

Always check how your queries execute:

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;
\`\`\`

**Look for:**
- **Seq Scan** (bad) → Use indexes
- **Index Scan** (good)
- High **row counts** → Filter earlier
- **Nested Loop** on large tables → Adjust join strategy

### Avoid N+1 Queries

**Bad** (1 + N queries):
\`\`\`javascript
// Fetches users (1 query)
const users = await db.users.findAll();

// Then 1 query PER user! (N queries)
for (const user of users) {
  user.posts = await db.posts.findByUserId(user.id);
}
// Total: 1 + 100 = 101 queries 😱
\`\`\`

**Good** (1 query with JOIN):
\`\`\`javascript
const users = await db.users.findAll({
  include: [{ model: db.posts }]
});
// Total: 1 query ✅
\`\`\`

### SELECT Only What You Need

\`\`\`sql
-- Bad: Returns all columns (10KB per row)
SELECT * FROM users WHERE id = 1;

-- Good: Only needed columns (0.5KB per row)
SELECT id, name, email FROM users WHERE id = 1;
\`\`\`

**For 1000 rows**: 10MB vs 0.5MB (95% reduction)

## 3. Connection Pooling

Database connections are expensive to create. Reuse them!

### Node.js with Prisma

\`\`\`javascript
// Pooling built-in
const prisma = new PrismaClient();

// Each query reuses connections from the pool
const users = await prisma.user.findMany();
\`\`\`

### Manual Pooling with node-postgres

\`\`\`javascript
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'mydb',
  max: 20,  // Max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Reuse connection from pool
const client = await pool.connect();
try {
  const result = await client.query(
    'SELECT * FROM users WHERE id = $1',
    [userId]
  );
  return result.rows[0];
} finally {
  client.release();  // Return to pool
}
\`\`\`

**Without pooling**: 50ms per query (connection overhead)
**With pooling**: 5ms per query ✅

## 4. Caching Strategies

### Application-Level Caching with Redis

\`\`\`javascript
import Redis from 'ioredis';
const redis = new Redis();

async function getUser(id) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);

  // Cache miss - query database
  const user = await db.users.findById(id);
  
  // Cache for 5 minutes
  await redis.setex(\`user:\${id}\`, 300, JSON.stringify(user));
  
  return user;
}
\`\`\`

### Query Result Caching (Materialized Views)

\`\`\`sql
-- Pre-compute expensive aggregations
CREATE MATERIALIZED VIEW user_stats AS
SELECT 
  user_id,
  COUNT(*) as total_posts,
  MAX(created_at) as last_post_at
FROM posts
GROUP BY user_id;

-- Refresh periodically (cron job)
REFRESH MATERIALIZED VIEW user_stats;

-- Query is instant now
SELECT * FROM user_stats WHERE user_id = 123;
\`\`\`

## 5. Real-World Optimization Example

**Before optimization:**
\`\`\`sql
-- Slow query (2.5 seconds)
SELECT * FROM orders
WHERE user_id = 123
AND status = 'pending'
ORDER BY created_at DESC;
\`\`\`

**After optimization:**
\`\`\`sql
-- 1. Add composite index
CREATE INDEX idx_orders_user_status_created
ON orders(user_id, status, created_at DESC);

-- 2. Select only needed columns
SELECT id, total, created_at FROM orders
WHERE user_id = 123
AND status = 'pending'
ORDER BY created_at DESC
LIMIT 20;  -- Pagination

-- 3. Cache in Redis (5min TTL)
\`\`\`

**Result**: 2.5s → 12ms (208x faster!)

## Performance Checklist

- **Index foreign keys** and WHERE columns
- **Use composite indexes** for multi-column queries
- **Avoid SELECT *** - fetch only needed columns
- **Use connection pooling** (10-20 connections typical)
- **Enable query logging** to find slow queries
- **Run VACUUM ANALYZE** weekly (PostgreSQL)
- **Cache frequently-read data** (Redis)
- **Paginate large result sets** (LIMIT/OFFSET)

## Common Mistakes

❌ **Index every column** → Slows down writes
✅ **Index based on queries** → Fast reads, reasonable writes

❌ **No connection pooling** → High latency
✅ **Pool with 10-20 connections** → Low latency

❌ **Caching everything forever** → Stale data
✅ **Cache with reasonable TTL** → Fresh enough data

## Conclusion

**The 80/20 rule**: 
- 20% effort (proper indexing + connection pooling)
- 80% of performance gains

Start with indexes, add pooling, then cache. Don't over-optimize prematurely!`
    },
    {
        id: 7,
        slug: "scalability-patterns-web-apps",
        title: "Scalability Patterns: From Monolith to Distributed Systems",
        excerpt: "Learn essential scalability patterns including load balancing, caching, database sharding, and microservices architecture.",
        category: "System Design",
        date: "2024-11-10",
        readTime: "10 min read",
        tags: ["Scalability", "System Design", "Architecture", "Microservices"],
        content: `# Scalability Patterns: From Monolith to Distributed Systems

Scalability isn't about microservices from day one. It's about making smart architectural decisions as you grow.

## The Scaling Journey

**Stage 1: Single Server** (0-10K users)
- Monolith + database on one box
- Deploy to Heroku/Railway
- **Cost**: $50/month

**Stage 2: Vertical Scaling** (10K-100K users)
- Bigger server (more CPU/RAM)
- Separate app  + database servers
- **Cost**: $200/month

**Stage 3: Horizontal Scaling** (100K-1M users)
- Load balancer + multiple app servers
- Database read replicas
- Redis caching layer
- **Cost**: $500-1K/month

**Stage 4: Distributed** (1M+ users)
- Microservices
- Database sharding
- CDN for static assets
- Message queues
- **Cost**: $5K+/month

## Pattern 1: Load Balancing

Distribute traffic across multiple servers:

\`\`\`nginx
# Nginx config
upstream backend {
    least_conn;  # Route to least busy server
    server app1.example.com:3000;
    server app2.example.com:3000;
    server app3.example.com:3000;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
    }
}
\`\`\`

**Result**: 3x capacity with zero code changes

## Pattern 2: Caching Layers

### 1. CDN (Browser Caching)

\`\`\`javascript
// Next.js - cache static assets
export default function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=31536000');
  return res.json({ data });
}
\`\`\`

### 2. Application Caching (Redis)

\`\`\`javascript
async function getUser(id) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);

  const user = await db.users.findById(id);
  await redis.setex(\`user:\${id}\`, 300, JSON.stringify(user));
  
  return user;
}
\`\`\`

### 3. Database Query Caching

\`\`\`sql
-- PostgreSQL prepared statements
PREPARE get_user AS 
SELECT * FROM users WHERE id = $1;

EXECUTE get_user(123);
\`\`\`

**Cache Hit Rates:**
- 30% cache hits = 30% fewer DB queries
- 70% cache hits = 3x lower DB load

## Pattern 3: Database Scaling

###  Read Replicas

\`\`\`javascript
// Separate read/write connections
const primaryDB = new Pool({ host: 'primary.db' });
const replicaDB = new Pool({ host: 'replica.db' });

// Writes go to primary
await primaryDB.query('INSERT INTO users ...');

// Reads from replica
const users = await replicaDB.query('SELECT * FROM users');
\`\`\`

**Result**: 10x read capacity

### Database Sharding

\`\`\`javascript
// Shard by user ID
function getShardId(userId) {
  return userId % NUMBER_OF_SHARDS;
}

const shardId = getShardId(userId);
const db = shardDatabases[shardId];
const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
\`\`\`

**When to shard**: 1B+ rows or 10TB+ data

## Pattern 4: Async Processing

Move slow work out of the request cycle:

\`\`\`javascript
// API returns immediately
app.post('/api/reports', async (req, res) => {
  await  queue.add('generate-report', {
    userId: req.user.id,
    type: req.body.type
  });
  
  res.json({ status: 'queued' });
});

// Worker processes async
queue.process('generate-report', async (job) => {
  const report = await generateReport(job.data);
  await emailReport(job.data.userId, report);
});
\`\`\`

**Result**: API responds in 50ms instead of 10s

## Pattern 5: The Microservices Decision

**Monolith → Microservices**

Don't split until you have to:

\`\`\`
Monolith (Year 1-2)
  ↓
Modular Monolith (Year 2-3)
  ↓
Microservices (Year 3+)
\`\`\`

**When to use microservices:**
- Team size > 20 developers
- Different scaling needs per service
- Want independent deployment

**Example Split:**
\`\`\`
┌─────────────────┐
│  API Gateway    │
└────────┬────────┘
         │
    ┌────┴────┬────────┬──────────┐
    │         │        │          │
┌───▼───┐ ┌──▼──┐ ┌───▼────┐ ┌───▼────┐
│ Users │ │Order│ │Payment │ │Notific.│
│Service│ │Serv.│ │Service │ │Service │
└───────┘ └─────┘ └────────┘ └────────┘
    │         │        │          │
┌───▼───┐ ┌──▼──┐ ┌───▼────┐ ┌───▼────┐
│Users  │ │Order│ │Payments│ │Notif.  │
│  DB   │ │ DB  │ │   DB   │ │  DB    │
└───────┘ └─────┘ └────────┘ └────────┘
\`\`\`

## Real-World Scaling Timeline

**0-10K users**: Single server monolith
**10K-100K**: Vertical scaling + CDN
**100K-500K**: Load balancer + 3 app servers + replicas
**500K-1M**: Add Redis + async workers
**1M+**: Microservices + sharding

## Common Mistakes

❌ **Microservices from day 1** → Over-engineered
✅ **Start monolith** → Extract services later

❌ **No monitoring** → Flying blind
✅ **Track metrics** → Response times, error rates

❌ **Premature sharding** → Unnecessary complexity
✅ **Use replicas first** → Simpler and effective

## The Scaling Mindset

1. **Measure first** - Don't optimize without data
2. **Start simple** - Monolith is fine initially
3. **Scale vertically first** - Easier than horizontal
4. **Cache aggressively** - Solves 80% of issues
5. **Async when possible** - Don't block requests

## Conclusion

Scaling is a journey, not a destination.

**The right approach:**
- Start with a monolith
- Add caching when traffic grows
- Scale horizontally with load balancers
- Extract microservices only when needed

Don't scale for hypothetical traffic. Scale for actual bottlenecks.`
    },
    {
        id: 8,
        slug: "real-time-architecture-websockets",
        title: "Real-Time Architecture: WebSockets, Pub/Sub & Event Streaming",
        excerpt: "Build real-time features with WebSockets, Redis Pub/Sub, and event-driven architectures. Practical examples for chat, notifications, and live updates.",
        category: "System Design",
        date: "2024-11-05",
        readTime: "9 min read",
        tags: ["Real-Time", "WebSockets", "Pub/Sub", "System Design"],
        content: `# Real-Time Architecture: WebSockets, Pub/Sub & Event Streaming

Building real-time features requires the right architecture. Here's how to choose between WebSockets, Server-Sent Events, and Pub/Sub.

## Technology Comparison

| Feature | WebSockets | Server-Sent Events | Long Polling |
|---------|-----------|-------------------|--------------|
| **Direction** | Bidirectional | Server → Client | Client → Server |
| **Browser Support** | Excellent | Good | Universal |
| **Connection** | Persistent | Persistent | Short-lived |
| **Reconnection** | Manual | Automatic | N/A |
| **Best For** | Chat, multiplayer games | Notifications, live feeds | Fallback only |

## Pattern 1: WebSockets with Socket.io

Perfect for bidirectional communication (chat, collaborative editing):

\`\`\`javascript
// Server
import { Server } from 'socket.io';

const io = new Server(3001, {
  cors: { origin: 'http://localhost:3000' }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a chat room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    io.to(roomId).emit('user-joined', socket.id);
  });

  // Broadcast message to room
  socket.on('send-message', async (data) => {
    const message = await db.messages.create(data);
    io.to(data.roomId).emit('new-message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
\`\`\`

\`\`\`javascript
// Client (React)
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function Chat({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.emit('join-room', roomId);

    newSocket.on('new-message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => newSocket.close();
  }, [roomId]);

  const sendMessage = (text) => {
    socket.emit('send-message', { roomId, text });
  };

  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.text}</div>
      ))}
      <input onKeyPress={(e) => {
        if (e.key === 'Enter') sendMessage(e.target.value);
      }} />
    </div>
  );
}
\`\`\`

## Pattern 2: Redis Pub/Sub for Scaling

Scale WebSockets across multiple servers:

\`\`\`javascript
import Redis from 'ioredis';

const pub = new Redis();
const sub = new Redis();

// Subscribe to channel
sub.subscribe('chat-messages');

sub.on('message', (channel, message) => {
  const data = JSON.parse(message);
  // Broadcast to clients on THIS server
  io.to(data.roomId).emit('new-message', data);
});

// When message received from client
io.on('connection', (socket) => {
  socket.on('send-message', async (data) => {
    const message = await db.messages.create(data);
    
    // Publish to ALL servers via Redis
    await pub.publish('chat-messages', JSON.stringify(message));
  });
});
\`\`\`

**Architecture:**
\`\`\`
Client → Load Balancer → Server 1 (Socket.io)
                      → Server 2 (Socket.io)
                      → Server 3 (Socket.io)
                            ↓
                       Redis Pub/Sub
\`\`\`

**Result**: Horizontally scalable real-time

## Pattern 3: Server-Sent Events (SSE)

For one-way updates (notifications, live dashboards):

\`\`\`javascript
// Server (Next.js API route)
export async function GET(req) {
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  const encoder = new TextEncoder();

  // Send updates every 5 seconds
  const interval = setInterval(async () => {
    const data = await getLiveData();
    await writer.write(
      encoder.encode(\`data: \${JSON.stringify(data)}\\n\\n\`)
    );
  }, 5000);

  req.signal.addEventListener('abort', () => {
    clearInterval(interval);
    writer.close();
  });

  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  });
}
\`\`\`

\`\`\`javascript
// Client
const eventSource = new EventSource('/api/live-feed');

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateDashboard(data);
};

eventSource.onerror = () => {
  eventSource.close();
};
\`\`\`

## Pattern 4: Optimistic Updates

Make UI feel instant:

\`\`\`javascript
function useOptimisticMessages() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const tempId = \`temp-\${Date.now()}\`;
    
    // Add to UI immediately
    setMessages(prev => [...prev, {
      id: tempId,
      text,
      status: 'sending'
    }]);

    try {
      // Send to server
      const saved = await api.sendMessage(text);
      
      // Replace temp with real
      setMessages(prev =>
        prev.map(m => m.id === tempId ? saved : m)
      );
    } catch (error) {
      // Mark as failed
      setMessages(prev =>
        prev.map(m => m.id === tempId 
          ? {...m, status: 'failed'} 
          : m)
      );
    }
  };

  return { messages, sendMessage };
}
\`\`\`

## Production Checklist** 

- **Authentication**: Validate WebSocket connections
- **Rate limiting**: Prevent spam (max 10 msg/sec per user)
- **Reconnection logic**: Exponential backoff
- **Heartbeats**: Detect dead connections (ping every 30s)
- **Message ordering**: Use sequence numbers
- **Error handling**: Graceful degradation

## Choosing the Right Tool

**WebSockets** → Chat, collaborative editing, multiplayer games
**SSE** → Live feeds, notifications, stock tickers
**Long Polling** → Legacy browser support only

## Conclusion

Real-time doesn't have to be complex:

1. **Start with WebSockets** for chat
2. **Use SSE** for one-way feeds
3. **Add Redis Pub/Sub** when scaling horizontally

The key is choosing based on your use case, not the latest hype.`
    },
    {
        id: 9,
        slug: "event-driven-architecture-message-queues",
        title: "Event-Driven Architecture: Message Queues & Async Processing",
        excerpt: "Master event-driven architecture with RabbitMQ, Kafka, and AWS SQS. Learn when to use message queues vs event streams for scalable async processing.",
        category: "System Design",
        date: "2024-11-01",
        readTime: "10 min read",
        tags: ["Event-Driven", "Message Queues", "Kafka", "RabbitMQ", "Async"],
        content: `# Event-Driven Architecture: Message Queues & Async Processing

Event-driven architecture (EDA) is essential for building scalable, decoupled systems. Here's how to choose between message queues and event streams.

## Why Event-Driven Architecture?

**Traditional Request-Response:**
\\\`\\\`\\\`
Client → API → Database → Response
(Blocking, tight coupling)
\\\`\\\`\\\`

**Event-Driven:**
\\\`\\\`\\\`
Client → API → Event Queue → Workers
(Non-blocking, loose coupling)
\\\`\\\`\\\`

**Benefits:**
- Asynchronous processing (better UX)
- Decoupled services (easier to scale)
- Fault tolerance (retry failed tasks)
- Load leveling (smooth traffic spikes)

## Message Queue vs Event Stream

| Feature | Message Queue | Event Stream |
|---------|--------------|--------------|
| **Example** | RabbitMQ, SQS | Kafka, Kinesis |
| **Consumption** | Deleted after read | Persistent log |
| **Use Case** | Task processing | Event sourcing, analytics |
| **Order** | FIFO optional | Guaranteed per partition |
| **Retention** | Hours/days | Days/months/forever |

## Pattern 1: Task Queue with RabbitMQ

Perfect for background job processing:

\\\`\\\`\\\`javascript
// Producer (API)
import amqp from 'amqplib';

async function sendEmail(to, subject, body) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  const queue = 'email_queue';
  await channel.assertQueue(queue, { durable: true });
  
  const message = { to, subject, body };
  channel.sendToQueue(
    queue,
    Buffer.from(JSON.stringify(message)),
    { persistent: true }
  );
  
  console.log('Email job queued');
  await channel.close();
  await connection.close();
}

// Consumer (Worker)
async function startWorker() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  const queue = 'email_queue';
  await channel.assertQueue(queue, { durable: true });
  channel.prefetch(1); // Process one at a time
  
  channel.consume(queue, async (msg) => {
    const { to, subject, body } = JSON.parse(msg.content.toString());
    
    try {
      await emailService.send(to, subject, body);
      channel.ack(msg); // Success
      console.log(\\\`Email sent to \\\${to}\\\`);
    } catch (error) {
      channel.nack(msg, false, true); // Retry
      console.error('Failed to send email:', error);
    }
  });
}
\\\`\\\`\\\`

**Result**: API responds instantly, emails sent in background

## Pattern 2: Event Streaming with Kafka

For event sourcing and real-time analytics:

\\\`\\\`\\\`javascript
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

// Producer
const producer = kafka.producer();

async function trackUserAction(userId, action, data) {
  await producer.connect();
  
  await producer.send({
    topic: 'user-actions',
    messages: [{
      key: userId,
      value: JSON.stringify({
        userId,
        action,
        data,
        timestamp: Date.now()
      })
    }]
  });
  
  console.log('Event published');
}

// Consumer 1: Analytics
const analyticsConsumer = kafka.consumer({ groupId: 'analytics' });

await analyticsConsumer.subscribe({ topic: 'user-actions' });
await analyticsConsumer.run({
  eachMessage: async ({ message }) => {
    const event = JSON.parse(message.value);
    await analyticsDB.insert(event);
    console.log('Event logged to analytics');
  }
});

// Consumer 2: Recommendations
const recommendConsumer = kafka.consumer({ groupId: 'recommendations' });

await recommendConsumer.subscribe({ topic: 'user-actions' });
await recommendConsumer.run({
  eachMessage: async ({ message }) => {
    const event = JSON.parse(message.value);
    await updateRecommendations(event.userId, event.action);
    console.log('Recommendations updated');
  }
});
\\\`\\\`\\\`

**Key**: One event, multiple consumers processing independently

## Pattern 3: Dead Letter Queues

Handle failures gracefully:

\\\`\\\`\\\`javascript
// Main queue with DLQ
await channel.assertQueue('orders_queue', {
  durable: true,
  arguments: {
    'x-dead-letter-exchange': 'dlx',
    'x-dead-letter-routing-key': 'orders_dlq'
  }
});

// Dead letter queue
await channel.assertQueue('orders_dlq', { durable: true });

channel.consume('orders_queue', async (msg) => {
  try {
    const order = JSON.parse(msg.content.toString());
    await processOrder(order);
    channel.ack(msg);
  } catch (error) {
    // After max retries, goes to DLQ
    channel.nack(msg, false, false);
  }
});

// Monitor DLQ
channel.consume('orders_dlq', async (msg) => {
  const failedOrder = JSON.parse(msg.content.toString());
  await alertOps(\\\`Order \\\${failedOrder.id} failed permanently\\\`);
  channel.ack(msg);
});
\\\`\\\`\\\`

## Pattern 4: Priority Queues

Process urgent tasks first:

\\\`\\\`\\\`javascript
await channel.assertQueue('tasks', {
  durable: true,
  arguments: { 'x-max-priority': 10 }
});

// High priority (VIP customer)
channel.sendToQueue('tasks', Buffer.from(JSON.stringify(task)), {
  priority: 9
});

// Normal priority
channel.sendToQueue('tasks', Buffer.from(JSON.stringify(task)), {
  priority: 5
});

// Low priority (bulk operations)
channel.sendToQueue('tasks', Buffer.from(JSON.stringify(task)), {
  priority: 1
});
\\\`\\\`\\\`

## AWS SQS (Managed Queue)

Simplest option for AWS users:

\\\`\\\`\\\`javascript
import { SQSClient, SendMessageCommand, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

const sqs = new SQSClient({ region: 'us-east-1' });

// Send message
await sqs.send(new SendMessageCommand({
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123456789/my-queue',
  MessageBody: JSON.stringify({ task: 'resize-image', imageId: '123' })
}));

// Receive messages
const { Messages } = await sqs.send(new ReceiveMessageCommand({
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123456789/my-queue',
  MaxNumberOfMessages: 10,
  WaitTimeSeconds: 20 // Long polling
}));

for (const message of Messages) {
  const task = JSON.parse(message.Body);
  await processTask(task);
  
  // Delete after processing
  await sqs.send(new DeleteMessageCommand({
    QueueUrl: queueUrl,
    ReceiptHandle: message.ReceiptHandle
  }));
}
\\\`\\\`\\\`

**Pros**: Zero infrastructure management
**Cons**: AWS lock-in, higher cost at scale

## When to Use Each

**RabbitMQ** → Task processing, job queues, traditional messaging
**Kafka** → Event sourcing, real-time analytics, log aggregation
**AWS SQS** → Simple queues, AWS-native apps, low maintenance

**Redis (Pub/Sub)** → Real-time notifications, cache invalidation (not durable!)

## Real-World Example: E-commerce Order

\\\`\\\`\\\`javascript
// Order placed
app.post('/orders', async (req, res) => {
  const order = await db.orders.create(req.body);
  
  // Publish event (non-blocking)
  await kafka.send({
    topic: 'order-events',
    messages: [{
      key: order.id,
      value: JSON.stringify({
        type: 'ORDER_CREATED',
        order,
        timestamp: Date.now()
      })
    }]
  });
  
  res.json({ orderId: order.id, status: 'processing' });
});

// Multiple consumers handle different aspects
// Consumer 1: Inventory
kafka.consumer({ groupId: 'inventory' }).run({
  eachMessage: async ({ message }) => {
    const { order } = JSON.parse(message.value);
    await updateInventory(order.items);
  }
});

// Consumer 2: Payment
kafka.consumer({ groupId: 'payment' }).run({
  eachMessage: async ({ message }) => {
    const { order } = JSON.parse(message.value);
    await chargeCustomer(order);
  }
});

// Consumer 3: Notifications
kafka.consumer({ groupId: 'notifications' }).run({
  eachMessage: async ({ message }) => {
    const { order } = JSON.parse(message.value);
    await sendConfirmationEmail(order.customerId);
  }
});
\\\`\\\`\\\`

**Result**: 
- API responds in 50ms
- Order processing happens async
- Each service scales independently

## Best Practices

**Idempotency**: Handle duplicate messages
\\\`\\\`\\\`javascript
async function processOrder(order) {
  // Check if already processed
  const existing = await db.processed.findOne({ orderId: order.id });
  if (existing) {
    console.log('Already processed, skipping');
    return;
  }
  
  await doWork(order);
  await db.processed.insert({ orderId: order.id });
}
\\\`\\\`\\\`

**Monitoring**: Track queue depth
\\\`\\\`\\\`javascript
setInterval(async () => {
  const queueDepth = await getQueueDepth('orders');
  if (queueDepth > 1000) {
    await alert('Queue backlog detected!');
    await scaleWorkers();
  }
}, 60000);
\\\`\\\`\\\`

**Error Handling**: Always use DLQs and retries

## Performance Comparison

**Scenario**: Processing 10,000 image resizes

| Approach | Response Time | Completion Time |
|----------|---------------|-----------------|
| **Synchronous** | 5s per request | 13.8 hours |
| **Message Queue** | 50ms | 20 minutes (with 10 workers) |

**Queue wins**: 600x faster completion, instant API response

## Conclusion

Event-driven architecture is essential for scalable systems.

**Start simple:**
1. Use message queues for background jobs
2. Add event streams when you need event sourcing
3. Monitor queue depth and error rates
4. Scale workers based on load

**Remember**: Events enable loose coupling. Design for failure, handle retries, and always use dead letter queues.`
    }
];
