import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const experiences = [
    {
      position: "Senior Production Director",
      company: "Global Events Management",
      duration: "2021 - Present",
      location: "Dubai, UAE",
      description: "Leading high-profile productions across the Middle East, managing multi-million dollar budgets and cross-functional teams of 50+ professionals. Responsible for strategic planning, creative direction, and flawless execution of international conferences, music festivals, and corporate launches.",
    },
    {
      position: "Technical Production Manager",
      company: "Creative Productions LLC",
      duration: "2018 - 2021",
      location: "Singapore",
      description: "Oversaw technical aspects of major events throughout Southeast Asia, including sound, lighting, staging, and video elements. Implemented innovative solutions for challenging venues and enhanced production quality while optimizing operational efficiencies.",
    },
    {
      position: "Event Production Specialist",
      company: "Premiere Events & Entertainment",
      duration: "2015 - 2018",
      location: "Abu Dhabi, UAE",
      description: "Managed end-to-end production for corporate and government events. Developed creative concepts, coordinated logistics, and oversaw on-site execution. Successfully delivered over 100 events with consistent client satisfaction.",
    },
    {
      position: "Audio Visual Coordinator",
      company: "Media Solutions Group",
      duration: "2012 - 2015",
      location: "Bangkok, Thailand",
      description: "Coordinated audio-visual requirements for conferences and corporate events. Collaborated with clients to determine technical needs and supervised technical teams during setup and operation.",
    },
  ];

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

  return (
    <section id="experience" className="py-20 bg-dark-300/30">
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
            Work Experience
          </motion.h2>

          <motion.div 
            className="mt-12 relative border-l-2 border-primary-600 pl-8 ml-4"
            variants={containerVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative timeline-item"
                variants={itemVariants}
              >
                <div className="glass p-6 rounded-xl">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.position}</h3>
                    <span className="px-3 py-1 bg-primary-900/40 rounded-full text-primary-300 text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-accent-400 font-semibold">{exp.company}</span>
                    <span className="text-gray-400 ml-2">• {exp.location}</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;