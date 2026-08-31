"use client";

import { Users, Flag, Award, Landmark, Zap } from "lucide-react";

const steps = [
  {
    Icon: Users,
    title: "Active in Social Work",
    description: "Started working for community welfare and public service.",
    color: "#066a9c",
  },
  {
    Icon: Flag,
    title: "Joined Politics",
    description: "Became an active member of Aam Aadmi Party.",
    color: "#f28c28",
  },
  {
    Icon: Award,
    title: "Leadership Roles",
    description: "Held various responsibilities including National Spokesperson.",
    color: "#066a9c",
  },
  {
    Icon: Landmark,
    title: "MLA Candidate",
    description: "Shamli Constituency Candidate — 2022.",
    color: "#f28c28",
  },
  {
    Icon: Zap,
    title: "Continuing the Mission",
    description: "Committed to inclusive development and people's progress.",
    color: "#066a9c",
  },
];

export default function PoliticalJourney() {
  return (
    <section id="political" className="py-10 lg:py-12 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#26ae90]" />
            <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Political Journey</span>
            <div className="w-8 h-[2px] bg-[#26ae90]" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#066a9c]">
            A Journey of Dedication & Commitment
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Dotted connecting line */}
          <div className="hidden md:block absolute top-[48px] left-[8%] right-[8%] border-t-2 border-dashed border-[#066a9c]/25 z-0" />

          {/* Steps */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-2 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <div key={i} className="flex flex-col items-center text-center flex-1 group">
                  {/* Circle Icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-[88px] h-[88px] rounded-full flex items-center justify-center text-white shadow-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                      style={{
                        backgroundColor: step.color,
                        boxShadow: `0 6px 24px ${step.color}35`,
                      }}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    {/* Pulse ring on hover */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        border: `2px solid ${step.color}`,
                        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-2 group-hover:text-[#26ae90] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[170px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
