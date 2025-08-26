'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-dark-500 relative">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <motion.a 
            href="#home" 
            className="p-3 bg-primary-800 rounded-full text-white mb-8 hover:bg-primary-700 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.a>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-white">Minhaj</span>
              <span className="text-accent-500">Gouda</span>
            </h2>
            <p className="text-gray-400">Live Events & Production Leader</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </motion.a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Minhaj Gouda. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;