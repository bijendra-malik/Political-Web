"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Eye, Zap, GraduationCap, Stethoscope, Users, Building2, Leaf, Heart, ArrowRight } from "lucide-react";
import { useScrollReveal, useScrollStagger } from "@/hooks/useScrollReveal";

const visionPoints = [
  { text: "Empowered and educated youth leading the nation", icon: "🎓" },
  { text: "Strong and inclusive communities thriving together", icon: "🏘️" },
  { text: "Sustainable development protecting our future", icon: "🌱" },
  { text: "Transparent governance building public trust", icon: "🏛️" },
  { text: "Unity, peace and national progress for all", icon: "🤝" },
];

const missionSteps = [
  { num: "01", title: "Education & Skills", desc: "Quality education and skill development programs for youth across rural and urban India.", color: "#066a9c" },
  { num: "02", title: "Healthcare Access", desc: "Accessible and affordable healthcare facilities ensuring well-being of every citizen.", color: "#26ae90" },
  { num: "03", title: "Employment Growth", desc: "Creating jobs, supporting entrepreneurship and fostering economic development.", color: "#f28c28" },
  { num: "04", title: "Infrastructure", desc: "Modern infrastructure, clean environment and smart facilities for communities.", color: "#286090" },
  { num: "05", title: "Social Justice", desc: "Equal opportunities, social harmony and justice for every individual.", color: "#066a9c" },
];

const focusAreas = [
  { Icon: GraduationCap, title: "Education", progress: 85, color: "#066a9c" },
  { Icon: Stethoscope, title: "Healthcare", progress: 75, color: "#26ae90" },
  { Icon: Users, title: "Youth Empowerment", progress: 90, color: "#f28c28" },
  { Icon: Building2, title: "Infrastructure", progress: 70, color: "#286090" },
  { Icon: Leaf, title: "Environment", progress: 80, color: "#26ae90" },
  { Icon: Heart, title: "Community", progress: 95, color: "#066a9c" },
];

export default function VisionMissionPage() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: "up" });
  const visionRef = useScrollReveal<HTMLDivElement>({ direction: "left", delay: 100 });
  const missionRef = useScrollReveal<HTMLDivElement>({ direction: "right", delay: 300 });
  const stepsRef = useScrollStagger<HTMLDivElement>({ direction: "left", delay: 150 });
  const focusRef = useScrollStagger<HTMLDivElement>({ direction: "up", delay: 100 });

  return (
    <main className="flex-1">
      <PageHero
        title="Vision &"
        titleHighlight="Mission"
        subtitle="Building a Progressive India"
        description="A vision for inclusive growth and a mission to empower every citizen."
        bgImage="/images/vision-mission-img-01.png"
      />

      {/* Vision & Mission — Split with images */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Our Purpose</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              What We <span className="text-[#26ae90]">Stand For</span>
            </h2>
          </div>

          {/* Vision — Full width image + text overlay */}
          <div ref={visionRef} className="mb-16">
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0">
                <img src="/images/vision-img01.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#071525]/80 to-[#071525]/40" />
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#066a9c] to-[#26ae90] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[#f2f231] font-semibold text-xs uppercase tracking-[0.2em]">Our Vision</div>
                      <div className="text-white/30 text-[10px] uppercase tracking-wider">What we aspire to achieve</div>
                    </div>
                  </div>
                  <h3 className="font-[var(--font-poppins)] text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
                    To build an inclusive, prosperous and developed India where every citizen has equal opportunities.
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xl">
                    A vision rooted in the belief that real development happens when we work together with honesty, dedication and a clear vision for the future.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-[380px]">
                  <div className="space-y-3">
                    {visionPoints.map((p, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:bg-white/10 transition-all">
                        <span className="text-xl">{p.icon}</span>
                        <span className="text-white/80 text-sm font-medium">{p.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission — Full width image + text overlay (reversed) */}
          <div ref={missionRef}>
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0">
                <img src="/images/vision-mission-img-01.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#071525]/95 via-[#071525]/80 to-[#071525]/40" />
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row-reverse items-center gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f28c28] to-[#f2f231] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-[#f2f231] font-semibold text-xs uppercase tracking-[0.2em]">Our Mission</div>
                      <div className="text-white/30 text-[10px] uppercase tracking-wider">How we make it happen</div>
                    </div>
                  </div>
                  <h3 className="font-[var(--font-poppins)] text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
                    To work with dedication and honesty towards creating opportunities and ensuring progress for all.
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xl">
                    Every initiative is driven by a commitment to improve lives, build stronger communities and create lasting impact.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full lg:w-[380px]">
                  <div className="space-y-3">
                    {missionSteps.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:bg-white/10 transition-all">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ backgroundColor: `${s.color}40` }}>
                          <span className="text-white">{s.num}</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-sm">{s.title}</div>
                          <div className="text-white/40 text-xs leading-relaxed mt-0.5">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas — With animated progress bars */}
      <section className="py-16 lg:py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#26ae90]" />
              <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Focus Areas</span>
              <div className="w-8 h-[2px] bg-[#26ae90]" />
            </div>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
              Where We <span className="text-[#26ae90]">Focus</span>
            </h2>
          </div>
          <div ref={focusRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${a.color}12` }}>
                    <a.Icon className="w-6 h-6" style={{ color: a.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm">{a.title}</h3>
                    <div className="text-gray-400 text-[11px] mt-0.5">{a.progress}% commitment</div>
                  </div>
                  <div className="font-[var(--font-poppins)] font-bold text-xl" style={{ color: a.color }}>{a.progress}%</div>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${a.progress}%`, background: `linear-gradient(90deg, ${a.color}, ${a.color}cc)` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote + CTA */}
      <section className="bg-[#066a9c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/vision-mission-img-01.png" alt="" className="w-full h-full object-cover" />
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
