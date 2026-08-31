"use client";

import { useEffect, useRef } from "react";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

export default function VisionMission() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("animate-fadeInUp"); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="vision" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-saffron" />
            <span className="text-saffron font-semibold text-sm uppercase tracking-[0.2em]">Vision & Mission</span>
            <div className="w-8 h-[2px] bg-saffron" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Vision & Mission</span>
          </h2>
        </div>

        <div ref={ref} className="opacity-0">
          <GlowingCards enableGlow glowRadius={25} glowOpacity={0.2} animationDuration={500} responsive={false} gap="2rem">
          {/* Vision */}
          <GlowingCard glowColor="#f2f231" className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
            <div className="w-14 h-14 bg-gradient-to-br from-saffron to-gold rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-[var(--font-poppins)] text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A progressive, transparent, and inclusive society where every citizen has access to education, healthcare, employment, and opportunities to realize their full potential.
            </p>
            <div className="space-y-3">
              {["Transparent governance at all levels", "Quality education for every child", "Employment for the youth", "Digital transformation for all"].map((p,i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-saffron" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <span className="text-white/60 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </GlowingCard>

          {/* Mission */}
          <GlowingCard glowColor="#26ae90" className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
            <div className="w-14 h-14 bg-gradient-to-br from-gold to-saffron rounded-2xl flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-[var(--font-poppins)] text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              To serve the people with integrity, drive meaningful development in education, healthcare, employment, and empower communities for a self-reliant future.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                {icon:"📚",t:"Education"},{icon:"💼",t:"Employment"},{icon:"🏥",t:"Healthcare"},{icon:"👩",t:"Women Empowerment"},
                {icon:"🌾",t:"Rural Dev"},{icon:"🌐",t:"Digital India"}
              ].map((m,i) => (
                <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-saffron/20 transition-all text-center">
                  <div className="text-xl mb-1">{m.icon}</div>
                  <div className="text-white/70 text-xs font-medium">{m.t}</div>
                </div>
              ))}
            </div>
          </GlowingCard>
          </GlowingCards>
        </div>
      </div>
    </section>
  );
}
