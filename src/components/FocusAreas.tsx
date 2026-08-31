"use client";

import { Heart, Users, Building2, Leaf, Handshake } from "lucide-react";
import { useScrollReveal, useScrollStagger } from "@/hooks/useScrollReveal";

const areas = [
  { icon: Handshake, title: "Political Leadership", desc: "Meeting with Arvind Kejriwal — governance reforms and community welfare.", image: "/images/arvind-kejriwal-meeting.jpg" },
  { icon: Heart, title: "Healthcare", desc: "Better healthcare facilities and awareness for all.", image: "/images/healthcare-meeting.jpg" },
  { icon: Users, title: "Youth Empowerment", desc: "Creating opportunities, supporting innovation and leadership.", image: "/images/political-rally-sanjay-singh.jpg" },
  { icon: Building2, title: "Infrastructure", desc: "Developing modern infrastructure for strong communities.", image: "/images/manishi-sosdiya.jpg" },
  { icon: Leaf, title: "Environment", desc: "Protecting nature and promoting sustainable living.", image: "/images/rural-development.jpg" },
];

export default function FocusAreas() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const cardsRef = useScrollStagger<HTMLDivElement>({ direction: "up", delay: 200 });

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#f28c28]" />
            <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">My Focus Areas</span>
            <div className="w-8 h-[2px] bg-[#f28c28]" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#066a9c]">
            Building a Stronger, <span className="text-[#26ae90]">Better Tomorrow</span>
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="group text-center cursor-default">
                {/* Circular Image with Icon */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-4">
                  {/* Border ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#066a9c] to-[#26ae9c] p-[3px] group-hover:from-[#26ae9c] group-hover:to-[#066a9c] transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#26ae90] to-[#066a9c] rounded-full flex items-center justify-center shadow-lg border-[3px] border-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Text */}
                <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-1 group-hover:text-[#26ae90] transition-colors">{a.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[180px] mx-auto">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
