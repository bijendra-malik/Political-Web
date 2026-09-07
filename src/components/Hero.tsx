"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

const highlights = [
  { icon: "🏛️", label: "Political Leader", sub: "MLA Candidate — Shamli Constituency 2022" },
  { icon: "🤝", label: "Social Contributor", sub: "Committed to Community Development" },
];

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/indexia.finance.3", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "X", href: "https://x.com/FinanceIndexia", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { name: "YouTube", href: "https://www.youtube.com/@FinanceIndexia", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "LinkedIn", href: "https://in.linkedin.com/company/indexiafinance", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const mobileTextRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) { textRef.current.style.opacity = "1"; textRef.current.style.transform = "translateY(0)"; }
      if (mobileTextRef.current) { mobileTextRef.current.style.opacity = "1"; mobileTextRef.current.style.transform = "translateY(0)"; }
      setTimeout(() => { if (imgRef.current) { imgRef.current.style.opacity = "1"; imgRef.current.style.transform = "translateX(0)"; } }, 200);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[80%] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/Imgs-AI/banner-im.png" alt="" className="w-full h-full object-cover" style={{ opacity: 0.6 }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#066a9c]/20 via-[#066a9c]/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#066a9c]/20 via-transparent to-[#066a9c]/10" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="w-full px-4 sm:px-8 lg:pl-16 lg:pr-10 xl:px-45 mt-24">

            {/* MOBILE — text centered + portrait below + highlight cards */}
            <div ref={mobileTextRef} className="md:hidden space-y-2 px-2 text-center" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
              <div className="bg-black/20 backdrop-blur-xs rounded-xl px-3 py-3 space-y-2">
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
            <div className="hidden md:flex items-center justify-between gap-4 lg:gap-8">
              <div ref={textRef} className="w-fit max-w-full space-y-4 bg-black/50 backdrop-blur-xm border border-white/90 rounded-2xl p-4 lg:p-6" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.8s ease-out, transform 0.8s ease-out" }}>
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
                <div className="relative w-[400px] md:w-[300px] lg:w-[400px] xl:w-[420px]">
                  <img src="/bg-remove.png" alt="Bijendra Malik — Political Leader & Entrepreneur" className="w-full h-auto object-contain" />
                </div>
                {/* Highlight cards — right below portrait */}
                <div className="flex gap-6  w-full max-w-[450px] md:max-w-[300px] lg:max-w-[480px]">
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
              {/* Icon — solid brand logo (no stroke border) */}
              <svg className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white/60 group-hover:text-[#f2f231] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
            </a>
          ))}
        </div>
      </div>


    </section>
  );
}
