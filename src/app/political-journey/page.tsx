"use client";

import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Users, Flag, Award, Landmark, Quote, ArrowRight, ChevronRight, MapPin, Target } from "lucide-react";
import { useScrollReveal, useScrollStagger } from "@/hooks/useScrollReveal";

const milestones = [
  {
    year: "2021",
    title: "Beginning the Political Journey",
    subtitle: "Aam Aadmi Party",
    desc: "Began my political journey with the Aam Aadmi Party and contested the Assembly election from Shamli, carrying a commitment to public service, development and accountable governance.",
    icon: Flag,
    color: "#f28c28",
    image: "/images/campaign-event.jpg",
  },
  {
    year: "2022",
    title: "District Organisational Responsibilities",
    subtitle: "Muzaffarnagar & Shamli",
    desc: "Served as District Prabhari in Muzaffarnagar and Shamli, working with party workers and strengthening organisational engagement at the grassroots.",
    icon: Users,
    color: "#26ae90",
    image: "/images/infrastructure-visit.png",
  },
  {
    year: "2023",
    title: "Saharanpur & Party Spokesperson",
    subtitle: "Growing Responsibilities",
    desc: "Served as District Prabhari for Saharanpur and took on responsibilities as a party spokesperson, communicating the party's vision and engaging with people on public issues.",
    icon: Award,
    color: "#066a9c",
    image: "/images/media-interview.jpg",
  },
  {
    year: "2024",
    title: "Kairana & Shamli",
    subtitle: "Grassroots Organisation",
    desc: "Worked across Kairana and Shamli with party workers and local communities, focusing on organisational strengthening and public engagement.",
    icon: Landmark,
    color: "#286090",
    image: "/images/public-rally-shamli.jpg",
  },
  {
    year: "2025",
    title: "Expanding Field Responsibilities",
    subtitle: "Serving on the Ground",
    desc: "Continued field-level organisational and public engagement responsibilities across different areas, working closely with communities and party workers.",
    icon: Target,
    color: "#26ae90",
    image: "/images/public-rally.jpg",
  },
  {
    year: "2026",
    title: "UP-Wide Padayatra",
    subtitle: "Rojgaar Do, Samajik Nyaay Do",
    desc: "Participated in the 'Rojgaar Do, Samajik Nyaay Do' padayatra across Uttar Pradesh, engaging with people and raising issues related to employment and social justice.",
    icon: MapPin,
    color: "#f28c28",
    image: "/images/education-drive.jpg",
  },
];

const stats = [
  { value: "2021", label: "Political Journey Began", icon: Flag },
  { value: "2022", label: "District-Level Responsibilities", icon: Users },
  { value: "2023", label: "Party Spokesperson", icon: Award },
  { value: "2026", label: "UP-Wide Padayatra", icon: MapPin },
];

export default function PoliticalJourneyPage() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const timelineRef = useScrollReveal<HTMLDivElement>({ direction: "up", delay: 200 });
  const statsRef = useScrollStagger<HTMLDivElement>({ direction: "up", delay: 100 });
  const lineFillRef = useRef<HTMLDivElement>(null);
  const lineDotRef = useRef<HTMLDivElement>(null);
  // Current milestone the traveling dot is on — drives its color and re-fires the pulse ring.
  const [dotMilestone, setDotMilestone] = useState(0);
  const dotMilestoneRef = useRef(0);

  // Fill the timeline's center line progressively as the visitor scrolls through the milestones.
  useEffect(() => {
    const updateLineFill = () => {
      const el = timelineRef.current;
      const fill = lineFillRef.current;
      const dot = lineDotRef.current;
      if (!el || !fill || !dot) return;
      // The line only renders on desktop (lg:block), so skip below the lg breakpoint.
      if (window.innerWidth < 1024) {
        fill.style.height = "0%";
        dot.style.top = "0%";
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0% when the timeline's top reaches the bottom of the viewport,
      // 100% when its bottom exits the top of the viewport.
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      const pct = progress * 100;
      fill.style.height = `${pct}%`;
      // Pointer dot rides the tip of the fill; when it reaches a new milestone,
      // update its color and re-fire the pulse ring (via state, keyed remount).
      dot.style.top = `${pct}%`;
      const idx = Math.min(milestones.length - 1, Math.max(0, Math.floor(progress * milestones.length)));
      if (idx !== dotMilestoneRef.current) {
        dotMilestoneRef.current = idx;
        setDotMilestone(idx);
      }
    };

    updateLineFill();
    window.addEventListener("scroll", updateLineFill, { passive: true });
    window.addEventListener("resize", updateLineFill);
    return () => {
      window.removeEventListener("scroll", updateLineFill);
      window.removeEventListener("resize", updateLineFill);
    };
  }, []);

  return (
    <main className="flex-1">
      <PageHero
        title="A Journey of"
        titleHighlight="Dedication & Service"
        subtitle="My Political Journey"
        description="From a commitment to society to taking responsibility in public life — every step guided by the vision for a stronger, inclusive India."
        bgImage="/images/journey-hero.png"
        panelPosition="center"
        bgPosition="top"
        mobileBgPosition="left-top"
        mobileJustify="end"
        mobileDimImage
      />

      {/* Intro text */}
      <section className="py-12 lg:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={headerRef}>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#f28c28]" />
              <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">My Journey</span>
              <div className="w-8 h-[2px] bg-[#f28c28]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c] mb-4">
              From Vision to <span className="text-[#26ae90]">Action</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              Every milestone in my journey has been driven by a commitment to serve the people, build communities and create lasting impact through transparent governance.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline — Custom vertical timeline */}
      <section className="py-12 lg:py-20 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={timelineRef} className="relative">
            {/* Center line — desktop, green track that fills on scroll */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-[#26ae90]/25">
              <div
                ref={lineFillRef}
                className="w-full bg-gradient-to-b from-[#066a9c] via-[#26ae90] to-[#f28c28]"
                style={{ height: "0%" }}
              />
            </div>
            {/* Traveling pointer dot on the center line — pulses on each milestone */}
            <div
              ref={lineDotRef}
              className="hidden lg:block absolute left-1/2 top-0 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 z-[5]"
              style={{ top: "0%" }}
            >
              {/* Ring burst — remounts (key) every time a milestone is reached */}
              <span
                key={`dot-ring-${dotMilestone}`}
                className="milestone-ring"
                style={{ backgroundColor: milestones[dotMilestone].color }}
              />
              {/* Dot core — picks up the current milestone's color */}
              <span
                className="absolute inset-0 rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgba(6,21,37,0.15),0_2px_6px_rgba(6,21,37,0.25)] transition-colors duration-300"
                style={{ backgroundColor: milestones[dotMilestone].color }}
              />
            </div>

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i < milestones.length - 1 ? "lg:mb-16" : ""}`}>
                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg" style={{ backgroundColor: m.color }}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content — alternates left/right */}
                    <div className={`${isLeft ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group ${isLeft ? "lg:ml-auto" : ""} max-w-[500px]`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${m.color}20` }}>
                            <Icon className="w-5 h-5" style={{ color: m.color }} />
                          </div>
                          <div>
                            <div className="font-[var(--font-poppins)] font-bold text-2xl" style={{ color: m.color }}>{m.year}</div>
                            <div className="text-gray-400 text-xs uppercase tracking-wider">{m.subtitle}</div>
                          </div>
                        </div>
                        <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-lg mb-2 group-hover:text-[#26ae90] transition-colors">{m.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Image — opposite side */}
                    <div className={`${isLeft ? "lg:order-2 lg:pl-12" : "lg:pr-12"} mt-6 lg:mt-0`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg group max-w-[500px]">
                        <img src={m.image} alt={m.title} className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                            <span className="text-[#066a9c] font-[var(--font-poppins)] font-semibold text-[10px] uppercase tracking-wider">{m.subtitle}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote + Stats */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/Imgs-AI/journey-quote-bg.png" alt="" className="w-full h-full object-cover object-center" />
        </div>

        <div className="relative z-10 py-14 lg:py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Quote */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f2f231]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-[#f2f231]" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-white text-xl sm:text-2xl font-[var(--font-poppins)] font-light italic leading-relaxed">
                      &ldquo;Politics is not about power, it is about responsibility.&rdquo;
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

              <div className="hidden lg:block w-[1px] h-20 bg-white/20 flex-shrink-0" />

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-4 flex-shrink-0">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all group text-center min-w-[150px]">
                    <div className="w-10 h-10 bg-[#f2f231]/15 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <s.icon className="w-5 h-5 text-[#f2f231]" />
                    </div>
                    <div className="font-[var(--font-poppins)] text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] relative z-10" />
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/aap-supporters-celebrate.jpg" alt="" className="w-full h-full object-cover object-center" style={{ objectPosition: "center " }} />
        </div>
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-gray-900/30 to-gray-900/30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the <span className="text-[#f2f231]">Mission</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Be part of the journey towards a stronger, more inclusive and progressive society.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#26ae90]/30 uppercase text-sm tracking-wider group">
              Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/social-work" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-[#066a9c] font-semibold px-8 py-4 rounded-xl transition-all uppercase text-sm tracking-wider group">
              View Social Work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90]" />
      </section>
    </main>
  );
}
