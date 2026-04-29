'use client';

import { Star } from 'lucide-react';

// Inline SVG social icons (lucide removed branded icons)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24Z"/>
  </svg>
);
import { siteConfig } from '@/config/site';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>{siteConfig.name}</h3>
            <p className={styles.tagline}>{siteConfig.description}</p>
            <div className={styles.googleMini}>
              <div className={styles.miniStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#F4B400" strokeWidth={0} />
                ))}
              </div>
              <span>{siteConfig.reviews.rating} / 5.0 on Google ({siteConfig.reviews.count}+ reviews)</span>
            </div>
          </div>

          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Services</h4>
            {siteConfig.services.slice(0, 4).map((s) => (
              <a key={s.id} href="#services" className={styles.link}>
                {s.title}
              </a>
            ))}
          </div>

          <div className={styles.links}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <a href={`tel:${siteConfig.phone}`} className={styles.link}>
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className={styles.link}>
              {siteConfig.email}
            </a>
            <p className={styles.address}>{siteConfig.address}</p>
            <div className={styles.social}>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <PinterestIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p>Designed with precision in {siteConfig.city}.</p>
        </div>
      </div>
    </footer>
  );
}
