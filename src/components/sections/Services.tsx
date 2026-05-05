'use client';

import { siteConfig } from '@/config/site';
import { CircularGallery } from '@/components/ui/circular-gallery-2';

const serviceImages: Record<string, string> = {
  'Complete Home Design': 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80',
  'Room Transformation': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  'Space Planning & Layout': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
  'Renovation Management': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  'Commercial & Office Design': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  'Design Consultation': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
};

export default function Services() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi! I'm interested in discussing a design project with you.`
  )}`;

  // Prepare items for circular gallery
  const galleryItems = siteConfig.services.map(service => ({
    image: serviceImages[service.title] || 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80',
    text: service.title,
  }));

  return (
    <section id="services" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div
        style={{
          maxWidth: 'var(--max-width, 1400px)',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 8rem) 0',
        }}
        className="flex flex-col relative items-center justify-center overflow-hidden"
      >
        <div className="text-center px-6 md:px-12 max-w-4xl mx-auto mb-12 md:mb-16">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Our Expertise
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Services Tailored to{' '}
            <span
              className="italic font-light block mt-2"
              style={{ color: 'var(--accent)' }}
            >
              Your Vision
            </span>
          </h2>
          <p
            className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            From single-room refreshes to full-home transformations, we bring
            the same obsessive attention to detail to every project. Scroll to explore our process.
          </p>
        </div>

        {/* Circular Gallery Section */}
        <div className="w-full relative px-4 md:px-8 lg:px-12">
          <div 
            className="relative h-[600px] md:h-[700px] w-full rounded-[2rem] overflow-hidden"
            style={{ backgroundColor: 'var(--surface-white)' }}
          >
            <CircularGallery
              items={galleryItems}
              bend={3}
              borderRadius={0.05}
              scrollEase={0.03}
              scrollSpeed={1}
            />
          </div>
          
          <div className="flex justify-center mt-12 pb-24 md:pb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full text-base font-medium transition-all duration-300 hover:-translate-y-1"
              style={{ 
                padding: '1.25rem 3rem',
                backgroundColor: 'var(--accent)',
                color: 'var(--surface-white)',
                boxShadow: '0 10px 25px -5px rgba(202, 160, 82, 0.4)'
              }}
            >
              Enquire Now
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
