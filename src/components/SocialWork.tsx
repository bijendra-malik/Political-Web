"use client";

import { Users, Megaphone, Heart, Wifi, ArrowRight } from "lucide-react";
import { useScrollReveal, useScrollStagger } from "@/hooks/useScrollReveal";

const items = [
  { Icon: Users, title: "Community Development", desc: "Working for overall development of rural and urban areas.", color: "#066a9c" },
  { Icon: Megaphone, title: "Public Initiatives", desc: "Initiatives in health, education, sanitation and infrastructure.", color: "#26ae90" },
  { Icon: Heart, title: "Social Activities", desc: "Active participation in social and cultural activities.", color: "#f28c28" },
  { Icon: Wifi, title: "Digital Awareness", desc: "Protecting digital literacy and technology for empowerment.", color: "#066a9c" },
];

const initiatives = [
  { image: "/images/kejriwal-meeting.jpg", title: "Education for All", desc: "Supporting quality education and providing resources for a brighter future of children.", color: "#066a9c" },
  { image: "/images/manishi-sosdiya.jpg", title: "Healthcare Support", desc: "Organizing health camps and ensuring better healthcare facilities for communities.", color: "#26ae90" },
  { image: "/images/political-rally-sanjay-singh.jpg", title: "Youth Empowerment", desc: "Encouraging skills, leadership and employment opportunities for the youth.", color: "#f28c28" },
  { image: "/images/healthcare-meeting.jpg", title: "Women Empowerment", desc: "Empowering women through education, skill development and financial independence.", color: "#286090" },
  { image: "/images/health-camp.jpg", title: "Community Development", desc: "Infrastructure improvement, clean water, sanitation and better living conditions.", color: "#066a9c" },
  { image: "/images/public-welfare.jpg", title: "Environmental Care", desc: "Promoting tree plantation, clean environment and sustainable living.", color: "#26ae90" },
  { image: "/images/formal-dinner.jpg", title: "Formal Events & Networking", desc: "Building connections at formal events for community development and partnerships.", color: "#f28c28" },
  { image: "/images/political-campaign.jpg", title: "Public Awareness", desc: "Campaigns on health, hygiene, digital literacy and civic responsibility.", color: "#286090" },
];

export default function SocialWork() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const cardsRef = useScrollStagger<HTMLDivElement>({ direction: "left", delay: 200 });
  const initiativesRef = useScrollReveal<HTMLDivElement>({ direction: "up", delay: 100 });
  const gridRef = useScrollStagger<HTMLDivElement>({ direction: "up", delay: 200 });

  return (
    <section id="social" className="py-10 lg:py-12 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#26ae90]" />
            <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Social Work</span>
            <div className="w-8 h-[2px] bg-[#26ae90]" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#066a9c]">
            Committed to <span className="text-[#26ae90]">Community Welfare</span>
          </h2>
        </div>

        {/* Cards — Original white card style */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
          {items.map((item, i) => {
            const Icon = item.Icon;
            return (
              <div key={i} className="card-hover rounded-2xl group cursor-default">
                <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-100 transition-all duration-300 group-hover:border-transparent group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: `linear-gradient(135deg, ${item.color}, #26ae90, ${item.color})`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: `${item.color}15` }}>
                    <Icon className="w-7 h-7 transition-all duration-300 group-hover:scale-110" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-base mb-2 group-hover:text-[#26ae90] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-1 text-[#26ae90] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Initiatives — Making a Difference */}
        <div ref={initiativesRef} className="mt-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Our Initiatives</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              Making a <span className="text-[#26ae90]">Difference</span> in People&apos;s Lives
            </h2>
          </div>
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {initiatives.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group relative">
                <div className="relative h-44 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#066a9c]/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}90` }}>
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-1 group-hover:text-[#26ae90] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
