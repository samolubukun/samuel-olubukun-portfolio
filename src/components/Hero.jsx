import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants/index";
import aboutImg from "../assets/SamuelOlubukun.png";
import resumePdf from "../assets/samuel_olubukun_resume.pdf";
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiX } from 'react-icons/fi';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isResumeOpen]);

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    },
  });

  return (
    <div
      className="border-b border-neutral-200 dark:border-neutral-900 pb-4 lg:mb-35 flex flex-wrap justify-center mt-10 transition-colors duration-300"
    >
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-6xl font-bold tracking-tight lg:mt-16 lg:text-6xl font-display"
          >
            Samuel Olubukun
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Full Stack AI/ML Engineer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-lg"
          >
            {HERO_CONTENT}
          </motion.p>
          {/* Desktop buttons */}
          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-4 mt-6 mb-8"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md transition-all duration-300"
            >
              Contact
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-600/80 text-neutral-700 dark:text-neutral-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-all duration-300"
            >
              <FiDownload size={16} /> Resume
            </button>
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:w-5/12 lg:p-8">
        <div className="flex flex-col items-center lg:items-end lg:justify-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={aboutImg}
            alt="Samuel Olubukun"
            className="w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 lg:ml-8 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all duration-500 filter brightness-95 hover:brightness-110 object-cover"
            fetchpriority="high"
          />
          {/* Mobile buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="lg:hidden flex items-center gap-4 mt-8"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md transition-all duration-300"
            >
              Contact
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-600/80 text-neutral-700 dark:text-neutral-300 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-all duration-300"
            >
              <FiDownload size={16} /> Resume
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="min-w-0 pr-2">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                    Resume
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis mt-0.5">
                    Samuel Olubukun — Full Stack AI/ML Engineer
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <a
                    href={resumePdf}
                    download
                    className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/10"
                  >
                    <FiDownload size={14} />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition duration-200"
                    aria-label="Close"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer / Iframe */}
              <div className="flex-1 w-full bg-neutral-100 dark:bg-neutral-950 relative">
                <iframe
                  src={resumePdf}
                  title="Samuel Olubukun Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
