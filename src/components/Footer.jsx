import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 text-2xl mb-8">
            <a href="https://github.com/samolubukun" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/samuel-olubukun" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://x.com/samuelolubukun" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FaXTwitter />
            </a>
            <a href="https://api.whatsapp.com/send?phone=2348083273795&text=hello" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <FaWhatsapp />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-neutral-600 dark:text-neutral-500 font-medium">
            <a href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              © {currentYear} Samuel Olubukun
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
