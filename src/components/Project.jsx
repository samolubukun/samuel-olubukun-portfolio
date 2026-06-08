import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedProjects = showAll
    ? PROJECTS
    : (isMobile ? PROJECTS.slice(0, 6) : PROJECTS.slice(0, 8));

  return (
    <div className='border-b border-neutral-200 dark:border-neutral-900 pb-4 transition-colors duration-300'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl font-bold text-neutral-900 dark:text-white'
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center items-center mb-8 lg:mb-0 p-4 rounded-2xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-7/10 mb-4 lg:mb-0 lg:mr-8 overflow-hidden rounded-xl"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="block cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl w-full aspect-video sm:aspect-[16/10] lg:aspect-[16/9] object-fill bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group-hover:border-blue-400/30 transition-all duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-5/10"
            >
              <h6 className="mb-2 font-semibold text-neutral-900 dark:text-white">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">{project.description.split("\n\n")[0]}</p>
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-100 dark:bg-neutral-900 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-blue-700 dark:text-blue-400 font-mono border border-blue-100 dark:border-blue-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors group"
              >
                View Live <FaExternalLinkAlt size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      {(isMobile ? PROJECTS.length > 6 : PROJECTS.length > 8) && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 hover:text-blue-400 font-medium transition-colors flex items-center gap-2 group"
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

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-t-3xl sm:rounded-2xl shadow-2xl border-t border-neutral-200 dark:border-neutral-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                <FaTimes size={20} />
              </button>

              {/* Image — contained with rounded corners */}
              <div className="p-2 sm:p-6 pb-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                  {selectedProject.title}
                </h2>

                {selectedProject.details ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                        Overview
                      </h3>
                      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {selectedProject.details.overview}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">
                        Key Features
                      </h3>
                      <ul className="list-disc pl-5 space-y-1.5">
                        {selectedProject.details.features.map((feature, i) => (
                          <li key={i} className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedProject.details.engine && (
                      <div className="mb-6">
                        <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                          Engine & Architecture
                        </h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-mono bg-neutral-50 dark:bg-neutral-950 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800/80">
                          {selectedProject.details.engine}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                )}

                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-lg bg-blue-50/50 dark:bg-blue-900/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
                  >
                    View Live Site <FaExternalLinkAlt size={14} />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition duration-300 font-semibold"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;