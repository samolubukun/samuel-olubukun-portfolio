import { useState } from "react";
import { TECHNICAL_DEEP_DIVES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const TechnicalDeepDives = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            zIndex: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            zIndex: 0
        })
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = TECHNICAL_DEEP_DIVES.length - 1;
            if (nextIndex >= TECHNICAL_DEEP_DIVES.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div className="border-b border-neutral-900 pb-20 relative">
            <div className="custom-gradient-bg absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(30,50,90,0.2),transparent_50%)]"></div>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-light tracking-wide"
            >
                Technical <span className="text-neutral-500 font-normal">Deep Dives</span>
            </motion.div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="relative">
                    {/* Grid Layout for Stacking Slides (Solves Height Cutoff) */}
                    <div className="grid grid-cols-1 grid-rows-1 relative min-h-[600px]">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 200, damping: 25 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="col-start-1 row-start-1 w-full h-full cursor-grab active:cursor-grabbing"
                            >
                                <CaseStudyCard study={TECHNICAL_DEEP_DIVES[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows - Repositioned to sides */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/50 rounded-full p-3 backdrop-blur-md transition-all duration-300 group shadow-xl"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/50 rounded-full p-3 backdrop-blur-md transition-all duration-300 group shadow-xl"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                    </button>
                </div>

                {/* Modern Progress Bar */}
                <div className="flex justify-center items-center gap-3 mt-12">
                    {TECHNICAL_DEEP_DIVES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-500 relative overflow-hidden ${index === currentIndex ? "w-12 bg-blue-600" : "w-2 bg-neutral-800 hover:bg-neutral-700"
                                }`}
                        >
                            {index === currentIndex && (
                                <motion.div
                                    layoutId="active-dot"
                                    className="absolute inset-0 bg-blue-400/30"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CaseStudyCard = ({ study }) => {
    return (
        <div className="h-full bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 rounded-3xl overflow-hidden shadow-2xl hover:border-neutral-700/80 transition-colors duration-500">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Left Column: Visual (Diagram) */}
                <div className="lg:w-5/12 relative bg-gradient-to-br from-neutral-950/80 to-neutral-900/80 p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-800/50 group">
                    <div className="absolute top-2 left-4 md:top-4 z-10">
                        <div className="px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-700/50 text-xs font-mono text-neutral-400 backdrop-blur-sm">
                            SYSTEM ARCHITECTURE
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-lg border border-neutral-800/50 bg-neutral-950 group-hover:scale-[1.02] transition-transform duration-500 mt-6 md:mt-0">
                        <img
                            src={study.image}
                            alt={`${study.title} Architecture`}
                            className="w-full h-auto object-contain p-2"
                            loading="eager"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-7/12 p-6 md:p-10 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                {study.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 flex-grow">
                        {/* Challenge Section */}
                        <div className="bg-neutral-800/20 rounded-xl p-5 border border-neutral-800/50">
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-orange-400/90 uppercase tracking-wider mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-md shadow-orange-500/50"></span>
                                The Challenge
                            </h4>
                            <p className="text-neutral-300 leading-relaxed">
                                {study.challenge}
                            </p>
                        </div>

                        {/* Solutions Section */}
                        <div>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-400/90 uppercase tracking-wider mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50"></span>
                                Architectural Decisions
                            </h4>
                            <ul className="grid gap-3">
                                {study.solutions.map((solution, index) => (
                                    <li key={index} className="flex gap-3 text-neutral-400 leading-relaxed group/item">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover/item:bg-blue-500 transition-colors duration-300 shrink-0"></div>
                                        <span>{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800/50 flex justify-end">
                        <span className="text-xs text-neutral-500 font-mono">CASE STUDY {String(TECHNICAL_DEEP_DIVES.indexOf(study) + 1).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnicalDeepDives;
