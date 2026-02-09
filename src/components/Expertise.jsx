import { EXPERT_AREAS } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-light tracking-wide"
            >
                Key <span className="text-neutral-500 font-normal">Expertise</span>
            </motion.h2>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {EXPERT_AREAS.map((area, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {area.title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed font-light">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Expertise;
