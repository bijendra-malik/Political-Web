"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import { ProfileCards, ValuesSection, OurValuesBar } from "@/components/about";

export default function About() {
  const leftRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 300 });

  return (
    <section
      id="about"
      className="scroll-mt-20 py-12 lg:py-16 bg-white relative overflow-hidden"
    >
      {/* Decorative leaf elements - top left */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-30 pointer-events-none">
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 80C10 40 40 10 80 10C40 10 10 40 10 80Z" fill="#26ae90" fillOpacity="0.15" />
          <path d="M25 100C25 60 55 30 90 30C55 30 25 60 25 100Z" fill="#26ae90" fillOpacity="0.1" />
        </svg>
      </div>

      {/* Decorative leaf elements - bottom right */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-25 pointer-events-none">
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170 100C170 140 140 170 100 170C140 170 170 140 170 100Z" fill="#26ae90" fillOpacity="0.2" />
          <path d="M155 80C155 120 125 150 90 150C125 150 155 120 155 80Z" fill="#26ae90" fillOpacity="0.15" />
        </svg>
      </div>

      {/* Decorative dots - middle */}
      <div className="absolute top-1/2 left-1/3 w-20 h-20 opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 80 80" fill="#26ae90">
          {[...Array(4)].map((_, r) =>
            [...Array(4)].map((_, c) => (
              <circle key={`dot-${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r={2.5} />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Content — left, trimmed to essentials: headline, one-line intro, values, CTA */}
          <div ref={leftRef} className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <div className="w-10 h-[3px] bg-[#f28c28]" />
              <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">
                About Me
              </span>
            </div>

            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-[#066a9c] leading-[1.15] tracking-tight">
              Committed to Serve.
              <br />
              Working for <span className="text-[#26ae90]">Change.</span>
            </h2>

            <p className="text-gray-500 leading-relaxed text-[15px] max-w-md">
              Dedicated to public service, inclusive development and creating opportunities
              for all.
            </p>

            {/* Values Section - Imported Component */}
            <ValuesSection />

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-[#0f5c4a] hover:bg-[#0f5c4a]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5c4a] focus-visible:ring-offset-2 text-sm uppercase tracking-wider group mt-4"
            >
              Know More About Me
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Profile Cards - Imported Component */}
          <div ref={rightRef}>
            <ProfileCards />
          </div>
        </div>

        {/* Our Values Bar - Imported Component */}
        <OurValuesBar />
      </div>
    </section>
  );
}