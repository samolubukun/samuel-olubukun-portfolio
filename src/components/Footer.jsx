import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 text-2xl mb-4">
            <a href="https://www.linkedin.com/in/samuel-olubukun" className="hover:opacity-70">
              <FaLinkedin />
            </a>
            <a href="https://github.com/samolubukun" className="hover:opacity-70">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/buksmi_1" className="hover:opacity-70">
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=2348083273795&text=hello" className="hover:opacity-70">
              <FaWhatsapp />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} Olubukun Samuel
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;