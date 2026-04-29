'use client';

import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Preloader from '@/components/ui/Preloader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import FloatingFABs from '@/components/ui/FloatingFABs';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Footer from '@/components/layout/Footer';

// Lazy load below-fold sections for performance
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), { ssr: false });
const Services = dynamic(() => import('@/components/sections/Services'), { ssr: false });
const Process = dynamic(() => import('@/components/sections/Process'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Reviews = dynamic(() => import('@/components/sections/Reviews'), { ssr: false });
const Press = dynamic(() => import('@/components/sections/Press'), { ssr: false });
const FAQ = dynamic(() => import('@/components/sections/FAQ'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <FloatingFABs />

      <main>
        {/* Section 01 — Hero */}
        <Hero />

        {/* Section 02 — Trust Bar / Stats */}
        <StatsBar />

        {/* Section 03 — Portfolio / Showcase */}
        <Portfolio />

        {/* Section 04 — Services */}
        <Services />

        {/* Section 05 — Design Process */}
        <Process />

        {/* Section 06 — About the Designer */}
        <About />

        {/* Section 07 — Google Reviews */}
        <Reviews />

        {/* Section 08 — Featured In / Press */}
        <Press />

        {/* Section 09 — FAQ */}
        <FAQ />

        {/* Section 10 — Contact / Booking */}
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
