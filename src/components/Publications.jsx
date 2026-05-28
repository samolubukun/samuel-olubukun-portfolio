import { PUBLICATIONS } from "../constants";
import { motion } from "framer-motion";
import { FaRegFileAlt, FaExternalLinkAlt } from "react-icons/fa";

const Publications = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-900 pb-20 transition-colors duration-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-wide text-neutral-900 dark:text-white"
      >
        Publications <span className="text-neutral-400 dark:text-neutral-500 font-normal">& Research</span>
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-all duration-300 shadow-md dark:shadow-none hover:shadow-lg"
            >
              {/* Header row: icon + publisher/year inline */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 flex-shrink-0">
                  <FaRegFileAlt size={22} />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-900/30">
                    {pub.publisher}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">• {pub.year}</span>
                </div>
              </div>

              {/* Title — smaller on mobile to prevent single-word wrapping */}
              <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-snug">
                {pub.title}
              </h3>

              {/* Description — no justify, natural wrap */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                {pub.description}
              </p>

              {/* Tags — always wrapping inline */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-200/50 dark:bg-neutral-800/50 px-3 py-1 rounded-lg border border-neutral-300/30 dark:border-neutral-700/30 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md shadow-blue-500/20"
              >
                Read Paper on ResearchGate <FaExternalLinkAlt size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
