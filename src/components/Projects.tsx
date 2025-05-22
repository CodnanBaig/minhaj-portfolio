import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Link, Calendar, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "International Music Festival",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Led production for a 3-day music festival featuring international artists across 4 stages with over 25,000 attendees.",
      date: "June 2023",
      location: "Dubai, UAE",
      tags: ["Music Festival", "Live Sound", "Stage Production", "Artist Management"]
    },
    {
      title: "Corporate Leadership Summit",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Managed end-to-end production for a high-profile corporate summit with C-level executives from Fortune 500 companies.",
      date: "November 2022",
      location: "Singapore",
      tags: ["Corporate Event", "Conference", "Executive Production", "Technical Direction"]
    },
    {
      title: "National Day Celebration",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Directed a large-scale national celebration featuring drone shows, synchronized performances, and live broadcast.",
      date: "December 2022",
      location: "Abu Dhabi, UAE",
      tags: ["Cultural Event", "Drone Show", "Live Broadcast", "Stage Design"]
    },
    {
      title: "Tech Product Launch",
      image: "https://images.pexels.com/photos/3419348/pexels-photo-3419348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Delivered a cutting-edge product launch event with immersive tech experiences, dynamic lighting, and seamless presentations.",
      date: "March 2023",
      location: "Bangkok, Thailand",
      tags: ["Product Launch", "Technology", "Experience Design", "Lighting Design"]
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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

  return (
    <section id="projects" className="py-20 relative">
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
            Key Projects
          </motion.h2>

          <motion.div 
            className="mt-12 relative"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{projects[currentIndex].title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-300 mr-4">
                      <Calendar size={16} className="mr-1 text-accent-400" />
                      <span>{projects[currentIndex].date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin size={16} className="mr-1 text-accent-400" />
                      <span>{projects[currentIndex].location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentIndex].tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 bg-primary-900/40 text-primary-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Project Details</span>
                    <Link size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                onClick={prevProject}
                className="p-3 rounded-full bg-primary-900/40 text-white hover:bg-primary-700/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <div className="flex gap-2 items-center">
                {projects.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent-500 scale-125' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextProject}
                className="p-3 rounded-full bg-primary-900/40 text-white hover:bg-primary-700/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;