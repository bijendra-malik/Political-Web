"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const tabs = ["All", "News Coverage", "Press Releases", "Interviews", "Videos", "Photos"];

const newsItems = [
  { image: "/images/youth-employment.jpg", title: "Focus on Youth & Employment", desc: "Bijendra Malik emphasizes the role of youth in building a stronger and self-reliant India.", date: "15 May 2024", source: "THE HINDU", category: "News Coverage" },
  { image: "/images/youth-engagement.jpg", title: "Interview on Community Development", desc: "Discussion on the importance of grassroots development and community participation.", date: "02 April 2024", source: "Amar Ujala", category: "Interviews" },
  { image: "/images/rural-development.jpg", title: "Working for a Better Tomorrow", desc: "Coverage of initiatives for education, healthcare and rural development in local communities.", date: "18 March 2024", source: "Dainik Jagran", category: "News Coverage" },
  { image: "/images/public-welfare.jpg", title: "Commitment to Public Service", desc: "Article highlighting dedication towards transparent governance and public welfare.", date: "10 Feb 2024", source: "Navbharat Times", category: "Press Releases" },

  { image: "/images/community-development.jpg", title: "Community Development Initiatives Launched", desc: "New development programs launched for rural and urban communities.", date: "15 Dec 2023", source: "Hindustan Times", category: "Press Releases" },
];

const videos = [
  { id: "ivmAr-W9MU4", title: "Focus on Youth & Employment", desc: "Keynote address on the role of youth in building a stronger India.", date: "15 May 2024", duration: "05:12", category: "Videos" },
  { id: "NwQw03R-pVM", title: "Interview on Community Development", desc: "Open discussion with citizens about grassroots development.", date: "02 April 2024", duration: "04:35", category: "Interviews" },
  { id: "kaDcvoCTmiM", title: "Working for a Better Tomorrow", desc: "Coverage of education, healthcare and rural development initiatives.", date: "18 March 2024", duration: "06:48", category: "Videos" },
  { id: "6arCanHc8wA", title: "Commitment to Public Service", desc: "Address on transparent governance and public welfare.", date: "10 Feb 2024", duration: "03:20", category: "Interviews" },
  { id: "joRmPaeurb4", title: "Vision for Digital India", desc: "Speech on technology and digital empowerment.", date: "25 Jan 2024", duration: "05:55", category: "Videos" },
  { id: "1FndZigExqk", title: "Youth Leadership Summit", desc: "Keynote at the National Youth Leadership Summit.", date: "12 Dec 2023", duration: "07:10", category: "Videos" },
  { id: "v-hNOw-1GU8", title: "Community Welfare Initiative", desc: "Launch of community welfare programs.", date: "05 Nov 2023", duration: "04:22", category: "Press Releases" },
  { id: "h6Y0moAjYh4", title: "Public Service Address", desc: "Annual public service address to constituents.", date: "20 Oct 2023", duration: "08:15", category: "News Coverage" },
];

const localVideos = [
  { src: "/images/event-highlights.mp4", thumbnail: "/images/formal-dinner.jpg", title: "Event Highlights — Formal Dinner", desc: "Exclusive coverage from a recent formal event.", date: "22 Aug 2026", category: "Videos" },
  { src: "/images/intro-video.mp4", thumbnail: "/images/profile-bijendra-malik.jpg", title: "Personal Introduction — Bijendra Malik", desc: "Meet Bijendra Malik and his vision for the people.", date: "26 Aug 2026", category: "Videos" },
  { src: "/images/community-highlights.mp4", thumbnail: "/images/about-banner.png", title: "Community Welfare Initiatives", desc: "Working towards grassroots development and community participation.", date: "22 Aug 2026", category: "Videos" },
];

const photos = [
  { image: "/images/formal-dinner.jpg", title: "Formal Dinner Event", category: "Photos", date: "2026" },
  { image: "/images/meeting-festive.jpg", title: "Meeting at Festive Event", category: "Photos", date: "2026" },
  { image: "/images/meeting-indoor.jpg", title: "Indoor Meeting", category: "Photos", date: "2026" },
  { image: "/images/meeting-sports-jersey.jpg", title: "Meeting with Sports Memorabilia", category: "Photos", date: "2026" },
  { image: "/images/meeting-garden.jpg", title: "Garden Discussion", category: "Photos", date: "2026" },
  { image: "/images/media-interview.jpg", title: "Media Interview", category: "Photos", date: "2026" },
  { image: "/images/political-rally-sanjay-singh.jpg", title: "Political Rally with Sanjay Singh", category: "Photos", date: "2026" },
  { image: "/images/meeting-dining.jpg", title: "Dining Meeting", category: "Photos", date: "2026" },
  { image: "/images/meeting-hotel.jpg", title: "Hotel Meeting", category: "Photos", date: "2026" },
  { image: "/images/arvind-kejriwal-meeting.jpg", title: "Meeting with Arvind Kejriwal", category: "Photos", date: "2024" },
  { image: "/images/profile-bijendra-malik.jpg", title: "Bijendra Malik — Profile", category: "Photos", date: "2024" },
  { image: "/images/official-portrait.jpg", title: "Official Portrait", category: "Photos", date: "2024" },
  { image: "/images/profile-alt.jpg", title: "Bijendra Malik — Alternate Profile", category: "Photos", date: "2024" },
  { image: "/images/profile-shot.jpg", title: "Profile Shot", category: "Photos", date: "2024" },

  { image: "/images/campaign-event.jpg", title: "Campaign Event", category: "Photos", date: "2023" },
  { image: "/images/public-rally-shamli.jpg", title: "Public Rally — Shamli", category: "Photos", date: "2024" },
  { image: "/images/community-meeting.jpg", title: "Community Meeting", category: "Photos", date: "2024" },
  { image: "/images/education-initiative.jpg", title: "Education Initiative Launch", category: "Photos", date: "2023" },
  { image: "/images/health-camp.jpg", title: "Health Camp Organized", category: "Photos", date: "2023" },

  { image: "/images/infrastructure-visit.jpg", title: "Infrastructure Development Visit", category: "Photos", date: "2022" },
  { image: "/images/social-welfare.jpg", title: "Social Welfare Distribution", category: "Photos", date: "2022" },
  { image: "/images/public-rally.jpg", title: "Public Rally", category: "Photos", date: "2023" },
  { image: "/images/political-campaign.jpg", title: "Political Campaign Event", category: "Photos", date: "2022" },
  { image: "/images/education-drive.jpg", title: "Education Initiative", category: "Photos", date: "2023" },
  { image: "/images/health-camp-event.jpg", title: "Health Camp", category: "Photos", date: "2024" },
  { image: "/images/social-gathering.jpg", title: "Social Gathering", category: "Photos", date: "2024" },
  { image: "/images/community-welfare.jpg", title: "Community Welfare", category: "Photos", date: "2024" },
  { image: "/images/development-visit.jpg", title: "Development Visit", category: "Photos", date: "2023" },

];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [lightboxNews, setLightboxNews] = useState<number | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<number | null>(null);

  const filteredNews = activeTab === "All" || activeTab === "News Coverage" || activeTab === "Press Releases" || activeTab === "Interviews"
    ? newsItems.filter(i => activeTab === "All" || i.category === activeTab)
    : [];
  const filteredVideos = activeTab === "All" || activeTab === "Videos" || activeTab === "Interviews"
    ? videos.filter(i => activeTab === "All" || i.category === activeTab)
    : [];
  const filteredLocalVideos = activeTab === "All" || activeTab === "Videos"
    ? localVideos.filter(i => activeTab === "All" || i.category === activeTab)
    : [];
  const filteredPhotos = activeTab === "All" || activeTab === "Photos"
    ? photos
    : [];

  const nextNews = () => setLightboxNews(prev => prev !== null ? (prev + 1) % newsItems.length : null);
  const prevNews = () => setLightboxNews(prev => prev !== null ? (prev - 1 + newsItems.length) % newsItems.length : null);
  const nextPhoto = () => setLightboxPhoto(prev => prev !== null ? (prev + 1) % photos.length : null);
  const prevPhoto = () => setLightboxPhoto(prev => prev !== null ? (prev - 1 + photos.length) % photos.length : null);

  const [playingLocalVideo, setPlayingLocalVideo] = useState<string | null>(null);
  const [photoPage, setPhotoPage] = useState(1);
  const photosPerPage = 16;
  const totalPhotoPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const paginatedPhotos = filteredPhotos.slice((photoPage - 1) * photosPerPage, photoPage * photosPerPage);

  return (
    <main className="flex-1">
      <PageHero
        title="In the Media"
        subtitle="Latest News & Updates"
        bgImage="/images/Media-01-img.png"
      />

      {/* Filter Tabs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-3 flex flex-wrap gap-2 border border-gray-100">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab); setPhotoPage(1); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-[#066a9c] text-white shadow-md shadow-[#066a9c]/30"
                    : "text-gray-500 hover:bg-[#066a9c]/10 hover:text-[#066a9c]"
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Cards — with lightbox on click */}
      {filteredNews.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-[#f28c28] rounded-full" />
              <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">News & Press</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-[#26ae90]/30 transition-all group">
                  <div className="relative h-44 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => setLightboxNews(i)}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg transform scale-75 group-hover:scale-100">
                        <svg className="w-5 h-5 text-[#066a9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-[#f28c28] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">{item.source}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-2 group-hover:text-[#26ae90] transition-colors leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-xs">{item.date}</span>
                      <span className="text-[#26ae90] text-xs font-semibold flex items-center gap-1 cursor-pointer">
                        View Image <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Cards */}
      {filteredVideos.length > 0 && (
        <section className="py-10 bg-[#f5f7fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-[#26ae90] rounded-full" />
              <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Videos</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredVideos.map((v, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-[#26ae90]/30 transition-all group cursor-pointer" onClick={() => setPlayingVideo(v.id)}>
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#066a9c]/30 group-hover:bg-[#066a9c]/50 transition-all flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#26ae90] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-[#26ae90] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">YouTube</div>
                    <div className="absolute bottom-3 right-3 bg-[#066a9c]/80 text-white text-[10px] font-bold px-2 py-1 rounded">{v.duration}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-2 group-hover:text-[#26ae90] transition-colors leading-snug">{v.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{v.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-xs">{v.date}</span>
                      <span className="text-[#26ae90] text-xs font-semibold flex items-center gap-1">
                        Watch Now <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Video Cards */}
      {filteredLocalVideos.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-8 bg-[#f28c28] rounded-full" />
              <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Event Highlights</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocalVideos.map((v, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-[#f28c28]/30 transition-all group cursor-pointer" onClick={() => setPlayingLocalVideo(v.src)}>
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#066a9c]/30 group-hover:bg-[#066a9c]/50 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#f28c28] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-[#f28c28] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Video</div>
                    <div className="absolute bottom-3 right-3 bg-[#066a9c]/80 text-white text-[10px] font-bold px-2 py-1 rounded">Event</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-2 group-hover:text-[#f28c28] transition-colors leading-snug">{v.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{v.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-xs">{v.date}</span>
                      <span className="text-[#f28c28] text-xs font-semibold flex items-center gap-1">
                        Watch Now <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery — with pagination + lightbox */}
      {filteredPhotos.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#286090] rounded-full" />
                <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Photo Gallery</h2>
              </div>
              <span className="text-gray-400 text-sm font-medium">{filteredPhotos.length} Photos</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {paginatedPhotos.map((photo, i) => {
                const globalIndex = (photoPage - 1) * photosPerPage + i;
                return (
                  <div key={globalIndex} className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#26ae90]/30" onClick={() => setLightboxPhoto(globalIndex)}>
                    <div className="relative aspect-square overflow-hidden">
                      <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-5 h-5 text-[#066a9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-[var(--font-poppins)] font-bold text-white text-xs leading-snug">{photo.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPhotoPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPhotoPage(p => Math.max(1, p - 1))}
                  disabled={photoPage === 1}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${
                    photoPage === 1
                      ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                      : "bg-white text-[#066a9c] border border-gray-200 hover:bg-[#066a9c] hover:text-white hover:border-[#066a9c] shadow-sm"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPhotoPages }, (_, idx) => idx + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => { setPhotoPage(page); window.scrollTo({ top: document.querySelector('[class*="bg-white"]')?.closest('section')?.offsetTop || 0, behavior: 'smooth' }); }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${
                      photoPage === page
                        ? "bg-[#066a9c] text-white shadow-md shadow-[#066a9c]/30"
                        : "bg-white text-gray-500 border border-gray-200 hover:bg-[#066a9c]/10 hover:text-[#066a9c]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setPhotoPage(p => Math.min(totalPhotoPages, p + 1))}
                  disabled={photoPage === totalPhotoPages}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${
                    photoPage === totalPhotoPages
                      ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                      : "bg-white text-[#066a9c] border border-gray-200 hover:bg-[#066a9c] hover:text-white hover:border-[#066a9c] shadow-sm"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="text-center mt-3">
              <span className="text-gray-300 text-xs">Showing {(photoPage - 1) * photosPerPage + 1}–{Math.min(photoPage * photosPerPage, filteredPhotos.length)} of {filteredPhotos.length}</span>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-10 bg-[#066a9c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#f2f231] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#066a9c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h3 className="font-[var(--font-poppins)] text-lg font-bold text-white">Stay Updated with Latest Updates</h3>
              <p className="text-white/50 text-sm">Subscribe to get the latest news, updates and event highlights.</p>
            </div>
          </div>
          <div className="flex gap-2 w-full lg:w-auto">
            <input type="email" placeholder="Your email address"
              className="flex-1 lg:w-72 bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#26ae90]/50 transition-all" />
            <button className="bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* News Image Lightbox */}
      {lightboxNews !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setLightboxNews(null)}>
          <button onClick={() => setLightboxNews(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-5 h-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevNews(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextNews(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img src={newsItems[lightboxNews].image} alt={newsItems[lightboxNews].title} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <div className="text-center mt-4">
              <h3 className="text-white font-[var(--font-poppins)] font-semibold text-lg">{newsItems[lightboxNews].title}</h3>
              <p className="text-white/50 text-sm mt-1">{newsItems[lightboxNews].source} — {newsItems[lightboxNews].date}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxNews + 1} / {newsItems.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Photo Gallery Lightbox */}
      {lightboxPhoto !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setLightboxPhoto(null)}>
          <button onClick={() => setLightboxPhoto(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-5 h-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevPhoto(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextPhoto(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightboxPhoto].image} alt={photos[lightboxPhoto].title} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <div className="text-center mt-4">
              <h3 className="text-white font-[var(--font-poppins)] font-semibold text-lg">{photos[lightboxPhoto].title}</h3>
              <p className="text-white/50 text-sm mt-1">{photos[lightboxPhoto].date}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxPhoto + 1} / {photos.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setPlayingVideo(null)}>
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPlayingVideo(null)} className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Local Video Modal */}
      {playingLocalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setPlayingLocalVideo(null)}>
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setPlayingLocalVideo(null)} className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              <video
                src={playingLocalVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
