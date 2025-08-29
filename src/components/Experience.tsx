'use client'

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
      position: "Head of Operations",
      company: "Apex Event Services",
      duration: "Jun 2025 - Present",
      location: "Middle East",
      description: [
        "Leading operations across the Middle East, managing client servicing, execution, and business growth for high-profile event infrastructure projects.",
        "Securing partnerships with top regional and global agencies producing large-scale events in the Middle East.",
        "Driving concept development using Apex’s in-house capabilities, including a 15,000-seat + 30,000-standing pop-up stadium and other innovative structural solutions.",
        "Bridging creative ideas with technical execution—delivering certified, scalable, and impact-driven solutions for concerts, festivals, and government activations."
      ],
    },
    {
      position: "General Manager",
      company: "PHNTM",
      duration: "Nov 2021 - Present",
      location: "Middle East & Singapore",
      description: [
        "Directed region-wide production operations, overseeing large-scale projects in the UAE, KSA, Qatar, and Singapore",
        "Developed business strategy and executed growth plans that expanded market share and profitability across multiple markets",
        "Managed cross-functional creative, production, and technical teams for flawless delivery across international events",
        "Built and nurtured long-term client partnerships, driving recurring multi-million dollar contracts and cross-border collaborations"
      ],
    },
    {
      position: "Production Manager (Freelance)",
      company: "Five Currents",
      duration: "Aug 2021 - Oct 2021",
      location: "EXPO 2020 Opening Ceremony",
      description: [
        "Managed scenic and technical production for one of the UAE's largest global showcases",
        "Oversaw the planning, build, and execution of complex staging and infrastructure elements",
        "Led cross-vendor coordination to ensure safe, on-time delivery of all scenic components",
        "Collaborated closely with the Technical Director and international teams to troubleshoot and optimize execution on the ground"
      ],
    },
    {
      position: "Events Planner",
      company: "My Whoosh",
      duration: "Nov 2020 - Apr 2021",
      location: "Abu Dhabi",
      description: [
        "Led planning, budgeting, and execution of regional event activations",
        "Built marketing campaigns and activations across digital and physical touchpoints",
        "Streamlined vendor coordination, logistics, and production delivery",
        "Balanced cost-efficiency with high-impact creative outputs for brand growth"
      ],
    },
    {
      position: "Production Manager",
      company: "Red Event Services",
      duration: "Mar 2019 - Mar 2020",
      location: "Dubai",
      description: [
        "Delivered brand experiences, gala events, and corporate showcases across the UAE",
        "Managed crew hiring, budgeting, and event floor operations",
        "Executed immersive builds under high-pressure timelines and strict safety protocols",
        "Fostered vendor networks and scaled operational capacity across concurrent events"
      ],
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
                  
                  <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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