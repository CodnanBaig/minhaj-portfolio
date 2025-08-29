'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const projects = [
    {
      title: "Wireless Festival Abu Dhabi",
      image: "/optimized/wireless abu dhabi/Wireless-Festival-2023.jpg",
      gallery: [
        "/optimized/wireless abu dhabi/Wireless-Festival-2023.jpg",
        "/optimized/wireless abu dhabi/Wireless-Festival-Middle-East-2023-6_13132132.jpg",
        "/optimized/wireless abu dhabi/website-banner-size-1050450-new-1-14-1280x720.png",
        "/optimized/wireless abu dhabi/GettyImages-1474070432_SMALL.jpg"
      ],
      description: "Led production for the Abu Dhabi edition of Wireless Festival, one of the world's leading urban music festivals. Oversaw multi-stage builds, global artist management, and audience logistics to successfully establish the festival's Middle East debut.",
      date: "2023",
      location: "Abu Dhabi, UAE",
      tags: ["MUSIC FESTIVAL PRODUCTION", "MULTI-STAGE ENGINEERING", "TECHNICAL PRODUCTION", "INTERNATIONAL ARTIST LOGISTICS", "AUDIENCE OPERATIONS", "FESTIVAL SITE MANAGEMENT", "GLOBAL BRAND INTEGRATION", "PHNTM"]
    },
    {
      title: "Blackpink Middle East Tour",
      image: "/optimized/black pink/BlackPink_MiddleEast-001.jpg",
      gallery: [
        "/optimized/black pink/BlackPink_MiddleEast-001.jpg",
        "/optimized/black pink/BlackPink_MiddleEast-003.jpg",
        "/optimized/black pink/BlackPink_MiddleEast-005.jpg",
        "/optimized/black pink/BlackPink_MiddleEast-006.jpg",
        "/optimized/black pink/BlackPink_MiddleEast-010.jpg",
        "/optimized/black pink/2.jpeg",
        "/optimized/black pink/3.png"
      ],
      description: "Directed production for Blackpink's Middle East tour, staging arena-scale performances in Riyadh and Abu Dhabi. Executed a complex technical rider including LED screens, lasers, FX, and pyrotechnics on the Star Live Titan, the world's largest outdoor staging system. Delivered a K-pop spectacle that ignited the desert and thrilled tens of thousands of fans.",
      date: "2023",
      location: "Riyadh, KSA & Abu Dhabi, UAE",
      tags: ["TECHNICAL PRODUCTION", "ARENA SHOW DIRECTION", "EVENT MANAGEMENT & LOGISTICS", "TOURING CONCERT PRODUCTION", "LED, LASER & FX INTEGRATION", "STADIUM-SCALE INFRASTRUCTURE", "FAN EXPERIENCE DELIVERY", "PHNTM"]
    },
    {
      title: "Maraya Concert Series",
      image: "/optimized/maraya concert series/Maraya_John_Legend-002.jpg",
      gallery: [
        "/optimized/maraya concert series/Maraya_John_Legend-002.jpg",
        "/optimized/maraya concert series/Maraya_John_Legend-005.jpg",
        "/optimized/maraya concert series/Maraya_John_Legend-007.jpg",
        "/optimized/maraya concert series/Maraya_John_Legend-013.jpg",
        "/optimized/maraya concert series/Maraya_One_Republic-001.jpg",
        "/optimized/maraya concert series/Maraya_One_Republic-009.jpg",
        "/optimized/maraya concert series/Maraya_One_Republic-012.jpg",
        "/optimized/maraya concert series/Maraya_One_Republic-028.jpg"
      ],
      description: "Produced the Maraya Concert Series inside the world's largest mirrored building in Al Ula. Developed unique, artist-specific staging that blended immersive visuals with the cultural spirit of the desert. Delivered bespoke international concerts that elevated Al Ula's identity as a global cultural hub.",
      date: "2023",
      location: "Al Ula, KSA",
      tags: ["CONCEPT DEVELOPMENT", "EXPERIENTIAL DESIGN", "LIVE SHOW CREATION", "MOTION GRAPHICS & CONTENT", "CULTURAL VENUE PROGRAMMING", "TECHNICAL PRODUCTION", "INTERNATIONAL ARTIST MANAGEMENT", "PHNTM"]
    },
    {
      title: "EXPO 2020 Opening Ceremony",
      image: "/optimized/expo 2020 opening ceremony/Expo-2020-Opening-Ceremony.jpg",
      gallery: [
        "/optimized/expo 2020 opening ceremony/Expo-2020-Opening-Ceremony.jpg",
        "/optimized/expo 2020 opening ceremony/3CABA3DC-6DD0-4862-96F6-DBA642CC0958.jpeg",
        "/optimized/expo 2020 opening ceremony/Women-s_Pavilion_Inauguration_at_Al_Wasl_m6765.jpg",
        "/optimized/expo 2020 opening ceremony/9fd1c463-22e4-4bbe-8313-b6d6923f194f.jpg",
        "/optimized/expo 2020 opening ceremony/expo-open.png"
      ],
      description: "Led scenic and technical delivery for the EXPO 2020 Dubai Opening Ceremony, one of the largest cultural showcases on the global stage. Managed multi-layered staging, immersive scenic builds, and broadcast-ready systems that brought Dubai's vision to life in front of a worldwide audience.",
      date: "2021",
      location: "Dubai, UAE",
      tags: ["OPENING CEREMONY DIRECTION", "WORLD EXPO PRODUCTION", "TECHNICAL STAGING & SYSTEMS", "MEGA-EVENT INFRASTRUCTURE", "BROADCAST INTEGRATION", "Five Currents"]
    },
    {
      title: "Lusail Super Cup Opening Ceremony",
      image: "/optimized/lusail super cup/Lusail_Opening-122.jpg",
      gallery: [
        "/optimized/lusail super cup/Lusail_Opening-122.jpg",
        "/optimized/lusail super cup/Lusail_Opening-128.jpg",
        "/optimized/lusail super cup/Lusail_Opening-139.jpg",
        "/optimized/lusail super cup/Lusail_Opening-152.jpg",
        "/optimized/lusail super cup/Lusail_Opening-159.jpg",
        "/optimized/lusail super cup/Lusail_Opening-170.jpg",
        "/optimized/lusail super cup/Lusail_Opening-171.jpg",
        "/optimized/lusail super cup/Lusail_Opening-178.jpg",
        "/optimized/lusail super cup/Lusail_Opening-231.jpg"
      ],
      description: "Directed the stadium-scale production for the Lusail Super Cup, uniting culture and sport at Qatar's 80,000-capacity national stadium. Delivered a full-scale entertainment spectacle that framed the championship match with a headline concert, establishing Lusail as a global mega-event destination ahead of the FIFA World Cup.",
      date: "2022",
      location: "Doha, Qatar",
      tags: ["CULTURAL STRATEGY", "STADIUM SPECTACLE", "EXPERIENTIAL DESIGN", "LIVE SHOW DIRECTION", "TECHNICAL PRODUCTION", "EVENT MANAGEMENT & LOGISTICS", "SPORTS & ENTERTAINMENT INTEGRATION", "PHNTM"]
    },
    {
      title: "Qatar Live Entertainment",
      image: "/optimized/qatar live/QatarLive_21_MAJIDA-001.jpg",
      gallery: [
        "/optimized/qatar live/QatarLive_21_MAJIDA-001.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-066.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-074.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-079.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-140.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-172.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-177.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-188.jpg",
        "/optimized/qatar live/QatarLive_21_MAJIDA-189.jpg"
      ],
      description: "Partnered with FIFA and Qatar Tourism to deliver Qatar Live 2021, a flagship cultural and entertainment program alongside the FIFA Arab Cup. Reimagined the Doha Exhibition & Convention Center with cutting-edge staging, immersive environments, and world-class performances. Elevated live entertainment benchmarks in the region by blending international spectacle with Qatari cultural identity.",
      date: "2021",
      location: "Doha, Qatar",
      tags: ["LIVE SHOW CREATION", "EXPERIENTIAL DESIGN", "TECHNICAL PRODUCTION", "CULTURAL PROGRAMMING", "MOTION GRAPHICS & CONTENT", "AUDIENCE EXPERIENCE DESIGN", "EVENT MANAGEMENT & OPERATIONS", "PHNTM"]
    },
    {
      title: "IO.net Production",
      image: "/optimized/io net/PHNTM IO.net-02.jpg",
      gallery: [
        "/optimized/io net/PHNTM IO.net-02.jpg",
        "/optimized/io net/PHNTM IO.net-04.jpg",
        "/optimized/io net/PHNTM IO.net-06.jpg",
        "/optimized/io net/PHNTM IO.net-07.jpg",
        "/optimized/io net/PHOTO-2024-04-18-22-15-27.jpg",
        "/optimized/io net/PHOTO-2024-04-18-22-15-27 2.jpg",
        "/optimized/io net/PHOTO-2024-05-25-05-33-47 (1).jpg",
        "/optimized/io net/PHOTO-2024-05-25-05-33-49.jpg"
      ],
      description: "Led production operations for IO.net, managing technical infrastructure and creative execution for innovative technology showcases.",
      date: "2024",
      location: "Dubai, UAE",
      tags: ["Technology", "Innovation", "Technical Production", "PHNTM"]
    },
    {
      title: "Dubai Media Operations",
      image: "/optimized/dubai media/PHNTM DMO-03.jpg",
      gallery: [
        "/optimized/dubai media/PHNTM DMO-03.jpg",
        "/optimized/dubai media/PHNTM DMO-05.jpg",
        "/optimized/dubai media/PHNTM DMO-06.jpg",
        "/optimized/dubai media/PHNTM DMO-07.jpg",
        "/optimized/dubai media/PHNTM DMO-13.jpg",
        "/optimized/dubai media/PHNTM DMO-14.jpg",
        "/optimized/dubai media/PHNTM DMO-15.jpg",
        "/optimized/dubai media/PHNTM DMO-17.jpg"
      ],
      description: "Directed media operations and production services in Dubai, delivering high-quality content and technical solutions for various media projects.",
      date: "2023-2024",
      location: "Dubai, UAE",
      tags: ["Media Production", "Technical Services", "Content Creation", "PHNTM"]
    },
    {
      title: "Cinema Medley Productions",
      image: "/optimized/cinema medley/IMG_3571.JPG",
      gallery: [
        "/optimized/cinema medley/IMG_3571.JPG",
        "/optimized/cinema medley/IMG_3574.JPG",
        "/optimized/cinema medley/IMG_3577.JPG",
        "/optimized/cinema medley/IMG_3589.JPG",
        "/optimized/cinema medley/IMG_7113.JPG",
        "/optimized/cinema medley/IMG_7139.JPG",
        "/optimized/cinema medley/IMG_7151.JPG"
      ],
      description: "Managed production for cinema and entertainment projects, overseeing technical execution and creative direction for film-related events.",
      date: "2023-2024",
      location: "Dubai, UAE",
      tags: ["Cinema", "Entertainment", "Film Production", "PHNTM"]
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setCurrentGalleryIndex(0);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
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
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
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
                  
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => openGallery(projects[currentIndex].gallery)}
                      className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors bg-primary-900/40 px-4 py-2 rounded-lg"
                      whileHover={{ x: 5 }}
                    >
                      <ImageIcon size={16} />
                      <span>View Gallery</span>
                    </motion.button>
                  </div>
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

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="relative">
                <Image
                  src={galleryImages[currentGalleryIndex]}
                  alt={`Gallery image ${currentGalleryIndex + 1}`}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <motion.button
                    onClick={prevGalleryImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  
                  <motion.button
                    onClick={nextGalleryImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </div>
              
              <div className="text-center mt-4 text-white">
                <span className="text-sm">
                  {currentGalleryIndex + 1} of {galleryImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;