import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/SamuelOlubukun.png";
import resumePdf from "../assets/samuel_olubukun_resume.pdf"; 
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'; 

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const heroContainerStyle = isMobile ? { marginTop: '-1.5cm' } : {};

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
      className="border-b border-neutral-900 pb-4 lg:mb-35 flex flex-wrap justify-center -mt-24"
      style={{ ...heroContainerStyle, transform: "translateY(-0.8cm)" }}
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
            Full Stack Web Developer|Data Scientist & AI/ML Engineer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={container(1.5)} 
            initial="hidden"
            animate="visible"
            href={resumePdf} 
            target="_blank" 
            type="application/pdf"
            className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            My Resume
          </motion.a>
        </div>
      </div>
      <div className="w-full lg:w-1/3 lg:p-8">
        <div className="flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Samuel Olubukun"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
