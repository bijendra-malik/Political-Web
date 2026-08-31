"use client";

import { useState, useRef, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  date: string;
  source: string;
}

const videos: VideoItem[] = [
  { id: "ivmAr-W9MU4", title: "Focus on Youth & Employment", date: "2024", source: "YouTube" },
  { id: "NwQw03R-pVM", title: "Interview on Community Development", date: "2024", source: "YouTube" },
  { id: "kaDcvoCTmiM", title: "Working for a Better Tomorrow", date: "2023", source: "YouTube" },
  { id: "6arCanHc8wA", title: "Commitment to Public Service", date: "2023", source: "YouTube" },
  { id: "joRmPaeurb4", title: "Vision for Digital India", date: "2023", source: "YouTube" },
  { id: "1FndZigExqk", title: "Youth Leadership Summit", date: "2022", source: "YouTube" },
  { id: "v-hNOw-1GU8", title: "Community Welfare Initiative", date: "2022", source: "YouTube" },
  { id: "h6Y0moAjYh4", title: "Public Service Address", date: "2022", source: "YouTube" },
];

export default function Media() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="py-10 lg:py-14 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#26ae90]" />
            <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">In the Media</span>
            <div className="w-8 h-[2px] bg-[#26ae90]" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-[#066a9c]">
            Latest <span className="text-[#26ae90]">News & Updates</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {canScrollLeft && (
            <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#26ae90] hover:text-white transition-all border border-gray-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#26ae90] hover:text-white transition-all border border-gray-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {videos.map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] snap-start group cursor-pointer"
                onClick={() => setPlayingVideo(video.id)}
              >
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#26ae90]/30">
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#26ae90] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-[#26ae90] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      {video.source}
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm leading-snug group-hover:text-[#26ae90] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{video.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a href="/media" className="inline-flex items-center gap-2 border-2 border-[#066a9c] text-[#066a9c] hover:bg-[#066a9c] hover:text-white font-semibold px-7 py-3 rounded-lg transition-all text-sm uppercase tracking-wider group">
            View All Media <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

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
    </section>
  );
}
