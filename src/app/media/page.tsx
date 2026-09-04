"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const tabs = ["All", "News Coverage", "Press Releases", "Interviews", "Videos", "Photos"];

const newsItems = [
  { image: "/images/procession-tricolour.jpg", title: "Rally March with Supporters", desc: "Bijendra Malik leads a public rally as supporters carry party flags and the national flag.", date: "04 Sep 2026", source: "Rally Coverage", category: "News Coverage" },
  { image: "/images/ceremonial-scarf-honour.jpg", title: "Honoured by International Council of Jurists", desc: "Honoured as a Distinguished Member of the International Council of Jurists (London, U.K.).", date: "2026", source: "Honour Ceremony", category: "News Coverage" },
  { image: "/images/akhada-wrestling-event.jpg", title: "Akhada Wrestling Event", desc: "Bijendra Malik attends a local wrestling (akhada) event alongside organisers and wrestlers.", date: "2026", source: "Event Coverage", category: "News Coverage" },
  { image: "/images/community-members-group.jpg", title: "Evening Community Gathering", desc: "Interaction with community members during an evening gathering.", date: "04 Sep 2026", source: "Community Coverage", category: "News Coverage" },
  { image: "/images/rally-march-yellow-flags.jpg", title: "Flag March through the Streets", desc: "Supporters march with party flags during the rally.", date: "04 Sep 2026", source: "Rally Coverage", category: "News Coverage" },
  { image: "/images/supporters-celebration.jpg", title: "Supporters Celebrate", desc: "Supporters raise their hands in celebration during the rally.", date: "04 Sep 2026", source: "Rally Coverage", category: "News Coverage" },
];

const videos = [
  { id: "ivmAr-W9MU4", title: "India Wants Answers from the BJP Government", desc: "Bijendra Malik on the questions India is asking the BJP government.", date: "26 Dec 2023", duration: "01:30", source: "Bijendra Malik", category: "Videos" },
  { id: "NwQw03R-pVM", title: "Delhi Flood Situation — Bharat 24 News", desc: "Bijendra Malik on the Delhi flood situation.", date: "28 Dec 2023", duration: "01:09", source: "Bharat 24 News", category: "News Coverage" },
  { id: "kaDcvoCTmiM", title: "Delhi Flooded in Continuous Rain — Red Alert", desc: "Heavy rain turned Delhi streets into ponds; red alert across states. Bijendra Malik, AAP.", date: "21 Dec 2023", duration: "36:24", source: "Bijendra Malik", category: "Videos" },
  { id: "6arCanHc8wA", title: "UP vs Punjab — Law & Order Debate", desc: "Bijendra Malik on law and order in Uttar Pradesh vs Punjab (News State).", date: "28 Dec 2023", duration: "02:35", source: "News State", category: "Interviews" },
  { id: "pJv7wnSHc9c", title: "Delhi Floods — 'A Planned Conspiracy'? Rubika Liyaquat's Reply", desc: "AAP's Bijendra Malik in conversation with Rubika Liyaquat (Bharat 24).", date: "14 Jul 2023", duration: "04:24", source: "Bharat 24", category: "Interviews" },
  { id: "1FndZigExqk", title: "AAP vs Shehzad Poonawalla — Full Debate", desc: "Latest debate between AAP's Bijendra Malik and BJP's Shehzad Poonawalla.", date: "21 Dec 2023", duration: "03:18", source: "Bijendra Malik", category: "Interviews" },
  { id: "v-hNOw-1GU8", title: "Satta Ka Temperature — Haryana Alert (Network10)", desc: "Network10's Satta Ka Temperature — alert on Haryana politics.", date: "21 Dec 2023", duration: "27:14", source: "Network10", category: "News Coverage" },
  { id: "h6Y0moAjYh4", title: "UP Election 2022 — Shamli Journey & Interview", desc: "Aam Aadmi Party's Shamli candidate Bijendra Malik on the 2022 UP election trail.", date: "11 Dec 2023", duration: "19:11", source: "Bijendra Malik", category: "Videos" },
];

const localVideos: { src?: string; youtube?: string; thumbnail?: string; title: string; desc: string; date: string; category: string }[] = [
  { youtube: "pJv7wnSHc9c", title: "Bharat 24 — Delhi Floods Debate", desc: "AAP's Bijendra Malik calls the Delhi floods 'a planned conspiracy' — in conversation with Rubika Liyaquat.", date: "2026", category: "Videos" },
  { src: "/media/videos/community-highlights.mp4", thumbnail: "/images/about-banner.png", title: "Community Welfare Initiatives", desc: "Working towards grassroots development and community participation.", date: "22 Aug 2026", category: "Videos" },
  { src: "/media/videos/office-desk-address.mp4", thumbnail: "/images/ncr-samachar-interview.jpg", title: "Office Desk Address", desc: "Short address recorded from the office.", date: "04 Sep 2026", category: "Videos" },
  { src: "/media/videos/public-rally-address.mp4", thumbnail: "/images/rally-march-yellow-flags.jpg", title: "Public Rally Address", desc: "Addressing supporters gathered at the public rally.", date: "04 Sep 2026", category: "Videos" },
  { src: "/media/videos/inauguration-ribbon-cutting.mp4", thumbnail: "/images/memento-gift-ceremony.jpg", title: "Inauguration Ceremony", desc: "Ribbon-cutting ceremony at a new outlet.", date: "04 Sep 2026", category: "Videos" },
  { src: "/media/videos/public-meeting-address.mp4", thumbnail: "/images/supporters-celebration.jpg", title: "Public Meeting Address", desc: "Addressing the crowd at a public meeting.", date: "04 Sep 2026", category: "Videos" },
  { src: "/media/videos/intro-video.mp4", thumbnail: "/images/profile-bijendra-malik.jpg", title: "Personal Introduction — Bijendra Malik", desc: "Meet Bijendra Malik and his vision for the people.", date: "26 Aug 2026", category: "Videos" },
  { src: "/media/videos/kejriwal-meeting-video.mp4", title: "Meeting with Arvind Kejriwal", desc: "Governance reforms and community welfare discussions.", date: "31 Aug 2026", category: "Videos" },
  // Older coverage clips — 2026
  { src: "/media/videos/video-1.mp4", title: "Public Meeting — Mass Gathering", desc: "Large community gathering outdoors at a public programme.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-2.mp4", title: "Crowd Rally — Raised Fists", desc: "Supporters raising slogans at a public rally.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-3.mp4", title: "Support Rally for Sanjay Singh", desc: "AAP supporters with 'We Are With You' placards at the Sanjay Singh protest.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-4.mp4", title: "Public Meeting — Stage Programme", desc: "Dignitaries seated on stage at a public function.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-5.mp4", title: "Procession with Dr. Ambedkar Portrait", desc: "March carrying Dr. Ambedkar's portrait with party flags.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-6.mp4", title: "Rally March — Flags", desc: "Supporters marching with party flags.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-7.mp4", title: "Independence Day Greetings", desc: "Happy Independence Day — warm wishes from Team Indexia Finance.", date: "2026", category: "Videos" },
  { src: "/media/videos/video-9.mp4", title: "Public Event — Full Coverage", desc: "Extended coverage of the public gathering.", date: "2026", category: "Videos" },
];

const photos = [
  // Event & rally coverage — 04 Sep 2026
  { image: "/images/ncr-samachar-interview.jpg", title: "Media Interview — NCR Samachar", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/outdoor-stage-meeting.jpg", title: "Public Meeting — Outdoor", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/indoor-lounge-meeting.jpg", title: "Community Interaction — Indoor", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/welcome-handshake-group.jpg", title: "Welcome — Group Greetings", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/community-members-group.jpg", title: "With Community Members", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/ceremonial-platters.jpg", title: "Ceremonial Offering", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/rally-march-yellow-flags.jpg", title: "Rally March with Flags", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/rally-march-supporters.jpg", title: "Rally March — Supporters", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/procession-tricolour.jpg", title: "Procession with Tricolour", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/rally-crowd-march.jpg", title: "Rally — Crowd March", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/green-flag-procession.jpg", title: "Procession — Green Flag", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/bouquet-presentation.jpg", title: "Bouquet Presentation", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/memento-gift-ceremony.jpg", title: "Memento Presentation", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/akhada-wrestling-event.jpg", title: "Akhada Wrestling Event", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/crowd-slogan-placards.jpg", title: "Public Gathering — Placards", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/judega-bharat-banner.jpg", title: "JudeGa Bharat Banner", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/ceremonial-scarf-honour.jpg", title: "Honoured with Ceremonial Scarf", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/supporters-celebration.jpg", title: "Supporters — Celebrations", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/marigold-garland-welcome.jpg", title: "Welcome — Marigold Garland", category: "Photos", date: "04 Sep 2026" },
  { image: "/images/hotel-lounge-meeting-2.jpg", title: "Hotel Lounge Meeting", category: "Photos", date: "04 Sep 2026" },
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
  const filteredVideos = activeTab === "All" || activeTab === "Videos"
    ? videos
    : activeTab === "Interviews"
    ? videos.filter(i => i.category === "Interviews")
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

  const [photoPage, setPhotoPage] = useState(1);
  const photosPerPage = 12;
  const totalPhotoPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const paginatedPhotos = filteredPhotos.slice((photoPage - 1) * photosPerPage, photoPage * photosPerPage);

  const [videoPage, setVideoPage] = useState(1);
  const videosPerPage = 6;
  const totalVideoPages = Math.ceil(filteredLocalVideos.length / videosPerPage);
  const paginatedLocalVideos = filteredLocalVideos.slice((videoPage - 1) * videosPerPage, videoPage * videosPerPage);

  const [ytPage, setYtPage] = useState(1);
  const ytPerPage = 8;
  const totalYtPages = Math.ceil(filteredVideos.length / ytPerPage);
  const paginatedVideos = filteredVideos.slice((ytPage - 1) * ytPerPage, ytPage * ytPerPage);

  return (
    <main className="flex-1">
      <PageHero
        title="In the Media"
        subtitle="Latest News & Updates"
        bgImage="/images/media-press-banner.png"
        bgPosition="right"
      />

      {/* Filter Tabs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-3 flex flex-wrap gap-2 border border-gray-100">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab); setPhotoPage(1); setVideoPage(1); setYtPage(1); }}
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
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
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
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#26ae90] rounded-full" />
                <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Videos</h2>
              </div>
              <span className="text-gray-400 text-sm font-medium">{filteredVideos.length} Videos</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedVideos.map((v, i) => (
                <div key={(ytPage - 1) * ytPerPage + i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-[#26ae90]/30 transition-all group cursor-pointer" onClick={() => setPlayingVideo(v.id)}>
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#066a9c]/30 group-hover:bg-[#066a9c]/50 transition-all flex items-center justify-center">
                      <div className="w-14 h-14 bg-[#26ae90] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-[#26ae90] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">{v.source}</div>
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

            {/* Pagination */}
            {totalYtPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setYtPage(p => Math.max(1, p - 1))}
                  disabled={ytPage === 1}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${ytPage === 1 ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-white text-[#26ae90] border border-gray-200 hover:bg-[#26ae90] hover:text-white hover:border-[#26ae90] shadow-sm"}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalYtPages }, (_, idx) => idx + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setYtPage(page)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${ytPage === page ? "bg-[#26ae90] text-white shadow-md shadow-[#26ae90]/30" : "bg-white text-gray-500 border border-gray-200 hover:bg-[#26ae90]/10 hover:text-[#26ae90]"}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setYtPage(p => Math.min(totalYtPages, p + 1))}
                  disabled={ytPage === totalYtPages}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${ytPage === totalYtPages ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-white text-[#26ae90] border border-gray-200 hover:bg-[#26ae90] hover:text-white hover:border-[#26ae90] shadow-sm"}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="text-center mt-3">
              <span className="text-gray-300 text-xs">Showing {(ytPage - 1) * ytPerPage + 1}–{Math.min(ytPage * ytPerPage, filteredVideos.length)} of {filteredVideos.length} videos</span>
            </div>
          </div>
        </section>
      )}

      {/* Local Video Cards */}
      {filteredLocalVideos.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#f28c28] rounded-full" />
                <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Event Highlights</h2>
              </div>
              <span className="text-gray-400 text-sm font-medium">{filteredLocalVideos.length} Videos</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedLocalVideos.map((v, i) => (
                <div key={(videoPage - 1) * videosPerPage + i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-[#f28c28]/30 transition-all group flex flex-col">
                  <div className="relative bg-black">
                    {v.youtube ? (
                      <>
                        <iframe
                          src={`https://www.youtube.com/embed/${v.youtube}?rel=0`}
                          title={v.title}
                          className="w-full aspect-video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase pointer-events-none">YouTube</div>
                      </>
                    ) : (
                      <>
                        <video
                          src={v.src}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full aspect-video object-contain"
                        />
                        <div className="absolute top-2 right-2 bg-[#f28c28] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase pointer-events-none">Video</div>
                      </>
                    )}
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-2 group-hover:text-[#f28c28] transition-colors leading-snug">{v.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{v.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-xs">{v.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalVideoPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setVideoPage(p => Math.max(1, p - 1))}
                  disabled={videoPage === 1}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${videoPage === 1 ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-white text-[#f28c28] border border-gray-200 hover:bg-[#f28c28] hover:text-white hover:border-[#f28c28] shadow-sm"}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalVideoPages }, (_, idx) => idx + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setVideoPage(page)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${videoPage === page ? "bg-[#f28c28] text-white shadow-md shadow-[#f28c28]/30" : "bg-white text-gray-500 border border-gray-200 hover:bg-[#f28c28]/10 hover:text-[#f28c28]"}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setVideoPage(p => Math.min(totalVideoPages, p + 1))}
                  disabled={videoPage === totalVideoPages}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all text-sm font-semibold ${videoPage === totalVideoPages ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-white text-[#f28c28] border border-gray-200 hover:bg-[#f28c28] hover:text-white hover:border-[#f28c28] shadow-sm"}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="text-center mt-3">
              <span className="text-gray-300 text-xs">Showing {(videoPage - 1) * videosPerPage + 1}–{Math.min(videoPage * videosPerPage, filteredLocalVideos.length)} of {filteredLocalVideos.length} videos</span>
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
                    onClick={() => setPhotoPage(page)}
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

    </main>
  );
}
