import { CONTACT } from '../constants/index';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyulm0zpiwUKEGLJ7QjpgjD9MTrqfSoTKd2s-qJ2BG7uVczsmz_fhCCLMG6zS9Rhvk/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus("success");
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-3xl md:text-5xl font-light tracking-tight"
      >
        Get In <span className="text-neutral-500">Touch</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto">
        {/* Changed grid items-center to items-start for better alignment with row span */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* 1. Header Section (Title + Description) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-1 lg:col-start-1 lg:row-start-1"
          >
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Let's collaborate</h3>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
              I'm currently open to new projects and exciting challenges. Feel free to reach out, and let's discuss how we can build something great together!
            </p>
          </motion.div>


          {/* 2. Contact Form Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-neutral-950 p-6 md:p-10 rounded-3xl border border-neutral-800 shadow-2xl relative overflow-hidden">
              {/* Form gradient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -z-10"></div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-neutral-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-neutral-400 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-neutral-600"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-neutral-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-400 ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none placeholder:text-neutral-600"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isSubmitting ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5'}`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <FaPaperPlane className="mr-2.5 text-base" /> Send Message
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-neutral-950/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <FaPaperPlane className="text-2xl text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              )}
            </form>
          </motion.div>


          {/* 3. Contact Info Section (Email, Phone, WhatsApp) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-3 lg:col-start-1 lg:row-start-2 lg:self-end"
          >
            {/* lg:self-end aligns it to the bottom of the form if the form is taller, or visually pleasing */}
            <div className="space-y-6">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center space-x-3 md:space-x-5 p-3 md:p-4 bg-neutral-900/30 rounded-xl border border-neutral-800/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-800 rounded-full flex items-center justify-center text-blue-400 shrink-0">
                  <FaEnvelope className="text-lg md:text-xl" />
                </div>
                <div className="min-w-0 overflow-hidden flex-1">
                  <h4 className="text-xs md:text-sm text-neutral-500 font-medium">Email Address</h4>
                  <span className="text-neutral-200 text-sm sm:text-base md:text-lg whitespace-nowrap truncate block">{CONTACT.email}</span>
                </div>
              </a>

              <div className="flex items-center space-x-3 md:space-x-5 p-3 md:p-4 bg-neutral-900/30 rounded-xl border border-neutral-800/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-800 rounded-full flex items-center justify-center text-blue-400 shrink-0">
                  <FaPhone className="text-lg md:text-xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs md:text-sm text-neutral-500 font-medium">Phone Number</h4>
                  <span className="text-neutral-200 text-sm md:text-lg">{CONTACT.phoneNo}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/2348083273795"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-500/30 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                <FaWhatsapp className="text-xl sm:text-2xl text-green-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-green-400 text-xs sm:text-base font-medium whitespace-nowrap truncate">Chat directly on WhatsApp</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;