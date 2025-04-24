import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

export const HERO_CONTENT = `I build modern web applications and intelligent, data-driven solutions. With expertise in both front-end and back-end development, as well as advanced AI/ML and data science techniques, I create scalable systems that solve real-world problems. My work blends technology and data to deliver impactful, innovative solutions.`;

export const ABOUT_TEXT = `I'm Samuel Olubukun, a software developer, data scientist, and AI/ML engineer based in Abuja, Nigeria. I'm passionate about building innovative websites and intelligent solutions, specializing in web development, data science, and creating AI-powered applications that solve complex problems. My journey began with a deep interest in software development, where I honed my skills in building functional and scalable web applications. Over time, this curiosity evolved into a fascination with data and artificial intelligence, driving me to explore machine learning and data science. Today, I focus on combining these skills to craft intelligent systems that transform data into actionable insights and innovative solutions.`;


export const PROJECTS = [
  {
    title: "Meerahzz Bridals Ecommerce Website",
    link: "http://meerahzzbridals.com/",
    image: project1,
    description:
      "An elegant eCommerce platform for bridal accessories and bouquets, featuring categorized product listings, real-time cart updates, Paystack payment integration, and an intuitive shopping experience built with PHP and core web technologies.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Paystack API"],
  },

  {
    title: "Deepfake Video Detection System",
    link: "https://deepfakevideodetection.streamlit.app/",
    image: project2,
    description:
      "A deep learning-based video analysis system built with CNN and LSTM to detect deepfake videos. The app features face detection using MTCNN, frame-level feature extraction with InceptionV3, and classification using a GRU-based LSTM model. Deployed with a Streamlit interface for real-time analysis.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "MTCNN"],
  },

  {
    title: "Food Delivery Website",
    link: "https://github.com/samolubukun/Food-Delivery-MERN",
    image: project3,
    description:
      "A full-stack food ordering website built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with Stripe for payment processing. This platform allows users to browse food options, place orders, and make secure payments, featuring a clean, user-friendly interface.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JavaScript", "CSS", "HTML"],
  },

  {
    title: "AI Medical Chatbot",
    link: "https://github.com/samolubukun/AI-Medical-Chatbot-Langchain",
    image: project4,
    description:
      "An AI-powered medical chatbot built with LangChain, Groq’s LLaMA-3, and a doctor-patient conversation dataset. The chatbot uses a question-answering system with semantic search to provide context-aware, helpful medical responses. It features a Gradio-based UI for interactive, real-time conversations.",
    technologies: ["LangChain", "Groq LLaMA-3", "Gradio", "Python", "Sentence-Transformers", "Chroma", "Jupyter Notebook"],
  },

  {
    title: "Ecommerce Platform",
    link: "https://github.com/samolubukun/EcommerceApp-MERN",
    image: project5,
    description:
      "A fully functional, deployable e-commerce platform built with the MERN stack. This app includes product management, a shopping cart, user authentication, and payment gateway integration using Braintree for secure transactions.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Braintree", "CSS", "HTML"],
  },

  {
    title: "RAG-Aided Document Chatbot with LLMs",
    link: "https://rag-aided-document-chatbot-with-llms-fdpwspctq43ydglhl5ibcn.streamlit.app/",
    image: project6,
    description:
      "A powerful document question-answering system that uses Retrieval-Augmented Generation (RAG) to process documents and generate answers based on their content. This system integrates large language models (LLMs) like Cohere to answer questions derived from documents in PDF, PPTX, or DOCX formats.",
    technologies: ["Python", "Streamlit", "LangChain", "Cohere", "FAISS", "HuggingFace", "Python-docx", "PyPDF2", "python-pptx"],
  },

  {
    title: "Restaurant Food Ordering System",
    link: "https://github.com/samolubukun/Restaurant-Food-Ordering-System",
    image: project7,
    description:
      "A PHP-based web application that allows customers to browse menu items, place food orders, and manage their carts. Admins can manage the restaurant’s menu, view orders, and control gallery content. Includes a MySQL database for storing user and order data.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Apache"],
  },

  {
    title: "Spam Email Detection System",
    link: "https://spam-email-detection-system-2fgak8mjheppsydrytyjhc.streamlit.app/",
    image: project8,
    description:
      "A machine learning project for detecting spam emails using natural language processing (NLP) techniques. The system is trained on the 190k Spam-Ham Email Dataset and utilizes algorithms like logistic regression to classify emails as spam or ham. The app is built with Streamlit for an interactive user interface.",
    technologies: ["Python", "Streamlit", "scikit-learn", "Jupyter Notebook", "NLP"],
  }


];

export const CONTACT = {
  address: "FCT Abuja, Nigeria",
  phoneNo: "+234 8083273795",
  email: "samuelolubukun@gmail.com",
};
