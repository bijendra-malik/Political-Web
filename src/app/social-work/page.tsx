"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Users, Heart, Megaphone, Wifi, GraduationCap, Stethoscope, Leaf, Building2, X, ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";

const principles = [
  { Icon: Users, title: "People First", desc: "Every initiative is inspired by the well-being of people.", color: "#066a9c" },
  { Icon: Heart, title: "Inclusive Growth", desc: "Creating equal opportunities for every individual.", color: "#26ae90" },
  { Icon: Megaphone, title: "Community Driven", desc: "Building strong communities through active participation.", color: "#f28c28" },
  { Icon: Wifi, title: "Sustainable Impact", desc: "Long-term solutions for lasting social change and development.", color: "#286090" },
];

const initiatives = [
  { image: "/images/kejriwal-meeting.jpg", title: "Education for All", desc: "Supporting quality education and providing resources for a brighter future of children.", Icon: GraduationCap, color: "#066a9c" },
  { image: "/images/community-development.jpg", title: "Healthcare Support", desc: "Organizing health camps and ensuring better healthcare facilities for communities.", Icon: Stethoscope, color: "#26ae90" },
  { image: "/images/youth-engagement.jpg", title: "Youth Empowerment", desc: "Encouraging skills, leadership and employment opportunities for the youth.", Icon: Users, color: "#f28c28" },
  { image: "/images/healthcare-meeting.jpg", title: "Women Empowerment", desc: "Empowering women through education, skill development and financial independence.", Icon: Heart, color: "#286090" },
  { image: "/images/health-camp.jpg", title: "Community Development", desc: "Infrastructure improvement, clean water, sanitation and better living conditions.", Icon: Building2, color: "#066a9c" },
  { image: "/images/green-flag-procession.jpg", title: "Environmental Care", desc: "Promoting tree plantation, clean environment and sustainable living.", Icon: Leaf, color: "#26ae90" },
  { image: "/images/social-welfare.jpg", title: "Skill Development", desc: "Training programs for vocational skills and self-employment opportunities.", Icon: Megaphone, color: "#f28c28" },
  { image: "/images/political-campaign.jpg", title: "Public Awareness", desc: "Campaigns on health, hygiene, digital literacy and civic responsibility.", Icon: Wifi, color: "#286090" },
];

const helpCards = [
  { Icon: Users, color: "#066a9c", title: "Volunteer With Us", desc: "Join our team of volunteers for health camps, education drives and community programmes across the region." },
  { Icon: Heart, color: "#f28c28", title: "Support an Initiative", desc: "Partner with or support an initiative in education, healthcare, women empowerment or the environment." },
  { Icon: Megaphone, color: "#26ae90", title: "Invite Us / Request Support", desc: "Invite us to your village or community programme, or request support for a cause that matters to you." },
];

export default function SocialWorkPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox(prev => prev !== null ? (prev + 1) % initiatives.length : null);
  const prevImage = () => setLightbox(prev => prev !== null ? (prev - 1 + initiatives.length) % initiatives.length : null);

  return (
    <main className="flex-1">
      {/* Panel position — set it yourself, per page (desktop only; mobile always centered):
          panelJustify="start|center|end"  → justify-content (vertical: end = bottom, start = top)
          panelAlign="start|center|end"    → align-items (horizontal: start = left, end = right)
          panelOffset={{ top: "60px", left: "48px" }} → exact px/% placement (overrides both) */}
      <PageHero
        title="Social Work & Community Initiatives"
        subtitle="Giving Back to Society"
        description="Working together to build a stronger, inclusive and empowered society."
        bgImage="/images/crop-imgs.png"
        panelJustify="end"
        panelAlign="center"
        mobileJustify="end"
      />

      {/* Principles */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p, i) => {
              const Icon = p.Icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all relative overflow-hidden">
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: `linear-gradient(135deg, ${p.color}, #26ae90, ${p.color})`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }} />
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all relative z-10" style={{ backgroundColor: `${p.color}15` }}>
                    <Icon className="w-7 h-7" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-1 relative z-10">{p.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed relative z-10">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-12 lg:py-12 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Our Initiatives</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              Making a <span className="text-[#26ae90]">Difference</span> in People&apos;s Lives
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all group relative">
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: `linear-gradient(135deg, ${item.color}, #26ae90, ${item.color})`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }} />
                  <div className="relative h-52 overflow-hidden cursor-pointer z-10" onClick={() => openLightbox(i)}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#066a9c]/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <svg className="w-6 h-6 text-[#066a9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}90` }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-base mb-2 group-hover:text-[#26ae90] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                    <a href="#" className="text-[#26ae90] text-sm font-semibold flex items-center gap-1 group/link">
                      View Details
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How You Can Help — get involved */}
      <section className="py-8 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Get Involved</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              How You Can <span className="text-[#26ae90]">Help</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">Every hand matters. Join us in bringing education, healthcare and opportunity to every community.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {helpCards.map((c, i) => (
              <div key={i} className="bg-[#f5f7fa] rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#26ae90]/30 transition-all group text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${c.color}18` }}>
                  <c.Icon className="w-7 h-7" style={{ color: c.color }} />
                </div>
                <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-base mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-[#26ae90]/30">
                  Get In Touch <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — one row layout */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#066a9c] to-[#286090] rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-xl">
            <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] absolute top-0 left-0 right-0" />
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Quote text */}
              <div className="flex-1">
                <p className="text-white text-sm sm:text-base font-[var(--font-poppins)] font-light italic leading-relaxed">
                  &ldquo;True leadership is not about holding power — it is about empowering others and serving the people with integrity and compassion.&rdquo;
                </p>
              </div>
              {/* Divider */}
              <div className="hidden lg:block w-[1px] h-12 bg-white/20" />
              {/* Attribution + Button */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <div>
                  <div className="text-[#f2f231] font-[var(--font-poppins)] font-bold text-sm">Bijendra Malik</div>
                  <div className="text-white/50 text-xs">Political Leader & Entrepreneur</div>
                </div>
                <a href="/contact" className="bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all whitespace-nowrap">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-5 h-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img src={initiatives[lightbox].image} alt={initiatives[lightbox].title} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <div className="text-center mt-4">
              <h3 className="text-white font-[var(--font-poppins)] font-semibold text-lg">{initiatives[lightbox].title}</h3>
              <p className="text-white/50 text-sm mt-1">{lightbox + 1} / {initiatives.length}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
