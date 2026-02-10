import { HERO_CONTENT } from "../constants/index";
import aboutImg from "../assets/SamuelOlubukun.png";
import resumePdf from "../assets/samuel_olubukun_resume.pdf";
import { motion } from 'framer-motion';

const Hero = () => {
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
      className="border-b border-neutral-900 pb-4 lg:mb-35 flex flex-wrap justify-center mt-10"
    >
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
          >
            Samuel Olubukun
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-3xl tracking-tight text-transparent"
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
          <motion.a
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            href={resumePdf}
            className="hidden lg:inline-block mt-6 mb-8 md:mb-0 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            My Resume
          </motion.a>
        </div>
      </div>
      <div className="w-full lg:w-5/12 lg:p-8">
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={aboutImg}
            alt="Samuel Olubukun"
            className="rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all duration-500 filter brightness-95 hover:brightness-110 object-cover"
            fetchpriority="high"
          />
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            href={resumePdf}
            className="lg:hidden mt-8 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            My Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
