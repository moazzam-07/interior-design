'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/site';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return null; // Commented out Arjun Mehta section for now

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        `.${styles.imageContainer}`,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );

      // Text animations
      gsap.fromTo(
        `.${styles.textContent} > *`,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      );

      // Credentials stagger
      gsap.fromTo(
        `.${styles.credential}`,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: `.${styles.credentials}`, start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.grid}`}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format"
            alt={`${siteConfig.designer.name}, Principal Designer at ${siteConfig.name}`}
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div className={styles.textContent}>
          <p className="section-label">The Mind Behind the Design</p>
          <h2 className="text-h1">{siteConfig.designer.name}</h2>
          <p className={styles.title}>{siteConfig.designer.title}</p>
          <p className={styles.bio}>{siteConfig.designer.bio}</p>

          <div className={styles.credentials}>
            {siteConfig.designer.credentials.map((cred, i) => (
              <div key={i} className={styles.credential}>
                <span className={styles.credLine} />
                <span>{cred}</span>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>Work With {siteConfig.designer.name.split(' ')[0]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
