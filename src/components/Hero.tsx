import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500 bg-opacity-20 text-primary-300 text-sm mb-4">
              Live Events & Production Leader
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block">Hi, I'm</span>
            <span className="block text-glow text-accent-400 mt-2">Minhaj Gouda</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            <span className="block font-light italic">"Strategic. Creative.</span>
            <span className="block font-light italic">Calm under pressure."</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="btn bg-accent-500 hover:bg-accent-600 text-dark-500 font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-accent-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Work Together</span>
              <Send size={18} />
            </motion.a>
            <motion.a
              href="#" 
              className="btn bg-transparent border-2 border-primary-400 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-400/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      >
        <motion.a 
          href="#about" 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-accent-400" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;