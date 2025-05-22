import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, Award, Zap, DollarSign, 
  Handshake, Lightbulb, Globe 
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const skills = [
    {
      icon: <Users size={28} />,
      name: "Leadership & Team Management",
      level: 95,
      description: "Building and leading diverse teams to deliver experiences at scale across MENA & Asia."
    },
    {
      icon: <Award size={28} />,
      name: "Large-Scale Event Production",
      level: 95,
      description: "Managing high-stakes, multi-million-dirham builds from brief to final applause."
    },
    {
      icon: <Zap size={28} />,
      name: "Business Development & Strategy",
      level: 90,
      description: "Driving growth and market expansion across multiple international markets."
    },
    {
      icon: <DollarSign size={28} />,
      name: "Budgeting & Cost Control",
      level: 92,
      description: "Optimizing resources and managing budgets for complex, multi-million-dirham productions."
    },
    {
      icon: <Handshake size={28} />,
      name: "Vendor & Stakeholder Management",
      level: 90,
      description: "Building and maintaining strong relationships with partners and stakeholders across the region."
    },
    {
      icon: <Lightbulb size={28} />,
      name: "Creative Execution & Risk Management",
      level: 92,
      description: "Balancing innovative creative vision with robust risk mitigation strategies."
    },
    {
      icon: <Globe size={28} />,
      name: "Cross-border Operations",
      level: 95,
      description: "Executing seamless productions across UAE, KSA, Qatar, and Singapore."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-300/30">
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
            Core Skills
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl hover:glow transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 230, 169, 0.1), 0 8px 10px -6px rgba(0, 230, 169, 0.1)'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary-900/40 rounded-full mb-4 text-accent-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                  
                  <div className="w-full h-2 bg-dark-400 rounded-full mb-2">
                    <motion.div
                      className="h-full bg-accent-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-300">
                    {skill.description}
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

export default Skills;