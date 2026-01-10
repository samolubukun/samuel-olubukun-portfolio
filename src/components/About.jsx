import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-light tracking-wide"
            >
                About <span className="text-neutral-500 font-normal">Me</span>
            </motion.h2>

            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="mb-8 text-neutral-300 text-lg leading-relaxed font-light">
                        {ABOUT_TEXT}
                    </p>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center border-t border-neutral-800 pt-10"
                >
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Innovative</h3>
                        <p className="text-sm text-neutral-500">Creative Solutions</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Technical</h3>
                        <p className="text-sm text-neutral-500">Full Stack & AI</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Adaptive</h3>
                        <p className="text-sm text-neutral-500">Continuous Learner</p>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">Precise</h3>
                        <p className="text-sm text-neutral-500">Detail Oriented</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
