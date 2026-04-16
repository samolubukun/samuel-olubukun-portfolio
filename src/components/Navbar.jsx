import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/SO.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const sections = ["home", "project", "technologies", "certifications", "contact"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Only track sections on homepage
    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection("");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: "-40% 0px -40% 0px"
            }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    const getLinkClasses = (id) =>
        `transition-colors duration-300 ${activeSection === id ? "text-cyan-600 dark:text-cyan-400 font-bold" : "text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400"}`;

    return (
        <>
            <nav className="fixed top-0 md:top-[0.2cm] left-0 right-0 flex items-center justify-between py-2 px-4 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg md:-translate-y-[0.7cm] border-b border-neutral-200 dark:border-neutral-800 md:border-none transition-colors duration-300">
                <div className="flex flex-shrink-0 items-center ml-[-0.8cm]">
                    <Link to="/">
                        <img className="mx-2 w-14 md:w-20 cursor-pointer invert dark:invert-0 transition-all duration-300" src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-2xl z-50 relative text-neutral-900 dark:text-white"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className="hidden md:flex items-center justify-center gap-8 text-lg">
                    <Link to="/" className={location.pathname === "/" && activeSection === "home" ? "text-cyan-600 dark:text-cyan-400 font-bold transition-colors duration-300" : "text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"}>Home</Link>
                    <a href="#project" className={getLinkClasses("project")}>Projects</a>
                    <a href="#technologies" className={getLinkClasses("technologies")}>Skills</a>
                    <a href="#certifications" className={getLinkClasses("certifications")}>Certifications</a>
                    <Link to="/blog" className={location.pathname === "/blog" ? "text-cyan-600 dark:text-cyan-400 font-bold transition-colors duration-300" : "text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"}>Blog</Link>
                    <a href="#contact" className={getLinkClasses("contact")}>Contact</a>
                </div>

                <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
                    <ThemeToggle />
                    <a href="https://github.com/samolubukun" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/samuel-olubukun" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
                    <a href="https://x.com/samuelolubukun" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaXTwitter /></a>
                    <a href="https://api.whatsapp.com/send?phone=2348083273795&text=hello" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaWhatsapp /></a>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white dark:bg-neutral-950 z-40 flex flex-col justify-center items-center md:hidden transition-colors duration-300">
                    <div className="flex flex-col items-center gap-6 text-xl mb-10 text-neutral-900 dark:text-white">
                        <Link to="/" onClick={toggleMenu} className={location.pathname === "/" && activeSection === "home" ? "text-cyan-600 dark:text-cyan-400 font-bold transition-colors duration-300" : "text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"}>Home</Link>
                        <a href="#project" onClick={toggleMenu} className={getLinkClasses("project")}>Projects</a>
                        <a href="#technologies" onClick={toggleMenu} className={getLinkClasses("technologies")}>Skills</a>
                        <a href="#certifications" onClick={toggleMenu} className={getLinkClasses("certifications")}>Certifications</a>
                        <Link to="/blog" onClick={toggleMenu} className={location.pathname === "/blog" ? "text-cyan-600 dark:text-cyan-400 font-bold transition-colors duration-300" : "text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"}>Blog</Link>
                        <a href="#contact" onClick={toggleMenu} className={getLinkClasses("contact")}>Contact</a>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-3xl text-neutral-900 dark:text-white mt-4">
                        <a href="https://github.com/samolubukun" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/samuel-olubukun" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
                        <a href="https://x.com/samuelolubukun" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaXTwitter /></a>
                        <a href="https://api.whatsapp.com/send?phone=2348083273795&text=hello" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"><FaWhatsapp /></a>
                    </div>
                </div>
            )}

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 origin-left z-50"
                style={{ scaleX }}
            />
        </>
    );
};

export default Navbar;
