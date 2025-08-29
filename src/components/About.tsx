'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Zap, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  const keyPoints: never[] = [];

  return (
    <section id="about" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="section-heading text-center mx-auto"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.div
            className="mb-12 text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Live Events & Production Leader Delivering High-Impact Experiences Across MENA & Asia
            </h3>
            <p className="mb-4">
              I am Minhaj Gouda, a calm-headed force behind some of the Middle East&apos;s boldest live experiences. 
              With over a decade of experience across the UAE, Saudi Arabia, Qatar, and Singapore, 
              I have built a career delivering projects where failure is not an option.
            </p>
            <p className="mb-4">
              From world expos and government showcases to arena-scale concerts, cultural spectacles, 
              and brand-defining activations, I have led diverse teams to deliver experiences at scale. 
              With a track record of managing high-stakes, multi-million dollar builds, I drive production from 
              the first brief to the final applause by combining strategic foresight, creative precision, and 
              operational control at every step.
            </p>
            <p>
              Whether it is an opening ceremony for the world, a concert for 80,000 fans, or a government-led 
              initiative on the global stage, I know how to make experiences unforgettable and deliver under pressure.
            </p>
          </motion.div>

          {/* Removed duplicate skills cards to avoid repetition with Core Skills section */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;