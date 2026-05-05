"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function Showcase() {
  return (
    <section
      className="overflow-hidden w-full"
      id="showcase"
      style={{ backgroundColor: 'var(--surface-white)' }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <ContainerScroll
          titleComponent={
            <div className="mb-8 flex flex-col items-center justify-center text-center w-full">
              <p
                className="text-sm uppercase tracking-[0.2em] mb-4 font-semibold"
                style={{ color: 'var(--text-secondary)' }}
              >
                Signature Project
              </p>
              <h2
                className="text-4xl md:text-6xl font-bold leading-tight"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                The Meridian <br />
                <span
                  className="italic font-light"
                  style={{ color: 'var(--accent)' }}
                >
                  Penthouse
                </span>
              </h2>
            </div>
          }
        >
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
              alt="Luxury Penthouse Living Room Design"
              fill
              className="mx-auto rounded-2xl object-cover object-center"
              draggable={false}
              priority
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
