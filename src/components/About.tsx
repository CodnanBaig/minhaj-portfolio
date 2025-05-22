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

  const keyPoints = [
    {
      icon: <Users className="text-accent-400" size={24} />,
      title: "Leadership & Team Management",
      description: "Building and leading diverse teams to deliver experiences at scale across MENA & Asia."
    },
    {
      icon: <Award className="text-accent-400" size={24} />,
      title: "Large-Scale Event Production",
      description: "Managing high-stakes, multi-million-dirham builds from brief to final applause."
    },
    {
      icon: <Zap className="text-accent-400" size={24} />,
      title: "Business Development & Strategy",
      description: "Driving growth and market expansion across multiple international markets."
    },
    {
      icon: <Clock className="text-accent-400" size={24} />,
      title: "Cross-border Operations",
      description: "Executing seamless productions across UAE, KSA, Qatar, and Singapore."
    }
  ];

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
              I'm Minhaj Gouda — a calm-headed force behind some of the Middle East's boldest live experiences. 
              With over a decade of experience across the UAE, Saudi Arabia, Qatar, and Singapore, 
              I've built a career delivering projects where failure is not an option.
            </p>
            <p className="mb-4">
              From world expos and government showcases to arena-scale concerts, cultural spectacles, 
              and brand-defining activations, I've built and led diverse teams to deliver experiences at scale. 
              With a track record of managing high-stakes, multi-million-dirham builds, I drive production from 
              the first brief to final applause — combining strategic foresight, creative precision, and 
              operational control at every step.
            </p>
            <p>
              Whether it's an opening ceremony for the world, a concert for 80,000 fans, or a government-led 
              initiative on the global stage, I know how to make experiences unforgettable — and deliver under pressure.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {keyPoints.map((point, index) => (
              <motion.div 
                key={index}
                className="glass p-6 rounded-xl backdrop-blur-md"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-900/40 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{point.title}</h3>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;