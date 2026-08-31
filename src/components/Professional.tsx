"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

const companies = [
  {
    name: "Indexia Group of Companies",
    role: "Founder",
    desc: "Founded and leading Indexia Group, building a diverse portfolio of businesses in finance, digital, and technology sectors.",
    tags: ["Business Leadership", "Strategic Growth", "Innovation"],
    url: "#",
    logoText: "Indexia",
    logoSub: "GROUP OF COMPANIES",
    logoColor: "#066a9c",
  },
  {
    name: "Indexia Finance",
    role: "Director",
    desc: "Leading Indexia Finance with a focus on financial solutions, digital transformation and customer satisfaction.",
    tags: ["Financial Services", "Leadership", "Excellence"],
    url: "https://in.linkedin.com/company/indexiafinance",
    logoText: "Indexia",
    logoSub: "FINANCE",
    logoColor: "#066a9c",
  },
];

export default function Professional() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("animate-fadeInUp"); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#f28c28]" />
            <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">Professional Journey</span>
            <div className="w-8 h-[2px] bg-[#f28c28]" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#066a9c]">
            Business <span className="text-[#26ae90]">Leadership & Vision</span>
          </h2>
        </div>

        <div ref={ref} className="opacity-0">
          <GlowingCards enableGlow glowRadius={25} glowOpacity={0.15} animationDuration={400} responsive>
            {companies.map((c, i) => (
              <a key={i} href={c.url} target={c.url !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 block border border-gray-100 hover:border-[#26ae90]/20 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  {/* Logo */}
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100 overflow-hidden">
                    <img src="/images/indexiagroup.gif" alt={c.name} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-poppins)] text-lg font-bold text-[#066a9c] group-hover:text-[#26ae90] transition-colors">{c.name}</h3>
                    <div className="text-[#26ae90] font-semibold text-sm mt-0.5">{c.role}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#26ae90] transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t, j) => (
                    <span key={j} className="bg-[#066a9c]/5 text-[#066a9c] text-[11px] font-medium px-3 py-1 rounded-full group-hover:bg-[#26ae90]/10 group-hover:text-[#26ae90] transition-all">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </GlowingCards>
        </div>
      </div>
    </section>
  );
}
