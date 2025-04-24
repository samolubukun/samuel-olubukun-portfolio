import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTensorflow, SiFastapi, SiExpress, SiMysql, SiTailwindcss, SiGooglecloud } from "react-icons/si";
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
        className="flex flex-wrap justify-center items-center gap-8"
      >
        {/* Front-end */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <AiOutlineHtml5 className="text-7xl text-orange-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <IoLogoCss3 className="text-7xl text-blue-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <IoLogoJavascript className="text-7xl text-yellow-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTailwindcss className="text-7xl text-sky-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaBootstrap className="text-7xl text-purple-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Bootstrap</p>
        </div>

        {/* Back-end */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiExpress className="text-7xl text-lime-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Express</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaPython className="text-7xl text-yellow-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoDjango className="text-7xl text-green-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Django</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiFastapi className="text-7xl text-teal-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2">FastAPI</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoPhp className="text-7xl text-sky-700" />
          </motion.div>
          <p className="text-neutral-400 mt-2">PHP</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJava className="text-7xl text-red-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Java</p>
        </div>

        {/* Databases */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-blue-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">MySQL</p>
        </div>

        {/* AI/ML/Data Science */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiTensorflow className="text-7xl text-orange-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">TensorFlow</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <MdScience className="text-7xl text-purple-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Scikit-learn</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(5.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPytorch className="text-7xl text-red-400" />
          </motion.div>
          <p className="text-neutral-400 mt-2">PyTorch</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(4.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <MdScience className="text-7xl text-lime-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">NumPy</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(5.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <MdScience className="text-7xl text-teal-600" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Pandas</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(6.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbNotebook className="text-7xl text-indigo-500" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Jupyter</p>
        </div>

        {/* DevOps/Other */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(3.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiGooglecloud className="text-7xl text-blue-300" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Google Cloud</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(4.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGitAlt className="text-7xl text-orange-700" />
          </motion.div>
          <p className="text-neutral-400 mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <motion.div
            variants={iconVariants(5.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGithub className="text-7xl text-gray-700 dark:text-gray-300" />
          </motion.div>
          <p className="text-neutral-400 mt-2">GitHub</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;