// components/Navbar.jsx
import { useState, useEffect } from "react";
import logo from "../assets/SO.png";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if viewport is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const navbarStyle = isMobile ? {} : { transform: "translateY(-0.7cm)" };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 relative" style={navbarStyle}>
      <div className="flex flex-shrink-0 items-center ml-[-0.8cm] ">
        <a href="/"> {/* Added this <a> tag */}
          <img className="mx-2 w-20 md:w-28 cursor-pointer" src={logo} alt="logo" /> {/* Added cursor-pointer for better UX */}
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-2xl z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center justify-center gap-8 text-lg">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#technologies">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Desktop social icons */}
      <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/samuel-olubukun"><FaLinkedin /></a>
        <a href="https://github.com/samolubukun"><FaGithub /></a>
        <a href="https://www.instagram.com/buksmi_1/"><FaInstagram /></a>
        <a href="https://api.whatsapp.com/send?phone=2348083273795&text=hello"><FaWhatsapp /></a>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-10 flex flex-col justify-center items-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-xl text-white mb-10">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#technologies" onClick={toggleMenu}>Skills</a>
          <a href="#project" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        <div className="flex items-center justify-center gap-6 text-3xl text-white mt-4">
          <a href="https://www.linkedin.com/in/samuel-olubukun-50a57a1a9/"><FaLinkedin /></a>
          <a href="https://github.com/samolubukun"><FaGithub /></a>
          <a href="https://www.instagram.com/buksmi_1"><FaInstagram /></a>
          <a href="https://api.whatsapp.com/send?phone=2348083273795&text=hello"><FaWhatsapp /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
