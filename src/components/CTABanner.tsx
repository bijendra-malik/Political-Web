"use client";

import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTABanner() {
  const leftRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 300 });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/join-mission-img.png"
          alt="Join the Mission"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>
      {/* Gradient overlay — gray tone */}
      <div className="absolute inset-0 bg-gray-900/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-gray-900/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side — icon + text */}
          <div ref={leftRef} className="flex items-start gap-5">
            <div className="w-16 h-16 bg-[#f2f231]/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#f2f231]/30">
              <Users className="w-8 h-8 text-[#f2f231]" />
            </div>
            <div>
              <h3 className="font-[var(--font-poppins)] text-2xl sm:text-3xl font-bold text-white leading-snug">
                Join the Mission
              </h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-md">
                Be part of the journey towards a stronger, more inclusive and progressive society. Together we can make a difference.
              </p>
            </div>
          </div>

          {/* Right side — CTA buttons */}
          <div ref={rightRef} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-bold px-7 py-3.5 rounded-lg transition-all text-sm uppercase tracking-wider shadow-lg group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/social-work" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#f2f231] text-white hover:text-[#f2f231] font-bold px-7 py-3 rounded-lg transition-all text-sm uppercase tracking-wider group">
              View Social Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90]" />
    </section>
  );
}
