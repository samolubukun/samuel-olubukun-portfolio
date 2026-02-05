import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project9 from "../assets/projects/project-9.jpg";
import pixareact from "../assets/projects/pixareact.jpg";
import careerprofilegem from "../assets/projects/careerprofilegem.jpg";
import vocalvista from "../assets/projects/vocalvista.jpg";
import mentora from "../assets/projects/mentora.jpg";
import restoirhealth from "../assets/projects/restoirhealth.jpg";
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
    image: project1,
    description:
      "A high-conversion boutique eCommerce platform connecting brides with premium bridal accessories. Features a streamlined seasonal inventory management system and secure Paystack integration, handling local and international orders with a focus on elegant, low-friction user experience.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Paystack API"],
  },
  {
    title: "ThrivePath Psychiatry",
    link: "https://thrivepathpsychiatry.com/",
    image: thrivepath,
    description: "A premium corporate presence for a specialized psychiatric practice, engineered to establish professional trust and brand authority. The platform serves as a high-conversion business gateway, featuring a streamlined service showcase and a direct integration to a secure patient appointment and medication management portal.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dabara Solutions",
    link: "http://dabaras.com/",
    image: dabaras,
    description: "A high-performance corporate hub for an emerging tech firm, engineered to establish brand authority in AI and Cybersecurity. Includes a conversion-optimized project inquiry portal that captures and routes specialized service requests directly to the engineering team.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Restoir Health",
    link: "https://restoir-health.vercel.app",
    image: restoirhealth,
    description: "Empowering users to take control of their skin health through clinical-grade AI vision. This platform provides instant diagnostic analysis for various dermatological conditions, offering personalized treatment routines and helping thousands navigate skincare management from home.",
    technologies: ["Next.js", "React", "TailwindCSS", "Gemini Vision", "Convex", "Stack Auth", "Node.js"],
  },
  {
    title: "Mentora",
    link: "",
    image: mentora,
    description: "Transforming professional communication with a real-time AI voice coach. Facilitates high-stakes interview prep and negotiation training with sub-500ms latency, providing users with actionable, data-driven performance analytics to master their public speaking skills.",
    technologies: ["Python", "FastAPI", "LiveKit", "Deepgram", "OpenAI", "Prisma", "TailwindCSS"],
  },
  {
    title: "VOCAL VISTA",
    link: "https://vocalvista.netlify.app/",
    image: vocalvista,
    description: "A real-time AI linguistic partner designed to break communication barriers via a low-latency STT-LLM-TTS pipeline. Provides instant, personalized coaching feedback for language learners and professionals, synchronized across all devices for a seamless learning workflow.",
    technologies: ["Next.js", "TypeScript", "Deepgram", "Gemini AI", "Convex", "TTS/STT"],
  },

  {
    title: "PIXAREACT",
    link: "https://pixareactgemini.netlify.app/",
    image: pixareact,
    description: "Hyper-accelerating the frontend development lifecycle by converting UI sketches into production-ready React code. This multimodal AI tool bridges the gap between design and development, saving engineers hours of manual boilerplate coding through intelligent code generation.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Gemini AI", "Multimodal"],
  },

  {
    title: "CAREERPROFILE GEM",
    link: "https://github.com/samolubukun/CareerProfileGEM",
    image: careerprofilegem,
    description: "A career acceleration engine that helps job seekers land interviews at scale. Utilizes multimodal AI to craft high-conversion resumes and cover letters, managing thousands of user-generated documents through a robust credit and secure file management system.",
    technologies: ["Wasp", "React", "TypeScript", "Prisma", "Google Gemini", "Stripe"],
  },

  {
    title: "Socially",
    link: "https://socially-delta-eight.vercel.app/",
    image: project9,
    description: "A full-featured community engagement platform designed for high interactivity. Manages complex social graphs, real-time notifications, and media-rich content feeds, providing a scalable, modern foundation for digital networking and user-driven communities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk", "UploadThing"],
  },

  {
    title: "Ecommerce Platform",
    link: "https://github.com/samolubukun/EcommerceApp-MERN",
    image: project5,
    description:
      "A robust multi-vendor retail ecosystem engineered for high-volume transactions and inventory scale. Features an intensive administrative dashboard for real-time stock management and a secure, low-friction checkout experience integrated with global payment gateways.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Braintree", "CSS", "HTML"],
  },

  // keep remaining projects below (preserve existing entries)
  {
    title: "RAG-Aided Document Chatbot with LLMs",
    link: "https://rag-aided-document-chatbot-with-llms-fdpwspctq43ydglhl5ibcn.streamlit.app/",
    image: project6,
    description:
      "An enterprise-grade knowledge extraction system that turns static data into interactive intelligence. Processes complex datasets (PDF/PPTX/DOCX) via a RAG pipeline to provide instantly searchable, context-aware insights for teams working with large documentation sets.",
    technologies: ["Python", "Streamlit", "LangChain", "Cohere", "FAISS", "HuggingFace", "Python-docx", "PyPDF2", "python-pptx"],
  },

  {
    title: "Food Delivery Website",
    link: "https://github.com/samolubukun/Food-Delivery-MERN",
    image: project3,
    description:
      "A frictionless food logistics platform connecting artisanal vendors with local customers. Features a real-time ordering workflow and secure Stripe integration, optimized for a high-performance, mobile-first dining and delivery experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JavaScript", "CSS", "HTML"],
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
    challenge: "Isolating tenant data and ensuring security while sharing infrastructure to minimize costs.",
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
    challenge: "Improving retrieval accuracy for complex user queries across large, unstructured datasets where standard keyword search fails.",
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
    challenge: "Processing millions of background tasks (emails, report generation) reliably without data loss during traffic spikes.",
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
    challenge: "Delivering ephemeral live notifications to online users while guaranteeing delivery persistence for offline users.",
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
    challenge: "Serving personalized AI-generated content at scale while managing costs through rate limiting and caching.",
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
    challenge: "Orchestrating full-duplex voice conversations with AI models while maintaining sub-500ms latency.",
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
    challenge: "Visualizing live user behavior trends across millions of event records with sub-second dashboard load times.",
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


