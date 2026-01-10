import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center items-center mb-8 lg:mb-0">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-7/10 mb-4 lg:mb-0 lg:mr-8"
            >
              <img
                className="rounded w-full h-auto object-contain bg-neutral-900/10"
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-5/10"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;