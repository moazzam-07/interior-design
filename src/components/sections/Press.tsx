'use client';

import { siteConfig } from '@/config/site';
import styles from './Press.module.css';

export default function Press() {
  const items = [...siteConfig.press, ...siteConfig.press]; // Double for infinite loop

  return (
    <section className={styles.press}>
      <p className={`section-label ${styles.label}`}>As Featured In</p>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {items.map((name, i) => (
            <span key={i} className={styles.item}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
