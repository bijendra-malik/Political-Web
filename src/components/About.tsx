"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const points = [
  "People First Approach",
  "Transparent Leadership",
  "Inclusive Development",
  "Empowering Communities",
];

export default function About() {
  const leftRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 300 });

  return (
    
    <section id="about" className="py-10 lg:py-12 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content — left */}
          <div ref={leftRef} className="space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-[2px] bg-[#f28c28]" />
              <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">About Me</span>
            </div>

            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#066a9c] leading-tight">
              Committed to Serve.
              <br />
              Working for <span className="text-[#26ae90]">Change.</span>
            </h2>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              I believe in the power of people and the strength of unity. My journey is dedicated to public service, inclusive development and creating opportunities for all.
            </p>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              From founding Indexia Group of Companies to serving as National Spokesperson for Aam Aadmi Party, every step has been driven by a vision for transparent governance and meaningful social impact.
            </p>

            {/* Checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5 hover:bg-[#26ae90]/5 transition-colors">
                  <div className="w-7 h-7 bg-[#26ae90]/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#26ae90]" />
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 bg-[#066a9c] hover:bg-[#066a9c]/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg text-sm uppercase tracking-wider group mt-2">
              Know More About Me
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          {/* Photos — right side */}
          <div ref={rightRef} className="relative order-1 lg:order-2">
            <div className="relative w-full h-[420px] sm:h-[460px] lg:h-[500px]">

              {/* ===== Decorative elements ===== */}
              {/* Teal filled circle — top right (behind img1) */}
              <div className="absolute -top-6 -right-6 w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-full bg-[#26ae90] z-20" />

              {/* Teal dotted grid — center area */}
              <svg className="absolute top-[30%] left-[28%] sm:left-[30%] w-16 h-16 sm:w-20 sm:h-20 text-[#26ae90]/30 z-40" viewBox="0 0 80 80" fill="currentColor">
                {[...Array(5)].map((_, r) => [...Array(5)].map((_, c) => (
                  <circle key={`dg-${r}-${c}`} cx={8 + c * 15} cy={8 + r * 15} r={2.2} />
                )))}
              </svg>

              {/* Orange dots row — bottom center */}
              <svg className="absolute bottom-3 left-[5%] w-44 h-4 text-[#f28c28]/50 z-40" viewBox="0 0 176 16" fill="currentColor">
                {[...Array(18)].map((_, i) => (
                  <circle key={`od-${i}`} cx={5 + i * 9.5} cy={8} r={2.5} />
                ))}
              </svg>

              {/* Curved connecting line (teal, dashed) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" viewBox="0 0 500 500" fill="none" preserveAspectRatio="none">
                <path d="M370 80 C430 170, 410 280, 290 370 C230 400, 190 420, 170 430"
                  stroke="#26ae90" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.35" />
              </svg>

              {/* ===== Photo cards ===== */}
              {/* Image 1 — Top right: Arvind Kejriwal meeting (LARGE) */}
              <div className="absolute top-0 right-0 w-[220px] sm:w-[260px] lg:w-[300px] z-30 group/img">
                <div className="rounded-2xl overflow-hidden shadow-[0_10px_35px_rgb(0,0,0,0.14)] border-[3px] border-white transition-all duration-500 group-hover/img:shadow-[0_14px_45px_rgb(0,0,0,0.2)] group-hover/img:-translate-y-1">
                  <img src="/images/about-me0mg/arvind-kejriwal-meeting-removebg-preview.png" alt="Meeting with Arvind Kejriwal"
                    className="w-full h-[200px] sm:h-[230px] lg:h-[260px] object-cover object-top" />
                </div>
              </div>

              {/* Image 2 — Bottom left: Manishi Sosdiya (medium-large) */}
              <div className="absolute bottom-12 left-0 w-[180px] sm:w-[220px] lg:w-[242px] z-20 group/img">
                {/* Teal L-bracket on left side */}
                <div className="absolute -left-3 top-5 bottom-5 w-[6px] rounded-full bg-[#26ae90] z-30" />
                <div className="rounded-2xl overflow-hidden shadow-[0_8px_28px_rgb(0,0,0,0.12)] border-[3px] border-white transition-all duration-500 group-hover/img:shadow-[0_12px_38px_rgb(0,0,0,0.18)] group-hover/img:-translate-y-1">
                  <img src="/images/about-me0mg/manishi-sosdiya-removebg-preview.png" alt="Meeting with Manishi Sosdiya"
                    className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover object-top" />
                </div>
              </div>

              {/* Image 3 — Bottom right: Healthcare meeting (medium-large) */}
              <div className="absolute bottom-0 right-2 w-[175px] sm:w-[205px] lg:w-[270px] z-10 group/img">
                {/* Orange L-bracket on bottom-right corner */}
                <div className="absolute -right-2 -bottom-1 w-[6px] h-20 rounded-full bg-[#f28c28] z-30" />
                <div className="absolute -bottom-2 -right-2 w-20 h-[6px] rounded-full bg-[#f28c28] z-30" />
                <div className="rounded-2xl overflow-hidden shadow-[0_8px_28px_rgb(0,0,0,0.12)] border-[3px] border-white transition-all duration-500 group-hover/img:shadow-[0_12px_38px_rgb(0,0,0,0.18)] group-hover/img:-translate-y-1">
                  <img src="/images/about-me0mg/about-banner.png" alt="Meeting with AAP Leader"
                    className="w-full h-[175px] sm:h-[195px] lg:h-[215px] object-cover object-top" />
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
}
