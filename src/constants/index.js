import meerahzz from "../assets/projects/meerahzz.png";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project9 from "../assets/projects/project-9.jpg";
import voxeval from "../assets/projects/voxeval.jpg";
import careerprofilegem from "../assets/projects/careerprofilegem.png";
import vocalvista from "../assets/projects/vocalvista.png";
import mentora from "../assets/projects/mentora.jpg";
import restoirhealth from "../assets/projects/restoirhealth.png";
import thrivepath from "../assets/projects/thrivepath.jpg";
import dabaras from "../assets/projects/dabaras.jpg";

// Deep Dives
// Deep Dives
import multiTenantSaas from "../assets/deep-dives/multi-tenant-saas.png";
import advancedRag from "../assets/deep-dives/advanced-rag.png";
import distributedJobQueue from "../assets/deep-dives/distributed-job-queue.png";
import notificationSystem from "../assets/deep-dives/notification-system.png";
import aiContentPlatform from "../assets/deep-dives/ai-content-platform.png";
import voiceAiGateway from "../assets/deep-dives/voice-ai-gateway.png";
import analyticsEngine from "../assets/deep-dives/analytics-engine.png";

export const HERO_CONTENT = `I create modern web applications and data-driven solutions, specializing in full-stack development, data science, and AI/ML. My work focuses on building scalable systems that tackle real-world challenges with innovative, impactful results.`;
export const ABOUT_TEXT = `Hi! I'm Samuel Olubukun, a Full Stack AI/ML Engineer passionate about creating intelligent, modern web solutions. I have strong skills and experience in data science, artificial intelligence, and machine learning, and have built several projects that showcase the blend of web development and AI innovation.

I enjoy working across frontend, backend, and AI systems, combining creativity, problem-solving, and technical precision to build seamless and impactful applications. I'm continuously learning and applying new technologies to develop smarter solutions that deliver real value and meaningful user experiences.`;


export const PROJECTS = [
  {
    title: "Meerahzz Bridals",
    link: "http://meerahzzbridals.com/",
    image: meerahzz,
    description:
      "A boutique online store helping brides find the perfect accessories. I built a smooth shopping experience with secure payments and an easy-to-use inventory system for the shop owner.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Paystack API"],
  },
  {
    title: "ThrivePath Psychiatry",
    link: "https://thrivepathpsychiatry.com/",
    image: thrivepath,
    description: "A professional website for a psychiatry practice designed to build trust. It makes it easy for patients to learn about services and book appointments securely.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dabara Solutions",
    link: "http://dabaras.com/",
    image: dabaras,
    description: "A comprehensive corporate site that showcases the firm’s expertise in Software Development and ICT through detailed service offerings, company insights, and integrated contact channels.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Restoir Health",
    link: "https://restoir-health.vercel.app",
    image: restoirhealth,
    description: "An AI-powered skin health companion that analyzes conditions from photos. It includes a daily tracker and timeline visualization to monitor your progress, plus a specialized AI dermatology chatbot for instant, personalized guidance.",
    technologies: ["Next.js", "React", "TailwindCSS", "Gemini Vision", "Convex", "Stack Auth", "Node.js"],
  },
  {
    title: "Mentora",
    link: "https://samuelolubukun-mentora.hf.space",
    image: mentora,
    description: "Your personal AI voice coach for mastering high-stakes communication. From public speaking and storytelling to social mastery and conflict resolution, it provides real-time feedback to help you communicate with confidence and impact.",
    technologies: ["Python", "FastAPI", "LiveKit", "Deepgram", "OpenAI", "Prisma", "TailwindCSS"],
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
    title: "CAREERPROFILE GEM",
    link: "https://github.com/samolubukun/CareerProfileGEM",
    image: careerprofilegem,
    description: "An AI tool that helps you land more interviews. It builds high-quality resumes and cover letters tailored to your profile, making the job hunt much easier.",
    technologies: ["Wasp", "React", "TypeScript", "Prisma", "Google Gemini", "Stripe"],
  },

  {
    title: "Socially",
    link: "https://socially-delta-eight.vercel.app/",
    image: project9,
    description: "A modern social platform built for community engagement. It features real-time notifications, media sharing, and everything you need to connect and interact with others.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk", "UploadThing"],
  },

  {
    title: "Ecommerce Platform",
    link: "https://github.com/samolubukun/EcommerceApp-MERN",
    image: project5,
    description:
      "A powerful multi-seller online store. I built it to handle high-volume sales with a clean dashboard for managing inventory and a secure checkout process.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Braintree", "CSS", "HTML"],
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
];

export const TECHNICAL_DEEP_DIVES = [
  {
    title: "Multi-Tenant SaaS Architecture",
    image: multiTenantSaas,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stack Auth"],
    challenge: "Keeping different customers' data separate and secure while sharing the same system to keep costs low.",
    solutions: [
      "PostgreSQL Row-Level Security (RLS) policies to enforce tenant data isolation",
      "Workspace scoping with middleware that injects tenant context into all queries",
      "Stack Auth integration with custom claims to identify tenant and user permissions"
    ]
  },
  {
    title: "Advanced RAG Pipeline",
    image: advancedRag,
    technologies: ["LangChain", "Pinecone", "Cohere", "Python"],
    challenge: "Making sure the AI finds the right information in a huge pile of documents, even when the questions are complicated.",
    solutions: [
      "Implemented hybrid search combining sparse (BM25) and dense vector retrieval",
      "Added a re-ranking step using Cohere to prioritize context relevancy before LLM ingestion",
      "Designed a sliding context window strategy to handle token limits effectively"
    ]
  },
  {
    title: "Distributed Job Queue",
    image: distributedJobQueue,
    technologies: ["Redis", "BullMQ", "Node.js", "Docker"],
    challenge: "Making sure millions of tasks (like sending emails) happen reliably without slowing down the site or losing data.",
    solutions: [
      "Decoupled producers and consumers using Redis-backed persistent queues",
      "Implemented an atomic job locking mechanism to prevent race conditions across workers",
      "Configured exponential backoff retries and dead letter queues for failed tasks"
    ]
  },
  {
    title: "Scalable Notification System",
    image: notificationSystem,
    technologies: ["Node.js", "Redis Pub/Sub", "Socket.io", "MongoDB"],
    challenge: "Sending live notifications to users when they are online, and making sure they see them later if they were offline.",
    solutions: [
      "Utilized Redis Pub/Sub for horizontal scaling of WebSocket servers (Fan-out)",
      "Implemented a hybrid delivery pipeline: Direct socket push for online, queue for offline",
      "Designed a batch-write strategy for MongoDB to handle high-throughput log storage"
    ]
  },
  {
    title: "AI-Powered Content Platform",
    image: aiContentPlatform,
    technologies: ["Next.js", "Gemini AI", "Prisma", "PostgreSQL"],
    challenge: "Giving users personalized AI content quickly while managing API costs and preventing system overload.",
    solutions: [
      "Credit-based system with Prisma transactions to prevent race conditions",
      "Prompt engineering layer to optimize token usage and response quality",
      "Redis caching strategy for frequently requested AI responses to reduce API calls"
    ]
  },
  {
    title: "Low-Latency Voice AI Gateway",
    image: voiceAiGateway,
    technologies: ["WebRTC", "Node.js Streams", "OpenAI Realtime", "Redis"],
    challenge: "Making AI voice conversations feel natural with almost zero delay between the user speaking and the AI responding.",
    solutions: [
      "Built a custom Node.js stream pipeline to handle audio buffering and transcoding",
      "Implemented VAD (Voice Activity Detection) to minimize token costs and interrupt latency",
      "Optimized WebSocket packet sizes for real-time streaming reliability"
    ]
  },
  {
    title: "Real-Time User Analytics Engine",
    image: analyticsEngine,
    technologies: ["PostgreSQL", "Node.js", "Redis", "Timescale"],
    challenge: "Showing live user data trends instantly, even when there are millions of records to analyze.",
    solutions: [
      "Utilized partitioned time-series tables for efficient querying of historical data",
      "Implemented incremental materialized views to pre-aggregate high-cost metrics",
      "Designed a multi-layered caching strategy for dashboard API endpoints"
    ]
  }
];

export { BLOG_POSTS } from './blogs';

export const CONTACT = {
  address: "",
  phoneNo: "+234 8083273795",
  email: "samuelolubukun@gmail.com",
};


