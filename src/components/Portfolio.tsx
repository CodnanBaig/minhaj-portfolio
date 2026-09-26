'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { businessForward, capabilities, experience, projects, type Project } from './portfolio-data';

const navigation = [
  ['Profile', '#about'],
  ['Work', '#work'],
  ['Capabilities', '#capabilities'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
] as const;

const projectLights = ['#75dfff', '#87c8ff', '#9bcaff', '#f8b566', '#7bdce9', '#68b9e8'] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function ProjectChapter({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.16, 1, 1.12]);
  const curtain = useTransform(scrollYProgress, [0.04, 0.32, 0.75, 0.98], [1, 0, 0, 1]);
  const copyY = useTransform(scrollYProgress, [0.14, 0.35, 0.78, 1], [70, 0, 0, -50]);
  const copyOpacity = useTransform(scrollYProgress, [0.12, 0.32, 0.8, 0.98], [0.3, 1, 1, 0.25]);

  return (
    <section
      ref={ref}
      className="project-chapter"
      aria-label={project.title}
      style={{ '--project-light': projectLights[index] } as CSSProperties}
    >
      <div className="project-stage">
        <div className="project-image-frame">
          <motion.div
            className="project-image-motion"
            style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="project-image"
            />
          </motion.div>
          <motion.div
            className="project-curtain"
            style={reduceMotion ? { scaleX: 0 } : { scaleX: curtain }}
            aria-hidden="true"
          />
          <div className="project-image-shade" aria-hidden="true" />
        </div>
        <motion.div
          className="project-copy"
          style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <div className="project-overline">
            <span>{String(index + 1).padStart(2, '0')} / 06</span>
            <span>{project.kicker}</span>
          </div>
          <h3>{project.title}</h3>
          <div className="project-meta">
            <span>{project.year}</span>
            <span>{project.location}</span>
          </div>
          <p>{project.description}</p>
          <button className="project-open" type="button" onClick={() => onOpen(project)}>
            View project archive <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </motion.div>
        <div className="project-vertical" aria-hidden="true">MINHAJ GOUDA / SELECTED WORK</div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const manifestoRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const pageProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroLeftX = useTransform(heroProgress, [0, 1], ['0vw', '-17vw']);
  const heroRightX = useTransform(heroProgress, [0, 1], ['0vw', '17vw']);
  const heroCopyY = useTransform(heroProgress, [0, 1], ['0%', '-65%']);
  const heroOpacity = useTransform(heroProgress, [0, 0.72, 1], [1, 1, 0]);
  const lightLeftRotate = useTransform(heroProgress, [0, 1], [-28, 12]);
  const lightRightRotate = useTransform(heroProgress, [0, 1], [28, -12]);
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ['start end', 'end start'],
  });
  const manifestoX = useTransform(manifestoProgress, [0, 1], ['8%', '-35%']);

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 36));

  useEffect(() => {
    if (!selectedProject && !menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    if (selectedProject) closeButtonRef.current?.focus();
    const pageElements = Array.from(document.querySelector('main')?.children ?? [])
      .filter((element) => selectedProject
        ? element !== galleryRef.current
        : element !== menuRef.current && !element.classList.contains('site-header'));
    const headerElements = menuOpen
      ? Array.from(document.querySelector('.site-header')?.children ?? []).filter((element) => element !== menuButtonRef.current)
      : [];
    const inertedElements = [...pageElements, ...headerElements]
      .map((element) => ({ element, wasInert: element.hasAttribute('inert') }));
    inertedElements.forEach(({ element }) => element.setAttribute('inert', ''));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setMenuOpen(false);
      }
      if (selectedProject && event.key === 'ArrowRight') {
        setGalleryIndex((current) => (current + 1) % selectedProject.gallery.length);
      }
      if (selectedProject && event.key === 'ArrowLeft') {
        setGalleryIndex((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
      }
      if (selectedProject && event.key === 'Tab') {
        const controls = Array.from(galleryRef.current?.querySelectorAll<HTMLElement>('button, a[href]') ?? []);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (menuOpen && event.key === 'Tab') {
        const controls = [menuButtonRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? [])]
          .filter((control): control is HTMLElement => Boolean(control));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      inertedElements.forEach(({ element, wasInert }) => {
        if (!wasInert) element.removeAttribute('inert');
      });
      previousFocus?.focus();
    };
  }, [menuOpen, selectedProject]);

  const openProject = (project: Project) => {
    setMenuOpen(false);
    setGalleryIndex(0);
    setSelectedProject(project);
  };

  const nextImage = () => {
    if (selectedProject) setGalleryIndex((current) => (current + 1) % selectedProject.gallery.length);
  };

  const previousImage = () => {
    if (selectedProject) {
      setGalleryIndex((current) => (current - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <main>
      <a className="skip-link" href="#about">Skip to content</a>
      <motion.div className="page-progress" style={{ scaleX: pageProgress }} aria-hidden="true" />
      <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
        <a href="#top" className="brand" aria-label="Minhaj Gouda home">
          <span>MINHAJ</span><span>GOUDA</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-contact" href="#contact">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: easeOut }}
          >
            {navigation.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, '0')}</span>{label}<ArrowUpRight size={24} aria-hidden="true" />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section id="top" ref={heroRef} className="hero">
        <div className="hero-stage">
          <div className="hero-light-field" aria-hidden="true">
            <motion.span className="hero-beam hero-beam-left" style={reduceMotion ? undefined : { rotate: lightLeftRotate }} />
            <motion.span className="hero-beam hero-beam-right" style={reduceMotion ? undefined : { rotate: lightRightRotate }} />
            <span className="hero-light-source hero-light-source-left" />
            <span className="hero-light-source hero-light-source-right" />
            <span className="hero-horizon" />
          </div>
          <motion.div className="hero-inner" style={reduceMotion ? undefined : { opacity: heroOpacity }}>
            <p className="hero-role">OPERATIONS · GROWTH · LIVE EXPERIENCES</p>
            <h1>
              <span className="hero-name-mask">
                <motion.span
                  className="hero-name hero-name-first"
                  initial={reduceMotion ? false : { y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: easeOut }}
                  style={reduceMotion ? undefined : { x: heroLeftX }}
                >MINHAJ</motion.span>
              </span>
              <span className="hero-mobile-interlude" aria-hidden="true"><span /></span>
              <span className="hero-name-mask">
                <motion.span
                  className="hero-name hero-name-last"
                  initial={reduceMotion ? false : { y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.12, ease: easeOut }}
                  style={reduceMotion ? undefined : { x: heroRightX }}
                >GOUDA</motion.span>
              </span>
            </h1>
            <motion.div className="hero-bottom" style={reduceMotion ? undefined : { y: heroCopyY }}>
              <p>Building Growth.<br />Leading Operations.<br />Delivering at Scale.</p>
              <a href="#about" className="scroll-cue">
                <span>Scroll to enter</span><ArrowDownRight size={26} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
          <div className="hero-side-note" aria-hidden="true">DIRECTOR OF OPERATIONS / MIDDLE EAST + ASIA</div>
        </div>
      </section>

      <section id="about" className="profile-section section-shell">
        <div className="section-topline"><span>01 / PROFILE</span><span>THE PERSON BEHIND THE PRODUCTION</span></div>
        <div className="profile-grid">
          <div className="profile-lead">
            <Reveal><h2>Commercial mindset.<br />Production instinct.<br /><em>Operational discipline.</em></h2></Reveal>
            <Reveal className="profile-role" delay={0.1}>
              <p>Director of Operations at <strong>Backstage Scaffolding</strong>, leading business growth, company-wide operations, client relationships and delivery across the Middle East.</p>
            </Reveal>
          </div>
          <div className="profile-copy">
            <Reveal><p className="profile-first">I’m Minhaj Gouda, an operations and live events leader with <strong>15+ years of experience</strong> across the Middle East and Asia.</p></Reveal>
            <p>My career has been built where business and delivery meet. I started close to the production floor—solving problems, managing complexity and delivering under pressure—and have grown into roles spanning operations, commercial strategy, client leadership, teams and business growth.</p>
            <p>Today, as Director of Operations at Backstage Scaffolding, I lead operations across the company while helping drive the wider Group forward. That means strengthening how the business performs, developing client relationships, opening new opportunities and making sure the operation behind the work is as strong as the work itself.</p>
            <p>Across concerts, festivals, government programmes, cultural productions, brand experiences and major event infrastructure, I’ve worked in environments where timelines are fixed, expectations are high and execution matters.</p>
            <p>I bring commercial thinking to operations, operational discipline to growth, and a production mindset to getting things done.</p>
          </div>
        </div>
        <div className="forward-section">
          <div className="forward-heading">HOW I MOVE BUSINESS FORWARD</div>
          <div className="forward-grid">
            {businessForward.map(([name, description], index) => (
              <Reveal className="forward-item" key={name} delay={index * 0.07}>
                <span className="forward-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-intro section-shell">
        <div className="section-topline"><span>02 / SELECTED WORK</span><span>THE MOMENTS THAT HAD TO LAND</span></div>
        <div className="work-intro-grid">
          <Reveal><h2>Work that<br /><em>had to deliver.</em></h2></Reveal>
          <Reveal className="work-intro-copy" delay={0.12}>
            <p>Fixed deadlines. Live audiences. Complex moving parts. No room for operational drift.</p>
            <p>A selection of projects where planning, judgement and execution had to come together when it mattered.</p>
          </Reveal>
        </div>
      </section>

      <div className="project-sequence">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectChapter key={project.title} project={project} index={index} onOpen={openProject} />
        ))}
      </div>

      <section className="archive-section section-shell">
        <div className="section-topline"><span>03 / PROJECT ARCHIVE</span><span>BEYOND THE SPOTLIGHT</span></div>
        <div className="archive-heading">
          <Reveal><h2>More from<br /><em>the floor.</em></h2></Reveal>
          <p>Additional work across live production, media, technology and complex event environments.</p>
        </div>
        <div className="archive-grid">
          {projects.slice(6).map((project, index) => (
            <Reveal className={'archive-item archive-item-' + (index + 1)} key={project.title} delay={index * 0.1}>
              <button type="button" className="archive-card" onClick={() => openProject(project)}>
                <span className="archive-image">
                  <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 40vw" />
                  <span className="archive-image-light" aria-hidden="true" />
                </span>
                <span className="archive-meta"><span>{project.location} · {project.year}</span><ArrowUpRight size={21} aria-hidden="true" /></span>
                <span className="archive-title">{project.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="capabilities" className="capabilities-section section-shell">
        <div className="section-topline"><span>04 / CAPABILITIES</span><span>THE WHOLE OPERATION</span></div>
        <div className="capabilities-heading">
          <Reveal><h2>Built for the<br /><em>whole operation.</em></h2></Reveal>
          <p>I work across the commercial, operational and delivery layers that turn ambitious ideas into strong businesses and successful projects.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(([name, description], index) => (
            <motion.article
              className="capability-row"
              key={name}
              initial={reduceMotion ? false : { opacity: 0.35, x: index % 2 ? 35 : -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <ArrowUpRight size={20} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section section-shell">
        <div className="section-topline"><span>05 / EXPERIENCE</span><span>THE CAREER BEHIND THE WORK</span></div>
        <div className="experience-heading">
          <Reveal><h2>From the production floor<br /><em>to business leadership.</em></h2></Reveal>
          <p>A career built by moving closer to the decisions that shape the outcome—first delivery, then teams, clients, operations and growth.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <Reveal className="experience-item" key={item.company + item.period}>
              <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="experience-role"><h3>{item.role}</h3><p>{item.company}</p></div>
              <div className="experience-date"><span>{item.period}</span><small>{item.place}</small></div>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section ref={manifestoRef} className="manifesto" aria-label="Build the business, lead the operation, deliver at scale">
        <motion.div className="manifesto-track" style={reduceMotion ? undefined : { x: manifestoX }} aria-hidden="true">
          <span>BUILD THE BUSINESS / LEAD THE OPERATION / DELIVER AT SCALE /</span>
          <span>BUILD THE BUSINESS / LEAD THE OPERATION / DELIVER AT SCALE /</span>
        </motion.div>
      </section>

      <section id="contact" className="contact-section section-shell">
        <div className="section-topline"><span>06 / CONTACT</span><span>THE NEXT CUE</span></div>
        <Reveal className="contact-content">
          <p className="contact-prelude">Projects. Partnerships. Opportunities.</p>
          <a className="contact-main-link" href="mailto:minhajgouda@gmail.com">
            <span>Let’s build<br /><em>what’s next.</em></span><ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
        <div className="contact-grid">
          <div><span>BASED IN</span><p>Dubai, UAE</p></div>
          <div><span>WORKING ACROSS</span><p>MENA & Asia</p></div>
          <div><span>EMAIL</span><a href="mailto:minhajgouda@gmail.com"><Mail size={17} aria-hidden="true" />minhajgouda@gmail.com</a></div>
          <div><span>SOCIAL</span><p className="social-links">
            <a href="https://www.linkedin.com/in/minhaj-gouda" target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" />LinkedIn</a>
            <a href="https://www.instagram.com/minhajgouda" target="_blank" rel="noreferrer"><Instagram size={18} aria-hidden="true" />Instagram</a>
          </p></div>
        </div>
      </section>

      <footer className="site-footer">
        <span>Minhaj Gouda © 2026</span>
        <a href="#top">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            ref={galleryRef}
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title + ' gallery'}
            initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: easeOut }}
          >
            <div className="gallery-top">
              <div><span>{selectedProject.year} · {selectedProject.location}</span><h2>{selectedProject.title}</h2></div>
              <button ref={closeButtonRef} type="button" onClick={() => setSelectedProject(null)} aria-label="Close gallery"><X size={27} /></button>
            </div>
            <div className="gallery-stage">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.gallery[galleryIndex]}
                  className="gallery-image"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.12 : 0.35 }}
                >
                  <Image
                    src={selectedProject.gallery[galleryIndex]}
                    alt={selectedProject.title + ' image ' + (galleryIndex + 1)}
                    fill
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>
              <button type="button" className="gallery-previous" onClick={previousImage} aria-label="Previous image"><ArrowLeft size={24} /></button>
              <button type="button" className="gallery-next" onClick={nextImage} aria-label="Next image"><ArrowRight size={24} /></button>
              <div className="gallery-count">{String(galleryIndex + 1).padStart(2, '0')} / {String(selectedProject.gallery.length).padStart(2, '0')}</div>
            </div>
            <div className="gallery-bottom">
              <p>{selectedProject.description}</p>
              <div className="gallery-tags">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
