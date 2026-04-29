'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/site';
import styles from './StatsBar.module.css';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplay(
              isDecimal
                ? obj.val.toFixed(1)
                : Math.floor(obj.val).toLocaleString()
            );
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value, isDecimal]);

  return (
    <span ref={ref} className={styles.number}>
      {display}
      <span className={styles.suffix}>{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 90%',
          },
        }
      );
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={barRef} className={styles.statsBar} style={{ opacity: 0 }}>
      <div className={`container ${styles.grid}`}>
        {siteConfig.stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              isDecimal={stat.isDecimal}
            />
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
