"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Users, ShieldCheck, Building2, Heart } from "lucide-react";
import OurValuesBar from "@/components/about/OurValuesBar";

const profiles = [
  {
    role: "NATIONAL CONVENER, AAM AADMI PARTY",
    name: "Arvind Kejriwal",
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
    description:
      "Manish Sisodia is a prominent leader of the Aam Aadmi Party and has served as the Deputy Chief Minister of Delhi. Known for his transformative work in education and healthcare, he has been a champion of grassroots development and public welfare initiatives.",
    description2:
      "His commitment to improving public services and empowering communities has made him a respected leader.",
    image: "/images/about-me0mg/manishi-sosdiya-removebg-preview.png",
    accentColor: "#066a9c",
    imageOnLeft: true,
    decorImage: "/images/about-decor-lotus.png",
  },
];

const values = [
  {
    title: "People First Approach",
    description: "Putting people's needs at the center of every decision.",
    icon: Users,
    accentColor: "#26ae90",
  },
  {
    title: "Inclusive Development",
    description: "Working for equal opportunities and balanced growth for all.",
    icon: Building2,
    accentColor: "#f28c28",
  },
  {
    title: "Transparent Leadership",
    description: "Upholding honesty, integrity and accountability always.",
    icon: ShieldCheck,
    accentColor: "#066a9c",
  },
  {
    title: "Empowering Communities",
    description: "Strengthening communities through education, health and self-reliance.",
    icon: Heart,
    accentColor: "#0f5c4a",
  },
];

function ValueCard({
  title,
  description,
  icon: Icon,
  accentColor,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.08)] transition-all duration-300 p-4">
      <span
        className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300"
        style={{ backgroundColor: accentColor }}
      />
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div
            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            <Icon className="w-4 h-4" style={{ color: accentColor }} />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-gray-800 text-sm mb-0.5 truncate">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
          </div>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-all duration-300"
          style={{ backgroundColor: `${accentColor}18` }}
        >
          <ArrowRight className="w-3.5 h-3.5" style={{ color: accentColor }} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const mainRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const leftRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 100 });

  return (
    <section id="about" className="scroll-mt-20 bg-white relative overflow-hidden">
      {/* ============ HERO — left content column, right image panel in a corner card ============ */}
      <div ref={mainRef} className="relative overflow-hidden bg-gradient-to-b from-[#f4faf8] to-white py-16 lg:py-24">
        {/* Faint decorative Ashoka Chakra — sits behind the image panel */}
        <svg
          className="absolute top-0 right-0 lg:right-[24%] w-[480px] h-[480px] opacity-[0.08] pointer-events-none select-none hidden lg:block"
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
                x2={100 + 90 * Math.cos((angle * Math.PI) / 180)}
                y2={100 + 90 * Math.sin((angle * Math.PI) / 180)}
                stroke="#066a9c"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-stretch">
            {/* Left — content */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#26ae90]/10 border border-[#26ae90]/20 w-fit">
                <span className="text-[#26ae90] text-xs font-semibold">—</span>
                <span className="text-[#0f5c4a] font-bold text-xs uppercase tracking-[0.15em]">
                  About Us
                </span>
              </div>

              <div className="space-y-5">
                <h2 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#066a9c] leading-[1.12]">
                  Committed to Serve.
                  <br />
                  Working for <span className="text-[#26ae90]">Change.</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-base max-w-lg font-medium">
                  Dedicated to public service and inclusive development — building a
                  stronger future through transparency and people-centric governance.
                </p>
              </div>

              {/* 2x2 compact value cards */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                {values.map((v) => (
                  <ValueCard key={v.title} {...v} />
                ))}
              </div>
            </div>

            {/* Right — parliament image, corner card, image fully visible */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[420px] shadow-[0_20px_50px_rgb(0,0,0,0.15)]">
                <img
                  src="/images/about-bg-parliament.png"
                  alt="Parliament Building"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Just enough of a dark fade at the top for the button/link to stay readable — image itself stays clear */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

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
                    <span className="text-white font-semibold text-sm drop-shadow-md hover:text-[#d7f5ea] transition-colors cursor-pointer">
                      View Complete Profile →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ Profile Sections — full-width alternating rows ============ */}
      {profiles.map((profile, index) => (
        <div
          key={profile.name}
          className="py-14 lg:py-20"
          style={{ backgroundColor: index % 2 === 0 ? "#f3faf8" : "#ffffff" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              {/* Image side */}
              <div
                ref={profile.imageOnLeft ? leftRef : rightRef}
                className={`relative ${profile.imageOnLeft ? "lg:order-first" : "lg:order-last"}`}
              >
                {/* Decorative dot grid — sits on the outer edge of the image */}
                <div
                  className={`absolute top-8 w-16 h-16 opacity-30 pointer-events-none hidden lg:block ${
                    profile.imageOnLeft ? "-left-6" : "-right-6"
                  }`}
                >
                  <svg viewBox="0 0 64 64" fill={profile.accentColor}>
                    {[...Array(4)].map((_, r) =>
                      [...Array(4)].map((_, c) => (
                        <circle key={`dot-${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r={2} />
                      ))
                    )}
                  </svg>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Content side */}
              <div
                ref={profile.imageOnLeft ? rightRef : leftRef}
                className={`relative ${profile.imageOnLeft ? "lg:order-last" : "lg:order-first"}`}
              >
                {/* Decorative monument illustration — bottom corner, behind the text flow */}
                {profile.decorImage && (
                  <div className="absolute -bottom-8 -right-2 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 opacity-60 pointer-events-none hidden lg:block -z-0">
                    <img src={profile.decorImage} alt="" className="w-full h-full object-contain" />
                  </div>
                )}

                <div className="relative z-10 space-y-5 max-w-lg">
                  <div className="space-y-1.5">
                    <span
                      className="block text-xs font-bold uppercase tracking-[0.15em]"
                      style={{ color: profile.accentColor }}
                    >
                      {profile.role}
                    </span>
                    <h3 className="font-[var(--font-poppins)] text-4xl lg:text-5xl font-bold text-[#066a9c] leading-tight">
                      {profile.name}
                    </h3>
                    <div
                      className="w-14 h-1 rounded-full"
                      style={{ backgroundColor: profile.accentColor }}
                    />
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                    <p>{profile.description}</p>
                    <p>{profile.description2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ============ Our Values Bar ============ */}
      <div className="pt-12 lg:pt-16 pb-4 relative" style={{ backgroundColor: "#f3faf8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OurValuesBar />
        </div>
      </div>

      {/* ============ Closing decorative skyline strip ============ */}
      <div className="relative h-20 sm:h-28 overflow-hidden opacity-25 pointer-events-none" style={{ backgroundColor: "#f3faf8" }}>
        <img
          src="/images/about-decor-skyline.png"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}