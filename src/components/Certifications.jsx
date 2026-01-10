import { CERTIFICATIONS } from "../constants/index";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const displayedCerts = isMobile && !showAll ? CERTIFICATIONS.slice(0, 4) : CERTIFICATIONS;

    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Certifications
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {displayedCerts.map((cert, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Alternate entrance
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
                        key={index}
                        className="w-full bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:border-cyan-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col justify-between relative overflow-hidden"
                    >
                        <span className="absolute top-4 right-4 text-xs font-semibold text-neutral-500 bg-neutral-800 px-2 py-1 rounded border border-neutral-700 z-10">
                            {cert.year}
                        </span>

                        <div className="flex flex-col items-center">
                            <div className={`w-32 h-32 bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-700 mb-6 ${cert.issuer === 'DataCamp' ? 'p-2' : 'p-0'}`}>
                                {cert.badge ? (
                                    <img
                                        src={cert.badge}
                                        alt={`${cert.title} badge`}
                                        className={`w-full h-full ${cert.issuer === 'DataCamp' ? 'object-contain' : 'object-cover'}`}
                                    />
                                ) : (
                                    <FaAward className="text-3xl text-neutral-500" />
                                )}
                            </div>

                            <h3 className="text-xl font-semibold text-neutral-200 mb-2 leading-tight text-center">
                                {cert.title}
                            </h3>
                            <p className="text-neutral-400 text-sm mb-4 text-center">
                                {cert.issuer}
                            </p>
                        </div>

                        <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mt-auto mx-auto group"
                        >
                            View Credential <FaExternalLinkAlt className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                ))}
            </div>

            {isMobile && CERTIFICATIONS.length > 4 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-2 group"
                    >
                        {showAll ? (
                            <>
                                Show Less <FaChevronUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
                            </>
                        ) : (
                            <>
                                Show More <FaChevronDown className="text-sm group-hover:translate-y-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Certifications;
