import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Zap, Clock } from 'lucide-react';

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
      icon: <Award className="text-accent-400" size={24} />,
      title: "Strategic Planner",
      description: "Creating successful event plans with clear objectives and measurable outcomes."
    },
    {
      icon: <Users className="text-accent-400" size={24} />,
      title: "Team Leader",
      description: "Directing cross-functional teams with clear communication and delegation."
    },
    {
      icon: <Zap className="text-accent-400" size={24} />,
      title: "Creative Problem Solver",
      description: "Finding innovative solutions to complex production challenges on the fly."
    },
    {
      icon: <Clock className="text-accent-400" size={24} />,
      title: "Deadline Driven",
      description: "Consistently delivering high-quality productions within tight timelines."
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
            <p className="mb-4">
              I'm a strategic and calm-headed live events & production leader with over a decade of experience 
              across the Middle East and Asia. Specializing in creating memorable experiences, 
              I blend creative vision with technical expertise to deliver exceptional events.
            </p>
            <p>
              Whether it's a corporate conference, concert, or international exhibition, 
              I approach each project with meticulous attention to detail while maintaining the flexibility 
              to adapt to the dynamic nature of live production. My strength lies in leading diverse teams 
              toward a common creative vision while staying cool under pressure.
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