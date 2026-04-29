'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Star, ArrowDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.4 });

      // Image reveal
      tl.fromTo(
        imageRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power4.inOut' },
        0
      );

      // Headline staggered word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word-wrap span');
        tl.fromTo(
          words,
          { y: 120, rotateX: -40, opacity: 0 },
          { y: 0, rotateX: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.08 },
          0.3
        );
      }

      // Subheadline
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        0.9
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        1.1
      );

      // Google badge
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        1.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.hero
  )}`;

  // Split headline into words for animation
  const headlineWords = siteConfig.tagline.split(' ');

  return (
    <section ref={sectionRef} className={styles.hero} id="hero">
      {/* Left Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <p className={`section-label ${styles.label}`}>
            {siteConfig.name} — {siteConfig.city}
          </p>

          <h1 ref={headlineRef} className={styles.headline}>
            {headlineWords.map((word, i) => (
              <span key={i} className="word-wrap" style={{ overflow: 'hidden', display: 'inline-block' }}>
                <span style={{ display: 'inline-block' }}>
                  {word}
                  {i < headlineWords.length - 1 ? '\u00A0' : ''}
                </span>
              </span>
            ))}
          </h1>

          <p ref={subRef} className={styles.subtitle} style={{ opacity: 0 }}>
            {siteConfig.subtitle}
          </p>

          <div ref={ctaRef} className={styles.ctas} style={{ opacity: 0 }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <span>Start Your Project</span>
            </a>
            <a href="#portfolio" className="btn btn-outline btn-lg" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>View Our Work</span>
            </a>
          </div>

          <div ref={badgeRef} className={styles.badge} style={{ opacity: 0 }}>
            <div className="google-badge">
              <div className="google-badge-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F4B400" strokeWidth={0} />
                ))}
              </div>
              <span>{siteConfig.reviews.rating} / 5.0</span>
              <span style={{ color: 'var(--text-tertiary)' }}>
                {siteConfig.reviews.count}+ Reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Video Wrapper */}
      <div ref={imageRef} className={styles.imageWrapper} style={{ clipPath: 'inset(100% 0 0 0)' }}>
        <div className={styles.imageOverlay} />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroImage}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
