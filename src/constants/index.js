import meerahzz from "../assets/projects/meerahzz.png";
import project3 from "../assets/projects/project-3.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project9 from "../assets/projects/project-9.jpg";
import voxeval from "../assets/projects/voxeval.jpg";
import dealspotng from "../assets/projects/dealspotng.png";
import zenithmeet from "../assets/projects/zenithmeet.png";
import vocalvista from "../assets/projects/vocalvista.png";
import restoirhealth from "../assets/projects/restoirhealth.png";
import thrivepath from "../assets/projects/thrivepath.jpg";
import dabaras from "../assets/projects/dabaras.jpg";
import contentnova from "../assets/projects/contentnova.png";
import commitpulse from "../assets/projects/commitpulse.png";
import chowscan from "../assets/projects/chowscan.jpg";
import dabaraprepmobile from "../assets/projects/dabaraprepmobile.jpg";
import dabaraprep from "../assets/projects/dabaraprep.png";
import pdfaxis from "../assets/projects/pdfaxis.png";
import novaclipperai from "../assets/projects/novaclipperai.png";
import ainewsroomcrew from "../assets/projects/ainewsroomcrew.png";
import saasxcreem from "../assets/projects/saasxcreem.png";
import codexlm from "../assets/projects/codexlm.png";
import phaneros from "../assets/projects/phaneros.jpg";
import catalyst from "../assets/projects/catalyst.png";
import threadscape from "../assets/projects/threadscape.png";
import chronos from "../assets/projects/chronos.png";


// Deep Dives
// Deep Dives
import nextjssupabase from "../assets/deep-dives/nextjssupabase creemsaas.png";
import ainewsroomcrewDeep from "../assets/deep-dives/ainewsroomcrew.png";
import videoclipperai from "../assets/deep-dives/videoclipperai.png";
import zenithmeetDeep from "../assets/deep-dives/zenithmeet.png";
import localmind from "../assets/deep-dives/localmind.png";
import dbrag from "../assets/deep-dives/dbrag.png";
import catalystDeep from "../assets/deep-dives/catalyst.png";
import threadscapeDeep from "../assets/deep-dives/threadscape.png";
import dabaraprepmobileDeep from "../assets/deep-dives/dabaraprepmobile.png";
import chronosDeep from "../assets/deep-dives/chronos.png";

export const HERO_CONTENT = `I’m Samuel Olubukun, a Full-Stack AI/ML Engineer. My expertise spans specializing in frontend and backend development, data science, and applied artificial intelligence.

I build modern software systems that integrate AI models, intelligent agents, and automation workflows into real-world applications.`;

export const PROJECTS = [
  {
    title: "ContentNova",
    link: "https://www.contentnova.app/",
    image: contentnova,
    description:
      "An AI-powered creator workspace unifying ideation, creation, repurposing, planning, publishing, and tracking across six platforms. I engineered the platform to automate distribution and scale content production, cutting manual effort by 85% while maintaining a seamless end-to-end workflow.",
    /* technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Gemini", "Deepgram", "Hugging Face", "DigitalOcean Spaces", "Creem", "FFmpeg", "Framer Motion", "AI Orchestration", "Distributed Workers"], */
    details: {
      overview: "An AI-powered creator workspace structured around six foundational pillars to streamline and automate the entire content success journey from ideation to tracking.",
      features: [
        "Ideation: Instantly generates ideas tailored to your niche, audience, and platforms, and acts as a central repository for capturing thoughts.",
        "Creation: Accelerates content production to transform concepts into polished, multi-format assets while maintaining your unique brand voice.",
        "Repurposing: Adapts a single source asset (long-form video/text) into multiple formats optimized for six different platforms to maximize reach.",
        "Planning & Strategy: A unified hub to manage campaigns, organize timelines, and orchestrate scheduling for a consistent posting cadence.",
        "Publishing: Automates seamless multi-platform delivery with smart optimization, autotagging, and intelligent hashtagging.",
        "Tracking & Analytics: A centralized dashboard to monitor key performance metrics and manage audience comments/interactions in one place."
      ]
    }
  },
  {
    title: "Catalyst",
    link: "https://trycataylst.vercel.app/",
    image: catalyst,
    description:
      "A conversational spreadsheet intelligence platform enabling natural language analytics, code-generated transformations, live dashboards, and schema-first AI analysis. Catalyst combines agent orchestration with client-side sandbox execution for precise data manipulation.",
    /* technologies: [
      "Next.js 15",
      "Convex",
      "Google Gemini",
      "Stack Auth",
      "AG Grid",
      "Tailwind CSS",
      "Framer Motion",
      "Firecrawl",
      "LangSearch",
      "JavaScript Sandboxing",
      "AI Agents",
      "Real-time Dashboards",
      "Spreadsheet Intelligence"
    ], */
    details: {
      overview: "Catalyst is a conversational spreadsheet intelligence platform that lets you analyze complex spreadsheets using pure natural language with 100% mathematical precision and schema-first privacy.",
      features: [
        "Conversational Analytics: Formula-free Q&A compiling precise mathematical aggregates instantly.",
        "Schema-First Privacy: Table metadata and small samples are sent to the AI, keeping raw data completely private in Convex.",
        "Web Data Augmentation: Autonomous web crawling (Firecrawl) queries the web and merges live info back into your grid.",
        "Interactive Dashboards & Reports: AI-generated chart layouts with customizable themes and report design tools."
      ]
    }
  },
  {
    title: "Threadscape",
    link: "https://threadscape-workspace.vercel.app/",
    image: threadscape,
    description:
      "An async-first collaborative workspace engineered to eliminate real-time chat fatigue through structured threaded discussions, polymorphic Kanban boards, wiki documentation, live polls, and reactive unread tracking. Built on Convex's real-time reactive infrastructure with deep multi-tenant collaboration and instant search orchestration.",
    /* technologies: [
      "Next.js 15",
      "React 19",
      "Convex",
      "Stack Auth",
      "Tailwind CSS v4",
      "Framer Motion",
      "TipTap",
      "Radix UI",
      "Convex Reactive Queries",
      "Convex ACID Mutations",
      "Real-time Collaboration",
      "WebSockets",
      "Multi-tenant Architecture"
    ], */
    details: {
      overview: "An async-first team collaboration workspace built to eliminate real-time chat fatigue by organizing team work into structured, contextual discussion threads, sprint task boards, wiki pages, and interactive polls.",
      features: [
        "Structured Discussion Threads: Async conversations with rich-text formatting, bookmarks, pins, and tag extraction.",
        "Polymorphic Kanban Sprints: Interactive task boards (Backlog to Done) built directly into the space workflow.",
        "Wiki Pages & Live Polls: Document project resources and gather team consensus with live animated percentages.",
        "Ctrl+K Command Palette: Sub-second, multi-table fuzzy search across comments, tasks, and documentation."
      ]
    }
  },
  {
    title: "Phaneros",
    link: "https://phaneros-web.vercel.app/",
    image: phaneros,
    description: "An intelligent real-time Scripture detection and dynamic show-building suite for live sermons. Available as both a desktop and web platform, it automates the bridge between spoken scripture and visual output, featuring high-speed verse detection and a dual-dashboard suite for instant projection.",
    /* technologies: ["Rust", "Axum", "Tauri", "React", "Node.js", "SQLite", "Cloudflare", "Real-time STT"], */
    details: {
      overview: "An intelligent, real-time Scripture detection and dynamic show-building suite for live sermon streams and church broadcasts.",
      features: [
        "Multi-Strategy Verse Detection: Combines high-speed Aho-Corasick matching with semantic Qwen-embedding theological allusions.",
        "Dual-Dashboard Suite: Classic view for high-density feed monitoring, and Studio view for logic-based slide composition.",
        "Resilient STT Proxy: Integrates local Whisper ASR, Vosk offline recognition, and authenticated Deepgram Nova-3 connections.",
        "Professional Broadcast Integration: Transparent overlays, custom OBS browser sources, and OSC remote triggers."
      ]
    }
  },
  {
    title: "CodexLM",
    link: "https://codex-lm.vercel.app/",
    image: codexlm,
    description: "A high-performance research ecosystem designed to transform multi-modal data into structured knowledge. It features source ingestion, agentic RAG for hybrid search including web access, and a Creative Studio suite generating professional podcasts, documentation, and social packs from research.",
    /* technologies: ["Next.js 15", "Convex", "Stack Auth", "Pinecone", "Deepgram", "Google Gemini", "DigitalOcean Spaces", "Tailwind CSS v4", "Framer Motion"], */
    details: {
      overview: "A high-performance research ecosystem designed to transform multi-modal data sources (PDFs, audio, web transcripts) into structured, actionable knowledge.",
      features: [
        "Multi-Modal Ingestion: Full support for PDF, DOCX, PPTX, YouTube transcripts, and audio files.",
        "Agentic RAG Engine: Combines semantic Pinecone vector embeddings with citation mapping and voice search.",
        "Creative Studio Suite: Renders interactive slide decks, 3D flashcards, quizzes, diagrams (Mermaid.js), and social packs.",
        "Audio Briefings: Auto-generates structured two-person dialogue scripts and audio files using Deepgram Aura-2."
      ]
    }
  },
  {
    title: "Restoir Health",
    link: "https://restoir-health.vercel.app",
    image: restoirhealth,
    description: "An AI-powered skin health companion that analyzes conditions from photos. It includes a daily tracker and timeline visualization to monitor your progress, plus a specialized AI dermatology chatbot for instant, personalized guidance.",
    /* technologies: ["Next.js", "React", "TailwindCSS", "Gemini Vision", "Convex", "Stack Auth", "Node.js"], */
    details: {
      overview: "An advanced, patient-first skincare platform that detects, analyzes, and helps patients manage acne, eczema, and other skin conditions.",
      features: [
        "AI Skin Scan: Detects skin conditions with dermatology-grade accuracy using Gemini Vision.",
        "Progress Tracker: Daily logs of habits and products with side-by-side visual photo comparisons.",
        "HD Telehealth Video Room: Conflict-free scheduling with live video consultations and audio/video controls.",
        "SOAP Clinical Charting: Secure, direct clinician charting integrated into telehealth sessions."
      ]
    }
  },
  {
    title: "VocalVista",
    link: "https://vocal-vista.vercel.app/",
    image: vocalvista,
    description: "VocalVista is an AI-native voice-coaching workspace to sharpen public speaking, interview delivery, storytelling, and language fluency. Powered by Deepgram's voice agent API, it matches you with specialized AI personas to simulate real-world scenarios, analyze verbal habits, and generate progress diagnostics.",
    /* technologies: ["Next.js", "TypeScript", "Deepgram", "Gemini AI", "Convex", "TTS/STT"], */
    details: {
      overview: "An AI-native voice-coaching workspace designed to sharpen public speaking, interview delivery, storytelling, and language fluency.",
      features: [
        "Unified Voice-to-Voice: Sub-second, full-duplex conversational voice training via Deepgram's Voice Agent API.",
        "Expert Coach Cast: Train with specialized AI expert personas (Sofia, Ethan, Justin) for realistic scenarios.",
        "Feedback Diagnostics: Structured post-session analysis and action plans powered by Gemini.",
        "Real-Time Transcripts & Safety: Speech-bubble conversation logs with auto-suspend triggers when credits run out."
      ]
    }
  },
  {
    title: "Chow Scan Mobile App",
    link: "https://github.com/samolubukun/Chow-Scan/",
    image: chowscan,
    description: `ChowScan is an offline AI-powered food analysis and nutrition tracking mobile application. It utilizes Google's Gemma model to execute full visual plate scans, nutrition label scans, and natural language descriptions entirely on-device, offering a private and self-contained nutrition tracking ecosystem.

On-Device AI Engine (Gemma):
Powered entirely by Google's Gemma 4 E2B IT (LiteRT-LM) model (~2.59GB), executing locally on your device via the flutter_gemma package with hardware acceleration interfacing automatically with the device GPU (PreferredBackend.gpu) for swift and efficient response generation.

Capabilities:
• Multimodal Scanning: Processes camera frames of nutrition labels and meal plates directly to identify foods and extract text layout arrays.
• Structured Extraction: Translates complex, arbitrary visual/textual data into structured JSON objects (Calories, Protein, Carbs, Fat, and micronutrients) that can be inserted into the database.
• Conversational Coaching: Local context-aware text generation for the in-app AI Chat screen with full message history and image attachment support.

Key Features:
• Scan a Label: Capture or select an image of a nutrition facts label to extract and analyze every macro and micronutrient offline.
• Scan a Plate: Take a photo of your food to generate real-time estimates of calories and macronutrients.
• Describe a Meal: Type a natural language description of what you ate to retrieve instant nutritional information.
• Daily Intake Log: Manage your logged historical meals via a horizontal weekly date strip or integrated calendar modal.
• AI Chat: Converse with an on-device wellness coach to ask follow-up questions with image support.
• Offline Security: Zero data leaves the user's phone, preserving complete privacy.`,
    /* technologies: ["Flutter", "Gemma", "Dart", "Android", "SharedPreferences"], */
    details: {
      overview: "An offline-first AI-powered food analysis and nutrition tracking mobile app that runs fully on-device without internet access, preserving complete privacy.",
      features: [
        "Multimodal Scanner: Scans nutrition labels and meal plates to estimate calories and macros.",
        "Describe a Meal: Input natural language descriptions of meals for instant nutrition estimation.",
        "AI Chat Coach: Chat with a local, context-aware wellness coach (supports conversation history and image attachments).",
        "Daily Intake Log: Track historical meals via a weekly date strip and an integrated calendar modal."
      ]
    }
  },
  {
    title: "Dabara Prep Mobile App",
    link: "https://github.com/samolubukun/Dabara-Prep-Flutter",
    image: dabaraprepmobile,
    description:
      "An offline-first AI-powered Nigerian exam preparation platform running Google's Gemma 4 model entirely on-device. It combines WAEC and JAMB CBT simulations, personalized AI tutoring, lesson notes, flashcards, LaTeX rendering, and native offline multimodal inference without requiring continuous internet connectivity.",
    /* technologies: [
      "Flutter",
      "Dart",
      "Gemma 4",
      "LiteRT",
      "SQLite",
      "SharedPreferences",
      "flutter_gemma",
      "flutter_math_fork",
      "Dio",
      "Offline AI",
      "On-device Inference",
      "WAEC CBT",
      "JAMB CBT"
    ], */
    details: {
      overview: "An offline-first Nigerian exam preparation mobile app running Google's Gemma model entirely on-device, offering WAEC and JAMB exam simulation.",
      features: [
        "Offline AI Tutor: Interactive high-school tutor that handles academic Q&A and image-based visual explanations.",
        "WAEC & JAMB Simulators: Real past questions (2011-2024) across 30+ subjects with custom UTME subject combinations.",
        "LaTeX Math Rendering: Pixel-perfect math/science rendering with swipe-scroll containers to prevent line wrapping.",
        "Curriculum Study Notes: Full, term-by-term high school lesson notes with streaks and countdown study timers."
      ]
    }
  },
  {
    title: "AI Newsroom Crew",
    link: "https://autonomous-ai-newsroom-crew.pxxl.click/",
    image: ainewsroomcrew,
    description: "A fully automated, multi-agent AI news crew that researches the latest AI trends and LLM developments, scours the web for raw data on emerging AI technologies and industry developments, and publishes curated daily news roundups alongside ultra-realistic AI-generated podcasts.",
    /* technologies: ["Next.js 14", "React 18", "Framer Motion", "Tailwind CSS", "Google Gemini", "Deepgram Aura", "Crawl4AI", "Firecrawl", "PostgreSQL", "DigitalOcean Spaces", "Upstash Redis", "AI Agents"], */
    details: {
      overview: "A fully automated, multi-agent content generation crew that researches AI trends and publishes daily roundups and podcasts.",
      features: [
        "6-Agent Autonomous Crew: Investigator (Firecrawl), Chief Editor (Triage), Editor, Reporter, Podcast Editor, and Voice.",
        "Audio Podcast Production: Converts research scripts into dialogue and synthesizes audio via Deepgram Aura.",
        "Serverless Queue Pipeline: Prevents duplicate scraper execution and API usage via serverless Upstash Redis queues."
      ]
    }
  },
  {
    title: "DealSpotNG",
    link: "http://dealspotng.dabaras.com",
    image: dealspotng,
    description: "A high-performance classifieds marketplace tailored for the Nigerian market. It features a real-time negotiation system with price history tracking, advanced geolocation discovery, and a comprehensive admin suite for ad moderation and user verification.",
    /* technologies: ["React", "Firebase Auth", "Firestore", "Cloud Storage", "Bootstrap", "React Helmet"], */
    details: {
      overview: "A high-performance classifieds marketplace tailored for the Nigerian market featuring price history tracking and negotiation.",
      features: [
        "Real-Time Negotiation: Direct price bidding and buyer-seller price history tracking.",
        "Advanced Geolocation: Localized discovery to easily find items and vendors nearby.",
        "Moderator Dashboard: Admin console for listing verification and user trust scoring."
      ]
    }
  },
  {
    title: "ZenithMeet",
    link: "https://zenithmeet.samuelolubukun.workers.dev",
    image: zenithmeet,
    description: "A premium video conferencing platform built for high-end enterprise collaboration. Utilizing ultra-low latency infrastructure, it provides encrypted meeting rooms, role-based access controls, and a minimalist celestial-inspired UI for focused professional communication.",
    /* technologies: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "RealtimeKit", "Vite"], */
    details: {
      overview: "A premium video conferencing platform built on edge-native serverless WebRTC infrastructure.",
      features: [
        "Edge-Native SFU: Ultra-low latency video routing powered by Cloudflare Workers and RealtimeKit.",
        "Celestial Minimalist UI: Focused, high-end design optimized for distraction-free professional communication.",
        "Granular Controls: Fully encrypted rooms, role-based access, and screen sharing."
      ]
    }
  },
  {
    title: "Nova Clipper AI",
    link: "https://samuelolubukun-novaclipperai.hf.space/",
    image: novaclipperai,
    description: "Nova Video Clipper is an advanced browser-native platform for repurposing long-form video into high-impact vertical shorts. Everything runs securely client-side via WebAssembly and browser-native AI integrations.",
    /* technologies: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "FFmpeg.wasm", "face-api.js", "TensorFlow.js", "Google Gemini", "Deepgram"], */
    details: {
      overview: "Nova Video Clipper is an advanced browser-native AI platform for repurposing long-form video into high-impact shorts with automated face tracking, transcription, and premium captions.",
      features: [
        "Intelligent Client-Side Transcription: Extracts audio locally and transcribes with word-level timestamps and speaker diarization.",
        "AI Clip Selection: Leverages Gemini-2.5-Flash-Lite to automatically identify the most viral hooks and complete thoughts.",
        "Dynamic AI Face Tracking: Portrays 9:16 vertical video by automatically following the speaker's face with professional smoothing.",
        "Premium Captions: Highly readable, custom-designed captions with phrase-aware grouping and smart line-wrapping.",
        "Local Rendering & Export: Encodes and exports the final video directly within the browser utilizing FFmpeg.wasm."
      ]
    }
  },
  {
    title: "Dabara Prep Web App",
    link: "https://dabaraprep.dabaras.com",
    image: dabaraprep,
    description: "Dabara Prep is an AI-powered exam preparation platform designed to help Nigerian students excel in JAMB, WAEC, and NECO exams. It combines authentic past questions with step-by-step AI explanations, voice learning, and instant problem-solving.",
    /* technologies: [
      "Next.js",
      "React",
      "Convex",
      "Stack Auth",
      "Gemini AI",
      "TailwindCSS",
      "Node.js"
    ], */
    details: {
      overview: "Dabara Prep transforms the way students study for major Nigerian examinations by providing authentic CBT practice and personal AI tutor guidance.",
      features: [
        "AI Personal Tutor: Get step-by-step explanations for complex concepts and problem-solving 24/7.",
        "Snap & Solve: Take a photo or upload an image of any question to receive instant step-by-step guidance.",
        "Voice Learning Support: Ask questions using voice inputs to get quick, spoken clarifications.",
        "JAMB CBT Mastery: Practice in a realistic CBT exam simulator with thousands of verified past questions.",
        "WAEC & NECO Prep: Master objective and theory questions aligned with the official exam curriculum and marking schemes."
      ]
    }
  },
  {
    title: "Dabara Solutions",
    link: "http://dabaras.com/",
    image: dabaras,
    description: "A comprehensive corporate site that showcases the firm's expertise in Software Development and ICT through detailed service offerings, company insights, and integrated contact channels.",
    /* technologies: ["PHP", "HTML", "CSS", "JavaScript"], */
    details: {
      overview: "A corporate marketing site presenting engineering consultation, software delivery, and ICT systems.",
      features: [
        "Service Showcases: Clean, responsive presentation of professional IT consulting and bespoke software services.",
        "Contact Integration: Secure inquiry form processing with database logging and email dispatch."
      ]
    }
  },
  {
    title: "ThrivePath Psychiatry",
    link: "https://thrivepathpsychiatry.com/",
    image: thrivepath,
    description: "A professional website for a psychiatry practice designed to build trust. It makes it easy for patients to learn about services and book appointments securely.",
    /* technologies: ["PHP", "HTML", "CSS", "JavaScript"], */
    details: {
      overview: "A responsive psychiatric practice marketing platform that facilitates patient acquisition and booking.",
      features: [
        "Conflict-Free Booking: Intuitive scheduling widget to book patient appointments safely.",
        "Services Layout: Clear and readable sections explaining treatments, insurance, and clinical focus areas."
      ]
    }
  },
  {
    title: "SaaScreem",
    link: "https://saasxcreem.vercel.app/",
    image: saasxcreem,
    description: "Production-focused SaaS boilerplate built with Next.js 16, Supabase, and Creem. It ships with authentication, subscriptions, credits, licensing, admin tooling, email workflows, and an AI chat surface so you can start from a real billing-ready foundation instead of a landing-page template.",
    /* technologies: ["Next.js", "Creem", "Supabase", "TypeScript", "Tailwind", "Upstash", "BullMQ", "S3", "Radix", "Resend", "PostHog", "BetterStack", "Drizzle", "Vercel", "Docker"], */
    details: {
      overview: "Production-focused SaaS boilerplate built with Next.js 16, Supabase, and Creem, shipping with database schema, authentication, subscriptions, credits wallet, and workers.",
      features: [
        "Authentication & Security: Email/password, Google OAuth, and session-aware route protection via proxy and Supabase SSR helpers.",
        "Payments & Subscriptions: Creem checkout session, upgrades, scheduled/immediate cancellations, seat updates, and billing portal access.",
        "Automated Webhooks: Complete event handling for checkouts, renewals, disputes, refunds, and access hooks with HMAC verification and idempotency tracking.",
        "Credits & Licenses: Atomic credit spending wallet, top-tier unlimited credit sentinel, and full license key validation/activation/deactivation flow.",
        "Job Queues (BullMQ): Asynchronous background worker queues for emails, audit logging, and webhook post-processing with automatic retry logic.",
        "Admin Console & Monitoring: Centralized admin dashboard displaying user records, subscription lifecycles, licenses, and revenue/activity stats."
      ]
    }
  },
  {
    title: "Chronos",
    link: "https://chronos-ai-timeline-orchestrator.vercel.app/",
    image: chronos,
    description:
      "An AI-native timeline orchestrator turning conversational plans into reactive execution graphs with live collaborative Gantt scheduling, predictive forecasting, and real-time synchronization.",
    /* technologies: [
      "Next.js 15",
      "Convex",
      "Google Gemini",
      "Stack Auth",
      "Tailwind CSS",
      "Framer Motion",
      "Topological Scheduling",
      "Monte Carlo Forecasting",
      "Realtime Collaboration",
      "Sandboxed Script Execution",
      "Timeline Orchestration",
      "Automation Engine"
    ], */
    details: {
      overview: "Chronos is an AI-native timeline orchestrator that converts natural language roadmap coordinates into topological execution graphs.",
      features: [
        "Recursive Date Reflow: Date shifts automatically propagate forward across dependent blocked chains.",
        "Presence Cursors: Figma-style real-time mouse pointer tracking and teammate presence overlays.",
        "Monte Carlo Forecaster: Simulates 300 randomized schedule variations to output P50/P90 probability curves.",
        "Event Action Studio: Bind alert hooks to milestones to send Slack/email alerts when tasks are completed or delayed."
      ]
    }
  },
  /* {
    title: "VoxEval",
    link: "https://voxeval.netlify.app/",
    image: voxeval,
    description: "An AI mock-interview platform that conducts voice-first interviews. It listens to your answers, transcribes them in real-time, and uses AI to give you instant feedback, helping you master your interviewing skills.",
    technologies: ["Next.js", "Supabase", "Google Gemini", "Deepgram", "Web Speech API", "Tailwind CSS"],
  }, */
  /* {
    title: "Socially",
    link: "https://socially-delta-eight.vercel.app/",
    image: project9,
    description: "A modern social platform built for community engagement. It features real-time notifications, media sharing, and everything you need to connect and interact with others.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk", "UploadThing"],
  } */

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
    title: "Full-Stack Engineering",
    description: "I build and ship end-to-end applications, mastering the entire lifecycle from UI/UX and scalable back-ends to cloud-native infrastructure, DevOps, and AI orchestration to deliver production-ready products."
  },
  {
    title: "AI & Machine Learning",
    description: "I specialize in AI and Machine Learning Engineering, building predictive models and intelligent, context-aware agents. I create production-grade AI systems that automate workflows and solve high-impact challenges."
  },
  {
    title: "Data Science",
    description: "I perform deep data analysis and advanced visualization to uncover trends. By combining statistical modeling with data processing, I transform raw numbers into clear, actionable business strategies."
  },
  {
    title: "Web Applications",
    description: "I build modern web apps, high-converting landing pages, and robust eCommerce platforms. My focus is on creating fast, secure, and responsive designs that deliver a premium user experience."
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
    title: "Data Engineer\nAssociate",
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
    title: "Catalyst: Conversational Spreadsheet Intelligence",
    image: catalystDeep,
    technologies: ["Next.js 15", "Convex", "Google Gemini", "Stack Auth", "AG Grid", "Tailwind CSS", "Framer Motion", "Firecrawl", "LangSearch"],
    challenge: "Enabling natural language spreadsheet analysis, deterministic sandboxed code execution, and real-time dashboard generation with strict user privacy.",
    solutions: [
      "Architected a Gemini-powered Agentic Orchestrator that plans data transformations and generates mathematically precise client-side JavaScript execution code.",
      "Implemented a secure, fully sandboxed in-browser sandboxing layer to execute code-generated spreadsheet operations with mathematically deterministic precision.",
      "Integrated real-time database reactivity using Convex and AG Grid for instant spreadsheet updates, collaborative features, and dynamic client-side visualization."
    ]
  },
  {
    title: "Threadscape: Async-First Collaboration Workspace",
    image: threadscapeDeep,
    technologies: ["Next.js 15", "React 19", "Convex", "Stack Auth", "Tailwind CSS v4", "Framer Motion", "TipTap", "Radix UI"],
    challenge: "Eliminating real-time chat fatigue by designing a structured threaded workspace with absolute real-time sync and multi-tenant security.",
    solutions: [
      "Designed a tree-structured discussion schema in Convex to support nested discussion threads and granular, real-time unread tracking.",
      "Engineered polymorphic Kanban boards and rich-text document wikis utilizing TipTap, Radix UI, and Framer Motion for premium UX interactions.",
      "Leveraged Convex ACID Mutations and Reactive Queries to orchestrate instant multi-tenant WS sync and instant global search routing."
    ]
  },
  {
    title: "Dabara Prep Mobile: On-Device Multimodal AI Tutoring",
    image: dabaraprepmobileDeep,
    technologies: ["Flutter", "Dart", "Gemma 4", "LiteRT", "SQLite", "flutter_gemma", "Dio", "Offline AI"],
    challenge: "Executing production-grade AI-powered educational simulations and multimodal tutor assistance entirely offline on low-resource mobile hardware.",
    solutions: [
      "Engineered a local inference engine utilizing LiteRT and flutter_gemma to run Google's Gemma 4 model directly on iOS/Android devices without network latency or cloud server costs.",
      "Designed a robust SQLite-powered offline state manager to cache WAEC and JAMB CBT simulations, personalized progress reports, flashcards, and lesson notes.",
      "Built a Flutter-native layout with flutter_math_fork for responsive LaTeX mathematical equations and real-time offline Socratic AI feedback."
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
    title: "Chronos: AI-Native Timeline Orchestration",
    image: chronosDeep,
    technologies: ["Next.js 15", "Convex", "Google Gemini", "Stack Auth", "Tailwind CSS", "Framer Motion", "Topological Scheduling"],
    challenge: "Transforming fluid natural-language plans into complex, deterministically constrained timeline graphs with live multi-user synchronization.",
    solutions: [
      "Architected a topological scheduling engine featuring recursive dependency reflowing and Monte Carlo forecasting to forecast plan completion confidence.",
      "Developed a real-time collaborative Gantt charting layer with Convex presence synchronization and interactive Framer Motion controls.",
      "Created a deterministically sandboxed action engine that executes custom timeline automations and handles events dynamically without server overhead."
    ]
  }
];

export const PUBLICATIONS = [
  {
    title: "Fraudulent Image and Video Detection System Using Deep Learning",
    description: "A deep learning-based forensics platform designed to detect fraudulent digital media. The system integrates four specialized CNN and RNN architectures trained with GPU acceleration to identify deepfakes and media forgeries across images and videos. It achieves high-accuracy detection (up to 95% for deepfake images) coupled with a reactive Streamlit interface for real-time analysis.",
    link: "https://www.researchgate.net/publication/405209832_Fraudulent_Image_and_Video_Detection_System_Using_Deep_Learning",
    publisher: "ResearchGate",
    year: "2025",
    tags: ["Deep Learning", "CNNs", "RNNs", "Computer Vision", "Digital Forensics", "Streamlit"]
  }
];

export { BLOG_POSTS } from './blogs';

export const CONTACT = {
  address: "",
  phoneNo: "+234 8083273795",
  email: "samuelolubukun@gmail.com",
};
