"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Eye, Target, GraduationCap, Stethoscope, Users, Building2, Leaf, Heart, ArrowRight } from "lucide-react";
import { useScrollReveal, useScrollStagger } from "@/hooks/useScrollReveal";

const visionPoints = [
  "Empowered and educated youth",
  "Strong and self-reliant communities",
  "Sustainable development for future generations",
  "Equal access to healthcare, education and resources",
];

const missionPoints = [
  "Quality education for every child",
  "Accessible and affordable healthcare",
  "Inclusive employment and skill development",
  "Sustainable and resilient infrastructure",
];

const focusAreas = [
  { Icon: GraduationCap, title: "Education", desc: "Empowering the next generation through better learning opportunities.", image: "/images/focus-education.png", color: "#066a9c" },
  { Icon: Stethoscope, title: "Healthcare", desc: "Better access to quality healthcare for healthier communities.", image: "/images/focus-healthcare.png", color: "#26ae90" },
  { Icon: Users, title: "Youth", desc: "Skilling, guidance and opportunities for a brighter tomorrow.", image: "/images/focus-youth.png", color: "#7c6cf0" },
  { Icon: Building2, title: "Infrastructure", desc: "Stronger infrastructure for better connectivity and growth.", image: "/images/focus-infrastructure.png", color: "#f28c28" },
  { Icon: Leaf, title: "Environment", desc: "A cleaner, greener and more sustainable future for all.", image: "/images/focus-environment.png", color: "#26ae90" },
  { Icon: Heart, title: "Community", desc: "Stronger communities build a stronger nation.", image: "/images/focus-community.png", color: "#066a9c" },
];

const CheckDot = ({ color }: { color: string }) => (
  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="white" strokeWidth={3.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export default function VisionMissionPage() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const visionRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const missionRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 300 });
  const focusRef = useScrollStagger<HTMLDivElement>({ direction: "up", delay: 100 });

  return (
    <main className="flex-1">
      <PageHero
        title="Corruption Free"
        titleHighlight="India"
        subtitle="Our Vision & Mission — Building a Progressive India"
        description="A vision for inclusive growth and a mission to empower every citizen."
        bgImage="/images/rally-march-yellow-flags.jpg"
        bgPosition="top"
        panelPosition="top-left"
        mobileJustify="end"
      />

      {/* What We Stand For — Vision & Mission cards */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Our Purpose</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              What We <span className="text-[#26ae90]">Stand For</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3">Building a stronger, more inclusive future together.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Our Vision — dark card */}
            <div ref={visionRef} className="h-full">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] sm:min-h-[460px] shadow-xl">
                <img src="/images/focus-community.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#0a2f4a]/90 to-[#0d6e5f]/80" />
                {/* Tricolor ribbon */}
                <svg className="absolute bottom-0 left-0 right-0 w-full h-14 z-[5]" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 36 C 160 8, 320 48, 600 20 L 600 60 L 0 60 Z" fill="#f28c28" opacity="0.95" />
                  <path d="M0 45 C 170 18, 340 54, 600 28 L 600 60 L 0 60 Z" fill="#f5f5f0" />
                  <path d="M0 53 C 180 28, 360 60, 600 36 L 600 60 L 0 60 Z" fill="#26ae90" />
                </svg>
                <div className="relative z-10 p-6 sm:p-7 lg:p-9 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0d9488] to-[#2dd4bf] flex items-center justify-center shadow-lg shadow-teal-500/30 flex-shrink-0">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm uppercase tracking-[0.2em]">Our Vision</span>
                  </div>
                  <h3 className="font-[var(--font-poppins)] text-xl sm:text-2xl font-semibold text-white leading-snug mb-5">
                    To build an inclusive, prosperous and developed India where every citizen has equal opportunities.
                  </h3>
                  <div className="w-10 h-[3px] bg-white/40 rounded-full mb-6" />
                  <ul className="space-y-3.5 mb-8">
                    {visionPoints.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <CheckDot color="#14b8a6" />
                        <span className="text-white/85 text-sm font-medium">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-auto inline-flex w-fit items-center gap-2 border border-white/40 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white hover:text-[#0a2540] transition-all group">
                    Our Vision <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Our Mission — light card */}
            <div ref={missionRef} className="h-full">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] sm:min-h-[460px] bg-white border border-blue-100 shadow-xl">
                <img src="/images/focus-education.png" alt="" className="absolute inset-y-0 right-0 w-1/2 sm:w-3/5 h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />
                <div className="relative z-10 p-6 sm:p-7 lg:p-9 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#38bdf8] flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#0f3a5f] font-semibold text-sm uppercase tracking-[0.2em]">Our Mission</span>
                  </div>
                  <h3 className="font-[var(--font-poppins)] text-xl sm:text-2xl font-semibold text-[#0f3a5f] leading-snug mb-5">
                    To work with dedication and honesty towards creating opportunities and ensuring progress for all.
                  </h3>
                  <div className="w-10 h-[3px] bg-[#2563eb]/50 rounded-full mb-6" />
                  <ul className="space-y-3.5 mb-8">
                    {missionPoints.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <CheckDot color="#2563eb" />
                        <span className="text-[#0f3a5f]/80 text-sm font-medium">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-auto inline-flex w-fit items-center gap-2 border border-[#2563eb]/50 text-[#2563eb] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-[#2563eb] hover:text-white transition-all group">
                    Our Mission <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Focus — focus area cards with images */}
      <section className="py-12 lg:py-16 bg-[#eef4fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Focus Areas</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              Where We <span className="text-[#26ae90]">Focus</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3">Creating meaningful impact across communities.</p>
          </div>

          <div ref={focusRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((a, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-6 pr-0 overflow-hidden group">
                {/* Brand color rises over the card content on hover (curved top-left corner); image stays above it */}
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-tl-[3rem]" style={{ background: `linear-gradient(to top, ${a.color}, ${a.color}b3)` }} />
                {/* Image flush to the right edge, heavily rounded on the left + soft tint circle behind */}
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-28 lg:w-32 z-10">
                  <div className="absolute -left-8 bottom-1 w-24 h-24 rounded-full" style={{ backgroundColor: `${a.color}16` }} />
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover rounded-l-[2.5rem]" />
                </div>
                <div className="relative z-20 pr-28 sm:pr-32 lg:pr-36 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-white" style={{ color: a.color }}>
                      <a.Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] group-hover:text-white transition-colors duration-300">{a.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-white/85 transition-colors duration-300">{a.desc}</p>
                  <a href="#contact" className="text-[#26ae90] text-sm font-semibold flex items-center gap-1 group-hover:text-[#f2f231] transition-colors duration-300 group/link">
                    Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="bg-[#066a9c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/crowd-slogan-placards.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#066a9c]/95 to-[#066a9c]/80" />
        <div className="relative z-10 py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 text-[#f2f231]/40 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p className="text-white text-lg sm:text-xl font-[var(--font-poppins)] font-light italic leading-relaxed">
                      &ldquo;Together, we can build a stronger, more inclusive and progressive India for future generations.&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-8 h-[2px] bg-[#f2f231] rounded-full" />
                      <div>
                        <div className="text-[#f2f231] font-semibold font-[var(--font-poppins)] text-sm">Bijendra Malik</div>
                        <div className="text-white/40 text-xs">National Spokesperson, AAP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block w-[1px] h-16 bg-white/20 flex-shrink-0" />
              <div className="flex-shrink-0 text-center lg:text-right">
                <h3 className="font-[var(--font-poppins)] text-2xl font-bold text-white mb-3">
                  Join the <span className="text-[#f2f231]">Mission</span>
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-[#26ae90]/30 uppercase text-xs tracking-wider group">
                    Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/social-work" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all uppercase text-xs tracking-wider">
                    View Social Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] relative z-10" />
      </section>
    </main>
  );
}
