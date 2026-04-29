'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/site';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

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

      // Animate the progress line
      gsap.fromTo(
        `.${styles.progressFill}`,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: `.${styles.steps}`,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );

      // Steps stagger
      gsap.fromTo(
        `.${styles.step}`,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: `.${styles.steps}`, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`section section-dark ${styles.process}`} id="process">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label section-label-light">How We Work</p>
          <h2 className="text-h1">
            A Process Designed<br />Around You
          </h2>
          <p className={styles.headerSub}>
            No guesswork. No surprises. Just a clear, collaborative path from your
            vision to a finished space you love.
          </p>
        </div>

        <div className={styles.steps}>
          {/* Vertical progress line */}
          <div className={styles.progressLine}>
            <div className={styles.progressFill} />
          </div>

          {siteConfig.process.map((step) => (
            <div key={step.step} className={styles.step}>
              <div className={styles.stepNumber}>
                <span>{String(step.step).padStart(2, '0')}</span>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.hero)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-lg"
          >
            <span>Start With Step 1 — It&apos;s Free</span>
          </a>
        </div>
      </div>
    </section>
  );
}
