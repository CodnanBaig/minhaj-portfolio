import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, Users, Lightbulb, Presentation, 
  LineChart, Headphones, PenTool, Globe 
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
      icon: <Calendar size={28} />,
      name: "Event Planning",
      level: 95,
      description: "Strategic event planning and conceptualization from start to finish."
    },
    {
      icon: <Users size={28} />,
      name: "Team Leadership",
      level: 90,
      description: "Managing diverse teams of creative and technical professionals."
    },
    {
      icon: <Lightbulb size={28} />,
      name: "Creative Direction",
      level: 85,
      description: "Developing unique creative concepts for unforgettable experiences."
    },
    {
      icon: <Presentation size={28} />,
      name: "Technical Production",
      level: 92,
      description: "Overseeing sound, lighting, staging, and technical requirements."
    },
    {
      icon: <LineChart size={28} />,
      name: "Budget Management",
      level: 88,
      description: "Creating and managing budgets for events of all sizes."
    },
    {
      icon: <Headphones size={28} />,
      name: "Live Sound Engineering",
      level: 80,
      description: "Audio engineering for live events and productions."
    },
    {
      icon: <PenTool size={28} />,
      name: "Content Creation",
      level: 75,
      description: "Developing multimedia content for events and productions."
    },
    {
      icon: <Globe size={28} />,
      name: "International Logistics",
      level: 85,
      description: "Managing cross-border event logistics and vendor relations."
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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