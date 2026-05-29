import { motion } from "framer-motion";
import portrait from "../assets/samuelolubukunportrait.png";

const stats = [
  {
    value: "3+",
    label: "Years Building",
    sub: "End-to-end product engineering",
  },
  {
    value: "Full-Stack",
    label: "Engineering",
    sub: "Scalable backends · Polished frontends · APIs",
  },
  {
    value: "AI · ML",
    label: "Intelligence",
    sub: "Agents · Models · Pipelines · Data Science",
  },
];

const PersonBehindCode = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-900 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4 pt-20">

        {/* Section label */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4"
        >
          About
        </motion.p>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — bio + stats */}
          <div className="flex-1">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-8 leading-tight"
            >
              The person{" "}
              <span className="text-neutral-400 dark:text-neutral-500 font-normal">
                behind the code
              </span>
            </motion.h2>

            {/* Bio paragraphs */}
            {[
              "I am Samuel Olubukun, a Full-Stack AI Engineer with a genuine interest in building things that actually work and hold up in the real world.",
              "My work sits at the intersection of software engineering and applied artificial intelligence. Whether I am architecting backend systems, building polished frontends, deploying intelligent agents, or training machine learning models, I lead with clarity and care about the end result.",
              "I also bring a strong data science perspective to everything I build. Understanding data, how to analyze it, visualize it, and draw meaning from it, makes me a more effective engineer and a sharper problem solver.",
            ].map((para, i) => (
              <motion.p
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5"
              >
                {para}
              </motion.p>
            ))}

            {/* Stat cards */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block lg:w-[360px] flex-shrink-0"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
              <img
                src={portrait}
                alt="Samuel Olubukun"
                className="w-full h-[420px] lg:h-[500px] object-cover object-top"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 dark:from-neutral-900/40 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PersonBehindCode;
