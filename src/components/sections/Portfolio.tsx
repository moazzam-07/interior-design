'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Portfolio.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'The Ivory Residence',
    category: 'Residential',
    location: 'Bandra West, Mumbai',
    video: '/videos/portfolio-1.mp4',
    size: 'large',
  },
  {
    id: 2,
    title: 'Meridian Co-working Hub',
    category: 'Commercial',
    location: 'Lower Parel, Mumbai',
    video: '/videos/portfolio-2.mp4',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Modular Kitchen Series',
    category: 'Kitchen',
    location: 'Juhu, Mumbai',
    video: '/videos/portfolio-3.mp4',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Minimalist Dining',
    category: 'Residential',
    location: 'Powai, Mumbai',
    video: '/videos/portfolio-4.mp4',
    size: 'large',
  },
  {
    id: 5,
    title: 'The Jade Living Room',
    category: 'Living Room',
    location: 'Worli, Mumbai',
    video: '/videos/portfolio-5.mp4',
    size: 'large',
  },
  {
    id: 6,
    title: 'Marble & Brass Finishes',
    category: 'Bathroom',
    location: 'South Mumbai',
    video: '/videos/portfolio-6.mp4',
    size: 'medium',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.header} > *`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`section section-cream ${styles.portfolio}`} id="portfolio">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Our Work</p>
          <h2 className="text-h1">Spaces That Tell<br />Your Story</h2>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {siteConfig.portfolioCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`${styles.card} ${project.size === 'large' ? styles.cardLarge : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardImage}>
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.projectVideo}
                  />
                  <div className={styles.cardOverlay}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardMeta}>
                    {project.category} &middot; {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className={styles.cta}>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.portfolio)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Want a Space Like This?</span>
          </a>
        </div>
      </div>
    </section>
  );
}
