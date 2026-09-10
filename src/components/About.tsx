"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Users, ShieldCheck, Building2, Heart } from "lucide-react";
import OurValuesBar from "@/components/about/OurValuesBar";

const profiles = [
  {
    name: "Arvind Kejriwal",
    url: "https://archive.aamaadmiparty.org/teams/arvind-kejriwal/",
    title: (
      <>
        Ex Chief Minister, Delhi
        <br />National Convener, Aam Aadmi Party
      </>
    ),
    description:
      "Arvind Kejriwal is a prominent Indian politician and the National Convener of the Aam Aadmi Party (AAP). Known for his commitment to transparent governance and anti-corruption activism, he has been a driving force behind reforms aimed at improving public services and empowering citizens.",
    description2:
      "His vision for a stronger, more inclusive India has inspired millions, and his leadership continues to shape the political landscape of the country.",
    image: "/images/about-me0mg/arvind-kejriwal-meeting-removebg-preview.png",
    accentColor: "#26ae90",
    imageOnLeft: true,
    decorImage: "/images/Imgs-AI/about-decor-india-gate.png",
  },
  {
    name: "Sanjay Singh",
    url: "https://delhi.gov.in/profile/shri-sanjay-singh",
    title: (
      <>
        Member of Parliament, Rajya Sabha
        <br />National Spokesperson, Aam Aadmi Party
      </>
    ),
    description:
      "Sanjay Singh is a senior leader of the Aam Aadmi Party and serves as its National Spokesperson. Known for his articulate communication and strong advocacy for public issues, he has been instrumental in shaping the party narrative.",
    description2:
      "His dedication to honest governance and people-centric policies has made him a respected figure in Indian politics.",
    image: "/images/about-me0mg/about-banner.png",
    accentColor: "#26ae90",
    imageOnLeft: false,
    decorImage: "",
  },
  {
    name: "Manish Sisodia",
    url: "https://archive.aamaadmiparty.org/teams/manish-sisodia/",
    title: (
      <>
        Ex Deputy Chief Minister, Delhi
        <br />Senior Leader, Aam Aadmi Party
      </>
    ),
    description:
      "Manish Sisodia is a senior leader of the Aam Aadmi Party. Known for his transformative work in education and healthcare.",
    description2:
      "His commitment to improving public services and empowering communities has made him a respected leader.",
    image: "/images/about-me0mg/manishi-sosdiya-removebg-preview.png",
    accentColor: "#26ae90",
    imageOnLeft: true,
    decorImage: "/images/Imgs-AI/about-decor-lotus.png",
  },
];

const PARTY_SITE_URL = "https://aamaadmiparty.org/";

const linkClassName =
  "font-medium text-[#066a9c] underline underline-offset-2 transition-colors duration-300 hover:text-[#26ae90] cursor-pointer";

function LinkedText({ text, name, url }: { text: string; name: string; url: string }) {
  // Link the leader's name (→ their profile) and "Aam Aadmi Party" (→ party site) inside the description,
  // the same way "Aam Aadmi Party" is linked — leaving the surrounding text untouched.
  const parts = text.split(new RegExp(`(${name}|Aam Aadmi Party)`, "g"));
  return (
    <>
      {parts.map((part, i) => {
        if (part === "Aam Aadmi Party") {
          return (
            <a key={i} href={PARTY_SITE_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              Aam Aadmi Party
            </a>
          );
        }
        if (part === name) {
          return (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              {name}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

function ValueCard({
  title,
  desc,
  icon: Icon,
  color,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-gray-100 overflow-hidden bg-white hover:bg-gray-50/50 transition-colors duration-300 p-4">
      <span className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300" style={{ backgroundColor: color }} />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${color}26` }}>
            <Icon className="w-4 h-4" style={{ color }} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm mb-0.5">{title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" style={{ backgroundColor: `${color}1a` }}>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" style={{ color }} />
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
      {/* Main About Content with Parliament Background */}
      <div ref={mainRef} className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
        <img src="/images/Imgs-AI/about-bg-parliament.png" alt="Parliament Building" className="absolute inset-0 w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-10 lg:py-10">
          {/* Left-aligned Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#26ae90]/10 border border-[#26ae90]/15 mb-6">
              <span className="text-gray-400 text-xs font-semibold">—</span>
              <span className="text-gray-500 font-bold text-xs uppercase tracking-[0.15em]">About Us</span>
            </div>
            <h2 className="font-[var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#066a9c] leading-[1.1] mb-6">
              Committed to Serve.<br />
              Working for <span className="text-[#26ae90]">Change.</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-base max-w-xl font-medium">
              Dedicated to public service, inclusive development and creating opportunities for all. Building a stronger future through transparency, integrity, and people-centric governance.
            </p>
          </div>

          {/* Values grid — one left-aligned column */}
          <div className="grid grid-cols-1 max-w-xl gap-4">
            <ValueCard title="People First Approach" desc="Putting people's needs at the center of every decision." icon={Users} color="#26ae90" />
            <ValueCard title="Transparent Leadership" desc="Upholding honesty, integrity and accountability always." icon={ShieldCheck} color="#26ae90" />
            <ValueCard title="Inclusive Development" desc="Working for equal opportunities and balanced growth for all." icon={Building2} color="#26ae90" />
            <ValueCard title="Empowering Communities" desc="Strengthening communities through education, health and self-reliance." icon={Heart} color="#26ae90" />
          </div>

          {/* CTA — standard size, centered below the cards */}
          <div className="flex justify-end mt-6 max-w-xl">
            <Link href="/about" className="group inline-flex items-center justify-center gap-2 bg-[#0f5c4a] hover:bg-[#0f5c4a]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#26ae90]/25 text-xs tracking-wider">
              Know More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      {profiles.map((profile, index) => (
        <div key={profile.name} className="py-8 lg:py-12" style={{ backgroundColor: index % 2 === 0 ? "#f3faf9" : "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 items-start">
              {/* Image Side */}
              <div ref={profile.imageOnLeft ? leftRef : rightRef} className={`relative ${profile.imageOnLeft ? "lg:order-first" : "lg:order-last"}`}>
                <div className="absolute -left-4 top-8 w-16 h-16 opacity-30 pointer-events-none hidden lg:block">
                  <svg viewBox="0 0 64 64" fill={profile.accentColor}>
                    {[...Array(4)].map((_, r) =>
                      [...Array(4)].map((_, c) => (
                        <circle key={`dot-${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r={2} />
                      ))
                    )}
                  </svg>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgb(0,0,0,0.07)]"
                  style={{ backgroundColor: profile.imageOnLeft ? "#f3faf9" : "#ffffff" }}>
                  <img src={profile.image} alt={profile.name} className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Content Side */}
              <div ref={profile.imageOnLeft ? rightRef : leftRef} className={`relative space-y-6 ${profile.imageOnLeft ? "lg:order-last" : "lg:order-first"}`}>

                {/* Decor monument — top-right corner, large, teal-tinted watermark */}
                {profile.decorImage && (
                  <div className="absolute top-0 right-0 w-40 h-40 lg:w-48 lg:h-48 pointer-events-none select-none hidden lg:block" style={{ opacity: 0.22 }}>
                    <img
                      src={profile.decorImage}
                      alt=""
                      className="w-full h-full object-contain object-top"
                      // style={{ filter: "invert(50%) sepia(60%) saturate(350%) hue-rotate(120deg)" }}
                    />
                  </div>
                )}

                <div className="relative z-10 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-[var(--font-poppins)] text-4xl lg:text-5xl font-bold text-[#066a9c] leading-tight">{profile.name}</h3>
                  </div>
                  <p className="text-base font-semibold" style={{ color: profile.accentColor }}>{profile.title}</p>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                    <p><LinkedText text={profile.description} name={profile.name} url={profile.url} /></p>
                    <p>{profile.description2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Our Values Bar */}
      <div className="py-0 lg:py-0">
        <OurValuesBar />
      </div>
    </section>
  );
}
