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
    <div className="border-b border-neutral-800 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 justify-items-center items-center"
      >
        {/* Front-end */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <AiOutlineHtml5 className="text-2xl sm:text-3xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <IoLogoCss3 className="text-2xl sm:text-3xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <IoLogoJavascript className="text-2xl sm:text-3xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <RiReactjsLine className="text-2xl sm:text-3xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiNextdotjs className="text-2xl sm:text-3xl text-gray-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiTypescript className="text-2xl sm:text-3xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiTailwindcss className="text-2xl sm:text-3xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <FaBootstrap className="text-2xl sm:text-3xl text-purple-600" />
        </motion.div>

        {/* Back-end */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <FaNodeJs className="text-2xl sm:text-3xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiExpress className="text-2xl sm:text-3xl text-lime-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <FaPython className="text-2xl sm:text-3xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <BiLogoDjango className="text-2xl sm:text-3xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiFastapi className="text-2xl sm:text-3xl text-teal-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <BiLogoPhp className="text-2xl sm:text-3xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <FaJava className="text-2xl sm:text-3xl text-red-500" />
        </motion.div>

        {/* Databases */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiMongodb className="text-2xl sm:text-3xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiMysql className="text-2xl sm:text-3xl text-blue-600" />
        </motion.div>

        {/* AI/ML/Data Science */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiTensorflow className="text-2xl sm:text-3xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiDocker className="text-2xl sm:text-3xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiPytorch className="text-2xl sm:text-3xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6.2)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <TbNotebook className="text-2xl sm:text-3xl text-indigo-500" />
        </motion.div>

        {/* DevOps/Other */}
        <motion.div
          variants={iconVariants(3.6)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <SiGooglecloud className="text-2xl sm:text-3xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.6)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <FaGitAlt className="text-2xl sm:text-3xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.6)}
          initial="initial"
          animate="animate"
          className="rounded-lg border border-neutral-800 p-1.5 sm:p-2"
        >
          <FaGithub className="text-2xl sm:text-3xl text-neutral-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
