"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Users, ShieldCheck, Building2, Heart } from "lucide-react";
import OurValuesBar from "@/components/about/OurValuesBar";

const profiles = [
  {
    role: "NATIONAL CONVENER, AAM AADMI PARTY",
    name: "Arvind Kejriwal",
    title: "National Convener, Aam Aadmi Party",
    description:
      "Arvind Kejriwal is a prominent Indian politician and the National Convener of the Aam Aadmi Party (AAP). Known for his commitment to transparent governance and anti-corruption activism, he has been a driving force behind reforms aimed at improving public services and empowering citizens.",
    description2:
      "His vision for a stronger, more inclusive India has inspired millions, and his leadership continues to shape the political landscape of the country.",
    image: "/images/about-me0mg/arvind-kejriwal-meeting-removebg-preview.png",
    accentColor: "#26ae90",
    imageOnLeft: true,
    decorImage: "/images/about-decor-india-gate.png",
  },
  {
    role: "NATIONAL SPOKESPERSON, AAM AADMI PARTY",
    name: "Sanjay Singh",
    title: "National Spokesperson, Aam Aadmi Party",
    description:
      "Sanjay Singh is a senior leader of the Aam Aadmi Party and serves as its National Spokesperson. Known for his articulate communication and strong advocacy for public issues, he has been instrumental in shaping the party's narrative and connecting with citizens across India.",
    description2:
      "His dedication to honest governance and people-centric policies has made him a respected figure in Indian politics.",
    image: "/images/about-me0mg/about-banner.png",
    accentColor: "#f28c28",
    imageOnLeft: false,
    decorImage: "",
  },
  {
    role: "SENIOR LEADER, AAM AADMI PARTY",
    name: "Manish Sisodia",
    title: "Senior Leader, Aam Aadmi Party",
    description:
      "Manish Sisodia is a prominent leader of the Aam Aadmi Party and has served as the Deputy Chief Minister of Delhi. Known for his transformative work in education and healthcare, he has been a champion of grassrosts development and public welfare initiatives.",
    description2:
      "His commitment to improving public services and empowering communities has made him a respected leader.",
    image: "/images/about-me0mg/manishi-sosdiya-removebg-preview.png",
    accentColor: "#066a9c",
    imageOnLeft: true,
    decorImage: "/images/about-decor-lotus.png",
  },
];

export default function About() {
  const mainRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const leftRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 100 });

  return (
    <section id="about" className="scroll-mt-20 bg-white relative overflow-hidden">
      {/* Section 1: Main About Content with Parliament Background */}
      <div ref={mainRef} className="py-20 lg:py-28 relative bg-gradient-to-b from-gray-50/70 to-white">
        {/* Decorative Ashoka Chakra — large, faint, sits behind the heading and bleeds into the image column */}
        <svg
          className="absolute top-0 right-0 lg:right-[26%] w-[520px] h-[520px] opacity-[0.06] pointer-events-none select-none"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="92" stroke="#066a9c" strokeWidth="2" />
          <circle cx="100" cy="100" r="6" fill="#066a9c" />
          {[...Array(24)].map((_, i) => {
            const angle = (i * 360) / 24;
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={Math.round((100 + 90 * Math.cos((angle * Math.PI) / 180)) * 100) / 100}
                y2={Math.round((100 + 90 * Math.sin((angle * Math.PI) / 180)) * 100) / 100}
                stroke="#066a9c"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left side - Content + Values */}
            <div className="lg:col-span-2 space-y-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#26ae90]/10 border border-[#26ae90]/15">
                <span className="text-gray-400 text-xs font-semibold">—</span>
                <span className="text-gray-500 font-bold text-xs uppercase tracking-[0.15em]">
                  About Us
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="font-[var(--font-poppins)] text-5xl sm:text-6xl lg:text-6xl font-bold text-[#066a9c] leading-[1.1]">
                  Committed to Serve.
                  <br />
                  Working for <span className="text-[#26ae90]">Change.</span>
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg max-w-2xl font-medium">
                  Dedicated to public service, inclusive development and creating opportunities
                  for all. Building a stronger future through transparency, integrity, and people-centric governance.
                </p>
              </div>

              {/* Values 2x2 Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-4">
                    <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#26ae90" }} />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(38, 174, 144, 0.15)" }}>
                          <Users className="w-4 h-4" style={{ color: "#26ae90" }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-0.5">People First Approach</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">Putting people's needs at the center of every decision.</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(38, 174, 144, 0.1)" }}>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" style={{ color: "#26ae90" }} />
                      </div>
                    </div>
                  </div>
                  <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-4">
                    <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#066a9c" }} />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(6, 106, 156, 0.15)" }}>
                          <ShieldCheck className="w-4 h-4" style={{ color: "#066a9c" }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-0.5">Transparent Leadership</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">Upholding honesty, integrity and accountability always.</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(6, 106, 156, 0.1)" }}>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" style={{ color: "#066a9c" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-4">
                    <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#f28c28" }} />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(242, 140, 40, 0.15)" }}>
                          <Building2 className="w-4 h-4" style={{ color: "#f28c28" }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-0.5">Inclusive Development</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">Working for equal opportunities and balanced growth for all.</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(242, 140, 40, 0.1)" }}>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" style={{ color: "#f28c28" }} />
                      </div>
                    </div>
                  </div>
                  <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-4">
                    <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: "#0f5c4a" }} />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "rgba(15, 92, 74, 0.15)" }}>
                          <Heart className="w-4 h-4" style={{ color: "#0f5c4a" }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-0.5">Empowering Communities</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">Strengthening communities through education, health and self-reliance.</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: "rgba(15, 92, 74, 0.1)" }}>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" style={{ color: "#0f5c4a" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Parliament Background + Button */}
            <div className="relative lg:col-span-1">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[420px] shadow-[0_20px_50px_rgb(0,0,0,0.08)]">
                <img
                  src="/images/about-bg-parliament.png"
                  alt="Parliament Background"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Fades white at the TOP so the sky blends into the page background, plus a soft bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

                <div className="relative z-10 flex flex-col items-end h-full pt-6 pb-8 px-6">
                  <div className="flex flex-col items-end gap-2">
                    <Link
                      href="/about"
                      className="group inline-flex items-center justify-center gap-3 bg-[#0f5c4a] hover:bg-[#0f5c4a]/90 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#26ae90]/25 text-xs uppercase tracking-wider"
                    >
                      Know More About Us
                      <div className="w-7 h-7 bg-white/25 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                    <span className="text-[#066a9c] font-semibold text-sm hover:text-[#26ae90] transition-colors">
                      View Complete Profile →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      {profiles.map((profile, index) => (
        <div
          key={profile.name}
          className="py-8 lg:py-12"
          style={{ backgroundColor: index % 2 === 0 ? "#f9fafb" : "#ffffff" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Role Badge */}
            <div
              className="mb-8 inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
              style={{ 
                backgroundColor: `${profile.accentColor}15`,
                color: profile.accentColor
              }}
            >
              {profile.role}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Image Side */}
              <div
                ref={profile.imageOnLeft ? leftRef : rightRef}
                className={`relative ${profile.imageOnLeft ? "lg:order-first" : "lg:order-last"}`}
              >
                {/* Decorative dots */}
                <div className="absolute -left-4 top-8 w-16 h-16 opacity-30 pointer-events-none hidden lg:block">
                  <svg viewBox="0 0 64 64" fill={profile.accentColor}>
                    {[...Array(4)].map((_, r) =>
                      [...Array(4)].map((_, c) => (
                        <circle key={`dot-${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r={2} />
                      ))
                    )}
                  </svg>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-8">
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div
                ref={profile.imageOnLeft ? rightRef : leftRef}
                className={`relative space-y-6 ${profile.imageOnLeft ? "lg:order-last" : "lg:order-first"}`}
              >
                {/* Decorative illustration */}
                {profile.decorImage && (
                  <div className="absolute -right-4 -top-4 w-24 h-24 opacity-40 pointer-events-none hidden lg:block">
                    <img src={profile.decorImage} alt="" className="w-full h-full object-contain" />
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-[var(--font-poppins)] text-4xl lg:text-5xl font-bold text-[#066a9c] leading-tight">
                    {profile.name}
                  </h3>
                  <div className="w-16 h-1 rounded-full" style={{ backgroundColor: profile.accentColor }} />
                </div>

                <p className="text-lg font-semibold" style={{ color: profile.accentColor }}>
                  {profile.title}
                </p>

                <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                  <p>{profile.description}</p>
                  <p>{profile.description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Our Values Bar */}
      <div className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OurValuesBar />
        </div>
      </div>

     
    </section>
  );
}