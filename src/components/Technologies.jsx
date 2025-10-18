import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTensorflow, SiFastapi, SiExpress, SiMysql, SiTailwindcss, SiGooglecloud, SiNextdotjs, SiTypescript, SiDocker } from "react-icons/si";
import { FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { BiLogoPhp, BiLogoDjango } from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { MdScience } from "react-icons/md";
import { animate, motion } from "framer-motion";
import { SiPytorch } from "react-icons/si";
import { TbNotebook } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center items-center"
      >
        {/* Front-end */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <AiOutlineHtml5 className="text-4xl sm:text-5xl md:text-7xl text-orange-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">HTML</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <IoLogoCss3 className="text-4xl sm:text-5xl md:text-7xl text-blue-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">CSS</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <IoLogoJavascript className="text-4xl sm:text-5xl md:text-7xl text-yellow-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">JavaScript</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <RiReactjsLine className="text-4xl sm:text-5xl md:text-7xl text-cyan-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">React</p>
        </div>
                {/* Add Next.js icon */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiNextdotjs className="text-4xl sm:text-5xl md:text-7xl text-gray-800 dark:text-gray-200" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Next.js</p>
        </div>
        {/* Add TypeScript icon */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiTypescript className="text-4xl sm:text-5xl md:text-7xl text-blue-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">TypeScript</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiTailwindcss className="text-4xl sm:text-5xl md:text-7xl text-sky-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Tailwind</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <FaBootstrap className="text-4xl sm:text-5xl md:text-7xl text-purple-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Bootstrap</p>
        </div>

        {/* Back-end */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <FaNodeJs className="text-4xl sm:text-5xl md:text-7xl text-green-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Node.js</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiExpress className="text-4xl sm:text-5xl md:text-7xl text-lime-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Express</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <FaPython className="text-4xl sm:text-5xl md:text-7xl text-yellow-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Python</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <BiLogoDjango className="text-4xl sm:text-5xl md:text-7xl text-green-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Django</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiFastapi className="text-4xl sm:text-5xl md:text-7xl text-teal-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">FastAPI</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <BiLogoPhp className="text-4xl sm:text-5xl md:text-7xl text-sky-700" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">PHP</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <FaJava className="text-4xl sm:text-5xl md:text-7xl text-red-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Java</p>
        </div>

        {/* Databases */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiMongodb className="text-4xl sm:text-5xl md:text-7xl text-green-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">MongoDB</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiMysql className="text-4xl sm:text-5xl md:text-7xl text-blue-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">MySQL</p>
        </div>

        {/* AI/ML/Data Science */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiTensorflow className="text-4xl sm:text-5xl md:text-7xl text-orange-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">TensorFlow</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiDocker className="text-4xl sm:text-5xl md:text-7xl text-blue-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Docker</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(5.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiPytorch className="text-4xl sm:text-5xl md:text-7xl text-red-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">PyTorch</p>
        </div>
        
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(6.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <TbNotebook className="text-4xl sm:text-5xl md:text-7xl text-indigo-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Jupyter</p>
        </div>

        {/* DevOps/Other */}
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(3.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <SiGooglecloud className="text-4xl sm:text-5xl md:text-7xl text-blue-300" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Google Cloud</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(4.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <FaGitAlt className="text-4xl sm:text-5xl md:text-7xl text-orange-700" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">Git</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <motion.div
            variants={iconVariants(5.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4"
          >
            <FaGithub className="text-4xl sm:text-5xl md:text-7xl text-gray-700 dark:text-gray-300" />
          </motion.div>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">GitHub</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
