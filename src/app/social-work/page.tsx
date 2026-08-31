"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Users, Heart, Megaphone, Wifi, GraduationCap, Stethoscope, Leaf, Building2, X, ChevronLeft, ChevronRight, Quote, ArrowUpRight, ArrowRight } from "lucide-react";

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
  { image: "/images/public-welfare.jpg", title: "Environmental Care", desc: "Promoting tree plantation, clean environment and sustainable living.", Icon: Leaf, color: "#26ae90" },
  { image: "/images/social-welfare.jpg", title: "Skill Development", desc: "Training programs for vocational skills and self-employment opportunities.", Icon: Megaphone, color: "#f28c28" },
  { image: "/images/political-campaign.jpg", title: "Public Awareness", desc: "Campaigns on health, hygiene, digital literacy and civic responsibility.", Icon: Wifi, color: "#286090" },
];

const stats = [
  { number: "50+", label: "Initiatives", Icon: Megaphone },
  { number: "100+", label: "Villages Reached", Icon: Building2 },
  { number: "50000+", label: "People Benefited", Icon: Users },
  { number: "15+", label: "Years of Service", Icon: Heart },
];

const gallery = [
  { image: "/images/formal-dinner.jpg", title: "Formal Dinner Event" },
  { image: "/images/meeting-festive.jpg", title: "Meeting at Festive Event" },
  { image: "/images/meeting-indoor.jpg", title: "Indoor Meeting" },
  { image: "/images/meeting-sports-jersey.jpg", title: "Meeting with Sports Memorabilia" },
  { image: "/images/meeting-garden.jpg", title: "Garden Discussion" },
  { image: "/images/media-interview.jpg", title: "Media Interview" },
  { image: "/images/political-rally-sanjay-singh.jpg", title: "Political Rally with Sanjay Singh" },
  { image: "/images/meeting-dining.jpg", title: "Dining Meeting" },
  { image: "/images/meeting-hotel.jpg", title: "Hotel Meeting" },
  { image: "/images/arvind-kejriwal-meeting.jpg", title: "Meeting with Arvind Kejriwal" },
  { image: "/images/profile-bijendra-malik.jpg", title: "Bijendra Malik — Profile" },
  { image: "/images/official-portrait.jpg", title: "Official Portrait" },
  { image: "/images/profile-alt.jpg", title: "Alternate Profile" },
  { image: "/images/profile-shot.jpg", title: "Profile Shot" },
  { image: "/images/business-leadership.jpg", title: "Business Leadership" },
  { image: "/images/campaign-event.jpg", title: "Campaign Event" },
  { image: "/images/public-rally-shamli.jpg", title: "Public Rally — Shamli" },
  { image: "/images/community-meeting.jpg", title: "Community Meeting" },
  { image: "/images/rural-development.jpg", title: "Rural Development" },
  { image: "/images/infrastructure-visit.jpg", title: "Infrastructure Visit" },
  { image: "/images/public-rally.jpg", title: "Public Rally" },
  { image: "/images/education-drive.jpg", title: "Education Drive" },
  { image: "/images/health-camp-event.jpg", title: "Health Camp" },
  { image: "/images/social-gathering.jpg", title: "Social Gathering" },
  { image: "/images/community-welfare.jpg", title: "Community Welfare" },
  { image: "/images/development-visit.jpg", title: "Development Visit" },
];

export default function SocialWorkPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [galleryPage, setGalleryPage] = useState(1);
  const galleryPerPage = 16;
  const totalGalleryPages = Math.ceil(gallery.length / galleryPerPage);
  const paginatedGallery = gallery.slice((galleryPage - 1) * galleryPerPage, galleryPage * galleryPerPage);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox(prev => prev !== null ? (prev + 1) % gallery.length : null);
  const prevImage = () => setLightbox(prev => prev !== null ? (prev - 1 + gallery.length) % gallery.length : null);

  return (
    <main className="flex-1">
      <PageHero
        title="Social Work &"
        titleHighlight="Community Initiatives"
        subtitle="Giving Back to Society"
        description="Working together to build a stronger, inclusive and empowered society."
        bgImage="/images/social-work01-img.png"
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
      <section className="py-16 lg:py-24 bg-[#f5f7fa]">
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
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* Photo Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-14">
            <div className="text-center flex-1">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-[#26ae90]" />
                <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Gallery</span>
                <div className="w-8 h-[2px] bg-[#26ae90]" />
              </div>
              <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
                Our <span className="text-[#26ae90]">Journey</span> in Pictures
              </h2>
            </div>
            <span className="text-gray-400 text-sm font-medium hidden sm:block">{gallery.length} Photos</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedGallery.map((item, i) => {
              const globalIndex = (galleryPage - 1) * galleryPerPage + i;
              return (
                <div key={globalIndex} className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#26ae90]/30" onClick={() => openLightbox(globalIndex)}>
                  <div className="relative aspect-square overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-5 h-5 text-[#066a9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <h4 className="font-[var(--font-poppins)] font-bold text-white text-xs leading-snug">{item.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalGalleryPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setGalleryPage(p => Math.max(1, p - 1))}
                disabled={galleryPage === 1}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${
                  galleryPage === 1
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-white text-[#066a9c] border border-gray-200 hover:bg-[#066a9c] hover:text-white hover:border-[#066a9c] shadow-sm"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalGalleryPages }, (_, idx) => idx + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setGalleryPage(page)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${
                    galleryPage === page
                      ? "bg-[#066a9c] text-white shadow-md shadow-[#066a9c]/30"
                      : "bg-white text-gray-500 border border-gray-200 hover:bg-[#066a9c]/10 hover:text-[#066a9c]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setGalleryPage(p => Math.min(totalGalleryPages, p + 1))}
                disabled={galleryPage === totalGalleryPages}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${
                  galleryPage === totalGalleryPages
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-white text-[#066a9c] border border-gray-200 hover:bg-[#066a9c] hover:text-white hover:border-[#066a9c] shadow-sm"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          <div className="text-center mt-3">
            <span className="text-gray-300 text-xs">Showing {(galleryPage - 1) * galleryPerPage + 1}–{Math.min(galleryPage * galleryPerPage, gallery.length)} of {gallery.length}</span>
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

      {/* Stats with background image — improved */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/social-work01-img.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#066a9c]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#066a9c]/90 via-[#066a9c]/70 to-[#066a9c]/90" />
        
        <div className="relative z-10 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
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
              {stats.map((s, i) => {
                const Icon = s.Icon;
                return (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-all group text-center">
                    <div className="w-16 h-16 bg-[#f2f231]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#f2f231]/30 transition-all">
                      <Icon className="w-8 h-8 text-[#f2f231]" />
                    </div>
                    <div className="font-[var(--font-poppins)] text-3xl lg:text-4xl font-bold text-white mb-1">{s.number}</div>
                    <div className="text-white/60 text-xs uppercase tracking-wider font-medium">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] relative z-10" />
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
            <img src={gallery[lightbox].image} alt={gallery[lightbox].title} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <div className="text-center mt-4">
              <h3 className="text-white font-[var(--font-poppins)] font-semibold text-lg">{gallery[lightbox].title}</h3>
              <p className="text-white/50 text-sm mt-1">{lightbox + 1} / {gallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
