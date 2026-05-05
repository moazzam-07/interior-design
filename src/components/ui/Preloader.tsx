'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="preloader"
          exit={{ 
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] }
          }}
        >
          <motion.div
            className="preloader-text"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {siteConfig.name}
          </motion.div>
          <div className="preloader-line" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
            }}
          >
            {siteConfig.description.split(' ').slice(0, 3).join(' ')}...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
