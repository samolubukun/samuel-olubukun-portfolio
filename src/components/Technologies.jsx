import { motion } from "framer-motion";

const techCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "SQL", "HTML", "CSS"],
    color: "text-blue-400",
  },
  {
    name: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Flask", "Django", "Tailwind CSS", "Bootstrap"],
    color: "text-green-400",
  },
  {
    name: "AI & Data Science",
    skills: ["Generative AI", "Autonomous AI Agents", "Multi-Agent Systems", "Agentic Workflows", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "OpenAI", "Gemini", "Deep Learning", "NLP", "Machine Learning", "Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face"],
    color: "text-orange-400",
  },
  {
    name: "Tools & Databases",
    skills: ["Git", "GitHub", "Docker", "Google Cloud Platform", "MongoDB", "PostgreSQL", "MySQL", "VS Code", "Jupyter Notebook"],
    color: "text-purple-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies & Skills
      </motion.h2>
      <div className="flex flex-col gap-8 px-4 max-w-6xl mx-auto">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            whileInView="visible"
            initial="hidden"
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6"
          >
            <h3 className={`w-full md:w-1/5 text-lg md:text-xl font-bold ${category.color} border-l-2 border-current pl-3 md:mt-1`}>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2 w-full md:w-4/5 items-start">
              {category.skills.map((skill, sIndex) => (
                <motion.span
                  key={sIndex}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="rounded border border-neutral-800 bg-neutral-900/30 px-2 py-1 text-xs md:text-sm font-medium text-neutral-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400 cursor-default whitespace-nowrap"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
