import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedProjects = isMobile && !showAll ? PROJECTS.slice(0, 6) : PROJECTS;

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
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center items-center mb-8 lg:mb-0">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-7/10 mb-4 lg:mb-0 lg:mr-8 overflow-hidden rounded-xl"
            >
              <img
                className="rounded-xl w-full aspect-video sm:aspect-[16/10] lg:aspect-[16/9] object-cover bg-neutral-900/10 transition-transform duration-500 hover:scale-105"
                src={project.image}
                alt={project.title}
                loading="lazy"
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

      {isMobile && PROJECTS.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-2 group"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                Show More <FaChevronDown className="text-sm group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;