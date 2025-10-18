import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project9 from "../assets/projects/project-9.jpg";
import pixareact from "../assets/projects/pixareact.jpg";
import careerprofilegem from "../assets/projects/careerprofilegem.jpg";
import vocalvista from "../assets/projects/vocalvista.jpg";


export const HERO_CONTENT = `I create modern web applications and data-driven solutions, specializing in full-stack development, data science, and AI/ML. My work focuses on building scalable systems that tackle real-world challenges with innovative, impactful results.`;
export const ABOUT_TEXT = `Hi! I'm Samuel Olubukun, a Full Stack AI/ML Developer passionate about creating intelligent, modern web solutions. I have strong skills and experience in data science, artificial intelligence, and machine learning, and have built several projects that showcase the blend of web development and AI innovation.

I enjoy working across frontend, backend, and AI systems, combining creativity, problem-solving, and technical precision to build seamless and impactful applications. I'm continuously learning and applying new technologies to develop smarter solutions that deliver real value and meaningful user experiences.`;


export const PROJECTS = [
  {
    title: "VOCAL VISTA",
    link: "https://vocalvista.netlify.app/",
    image: vocalvista,
    description: "An AI voice coach using STT-LLM-TTS pipeline for real-time personalized coaching feedback with diverse modes like Mock Interviews and Language Learning. Utilizes Convex for a real-time, instantly synchronized backend.",
    technologies: ["Next.js", "TypeScript", "Deepgram", "Gemini AI", "Convex", "TTS/STT"],
  },

  {
    title: "PIXAREACT",
    link: "https://pixareactgemini.netlify.app/",
    image: pixareact,
    description: "An AI tool that converts screenshots/sketches into functional React/TypeScript applications with TailwindCSS using multimodal Gemini AI. Includes client-side resizing and server-side code sanitization and repair.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Gemini AI", "Multimodal"],
  },

  {
    title: "CAREERPROFILE GEM",
    link: "https://github.com/samolubukun/CareerProfileGEM",
    image: careerprofilegem,
    description: "An AI-powered assistant for generating cover letters and resumes, supporting AI generation, manual editing, and PDF import with credit management. Built with Wasp, React, and Prisma, using Google Gemini for content generation.",
    technologies: ["Wasp", "React", "TypeScript", "Prisma", "Google Gemini", "Stripe"],
  },

  {
    title: "Socially",
    link: "https://socially-delta-eight.vercel.app/",
    image: project9,
    description: "A modern social media application built with Next.js, featuring user authentication, posts, comments, likes, notifications, profiles, a follow system, and dark mode.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk", "UploadThing"],
  },

  {
    title: "Meerahzz Bridals Ecommerce Website",
    link: "http://meerahzzbridals.com/",
    image: project1,
    description:
      "An elegant eCommerce platform for bridal accessories and bouquets, featuring categorized product listings, real-time cart updates, Paystack payment integration, and an intuitive shopping experience built with PHP and core web technologies.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Paystack API"],
  },

  {
    title: "Ecommerce Platform",
    link: "https://github.com/samolubukun/EcommerceApp-MERN",
    image: project5,
    description:
      "A fully functional, deployable e-commerce platform built with the MERN stack. This app includes product management, a shopping cart, user authentication, and payment gateway integration using Braintree for secure transactions.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Braintree", "CSS", "HTML"],
  },

  // keep remaining projects below (preserve existing entries)
  {
    title: "RAG-Aided Document Chatbot with LLMs",
    link: "https://rag-aided-document-chatbot-with-llms-fdpwspctq43ydglhl5ibcn.streamlit.app/",
    image: project6,
    description:
      "A powerful document question-answering system that uses Retrieval-Augmented Generation (RAG) to process documents and generate answers based on their content. This system integrates large language models (LLMs) like Cohere to answer questions derived from documents in PDF, PPTX, or DOCX formats.",
    technologies: ["Python", "Streamlit", "LangChain", "Cohere", "FAISS", "HuggingFace", "Python-docx", "PyPDF2", "python-pptx"],
  },

  {
    title: "Food Delivery Website",
    link: "https://github.com/samolubukun/Food-Delivery-MERN",
    image: project3,
    description:
      "A full-stack food ordering website built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with Stripe for payment processing. This platform allows users to browse food options, place orders, and make secure payments, featuring a clean, user-friendly interface.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JavaScript", "CSS", "HTML"],
  }

];
export const CONTACT = {
  address: "",
  phoneNo: "+234 8083273795",
  email: "samuelolubukun@gmail.com",
};
