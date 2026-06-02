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

    const defaultItems = 6;
    const displayedCerts = !showAll ? CERTIFICATIONS.slice(0, defaultItems) : CERTIFICATIONS;

    return (
        <div className="border-b border-neutral-200 dark:border-neutral-900 pb-24 transition-colors duration-300">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-bold text-neutral-900 dark:text-white"
            >
                Certifications
            </motion.h1>

            {/* Mobile View - 2 per row, full details in small font, image size completely unaffected */}
            <div className="grid grid-cols-2 gap-4 px-4 md:hidden">
                {displayedCerts.map((cert, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        key={`mobile-${index}`}
                        className="w-full flex justify-center"
                    >
                        <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-neutral-100/50 dark:bg-neutral-900/50 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 active:scale-95 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm"
                        >
                            {/* Absolute Year Badge */}
                            <span className="absolute top-2 right-2 text-[8px] font-semibold text-neutral-600 dark:text-neutral-500 bg-neutral-200 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-300 dark:border-neutral-700 z-10">
                                {cert.year}
                            </span>

                            <div className="flex flex-col items-center w-full">
                                {/* Badge Image Container (size remains completely unaffected) */}
                                <div className={`aspect-square w-full bg-white dark:bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-200 dark:border-neutral-700 shadow-inner relative overflow-hidden ${cert.issuer === 'DataCamp' ? 'p-1.5' : 'p-0'}`}>
                                    {cert.badge ? (
                                        <img
                                            src={cert.badge}
                                            alt={`${cert.title} badge`}
                                            className={`w-full h-full ${cert.issuer === 'DataCamp' ? 'object-contain' : 'object-cover'}`}
                                        />
                                    ) : (
                                        <FaAward className="text-2xl text-neutral-400 dark:text-neutral-500" />
                                    )}
                                </div>

                                {/* Small Font Details */}
                                <h3 className="text-[10px] font-bold text-neutral-900 dark:text-neutral-200 mt-2.5 mb-0.5 leading-tight text-center w-full px-0.5">
                                    {cert.title}
                                </h3>
                                <p className="text-neutral-500 dark:text-neutral-400 text-[8.5px] leading-tight mb-2 text-center w-full px-0.5">
                                    {cert.issuer}
                                </p>
                            </div>

                            {/* View Link */}
                            <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1 mt-auto mx-auto">
                                View <FaExternalLinkAlt size={8} />
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* Desktop/Tablet View - Full Cards */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {displayedCerts.map((cert, index) => (
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Alternate entrance
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
                        key={index}
                        className="w-full bg-neutral-100/50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
                    >
                        <span className="absolute top-4 right-4 text-xs font-semibold text-neutral-600 dark:text-neutral-500 bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 z-10">
                            {cert.year}
                        </span>

                        <div className="flex flex-col items-center">
                            <div className={`w-32 h-32 bg-white dark:bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-6 shadow-inner ${cert.issuer === 'DataCamp' ? 'p-2' : 'p-0'}`}>
                                {cert.badge ? (
                                    <img
                                        src={cert.badge}
                                        alt={`${cert.title} badge`}
                                        className={`w-full h-full ${cert.issuer === 'DataCamp' ? 'object-contain' : 'object-cover'}`}
                                    />
                                ) : (
                                    <FaAward className="text-3xl text-neutral-400 dark:text-neutral-500" />
                                )}
                            </div>

                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-200 mb-2 leading-tight text-center">
                                {cert.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 text-center">
                                {cert.issuer}
                            </p>
                        </div>

                        <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors mt-auto mx-auto group"
                        >
                            View Credential <FaExternalLinkAlt className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                ))}
            </div>

            {CERTIFICATIONS.length > defaultItems && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium transition-colors flex items-center gap-2 group"
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

