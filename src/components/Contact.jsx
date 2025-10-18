import { CONTACT } from '../constants/index';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="text-center text-lg mb-6"
      >
        I'm currently open to new projects and exciting challenges. Feel free to reach out, and let's discuss how we can build something great together!
      </motion.p>
      <div className="tracking-tighter text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 md:mb-12" // Added 10 margin-bottom on medium screens and up (~ 1cm spacing)
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 md:mb-10" // Added 10 margin-bottom on medium screens and up (~ 1cm spacing)
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href='#'
          className='border-b'
        >
          {CONTACT.email}
        </motion.a>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.2 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://wa.me/2348083273795"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-blue-400 hover:text-blue-300 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border border-neutral-700"
          >
            <FaWhatsapp className="mr-3 text-xl" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;