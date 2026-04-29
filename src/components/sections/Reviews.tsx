'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Reviews.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [hasDismissedPopup, setHasDismissedPopup] = useState(false);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % siteConfig.testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length
    );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

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

      gsap.fromTo(
        `.${styles.ratingBlock}`,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      );

      // Popup trigger
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 50%',
        onEnter: () => setIsPopupVisible(true),
        onLeaveBack: () => setIsPopupVisible(false),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const review = siteConfig.testimonials[activeIndex];

  return (
    <section ref={sectionRef} className={`section ${styles.reviews}`} id="reviews">
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Rating block */}
          <div className={styles.ratingBlock}>
            <div className={styles.ratingNumber}>
              {siteConfig.reviews.rating}
            </div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#F4B400" strokeWidth={0} />
              ))}
            </div>
            <p className={styles.ratingCount}>
              Based on <strong>{siteConfig.reviews.count}+</strong> Google Reviews
            </p>
            <div className={styles.googleBadge}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google Reviews</span>
            </div>
            <a
              href={siteConfig.reviews.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline btn-sm ${styles.seeAll}`}
            >
              <span>See All Reviews</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Right: Review carousel */}
          <div className={styles.carousel}>
            <div className={styles.header}>
              <p className="section-label">Client Stories</p>
              <h2 className="text-h1">Words That Mean<br />Everything</h2>
            </div>

            <div className={styles.reviewCard} key={activeIndex}>
              <div className={styles.reviewStars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F4B400" strokeWidth={0} />
                ))}
              </div>
              <blockquote className={styles.reviewText}>
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className={styles.reviewAuthor}>
                <div className={styles.authorInitial}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.authorName}>{review.name}</p>
                  <p className={styles.authorRole}>{review.role}</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className={styles.controls}>
              <button onClick={prev} className={styles.navBtn} aria-label="Previous review">
                <ChevronLeft size={20} />
              </button>
              <div className={styles.dots}>
                {siteConfig.testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className={styles.navBtn} aria-label="Next review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Request Popup */}
      <div className={`${styles.reviewPopup} ${isPopupVisible && !hasDismissedPopup ? styles.visible : ''}`}>
        <button 
          className={styles.closePopup} 
          onClick={() => setHasDismissedPopup(true)}
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className={styles.shimmer}></div>
        <div className={styles.popupContent}>
          <Star size={24} fill="#F4B400" strokeWidth={0} className={styles.popupIcon} />
          <h4>Love our work?</h4>
          <p>Your feedback helps us create better spaces. Leave us a review on Google!</p>
          <a
            href={siteConfig.reviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline btn-sm ${styles.popupBtn}`}
            onClick={() => setHasDismissedPopup(true)}
          >
            <span>Write a Review</span>
          </a>
        </div>
      </div>
    </section>
  );
}
