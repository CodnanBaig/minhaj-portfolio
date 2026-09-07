'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';

const projects = [
  {
    title: 'Wireless Festival Abu Dhabi',
    year: '2023',
    location: 'Abu Dhabi, UAE',
    image: '/optimized/wireless abu dhabi/Wireless-Festival-2023.jpg',
    kicker: 'Festival production / Multi-stage delivery',
    description: "Led production for the Abu Dhabi edition of Wireless Festival, overseeing multi-stage builds, global artist management and audience logistics for the festival's Middle East debut.",
  },
  {
    title: 'Blackpink Middle East Tour',
    year: '2023',
    location: 'Riyadh + Abu Dhabi',
    image: '/optimized/black pink/BlackPink_MiddleEast-001.jpg',
    kicker: 'Touring concert production / Technical delivery',
    description: "Directed production for Blackpink's Middle East tour, executing a complex arena-scale technical rider across major outdoor performances in Saudi Arabia and the UAE.",
  },
  {
    title: 'Maraya Concert Series',
    year: '2023',
    location: 'AlUla, KSA',
    image: '/optimized/maraya concert series/Maraya_John_Legend-002.jpg',
    kicker: 'Live show creation / Cultural programming',
    description: "Produced bespoke international concerts inside Maraya, shaping artist-specific staging and immersive visuals around one of the world's most distinctive cultural venues.",
  },
  {
    title: 'EXPO 2020 Opening Ceremony',
    year: '2021',
    location: 'Dubai, UAE',
    image: '/optimized/expo 2020 opening ceremony/Expo-2020-Opening-Ceremony.jpg',
    kicker: 'Opening ceremony / Scenic + technical production',
    description: "Led scenic and technical delivery for the EXPO 2020 Dubai Opening Ceremony, coordinating complex staging, immersive scenic builds and broadcast-ready systems for a global audience.",
  },
  {
    title: 'Lusail Super Cup Opening Ceremony',
    year: '2022',
    location: 'Doha, Qatar',
    image: '/optimized/lusail super cup/Lusail_Opening-122.jpg',
    kicker: 'Stadium spectacle / Live show direction',
    description: 'Directed stadium-scale production at Lusail Stadium, combining culture, entertainment and live performance at an 80,000-capacity venue ahead of the FIFA World Cup.',
  },
  {
    title: 'Qatar Live Entertainment',
    year: '2021',
    location: 'Doha, Qatar',
    image: '/optimized/qatar live/QatarLive_21_MAJIDA-001.jpg',
    kicker: 'Entertainment programme / Event operations',
    description: 'Delivered a flagship cultural and entertainment programme alongside the FIFA Arab Cup, transforming the Doha Exhibition & Convention Center into a large-scale live entertainment environment.',
  },
];

const archive = [
  ['/optimized/io net/PHNTM IO.net-02.jpg', 'IO.net Production', 'Dubai · 2024'],
  ['/optimized/dubai media/PHNTM DMO-03.jpg', 'Dubai Media Operations', 'Dubai · 2023–24'],
  ['/optimized/cinema medley/IMG_3571.JPG', 'Cinema Medley Productions', 'Dubai · 2023–24'],
  ['/optimized/black pink/BlackPink_MiddleEast-006.jpg', 'Blackpink — Show Night', 'Middle East · 2023'],
  ['/optimized/maraya concert series/Maraya_One_Republic-009.jpg', 'Maraya — OneRepublic', 'AlUla · 2023'],
  ['/optimized/expo 2020 opening ceremony/expo-open.png', 'EXPO 2020', 'Dubai · 2021'],
];

const experience = [
  {
    role: 'Director of Operations',
    company: 'Backstage Scaffolding',
    period: 'June 2026 — Present',
    place: 'Middle East',
    points: [
      'Drive group-wide growth and operational strategy, aligning people, resources, commercial priorities and delivery across the business.',
      'Lead company-wide operations across core services and live events, ensuring projects are commercially sound, efficient and delivered to the highest standards.',
      'Manage key client relationships and opportunities from initial engagement through final delivery, building long-term strategic partnerships.',
      'Oversee complex event structures and infrastructure projects while strengthening systems, teams, processes and partnerships to improve performance and scale the Group.',
    ],
  },
  {
    role: 'Head of Operations',
    company: 'Apex Event Services',
    period: 'June 2025 — May 2026',
    place: 'Middle East',
    points: [
      'Led operations across the Middle East, spanning client servicing, execution and business growth for high-profile event infrastructure projects.',
      'Built partnerships with leading regional and global agencies producing large-scale events across the region.',
      'Developed scalable structural concepts using in-house event infrastructure capabilities.',
      'Bridged creative ambition with certified technical execution for concerts, festivals and government activations.',
    ],
  },
  {
    role: 'General Manager',
    company: 'PHNTM',
    period: 'November 2021 — April 2025',
    place: 'Middle East + Singapore',
    points: [
      'Directed region-wide production operations across the UAE, Saudi Arabia, Qatar and Singapore.',
      'Developed business strategy and growth plans while managing cross-functional creative, production and technical teams.',
      'Built long-term client partnerships and recurring cross-border collaborations.',
    ],
  },
  {
    role: 'Production Manager · Freelance',
    company: 'Five Currents',
    period: 'August 2021 — October 2021',
    place: 'EXPO 2020 Opening Ceremony',
    points: [
      'Managed scenic and technical production, vendor coordination and on-ground execution for one of the UAE’s largest global showcases.',
    ],
  },
  {
    role: 'Events Planner',
    company: 'MyWhoosh',
    period: 'November 2020 — April 2021',
    place: 'Abu Dhabi',
    points: ['Led planning, budgeting, vendor coordination and regional event activations across digital and physical touchpoints.'],
  },
  {
    role: 'Production Manager',
    company: 'Red Event Services',
    period: 'March 2019 — March 2020',
    place: 'Dubai',
    points: ['Delivered brand experiences, gala events and corporate showcases while managing crews, budgets, vendors and event-floor operations.'],
  },
];

function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a href={href} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      {children}
    </motion.a>
  );
}

function ProjectPanel({ project, index }: { project: (typeof projects)[number]; index: number }) {
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
        <div className="eyebrow light">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} · {project.kicker}</div>
        <h3>{project.title}</h3>
        <div className="project-meta"><span>{project.year}</span><span>{project.location}</span></div>
        <p>{project.description}</p>
      </motion.div>
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.14]);
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '16%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.78, 1], [1, 1, 0]);

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 40));
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: smoothProgress }} />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="brand" aria-label="Minhaj Gouda home">MG<span>®</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <MagneticLink href="#about">About</MagneticLink>
          <MagneticLink href="#work">Work</MagneticLink>
          <MagneticLink href="#experience">Experience</MagneticLink>
          <MagneticLink href="#contact">Contact</MagneticLink>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <motion.div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {['about', 'work', 'experience', 'contact'].map((item, i) => (
          <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{item}</a>
        ))}
      </motion.div>

      <section id="top" ref={heroRef} className="hero">
        <motion.div className="hero-media" style={{ scale: heroScale, y: heroY }}>
          <img src="/optimized/black pink/BlackPink_MiddleEast-001.jpg" alt="Large-scale concert production" />
        </motion.div>
        <div className="hero-scrim" />
        <motion.div className="hero-content" style={{ opacity: heroOpacity }}>
          <p className="hero-kicker">Operations · Growth · Live Experiences</p>
          <h1><span>MINHAJ</span><span>GOUDA</span></h1>
          <div className="hero-bottom">
            <p>Building Businesses.<br />Leading Operations.<br />Delivering Experiences.</p>
            <a href="#about" className="scroll-cue"><span>Scroll to enter</span><ArrowDownRight /></a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="about section-pad">
        <div className="section-index">01 — Profile</div>
        <div className="about-grid">
          <div className="about-statement">
            <p>Director of Operations at <strong>Backstage Scaffolding</strong>, shaping growth, teams and delivery across the Middle East.</p>
          </div>
          <div className="about-copy">
            <h2>Business thinking.<br />Production instinct.<br />Operational control.</h2>
            <p>I’m Minhaj Gouda, a live events and operations leader with more than a decade of experience delivering complex projects and building high-performing operations across the Middle East and Asia.</p>
            <p>My career has taken me from production and large-scale event delivery into senior leadership, where my focus today goes beyond individual projects. I work across business growth, operations, client relationships, commercial strategy, teams and delivery—bringing every part of the business together to perform at its best.</p>
            <p>As Director of Operations at Backstage Scaffolding, I lead operations across the company while helping drive growth across the wider Group. From developing key client relationships and identifying new opportunities to strengthening internal systems, teams and project execution, my role is centred on building a stronger, more scalable business.</p>
            <p>Over the years, I’ve worked across concerts, festivals, government events, cultural productions, brand experiences and major event infrastructure projects throughout the UAE, Saudi Arabia, Qatar, Singapore and the wider region.</p>
            <p>I’m at my best where business, people, creativity and execution meet—turning ambitious ideas into commercially sound, operationally strong and memorable live experiences.</p>
          </div>
        </div>
        <div className="metrics" aria-label="Career highlights">
          <div><strong>10+</strong><span>Years across live events & operations</span></div>
          <div><strong>05</strong><span>Markets across MENA & Asia</span></div>
          <div><strong>80K</strong><span>Capacity stadium-scale delivery</span></div>
          <div><strong>360°</strong><span>Business, client & project leadership</span></div>
        </div>
      </section>

      <section id="work" className="work-intro section-pad">
        <div className="section-index">02 — Selected Work</div>
        <div className="work-intro-row">
          <h2>Projects that<br />had to work.</h2>
          <p>High-pressure environments. Global audiences. No room for operational drift. A selection of productions delivered across the region.</p>
        </div>
      </section>

      <div className="projects-stack">
        {projects.map((project, index) => <ProjectPanel key={project.title} project={project} index={index} />)}
      </div>

      <section className="archive section-pad">
        <div className="section-index">03 — Field Notes</div>
        <div className="archive-heading"><h2>More from the floor.</h2><p>Production environments, media operations and moments behind the spectacle.</p></div>
        <div className="archive-grid">
          {archive.map(([image, title, meta], index) => (
            <motion.figure key={title} className={`archive-card card-${index + 1}`} whileHover="hover">
              <div className="archive-image"><motion.img src={image} alt={title} variants={{ hover: { scale: 1.045 } }} transition={{ duration: 0.5 }} loading="lazy" /></div>
              <figcaption><span>{title}</span><small>{meta}</small></figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section-pad">
        <div className="section-index">04 — Experience</div>
        <div className="experience-head">
          <h2>From production floor<br />to business leadership.</h2>
          <p>A career built by moving closer to the whole system: delivery, people, clients, commercial decisions and growth.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article key={`${item.company}-${item.period}`} className="timeline-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
              <div className="timeline-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p></div>
              <div className="timeline-time"><p>{item.period}</p><span>{item.place}</span></div>
              <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-track" aria-hidden="true">
          <span>BUILD THE BUSINESS / LEAD THE OPERATION / DELIVER THE EXPERIENCE / </span>
          <span>BUILD THE BUSINESS / LEAD THE OPERATION / DELIVER THE EXPERIENCE / </span>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="section-index">05 — Contact</div>
        <div className="contact-wrap">
          <p className="contact-kicker">For partnerships, projects and opportunities</p>
          <a className="contact-mail" href="mailto:minhajgouda@gmail.com">Let’s build what’s next.<ArrowUpRight /></a>
          <div className="contact-meta">
            <div><span>Based in</span><p>Dubai, UAE<br />Available across MENA & Asia</p></div>
            <div><span>Email</span><a href="mailto:minhajgouda@gmail.com"><Mail size={16} /> minhajgouda@gmail.com</a></div>
            <div><span>Social</span><p className="social-row"><a href="https://www.linkedin.com/in/minhaj-gouda" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://www.instagram.com/minhajgouda" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a></p></div>
          </div>
        </div>
      </section>

      <footer><span>Minhaj Gouda © 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
