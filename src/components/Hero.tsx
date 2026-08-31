"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

const highlights = [
  { icon: "🏛️", label: "Political Leader", sub: "MLA Candidate — Shamli Constituency 2022" },
  { icon: "🤝", label: "Social Contributor", sub: "Committed to Community Development" },
];

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/indexia.finance.3", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "X", href: "https://x.com/FinanceIndexia", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { name: "YouTube", href: "https://www.youtube.com/@FinanceIndexia", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
  { name: "LinkedIn", href: "https://in.linkedin.com/company/indexiafinance", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) { textRef.current.style.opacity = "1"; textRef.current.style.transform = "translateY(0)"; }
      setTimeout(() => { if (imgRef.current) { imgRef.current.style.opacity = "1"; imgRef.current.style.transform = "translateX(0)"; } }, 200);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[80%] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/banner-im.png" alt="" className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#066a9c]/50 via-[#066a9c]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#066a9c]/40 via-transparent to-[#066a9c]/10" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="w-full px-4 sm:px-8 lg:pl-16 lg:pr-10 xl:px-45 mt-24">

            {/* MOBILE — text centered + portrait below + highlight cards */}
            <div ref={textRef} className="md:hidden space-y-2 px-2 text-center" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
              <div className="inline-flex items-center gap-1">
                <div className="w-4 h-[2px] bg-[#f2f231] animate-pulse" />
                <span className="text-[#f2f231] font-semibold text-[9px] uppercase tracking-[0.15em] drop-shadow-lg">Dedicated to Public Service</span>
                <div className="w-4 h-[2px] bg-[#f2f231] animate-pulse" />
              </div>
              <h1 className="font-[var(--font-poppins)] font-bold text-white text-[22px] leading-[1.05] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">BIJENDRA MALIK</h1>
              <p className="text-[12px] text-white/90 font-[var(--font-poppins)] font-medium">Political Leader. Entrepreneur. Social Contributor.</p>
              <p className="text-white/50 text-[10px] max-w-[260px] mx-auto">Working for the people, empowering communities and building a better tomorrow.</p>
              <div className="flex justify-center gap-2 pt-1">
                <Link href="/about" className="inline-flex items-center gap-1 bg-[#26ae90] text-white font-semibold px-3 py-2 rounded-md text-[10px] uppercase tracking-wider shadow-lg shadow-[#26ae90]/30 hover:shadow-xl hover:shadow-[#26ae90]/40 hover:scale-105 transition-all duration-300">
                  Explore My Journey <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/watch-intro" className="inline-flex items-center gap-1 border border-white/30 text-white font-medium px-3 py-2 rounded-md text-[10px] hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300">
                  <Play className="w-3 h-3" fill="currentColor" /> Watch Intro
                </Link>
              </div>
              {/* Portrait image on mobile */}
              <div className="flex justify-center">
                <img src="/bg-remove.png" alt="Bijendra Malik" className="w-[200px] h-auto object-contain" />
              </div>
              {/* Highlight cards on mobile — sticky to portrait */}
              <div className="flex gap-2 justify-center -mt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="flex-1 max-w-[160px] bg-[#066a9c]/90 backdrop-blur-sm rounded-lg border border-white/10 p-2.5 group cursor-default hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 bg-[#26ae90]/20 rounded-full flex items-center justify-center text-xs flex-shrink-0 group-hover:bg-[#26ae90]/30 transition-colors">{h.icon}</div>
                      <div className="min-w-0 text-left">
                        <div className="font-[var(--font-poppins)] font-bold text-white text-[9px] leading-tight">{h.label}</div>
                        <div className="text-white/50 text-[7px] leading-snug font-medium line-clamp-1">{h.sub}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP + TABLET — portrait on right + highlight cards below portrait */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <div ref={textRef} className="flex-1 space-y-4" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-[#f2f231] animate-pulse" />
                  <span className="text-[#f2f231] font-semibold text-xs uppercase tracking-[0.2em] drop-shadow-lg">Dedicated to Public Service</span>
                </div>
                <h1 className="font-[var(--font-poppins)] font-bold text-white text-4xl lg:text-4xl xl:text-4xl leading-[1.05] whitespace-nowrap drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">BIJENDRA MALIK</h1>
                <p className="text-lg lg:text-xl text-white/90 font-[var(--font-poppins)] font-medium leading-snug">Political Leader. Entrepreneur. Social Contributor.</p>
                <p className="text-white/50 max-w-md text-sm lg:text-base leading-relaxed">Working for the people, empowering communities and building a better tomorrow.</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/about" className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#26ae90]/40 hover:scale-105 uppercase text-xs lg:text-sm tracking-wider group">
                    Explore My Journey <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/watch-intro" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg transition-all duration-300 text-xs lg:text-sm tracking-wider hover:bg-white/10 hover:scale-105">
                    <Play className="w-4 h-4" fill="currentColor" /> Watch Intro
                  </Link>
                </div>
              </div>
              {/* Right side — portrait + highlight cards stacked */}
              <div ref={imgRef} className="flex-shrink-0 flex flex-col items-center" style={{ opacity: 1, transform: "translateX(30px)", transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s" }}>
                <div className="relative w-[400px] md:w-[480px] lg:w-[400px] xl:w-[420px]">
                  <img src="/bg-remove.png" alt="Bijendra Malik — Political Leader & Entrepreneur" className="w-full h-auto object-contain" />
                </div>
                {/* Highlight cards — right below portrait */}
                <div className="flex gap-6 mb-6 w-full max-w-[450px] lg:max-w-[480px]">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex-1 bg-[#066a9c]/90 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/5 transition-all group cursor-default px-4 py-4 lg:p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#26ae90]/20 rounded-full flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-[#26ae90]/30 transition-colors">{h.icon}</div>
                        <div className="min-w-0">
                          <div className="font-[var(--font-poppins)] font-bold text-white text-[14px] sm:text-xs leading-tight">{h.label}</div>
                          <div className="text-white/50 text-[9px] sm:text-[12px] mt-0.5 leading-snug font-medium line-clamp-1">{h.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons — right side column (all screens, responsive) */}
        <div className="flex absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 flex-col gap-1 sm:gap-2 lg:gap-3 z-20">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="group relative w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex items-center justify-center" aria-label={s.name}>
              {/* Tooltip */}
              <div className="absolute right-full mr-2 sm:mr-3 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#066a9c]/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 translate-x-2 transition-all duration-300 pointer-events-none shadow-lg border border-white/10">
                {s.name}
                <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#066a9c]/90 rotate-45 border-r border-b border-white/10" />
              </div>
              {/* Animated rotating border */}
              <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, #f2f231, #26ae90, #066a9c, #f2f231)", animation: "spin 3s linear infinite" }} />
              <div className="absolute inset-[2px] rounded-full bg-[#066a9c]/80 backdrop-blur-sm" />
              {/* Icon */}
              <svg className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white/60 group-hover:text-[#f2f231] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.path} /></svg>
            </a>
          ))}
        </div>
      </div>


    </section>
  );
}
