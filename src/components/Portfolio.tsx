'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';

const projects = [
  {
    title: 'Wireless Festival Abu Dhabi', year: '2023', location: 'Abu Dhabi, UAE',
    image: '/optimized/wireless abu dhabi/Wireless-Festival-2023.jpg',
    gallery: [
      '/optimized/wireless abu dhabi/Wireless-Festival-2023.jpg',
      '/optimized/wireless abu dhabi/Wireless-Festival-Middle-East-2023-6_13132132.jpg',
      '/optimized/wireless abu dhabi/website-banner-size-1050450-new-1-14-1280x720.png',
      '/optimized/wireless abu dhabi/GettyImages-1474070432_SMALL.jpg',
    ],
    kicker: 'Festival production / Multi-stage delivery',
    description: "Led production for the Abu Dhabi edition of Wireless Festival, one of the world's leading urban music festivals. Oversaw multi-stage builds, global artist management, and audience logistics to successfully establish the festival's Middle East debut.",
    tags: ['MUSIC FESTIVAL PRODUCTION','MULTI-STAGE ENGINEERING','TECHNICAL PRODUCTION','INTERNATIONAL ARTIST LOGISTICS','AUDIENCE OPERATIONS','FESTIVAL SITE MANAGEMENT','GLOBAL BRAND INTEGRATION','PHNTM'],
  },
  {
    title: 'Blackpink Middle East Tour', year: '2023', location: 'Riyadh, KSA & Abu Dhabi, UAE',
    image: '/optimized/black pink/BlackPink_MiddleEast-001.jpg',
    gallery: [
      '/optimized/black pink/BlackPink_MiddleEast-001.jpg','/optimized/black pink/BlackPink_MiddleEast-003.jpg','/optimized/black pink/BlackPink_MiddleEast-005.jpg','/optimized/black pink/BlackPink_MiddleEast-006.jpg','/optimized/black pink/BlackPink_MiddleEast-010.jpg','/optimized/black pink/2.jpeg','/optimized/black pink/3.png',
    ],
    kicker: 'Touring concert production / Technical delivery',
    description: "Directed production for Blackpink's Middle East tour, staging arena-scale performances in Riyadh and Abu Dhabi. Executed a complex technical rider including LED screens, lasers, FX, and pyrotechnics on the Star Live Titan, the world's largest outdoor staging system. Delivered a K-pop spectacle that ignited the desert and thrilled tens of thousands of fans.",
    tags: ['TECHNICAL PRODUCTION','ARENA SHOW DIRECTION','EVENT MANAGEMENT & LOGISTICS','TOURING CONCERT PRODUCTION','LED, LASER & FX INTEGRATION','STADIUM-SCALE INFRASTRUCTURE','FAN EXPERIENCE DELIVERY','PHNTM'],
  },
  {
    title: 'Maraya Concert Series', year: '2023', location: 'Al Ula, KSA',
    image: '/optimized/maraya concert series/Maraya_John_Legend-002.jpg',
    gallery: [
      '/optimized/maraya concert series/Maraya_John_Legend-002.jpg','/optimized/maraya concert series/Maraya_John_Legend-005.jpg','/optimized/maraya concert series/Maraya_John_Legend-007.jpg','/optimized/maraya concert series/Maraya_John_Legend-013.jpg','/optimized/maraya concert series/Maraya_One_Republic-001.jpg','/optimized/maraya concert series/Maraya_One_Republic-009.jpg','/optimized/maraya concert series/Maraya_One_Republic-012.jpg','/optimized/maraya concert series/Maraya_One_Republic-028.jpg',
    ],
    kicker: 'Live show creation / Cultural programming',
    description: "Produced the Maraya Concert Series inside the world's largest mirrored building in Al Ula. Developed unique, artist-specific staging that blended immersive visuals with the cultural spirit of the desert. Delivered bespoke international concerts that elevated Al Ula's identity as a global cultural hub.",
    tags: ['CONCEPT DEVELOPMENT','EXPERIENTIAL DESIGN','LIVE SHOW CREATION','MOTION GRAPHICS & CONTENT','CULTURAL VENUE PROGRAMMING','TECHNICAL PRODUCTION','INTERNATIONAL ARTIST MANAGEMENT','PHNTM'],
  },
  {
    title: 'EXPO 2020 Opening Ceremony', year: '2021', location: 'Dubai, UAE',
    image: '/optimized/expo 2020 opening ceremony/Expo-2020-Opening-Ceremony.jpg',
    gallery: [
      '/optimized/expo 2020 opening ceremony/Expo-2020-Opening-Ceremony.jpg','/optimized/expo 2020 opening ceremony/3CABA3DC-6DD0-4862-96F6-DBA642CC0958.jpeg','/optimized/expo 2020 opening ceremony/Women-s_Pavilion_Inauguration_at_Al_Wasl_m6765.jpg','/optimized/expo 2020 opening ceremony/9fd1c463-22e4-4bbe-8313-b6d6923f194f.jpg','/optimized/expo 2020 opening ceremony/expo-open.png',
    ],
    kicker: 'Opening ceremony / Scenic + technical production',
    description: "Led scenic and technical delivery for the EXPO 2020 Dubai Opening Ceremony, one of the largest cultural showcases on the global stage. Managed multi-layered staging, immersive scenic builds, and broadcast-ready systems that brought Dubai's vision to life in front of a worldwide audience.",
    tags: ['OPENING CEREMONY DIRECTION','WORLD EXPO PRODUCTION','TECHNICAL STAGING & SYSTEMS','MEGA-EVENT INFRASTRUCTURE','BROADCAST INTEGRATION','FIVE CURRENTS'],
  },
  {
    title: 'Lusail Super Cup Opening Ceremony', year: '2022', location: 'Doha, Qatar',
    image: '/optimized/lusail super cup/Lusail_Opening-122.jpg',
    gallery: [
      '/optimized/lusail super cup/Lusail_Opening-122.jpg','/optimized/lusail super cup/Lusail_Opening-128.jpg','/optimized/lusail super cup/Lusail_Opening-139.jpg','/optimized/lusail super cup/Lusail_Opening-152.jpg','/optimized/lusail super cup/Lusail_Opening-159.jpg','/optimized/lusail super cup/Lusail_Opening-170.jpg','/optimized/lusail super cup/Lusail_Opening-171.jpg','/optimized/lusail super cup/Lusail_Opening-178.jpg','/optimized/lusail super cup/Lusail_Opening-231.jpg',
    ],
    kicker: 'Stadium spectacle / Live show direction',
    description: "Directed the stadium-scale production for the Lusail Super Cup, uniting culture and sport at Qatar's 80,000-capacity national stadium. Delivered a full-scale entertainment spectacle that framed the championship match with a headline concert, establishing Lusail as a global mega-event destination ahead of the FIFA World Cup.",
    tags: ['CULTURAL STRATEGY','STADIUM SPECTACLE','EXPERIENTIAL DESIGN','LIVE SHOW DIRECTION','TECHNICAL PRODUCTION','EVENT MANAGEMENT & LOGISTICS','SPORTS & ENTERTAINMENT INTEGRATION','PHNTM'],
  },
  {
    title: 'Qatar Live Entertainment', year: '2021', location: 'Doha, Qatar',
    image: '/optimized/qatar live/QatarLive_21_MAJIDA-001.jpg',
    gallery: [
      '/optimized/qatar live/QatarLive_21_MAJIDA-001.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-066.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-074.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-079.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-140.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-172.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-177.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-188.jpg','/optimized/qatar live/QatarLive_21_MAJIDA-189.jpg',
    ],
    kicker: 'Entertainment programme / Event operations',
    description: 'Partnered with FIFA and Qatar Tourism to deliver Qatar Live 2021, a flagship cultural and entertainment program alongside the FIFA Arab Cup. Reimagined the Doha Exhibition & Convention Center with cutting-edge staging, immersive environments, and world-class performances. Elevated live entertainment benchmarks in the region by blending international spectacle with Qatari cultural identity.',
    tags: ['LIVE SHOW CREATION','EXPERIENTIAL DESIGN','TECHNICAL PRODUCTION','CULTURAL PROGRAMMING','MOTION GRAPHICS & CONTENT','AUDIENCE EXPERIENCE DESIGN','EVENT MANAGEMENT & OPERATIONS','PHNTM'],
  },
  {
    title: 'IO.net Production', year: '2024', location: 'Dubai, UAE',
    image: '/optimized/io net/PHNTM IO.net-02.jpg',
    gallery: [
      '/optimized/io net/PHNTM IO.net-02.jpg','/optimized/io net/PHNTM IO.net-04.jpg','/optimized/io net/PHNTM IO.net-06.jpg','/optimized/io net/PHNTM IO.net-07.jpg','/optimized/io net/PHOTO-2024-04-18-22-15-27.jpg','/optimized/io net/PHOTO-2024-04-18-22-15-27 2.jpg','/optimized/io net/PHOTO-2024-05-25-05-33-47 (1).jpg','/optimized/io net/PHOTO-2024-05-25-05-33-49.jpg',
    ],
    kicker: 'Technology showcase / Production operations',
    description: 'Led production operations for IO.net, managing technical infrastructure and creative execution for innovative technology showcases.',
    tags: ['TECHNOLOGY','INNOVATION','TECHNICAL PRODUCTION','PHNTM'],
  },
  {
    title: 'Dubai Media Operations', year: '2023–2024', location: 'Dubai, UAE',
    image: '/optimized/dubai media/PHNTM DMO-03.jpg',
    gallery: [
      '/optimized/dubai media/PHNTM DMO-03.jpg','/optimized/dubai media/PHNTM DMO-05.jpg','/optimized/dubai media/PHNTM DMO-06.jpg','/optimized/dubai media/PHNTM DMO-07.jpg','/optimized/dubai media/PHNTM DMO-13.jpg','/optimized/dubai media/PHNTM DMO-14.jpg','/optimized/dubai media/PHNTM DMO-15.jpg','/optimized/dubai media/PHNTM DMO-17.jpg',
    ],
    kicker: 'Media production / Technical services',
    description: 'Directed media operations and production services in Dubai, delivering high-quality content and technical solutions for various media projects.',
    tags: ['MEDIA PRODUCTION','TECHNICAL SERVICES','CONTENT CREATION','PHNTM'],
  },
  {
    title: 'Cinema Medley Productions', year: '2023–2024', location: 'Dubai, UAE',
    image: '/optimized/cinema medley/IMG_3571.JPG',
    gallery: [
      '/optimized/cinema medley/IMG_3571.JPG','/optimized/cinema medley/IMG_3574.JPG','/optimized/cinema medley/IMG_3577.JPG','/optimized/cinema medley/IMG_3589.JPG','/optimized/cinema medley/IMG_7113.JPG','/optimized/cinema medley/IMG_7139.JPG','/optimized/cinema medley/IMG_7151.JPG',
    ],
    kicker: 'Cinema / Entertainment production',
    description: 'Managed production for cinema and entertainment projects, overseeing technical execution and creative direction for film-related events.',
    tags: ['CINEMA','ENTERTAINMENT','FILM PRODUCTION','PHNTM'],
  },
] as const;

type Project = (typeof projects)[number];

const capabilities = [
  ['Leadership & Team Management','Building and leading diverse teams to deliver experiences at scale across MENA & Asia.'],
  ['Large-Scale Event Production','Managing high-stakes, multi-million dollar builds from brief to final applause.'],
  ['Business Development & Strategy','Driving growth and market expansion across multiple international markets.'],
  ['Budgeting & Cost Control','Optimizing resources and managing budgets for complex, multi-million dollar productions.'],
  ['Vendor & Stakeholder Management','Building and maintaining strong relationships with partners and stakeholders across the region.'],
  ['Creative Execution & Risk Management','Balancing innovative creative vision with robust risk mitigation strategies.'],
  ['Cross-border Operations','Executing seamless productions across UAE, KSA, Qatar, and Singapore.'],
  ['Event Infrastructure Design','Planning and delivering heavy-duty grandstands, platforms, and structural systems for high-impact, high-traffic events.'],
  ['Concept & Build Strategy','Developing sharp, executable build concepts that align creative ambition with site realities and structural logic.'],
] as const;

const businessForward = [
  ['Growth', 'Turning opportunity into sustainable business momentum.'],
  ['Operations', 'Building the structure, teams and systems that make performance repeatable.'],
  ['Clients', 'Creating trusted relationships that grow into long-term partnerships.'],
  ['Delivery', 'Turning ambitious ideas into clear, well-executed outcomes.'],
] as const;

const experience = [
  {
    role: 'Director of Operations', company: 'Backstage Scaffolding', period: 'June 2026 — Present', place: 'Middle East',
    points: [
      'Drive group-wide growth and operational strategy, aligning people, resources, commercial priorities and delivery across the business.',
      'Lead company-wide operations across core services and live events, ensuring projects are commercially sound, efficient and delivered to the highest standards.',
      'Manage key client relationships and opportunities from initial engagement through final delivery, building long-term strategic partnerships.',
      'Oversee complex event structures and infrastructure projects while strengthening systems, teams, processes and partnerships to improve performance and scale the Group.',
    ],
  },
  {
    role: 'Head of Operations', company: 'Apex Event Services', period: 'June 2025 — May 2026', place: 'Middle East',
    points: [
      'Led operations across the Middle East, spanning client servicing, execution and business growth for high-profile event infrastructure projects.',
      'Built partnerships with leading regional and global agencies producing large-scale events across the region.',
      'Developed scalable structural concepts using in-house event infrastructure capabilities.',
      'Bridged creative ambition with certified technical execution for concerts, festivals and government activations.',
    ],
  },
  {
    role: 'General Manager', company: 'PHNTM', period: 'November 2021 — April 2025', place: 'Middle East + Singapore',
    points: [
      'Directed region-wide production operations across the UAE, Saudi Arabia, Qatar and Singapore.',
      'Developed business strategy and growth plans while managing cross-functional creative, production and technical teams.',
      'Built long-term client partnerships and recurring cross-border collaborations.',
    ],
  },
  {
    role: 'Production Manager · Freelance', company: 'Five Currents', period: 'August 2021 — October 2021', place: 'EXPO 2020 Opening Ceremony',
    points: ['Managed scenic and technical production, vendor coordination and on-ground execution for one of the UAE’s largest global showcases.'],
  },
  {
    role: 'Events Planner', company: 'MyWhoosh', period: 'November 2020 — April 2021', place: 'Abu Dhabi',
    points: ['Led planning, budgeting, vendor coordination and regional event activations across digital and physical touchpoints.'],
  },
  {
    role: 'Production Manager', company: 'Red Event Services', period: 'March 2019 — March 2020', place: 'Dubai',
    points: ['Delivered brand experiences, gala events and corporate showcases while managing crews, budgets, vendors and event-floor operations.'],
  },
] as const;

function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <motion.a href={href} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>{children}</motion.a>;
}

function ProjectPanel({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const copyY = useTransform(scrollYProgress, [0.15, 0.55], [70, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="project-panel">
      <motion.div className="project-image-wrap" style={{ scale: imageScale, y: imageY }}>
        <img src={project.image} alt={project.title} className="project-image" loading={index < 2 ? 'eager' : 'lazy'} />
      </motion.div>
      <div className="project-vignette" />
      <motion.div className="project-copy" style={{ y: copyY, opacity: copyOpacity }}>
        <div className="eyebrow light">{String(index + 1).padStart(2, '0')} / 06 · {project.kicker}</div>
        <h3>{project.title}</h3>
        <div className="project-meta"><span>{project.year}</span><span>{project.location}</span></div>
        <p>{project.description}</p>
        <button className="project-open" onClick={() => onOpen(project)}>View project archive <ArrowUpRight size={16} /></button>
      </motion.div>
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.14]);
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '16%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.78, 1], [1, 1, 0]);

  const openProject = (project: Project) => { setSelectedProject(project); setGalleryIndex(0); };
  const closeProject = () => setSelectedProject(null);
  const nextImage = () => selectedProject && setGalleryIndex((i) => (i + 1) % selectedProject.gallery.length);
  const prevImage = () => selectedProject && setGalleryIndex((i) => (i - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 40));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); closeProject(); }
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: smoothProgress }} />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="brand" aria-label="Minhaj Gouda home">MG<span>®</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <MagneticLink href="#about">About</MagneticLink><MagneticLink href="#work">Work</MagneticLink><MagneticLink href="#capabilities">Capabilities</MagneticLink><MagneticLink href="#experience">Experience</MagneticLink><MagneticLink href="#contact">Contact</MagneticLink>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <motion.div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {['about','work','capabilities','experience','contact'].map((item, i) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{item}</a>)}
      </motion.div>

      <section id="top" ref={heroRef} className="hero">
        <motion.div className="hero-media" style={{ scale: heroScale, y: heroY }}><img src="/optimized/black pink/BlackPink_MiddleEast-001.jpg" alt="Large-scale concert production" /></motion.div>
        <div className="hero-scrim" />
        <motion.div className="hero-content" style={{ opacity: heroOpacity }}>
          <p className="hero-kicker">Operations · Growth · Live Experiences</p>
          <h1><span>MINHAJ</span><span>GOUDA</span></h1>
          <div className="hero-bottom"><p>Building Businesses.<br />Leading Operations.<br />Delivering Experiences.</p><a href="#about" className="scroll-cue"><span>Scroll to enter</span><ArrowDownRight /></a></div>
        </motion.div>
      </section>

      <section id="about" className="about section-pad">
        <div className="section-index">01 — Profile</div>
        <div className="about-grid">
          <div className="about-statement"><p>Director of Operations at <strong>Backstage Scaffolding</strong>, shaping growth, teams and delivery across the Middle East.</p></div>
          <div className="about-copy">
            <h2>Business thinking.<br />Production instinct.<br />Operational control.</h2>
            <p>I’m Minhaj Gouda, a live events and operations leader with more than a decade of experience delivering complex projects and building high-performing operations across the Middle East and Asia.</p>
            <p>My career has taken me from production and large-scale event delivery into senior leadership, where my focus today goes beyond individual projects. I work across business growth, operations, client relationships, commercial strategy, teams and delivery—bringing every part of the business together to perform at its best.</p>
            <p>As Director of Operations at Backstage Scaffolding, I lead operations across the company while helping drive growth across the wider Group. From developing key client relationships and identifying new opportunities to strengthening internal systems, teams and project execution, my role is centred on building a stronger, more scalable business.</p>
            <p>Over the years, I’ve worked across concerts, festivals, government events, cultural productions, brand experiences and major event infrastructure projects throughout the UAE, Saudi Arabia, Qatar, Singapore and the wider region.</p>
            <p>I’m at my best where business, people, creativity and execution meet—turning ambitious ideas into commercially sound, operationally strong and memorable live experiences.</p>
          </div>
        </div>
        <div
          aria-label="How I move business forward"
          style={{ marginTop: 120, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}
        >
          <p style={{ margin: 0, padding: '18px 0', color: 'var(--acid)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.18em' }}>
            How I move business forward
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', borderTop: '1px solid var(--line)' }}>
            {businessForward.map(([name, description], index) => (
              <article key={name} style={{ padding: '30px 28px 34px', borderRight: '1px solid var(--line)', minHeight: 180 }}>
                <span style={{ display: 'block', marginBottom: 34, color: 'var(--acid)', fontSize: 10, letterSpacing: '.12em' }}>{String(index + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: 0, fontSize: 'clamp(24px, 2.2vw, 36px)', lineHeight: 1, letterSpacing: '-.045em', textTransform: 'uppercase' }}>{name}</h3>
                <p style={{ margin: '14px 0 0', maxWidth: 300, color: '#c2c0b7', fontSize: 14, lineHeight: 1.55 }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-intro section-pad">
        <div className="section-index">02 — Selected Work</div>
        <div className="work-intro-row"><h2>Projects that<br />had to work.</h2><p>High-pressure environments. Global audiences. No room for operational drift. A selection of productions delivered across the region.</p></div>
      </section>

      <div className="projects-stack">{projects.slice(0, 6).map((project, index) => <ProjectPanel key={project.title} project={project} index={index} onOpen={openProject} />)}</div>

      <section className="archive section-pad">
        <div className="section-index">03 — Project Archive</div>
        <div className="archive-heading"><h2>More from the floor.</h2><p>The remaining project groups from the original portfolio, now rebuilt as expandable visual archives.</p></div>
        <div className="archive-grid">
          {projects.slice(6).map((project, index) => (
            <motion.figure key={project.title} className={`archive-card card-${index + 1}`} whileHover="hover" onClick={() => openProject(project)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && openProject(project)}>
              <div className="archive-image"><motion.img src={project.image} alt={project.title} variants={{ hover: { scale: 1.045 } }} transition={{ duration: 0.5 }} loading="lazy" /></div>
              <figcaption><span>{project.title}</span><small>{project.location} · {project.year}</small></figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="capabilities" className="capabilities section-pad">
        <div className="section-index">04 — Capabilities</div>
        <div className="capabilities-head"><h2>Built to lead<br />the whole system.</h2><p>Core strengths carried over from the original portfolio, presented without artificial percentage scores.</p></div>
        <div className="capability-list">
          {capabilities.map(([name, description], index) => <motion.article key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }}><span>{String(index + 1).padStart(2,'0')}</span><h3>{name}</h3><p>{description}</p></motion.article>)}
        </div>
      </section>

      <section id="experience" className="experience section-pad">
        <div className="section-index">05 — Experience</div>
        <div className="experience-head"><h2>From production floor<br />to business leadership.</h2><p>A career built by moving closer to the whole system: delivery, people, clients, commercial decisions and growth.</p></div>
        <div className="timeline">
          {experience.map((item, index) => <motion.article key={`${item.company}-${item.period}`} className="timeline-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}><div className="timeline-number">{String(index + 1).padStart(2,'0')}</div><div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p></div><div className="timeline-time"><p>{item.period}</p><span>{item.place}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></motion.article>)}
        </div>
      </section>

      <section className="manifesto"><div className="manifesto-track" aria-hidden="true"><span>BUILD THE BUSINESS / LEAD THE OPERATION / DELIVER THE EXPERIENCE / </span><span>BUILD THE BUSINESS / LEAD THE OPERATION / DELIVER THE EXPERIENCE / </span></div></section>

      <section id="contact" className="contact section-pad">
        <div className="section-index">06 — Contact</div>
        <div className="contact-wrap"><p className="contact-kicker">For partnerships, projects and opportunities</p><a className="contact-mail" href="mailto:minhajgouda@gmail.com">Let’s build what’s next.<ArrowUpRight /></a><div className="contact-meta"><div><span>Based in</span><p>Dubai, UAE<br />Available across MENA & Asia</p></div><div><span>Email</span><a href="mailto:minhajgouda@gmail.com"><Mail size={16} /> minhajgouda@gmail.com</a></div><div><span>Social</span><p className="social-row"><a href="https://www.linkedin.com/in/minhaj-gouda" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://www.instagram.com/minhajgouda" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a></p></div></div></div>
      </section>

      <footer><span>Minhaj Gouda © 2026</span><a href="#top">Back to top ↑</a></footer>

      {selectedProject && (
        <motion.div className="gallery-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} gallery`}>
          <div className="gallery-top"><div><span>{selectedProject.year} · {selectedProject.location}</span><h2>{selectedProject.title}</h2></div><button onClick={closeProject} aria-label="Close gallery"><X /></button></div>
          <div className="gallery-stage"><img src={selectedProject.gallery[galleryIndex]} alt={`${selectedProject.title} ${galleryIndex + 1}`} /><button className="gallery-prev" onClick={prevImage} aria-label="Previous image"><ChevronLeft /></button><button className="gallery-next" onClick={nextImage} aria-label="Next image"><ChevronRight /></button><div className="gallery-count">{String(galleryIndex + 1).padStart(2,'0')} / {String(selectedProject.gallery.length).padStart(2,'0')}</div></div>
          <div className="gallery-info"><p>{selectedProject.description}</p><div className="tag-row">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </motion.div>
      )}
    </main>
  );
}
