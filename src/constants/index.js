import meerahzz from "../assets/projects/meerahzz.png";
import project3 from "../assets/projects/project-3.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project9 from "../assets/projects/project-9.jpg";
import voxeval from "../assets/projects/voxeval.jpg";
import dealspotng from "../assets/projects/dealspotng.png";
import zenithmeet from "../assets/projects/zenithmeet.png";
import vocalvista from "../assets/projects/vocalvista.png";
import mentora from "../assets/projects/mentora.jpg";
import restoirhealth from "../assets/projects/restoirhealth.png";
import thrivepath from "../assets/projects/thrivepath.jpg";
import dabaras from "../assets/projects/dabaras.jpg";
import contentnova from "../assets/projects/contentnova.png";
import commitpulse from "../assets/projects/commitpulse.png";
import dabaraprep from "../assets/projects/dabaraprep.png";
import pdfaxis from "../assets/projects/pdfaxis.png";
import novaclipperai from "../assets/projects/novaclipperai.png";
import ainewsroomcrew from "../assets/projects/ainewsroomcrew.png";
import saasxcreem from "../assets/projects/saasxcreem.png";

// Deep Dives
// Deep Dives
import nextjssupabase from "../assets/deep-dives/nextjssupabase creemsaas.png";
import ainewsroomcrewDeep from "../assets/deep-dives/ainewsroomcrew.png";
import videoclipperai from "../assets/deep-dives/videoclipperai.png";
import zenithmeetDeep from "../assets/deep-dives/zenithmeet.png";
import localmind from "../assets/deep-dives/localmind.png";
import dbrag from "../assets/deep-dives/dbrag.png";

export const HERO_CONTENT = `I’m Samuel Olubukun, a Full-Stack AI/ML Engineer. My expertise spans specializing in frontend and backend development, data science, and applied artificial intelligence.

I build modern software systems that integrate AI models, intelligent agents, and automation workflows into real-world applications.`;


export const PROJECTS = [
  {
    title: "ContentNova",
    link: "https://www.contentnova.app/",
    image: contentnova,
    description:
      "An AI-powered creator workspace unifying ideation, creation, repurposing, planning, publishing, and tracking across six platforms. I engineered the platform to automate distribution and scale content production, cutting manual effort by 85% while maintaining a seamless end-to-end workflow.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Gemini", "Deepgram", "Hugging Face", "DigitalOcean Spaces", "Creem", "FFmpeg", "Framer Motion", "AI Orchestration", "Distributed Workers"],
  },
  {
    title: "AI Newsroom Crew",
    link: "https://autonomous-ai-newsroom-crew.pxxl.click/",
    image: ainewsroomcrew,
    description: "A fully automated, multi-agent AI news crew that researches the latest AI trends and LLM developments, scours the web for raw data on emerging AI technologies and industry developments, and publishes curated daily news roundups alongside ultra-realistic AI-generated podcasts.",
    technologies: ["Next.js 14", "React 18", "Framer Motion", "Tailwind CSS", "Google Gemini", "Deepgram Aura", "Crawl4AI", "Firecrawl", "PostgreSQL", "DigitalOcean Spaces", "Upstash Redis", "AI Agents"],
  },
  {
    title: "Meerahzz Bridals",
    link: "http://meerahzzbridals.com/",
    image: meerahzz,
    description:
      "A boutique online store helping brides find the perfect accessories. I built a smooth shopping experience with secure payments and an easy-to-use inventory system for the shop owner.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Paystack"],
  },
  {
    title: "Restoir Health",
    link: "https://restoir-health.vercel.app",
    image: restoirhealth,
    description: "An AI-powered skin health companion that analyzes conditions from photos. It includes a daily tracker and timeline visualization to monitor your progress, plus a specialized AI dermatology chatbot for instant, personalized guidance.",
    technologies: ["Next.js", "React", "TailwindCSS", "Gemini Vision", "Convex", "Stack Auth", "Node.js"],
  },
  {
    title: "DealSpotNG",
    link: "http://dealspotng.dabaras.com",
    image: dealspotng,
    description: "A high-performance classifieds marketplace tailored for the Nigerian market. It features a real-time negotiation system with price history tracking, advanced geolocation discovery, and a comprehensive admin suite for ad moderation and user verification.",
    technologies: ["React", "Firebase Auth", "Firestore", "Cloud Storage", "Bootstrap", "React Helmet"]
  },
  {
    title: "ZenithMeet",
    link: "https://zenithmeet.samuelolubukun.workers.dev",
    image: zenithmeet,
    description: "A premium video conferencing platform built for high-end enterprise collaboration. Utilizing ultra-low latency infrastructure, it provides encrypted meeting rooms, role-based access controls, and a minimalist celestial-inspired UI for focused professional communication.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "RealtimeKit", "Vite"]
  },
  {
    title: "Mentora",
    link: "https://samuelolubukun-mentora.hf.space",
    image: mentora,
    description: "An AI voice coaching platform for mastering high-stakes communication. From public speaking and storytelling to social mastery and conflict resolution, it provides real-time feedback to help you communicate with confidence and impact.",
    technologies: ["Python", "FastAPI", "LiveKit", "Deepgram", "OpenAI", "Prisma", "TailwindCSS"],
  },
  {
    title: "Nova Clipper AI",
    link: "https://samuelolubukun-novaclipperai.hf.space/",
    image: novaclipperai,
    description: "Advanced browser-native platform for repurposing long-form video into high-impact shorts. Drop a podcast, interview, or presentation into the browser and get ready-to-post clips with premium captions, dynamic AI face tracking, and smart cropping. Runs securely via WebAssembly.",
    technologies: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "FFmpeg.wasm", "face-api.js", "TensorFlow.js", "Google Gemini", "Deepgram"],
  },
  {
    title: "SaaScreem",
    link: "https://saasxcreem.vercel.app/",
    image: saasxcreem,
    description: "Production-focused SaaS boilerplate built with Next.js 16, Supabase, and Creem. It ships with authentication, subscriptions, credits, licensing, admin tooling, email workflows, and an AI chat surface so you can start from a real billing-ready foundation instead of a landing-page template.",
    technologies: ["Next.js", "Creem", "Supabase", "TypeScript", "Tailwind", "Upstash", "BullMQ", "S3", "Radix", "Resend", "PostHog", "BetterStack", "Drizzle", "Vercel", "Docker"],
  },
  {
    title: "Dabara Solutions",
    link: "http://dabaras.com/",
    image: dabaras,
    description: "A comprehensive corporate site that showcases the firm's expertise in Software Development and ICT through detailed service offerings, company insights, and integrated contact channels.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dabara Prep",
    link: "https://dabaraprep.dabaras.com",
    image: dabaraprep,
    description: "A learning platform with AI-powered features designed for the Nigerian SSCE students. It features a multi-modal Socratic AI tutor for guided academic mastery, collaborative Dabara Circle for community-driven resource sharing, and a robust suite of productivity tools including a gamified Study Marathon and intelligent progress tracker to foster elite study habits.",
    technologies: ["Next.js", "React", "Convex", "Stack Auth", "Gemini AI", "TailwindCSS", "Node.js"],
  },
  {
    title: "ThrivePath Psychiatry",
    link: "https://thrivepathpsychiatry.com/",
    image: thrivepath,
    description: "A professional website for a psychiatry practice designed to build trust. It makes it easy for patients to learn about services and book appointments securely.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "PDFAxis",
    link: "https://pdfaxis.dabaras.com",
    image: pdfaxis,
    description: "A high-performance PDF platform ensuring absolute privacy with 100% local processing. It features professional tools that manage sensitive documents with zero data leakage, achieving enterprise-grade speed, 100% security, reliability.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WASM", "WebAssembly"],
  },
  {
    title: "CommitPulse",
    link: "http://commitpulse.pxxl.click/",
    image: commitpulse,
    description: "A dual-component system featuring a PyPI package that crawls local Git metadata and a cloud platform for visualizing engineering impact. It allows developers to showcase hidden contributions from private and organizational repositories with premium analytics dashboards.",
    technologies: ["Python", "Next.js", "React", "PostgreSQL", "Drizzle", "Tailwind CSS"],
  },
  {
    title: "VOCAL VISTA",
    link: "https://vocalvista.netlify.app/",
    image: vocalvista,
    description: "A versatile AI partner for voice-first interactions. It supports everything from immersive language learning and topic-based lectures to polished presentations and mock interviews, all with instant speech feedback.",
    technologies: ["Next.js", "TypeScript", "Deepgram", "Gemini AI", "Convex", "TTS/STT"],
  },

  {

    title: "VoxEval",
    link: "https://voxeval.netlify.app/",
    image: voxeval,
    description: "An AI mock-interview platform that conducts voice-first interviews. It listens to your answers, transcribes them in real-time, and uses AI to give you instant feedback, helping you master your interviewing skills.",
    technologies: ["Next.js", "Supabase", "Google Gemini", "Deepgram", "Web Speech API", "Tailwind CSS"],
  },

  {
    title: "Socially",
    link: "https://socially-delta-eight.vercel.app/",
    image: project9,
    description: "A modern social platform built for community engagement. It features real-time notifications, media sharing, and everything you need to connect and interact with others.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk", "UploadThing"],
  },

  // keep remaining projects below (preserve existing entries)
  /* {
    title: "RAG-Aided Document Chatbot with LLMs",
    link: "https://rag-aided-document-chatbot-with-llms-fdpwspctq43ydglhl5ibcn.streamlit.app/",
    image: project6,
    description:
      "A smart chatbot that talks to your documents. Upload PDFs or slides, and it uses AI to answer questions based on the content, making it easy to find information in large files.",
    technologies: ["Python", "Streamlit", "LangChain", "Cohere", "FAISS", "HuggingFace", "Python-docx", "PyPDF2", "python-pptx"],
  }, */

  /* {
    title: "Food Delivery Website",
    link: "https://github.com/samolubukun/Food-Delivery-MERN",
    image: project3,
    description:
      "A smooth food delivery app for ordering from local vendors. It handles everything from real-time orders to secure payments, optimized to work great on mobile phones.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JavaScript", "CSS", "HTML"],
  } */
];

export const EXPERT_AREAS = [
  {
    title: "Web Applications",
    description: "I build modern web apps, high-converting landing pages, and robust eCommerce platforms. My focus is on creating fast, secure, and responsive designs that deliver a premium user experience."
  },
  {
    title: "AI & Machine Learning",
    description: "I specialize in AI Engineering, building autonomous agents and intelligent, context-aware applications. I move beyond simple integration to create production-grade systems that automate workflows and solve high-impact challenges."
  },
  {
    title: "Data Science",
    description: "I perform deep data analysis and advanced visualization to uncover trends. By combining statistical modeling with data processing, I transform raw numbers into clear, actionable business strategies."
  },
  {
    title: "Full-Stack Engineering",
    description: "I manage the complete development lifecycle, from architecting scalable back-end systems to engineering polished, interactive front-end interfaces."
  }
];

export const CERTIFICATIONS = [
  {
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    year: "2026",
    credentialLink: "https://www.datacamp.com/certificate/AIEDA0012559370840",
    badge: "https://media.datacamp.com/cms/certification-ai-engineer-for-developers-associate-badge.png",
  },
  {
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    year: "2026",
    credentialLink: "https://www.datacamp.com/certificate/AEDS0015262278164",
    badge: "https://media.datacamp.com/cms/certification-ai-engineer-for-data-scientist-associate-badge.png",
  },
  {
    title: "Data Engineer Associate",
    issuer: "DataCamp",
    year: "2026",
    credentialLink: "https://www.datacamp.com/certificate/DEA0019923677771",
    badge: "https://media.datacamp.com/legacy/Certification/Badges%202024/outline/DE_Associate_-_badge_with_outline.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=54322DC910FC0EC0BA2166D4D15FB71DE80BACDB1557365AF7F2FE62969CC7F1",
    badge: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25DSOCP.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=17F0F8251C018763FC5DD8E5ED12B529BFE8C3F9118D81C15739DA8CD2D76BE2",
    badge: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25GAIOCP.png",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E7E1299BDEBFB56D9C28D359A2DB82F0089B8E450D2D7902633EA7AFC46D0AD4",
    badge: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25AICFAV1.png",
  },
  {
    title: "Applied AI Lab: Deep Learning for Computer Vision",
    issuer: "WorldQuant University",
    year: "2025",
    credentialLink: "https://www.credly.com/badges/83db4c53-9bd6-4ff0-a02f-0bc9a2a0a077/linked_in_profile",
    badge: "https://images.credly.com/size/680x680/images/9c380126-9170-46a7-a8b6-1e82f8314c50/blob",
  },
  {
    title: "Applied Data Science Lab",
    issuer: "WorldQuant University",
    year: "2025",
    credentialLink: "https://www.credly.com/badges/3fcf8ac0-8b1b-4a7d-8a5a-40e2788211f1/linked_in_profile",
    badge: "https://images.credly.com/size/680x680/images/876b01ef-23aa-4a29-b6d2-56c230b89935/image.png",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    year: "2024",
    credentialLink: "https://freecodecamp.org/certification/samuelolubukun/data-analysis-with-python-v7",
    badge: "https://avatars.githubusercontent.com/u/9892522?s=200&v=4",
  },
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    year: "2024",
    credentialLink: "https://freecodecamp.org/certification/samuelolubukun/machine-learning-with-python-v7",
    badge: "https://avatars.githubusercontent.com/u/9892522?s=200&v=4",
  },
];

export const TECHNICAL_DEEP_DIVES = [
  {
    title: "SaaScreem: Enterprise-Grade Next.js 16 Boilerplate",
    image: nextjssupabase,
    technologies: ["Next.js 16", "React 19", "Supabase (Auth/DB/RLS)", "Creem Billing", "BullMQ + ioredis", "Upstash Redis", "Drizzle ORM", "Better Stack", "S3/R2/MinIO"],
    challenge: "Building a mission-critical SaaS foundation that handles complex billing lifecycles, atomic credit transactions, and high-volume background jobs.",
    solutions: [
      "Engineered a robust 'Creem' integration for hosted checkouts and idempotent webhook handling of subscription lifecycles, refunds, and license validation (activate/deactivate).",
      "Architected an atomic 'Credits Wallet' system via Postgres RPC with unlimited-credit sentinel support and an AI assistant with per-response credit deduction logic.",
      "Implemented a multi-tier 'Async Environment' using BullMQ for retriable jobs (emails/webhooks) and Upstash-powered rate limiting for sensitive endpoints like /api/chat and /api/checkout.",
      "Optimized performance with Redis cache-aside patterns for MDX blog reads and S3-compatible storage using presigned URLs for secure file metadata management."
    ]
  },
  {
    title: "AI Newsroom Crew: Multi-Agent Content Pipeline",
    image: ainewsroomcrewDeep,
    technologies: ["Gemini 2.5", "Next.js 14", "Upstash Redis", "Deepgram Aura", "Crawl4AI / Firecrawl", "Neon PostgreSQL", "DigitalOcean Spaces"],
    challenge: "Orchestrating an autonomous end-to-end news cycle from raw web signals to high-fidelity audio and long-form articles.",
    solutions: [
      "Architected a 'Web Ingestion' pipeline using Crawl4AI and Firecrawl that funnels data through an Upstash Redis Queue System for reliable task handoff.",
      "Developed a 6-Agent AI Newsroom Crew (Investigator, Triage, Editor, Reporter, Podcast Writer, Voice Agent) using Gemini 2.5 to handle research, structured refinement, and Deepgram Aura TTS production.",
      "Implemented a 'State & Persistence' architecture using Neon PostgreSQL for article metadata and DigitalOcean Spaces for multi-modal asset storage (Audio + Reports)."
    ]
  },
  {
    title: "Zenith Meet: Edge-Native Realtime Conferencing",
    image: zenithmeetDeep,
    technologies: ["Cloudflare Workers", "Cloudflare Realtime Kit", "WebRTC", "Global SFU", "JWT Auth", "React"],
    challenge: "Constructing a low-latency video infrastructure capable of global scale by processing signaling and media distribution at the network perimeter.",
    solutions: [
      "Deployed a 'Worker Backend' on Cloudflare Edge to handle API routing, token issuance, and static asset serving with sub-millisecond cold starts.",
      "Leveraged 'Cloudflare Realtime Kit' to create a bidirectional signaling service between the Client-Side Media Engine and a Global SFU network for optimal stream routing.",
      "Implemented an Edge-level Security Layer for JWT Authentication and CF API Token verification to ensure secure, low-overhead session establishment."
    ]
  },
  {
    title: "NovaClipper AI: Client-Side Viral Processing Engine",
    image: videoclipperai,
    technologies: ["Gemini 2.5 Flash-Lite", "FFmpeg.wasm", "Deepgram", "TensorFlow.js", "Face-api.js", "IndexedDB", "Next.js 15"],
    challenge: "Eliminating expensive server-side rendering costs and latency by identifying and generating viral clips entirely within the browser context.",
    solutions: [
      "Built a 'Client-Side Processing Engine' that leverages browser-native Audio Extraction to feed Deepgram for high-precision, word-level and speaker-level transcription.",
      "Utilized the Deepgram-generated timestamped transcripts within a Gemini 2.5 Flash-Lite 'AI Decision Layer' to programmatically identify viral hooks and 'viral moments'.",
      "Architected a local rendering pipeline using FFmpeg.wasm and Face-api.js for real-time face tracking, ensuring 9:16 vertical crops are generated without data leaving the client.",
      "Optimized storage through a 'Local + Browser State Layer' using IndexedDB and local cache to manage long-form video input and multi-modal project states."
    ]
  },
  {
    title: "LocalMind: Autonomous Local AI Coding Assistant",
    image: localmind,
    technologies: ["Gemini 2.5 Flash-Lite", "Node.js", "TypeScript", "Local-First Architecture", "Shell", "Git"],
    challenge: "Engineering an autonomous agent capable of resolving complex engineering tasks while keeping all execution and codebase context fully local for security.",
    solutions: [
      "Architected a 'CLI → Gemini Agent → Tool Proxy' system that executes prompts via API but runs all tool calls (File I/O, Shell, Git) on the local host.",
      "Developed an autonomous reasoning loop that auto-diagnoses build failures and self-corrects based on real-time observation, with a 10-cycle safety limit.",
      "Implemented typed function-calling where Gemini selects tools by name, keeping core reasoning decoupled from execution logic.",
      "Integrated real-time token streaming and live tool-status indicators to provide full visibility into the agent's autonomous decision-making process."
    ]
  },
  {
    title: "RAG with Multi-Database Intelligent Routing",
    image: dbrag,
    technologies: ["OpenAI GPT-4o", "LangChain", "FAISS", "LanceDB", "Vector Search"],
    challenge: "Eliminating noise and inaccuracies in massive vector pools by implementing an intelligent distribution system for cross-departmental knowledge.",
    solutions: [
      "Engineered an 'AI Router' using GPT-4o that reads user intent to dynamically select the most relevant domain-specific knowledge base.",
      "Designed a hybrid storage strategy utilizing FAISS for ultra-fast in-memory retrieval and LanceDB for scalable, persistent vector storage.",
      "Implemented automated RAG pipelines that prepare, chunk, and embed documents for isolated vector stores (e.g., HR, Legal, Engineering).",
      "Optimized retrieval quality by ensuring queries only pull from specific, validated corpora, significantly reducing hallucinations compared to monolithic RAG pools."
    ]
  }
];

export { BLOG_POSTS } from './blogs';

export const CONTACT = {
  address: "",
  phoneNo: "+234 8083273795",
  email: "samuelolubukun@gmail.com",
};
