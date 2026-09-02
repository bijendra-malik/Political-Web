"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle, Images } from "lucide-react";

const journeySteps = [
  { icon: "📚", title: "Education", desc: "Shaped with strong academic values and a vision to make a positive difference.", color: "#066a9c" },
  { icon: "💼", title: "Professional Journey", desc: "Founder, Indexia Group of Companies. Director, Indexia Finance.", color: "#26ae90" },
  { icon: "🏛️", title: "Political Journey", desc: "MLA Candidate — Shamli Constituency (2022). Aam Aadmi Party.", color: "#f28c28" },
  { icon: "❤️", title: "Social Work", desc: "Working continuously for community welfare and public development.", color: "#066a9c" },
];

const values = [
  "Integrity & Transparency",
  "Youth Empowerment",
  "Education for All",
  "Sustainable Development",
  "Community Welfare",
  "Digital India",
];

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "50+", label: "Initiatives Led" },
  { number: "100+", label: "Villages Reached" },
  { number: "50K+", label: "Lives Impacted" },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        label="About Me"
        title="People First,"
        titleHighlight="Always"
        description="A leader. An entrepreneur. A committed citizen working for a stronger, inclusive India."
        bgImage="/images/join-mission-img.png"
      />

      {/* Who I Am — Split layout */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — Photo */}
            <div className="relative w-full lg:w-[48%] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-main.png"
                  alt="Bijendra Malik — Political Leader & Entrepreneur"
                  className="w-full h-[380px] sm:h-[440px] lg:h-[500px] object-contain object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#066a9c]/15 to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-5 -right-5 sm:-right-10 bg-white rounded-2xl  px-3 py-2 border border-gray-100 max-w-[180px]">
                <div className="text-[#26ae90] text-5xl font-bold font-[var(--font-poppins)]">15+</div>
                <div className="text-[#066a9c] text-[10px] mt-1">Years of leadership </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#26ae90]/10 rounded-2xl -z-10" />
            </div>

            {/* Right — Text Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-[2px] bg-[#f28c28]" />
                <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">About Me</span>
              </div>
              <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c] leading-tight">
                Committed to Serve.
                <br />
                Working for <span className="text-[#26ae90]">Change.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                I am deeply committed to public service, inclusive growth and the
                empowerment of every citizen. My journey is driven by the belief
                that real development happens when we work together with honesty,
                dedication and a clear vision for the future.
              </p>
              <p className="text-gray-500 leading-relaxed">
                From founding Indexia Group of Companies to serving as National Spokesperson
                for Aam Aadmi Party, every step has been driven by a vision for transparent
                governance and meaningful social impact.
              </p>
              {/* Values grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {values.map((v) => (
                  <div key={v} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 hover:bg-[#26ae90]/5 transition-colors group">
                    <div className="w-8 h-8 bg-[#26ae90]/15 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#26ae90]/25 transition-colors">
                      <CheckCircle className="w-4 h-4 text-[#26ae90]" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#066a9c] hover:bg-[#066a9c]/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg text-sm uppercase tracking-wider group mt-2">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — with banner background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/banner-im.png" alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-[#066a9c]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#066a9c]/90 via-[#066a9c]/70 to-[#066a9c]/90" />

        <div className="relative z-10 py-14 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-[#f2f231]" />
                <span className="text-[#f2f231] font-semibold text-sm uppercase tracking-[0.2em]">Our Impact</span>
                <div className="w-8 h-[2px] bg-[#f2f231]" />
              </div>
              <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-white">
                Making a <span className="text-[#f2f231]">Difference</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group text-center">
                  <div className="font-[var(--font-poppins)] text-3xl lg:text-4xl font-bold text-[#f2f231] group-hover:scale-110 transition-transform">
                    {s.number}
                  </div>
                  <div className="text-white/60 text-xs uppercase tracking-wider font-medium mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] relative z-10" />
      </section>

      {/* From Vision to Action — Journey Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#f28c28]" />
              <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">My Journey</span>
              <div className="w-8 h-[2px] bg-[#f28c28]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              From Vision to Action
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              A journey of dedication, responsibility and continuous service to the people.
            </p>
          </div>

          {/* Horizontal timeline for desktop, vertical for mobile */}
          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-[2px] bg-gradient-to-r from-[#066a9c] via-[#26ae90] to-[#f28c28]" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              {journeySteps.map((s, i) => (
                <div key={i} className="relative bg-white rounded-2xl pt-10 pb-6 px-6 shadow-sm border border-gray-100 transition-all duration-300 group text-center hover:-translate-y-2 hover:shadow-2xl lg:mx-3">
                  {/* Step number badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-[var(--font-poppins)] shadow-lg z-10"
                    style={{ backgroundColor: s.color }}>
                    {i + 1}
                  </div>
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 origin-left"
                    style={{ background: `linear-gradient(to right, ${s.color}, ${s.color})` }} />
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 mt-4 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-sm"
                    style={{ backgroundColor: `${s.color}15` }}>
                    {s.icon}
                  </div>
                  <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-base mb-2 group-hover:text-[#26ae90] transition-colors duration-300">{s.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-500 transition-colors duration-300">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Vision — Quote section (single row) */}
      <section className="py-14 lg:py-16 bg-[#066a9c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left — quote */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[#f2f231]" />
                <span className="text-[#f2f231] font-semibold text-sm uppercase tracking-[0.2em]">My Vision</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-[#f2f231]/40 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div>
                  <p className="text-white text-lg sm:text-xl font-[var(--font-poppins)] font-light italic leading-relaxed">
                    &ldquo;To build a stronger, progressive and inclusive India, where every
                    citizen gets equal opportunities to grow, learn and live with dignity.&rdquo;
                  </p>
                  <div className="mt-4 text-[#f2f231] font-semibold font-[var(--font-poppins)] text-sm">— Bijendra Malik</div>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden lg:block w-[1px] h-20 bg-white/20 flex-shrink-0" />
            {/* Right — button */}
            <div className="flex-shrink-0">
              <Link href="/social-work" className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-bold px-7 py-3.5 rounded-lg transition-all text-sm uppercase tracking-wider shadow-lg group">
                View Social Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
