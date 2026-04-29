'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './Contact.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = `Hi! I'd like to book a consultation.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

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
    <section ref={sectionRef} className={`section section-dark ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label section-label-light">Get In Touch</p>
          <h2 className="text-h1">
            Let&apos;s Create Something<br />Beautiful Together
          </h2>
        </div>

        <div className={styles.layout}>
          {/* Form */}
          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.success}>
                <h3 className="text-h2">Thank You</h3>
                <p>We&apos;ve received your details. Our team will connect with you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-phone">Phone</label>
                    <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-project">Project Type</label>
                    <select id="contact-project" name="projectType" value={formData.projectType} onChange={handleChange}>
                      <option value="">Select project type</option>
                      <option value="Full Home Design">Full Home Design</option>
                      <option value="Room Makeover">Room Makeover</option>
                      <option value="Commercial">Commercial / Office</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Consultation">Consultation Only</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-budget">Budget Range</label>
                  <select id="contact-budget" name="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="Under 5L">Under 5 Lakh</option>
                    <option value="5-15L">5 - 15 Lakh</option>
                    <option value="15-30L">15 - 30 Lakh</option>
                    <option value="30-50L">30 - 50 Lakh</option>
                    <option value="50L+">50 Lakh+</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message">Tell Us About Your Project</label>
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Share your vision, timeline, or any questions..." />
                </div>

                <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Prefer a Quick Chat?</h3>
              <p className={styles.infoDesc}>
                Skip the form. Reach us directly on WhatsApp or give us a call.
              </p>
              <div className={styles.infoActions}>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.contact)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="btn btn-outline" style={{ width: '100%', borderColor: 'rgba(250,250,247,0.2)', color: 'var(--text-inverse)' }}>
                  <Phone size={18} />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <Mail size={18} />
                <span>{siteConfig.email}</span>
              </div>
              <div className={styles.detailItem}>
                <MapPin size={18} />
                <span>{siteConfig.address}</span>
              </div>
              <div className={styles.detailItem}>
                <Clock size={18} />
                <span>{siteConfig.hours}</span>
              </div>
            </div>

            <p className={styles.responseTime}>{siteConfig.responseTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
