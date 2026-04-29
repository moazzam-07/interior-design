'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '@/config/site';
import styles from './FAQ.module.css';

gsap.registerPlugin(ScrollTrigger);

function AccordionItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button className={styles.trigger} onClick={onClick} aria-expanded={isOpen}>
        <span className={styles.question}>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.content}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        `.${styles.item}`,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.06,
          scrollTrigger: { trigger: `.${styles.accordion}`, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="faq">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.header}>
            <p className="section-label">Common Questions</p>
            <h2 className="text-h1">Everything You<br />Need to Know</h2>
            <p className={styles.headerSub}>
              Still have questions? Reach out directly — we&apos;re happy to help.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>Ask a Question</span>
            </a>
          </div>

          <div className={styles.accordion}>
            {siteConfig.faq.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
