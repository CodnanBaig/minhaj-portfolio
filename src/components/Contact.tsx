'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-accent-400" />,
      title: "Email",
      value: "minhajgouda@gmail.com",
    },
    {
      icon: <MapPin size={24} className="text-accent-400" />,
      title: "Location",
      value: "Dubai, UAE | Available for travel across MENA & Asia",
    },
    {
      icon: <Linkedin size={24} className="text-accent-400" />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/minhaj-gouda",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/minhaj-gouda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      name: "LinkedIn"
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/minhajgouda?igsh=MTgzaTBoeXVjNDB1Nw%3D%3D&utm_source=qr",
      name: "Instagram"
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-heading text-center mx-auto"
            variants={itemVariants}
          >
            Let&apos;s Collaborate
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ready to build something unforgettable? Whether you’re staging a world-class concert, an international exhibition, or a government mega-showcase — I’m here to turn bold visions into powerful realities.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                From creative spark to final spotlight, let’s team up to deliver experiences that move crowds and make headlines.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Drop me a message — let’s make it epic.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary-900/40 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      className="p-3 bg-primary-900/40 rounded-lg text-white hover:bg-primary-700/40 transition-colors"
                      whileHover={{ y: -5 }}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glass p-8 rounded-xl">
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-16 h-16 mx-auto text-accent-500 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-300">
                      Your message has been sent successfully. 
                      I&apos;ll get back to you as soon as possible!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-300/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-300/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-300/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-300/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent text-white resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 px-6 bg-accent-500 hover:bg-accent-600 text-dark-500 font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-dark-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;