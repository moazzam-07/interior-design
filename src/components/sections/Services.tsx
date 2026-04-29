'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Palette, LayoutGrid, Hammer, Building2, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={28} strokeWidth={1.5} />,
  Palette: <Palette size={28} strokeWidth={1.5} />,
  LayoutGrid: <LayoutGrid size={28} strokeWidth={1.5} />,
  Hammer: <Hammer size={28} strokeWidth={1.5} />,
  Building2: <Building2 size={28} strokeWidth={1.5} />,
  MessageCircle: <MessageCircle size={28} strokeWidth={1.5} />,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        `.${styles.header} > *`,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );

      // Cards
      gsap.fromTo(
        `.${styles.card}`,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: `.${styles.grid}`, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = (service: string) =>
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
      `Hi! I'm interested in your ${service} service. Can we discuss?`
    )}`;

  return (
    <section ref={sectionRef} className="section" id="services">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Do</p>
          <h2 className="text-h1">Services Tailored to<br />Your Vision</h2>
          <p className={styles.headerSub}>
            From single-room refreshes to full-home transformations, we bring the same obsessive
            attention to detail to every project.
          </p>
        </div>

        <div className={styles.grid}>
          {siteConfig.services.map((service) => (
            <a
              key={service.id}
              href={whatsappUrl(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon}>
                {iconMap[service.icon] || <Home size={28} strokeWidth={1.5} />}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.cardCta}>Get Started &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
