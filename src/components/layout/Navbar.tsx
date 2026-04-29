'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // Show/hide based on scroll direction
      // Threshold: only hide if scrolled > 80px past hero and scrolling down fast enough
      if (currentScrollY < 80) {
        setVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        if (diff > 8) {
          // Scrolling DOWN — hide navbar
          setVisible(false);
        } else if (diff < -5) {
          // Scrolling UP — show navbar
          setVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    });
  }, []);

  // Detect active section for highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Always show navbar when menu is open
  useEffect(() => {
    if (menuOpen) setVisible(true);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -120, opacity: 0 }}
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          y: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
          opacity: { duration: 0.3, ease: 'easeOut' },
        }}
      >
        {/* Glass pill container */}
        <div className={styles.pill}>
          <div className={styles.inner}>
            {/* Logo */}
            <a
              href="#"
              className={styles.logo}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className={styles.logoMark}>L</span>
              <span className={styles.logoText}>{siteConfig.name}</span>
            </a>

            {/* Desktop Nav */}
            <nav className={styles.desktopNav}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${activeSection === link.href ? styles.navLinkActive : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      className={styles.navDot}
                      layoutId="navDot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className={styles.actions}>
              <a
                href="#contact"
                className={styles.ctaButton}
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Book Free Consultation
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className={styles.mobileMenu}
              initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
              animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
              exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <nav className={styles.mobileNav}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className={styles.mobileActions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.contact)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%' }}
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn btn-outline btn-lg"
                  style={{ width: '100%', borderColor: 'rgba(250,250,247,0.15)', color: 'var(--text-inverse)' }}
                >
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </motion.div>

              {/* Mobile menu footer */}
              <motion.p
                className={styles.mobileFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.6 }}
              >
                {siteConfig.address}
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
