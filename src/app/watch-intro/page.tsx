"use client";

import Link from "next/link";
import { ArrowRight, Play, Quote, CheckCircle, Pause, Clock, Users, Award, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

const roles = [
  { icon: "🏛️", label: "Political Leader", value: "National Spokesperson, AAP" },
  { icon: "💼", label: "Entrepreneur", value: "Founder, Indexia Group" },
  { icon: "🤝", label: "Social Worker", value: "Community Development" },
];

const education = [
  { degree: "MBA — Finance, International Marketing & HR", school: "Aatma Ram Sanatan Dharm College, University of Delhi" },
  { degree: "Political Science", school: "Vaish Degree College, Shamli, UP" },
];

const allVideos = [
  { src: "/images/event-highlights.mp4", thumb: "/images/formal-dinner.jpg", title: "Event Highlights — Formal Dinner", desc: "Exclusive coverage from a recent formal event with community leaders.", tag: "Event" },
  { src: "/images/intro-video.mp4", thumb: "/images/profile-bijendra-malik.jpg", title: "Personal Introduction", desc: "Meet Bijendra Malik — his vision and mission for the people.", tag: "Featured" },
  { src: "/images/community-highlights.mp4", thumb: "/images/about-banner.png", title: "Community Welfare Initiatives", desc: "Working towards grassroots development and community participation.", tag: "Social" },
];

const timeline = [
  { year: "2022", title: "MLA Candidate", desc: "Shamli Constituency, Aam Aadmi Party", color: "#066a9c" },
  { year: "2020", title: "National Spokesperson", desc: "Aam Aadmi Party — Advocating for transparent governance", color: "#26ae90" },
  { year: "2015", title: "Founded Indexia Group", desc: "Building financial solutions and fostering economic growth", color: "#f28c28" },
  { year: "2010", title: "Social Work Begins", desc: "Started community development and welfare initiatives", color: "#066a9c" },
];

export default function WatchIntroPage() {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [mainPlaying, setMainPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleMainVideo = () => {
    const v = mainVideoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setMainPlaying(true); }
    else { v.pause(); setMainPlaying(false); }
  };

  const playMoreVideo = (idx: number) => {
    if (mainVideoRef.current && !mainVideoRef.current.paused) {
      mainVideoRef.current.pause();
      setMainPlaying(false);
    }
    videoRefs.current.forEach((v, i) => { if (v && i !== idx && !v.paused) v.pause(); });
    const v = videoRefs.current[idx];
    if (!v) return;
    if (activeVideo === idx) { v.pause(); setActiveVideo(null); }
    else { v.play(); setActiveVideo(idx); }
  };

  return (
    <main className="flex-1">
      {/* Hero — Dark political profile header */}
      <section className="relative min-h-[600px] lg:min-h-[650px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/formal-dinner.jpg" alt="" className="w-full h-full object-cover " />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071525] via-[#071525]/70 to-[#071525]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <div className="flex flex-col lg:flex-row items-end gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[#f2f231]" />
                <span className="text-[#f2f231] font-semibold text-sm uppercase tracking-[0.2em]">Watch Intro</span>
              </div>
              <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Bijendra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26ae90] to-[#f2f231]">Malik</span>
              </h1>
              <p className="text-white/60 mt-4 text-base sm:text-lg max-w-xl leading-relaxed">
                A leader, entrepreneur and social contributor — dedicated to building a stronger, more inclusive India.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={toggleMainVideo}
                  className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider shadow-lg shadow-[#26ae90]/30 group"
                >
                  {mainPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" fill="currentColor" />}
                  {mainPlaying ? "Pause Video" : "Watch Introduction"}
                </button>
                <Link href="/about" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 rounded-lg transition-all text-sm hover:bg-white/5">
                  Full Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Portrait */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="w-[200px] h-[250px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img src="/images/profile-bijendra-malik.jpg" alt="Bijendra Malik" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] z-20" />
      </section>

      {/* Main Video Section */}
      <section className="py-10 lg:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#26ae90] rounded-full" />
            <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Featured Video</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Stats — Left column (equal height to video) */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:w-[240px] flex-shrink-0">
              {[
                { icon: Clock, value: "15+", label: "Years of Service" },
                { icon: Users, value: "50K+", label: "Lives Impacted" },
                { icon: Award, value: "50+", label: "Initiatives Led" },
              ].map((s, i) => (
                <div key={i} className="flex-1 bg-white rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-[#26ae90]/30 hover:shadow-md transition-all group flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#26ae90]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <s.icon className="w-6 h-6 text-[#26ae90]" />
                  </div>
                  <div className="text-left">
                    <div className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-xl sm:text-2xl">{s.value}</div>
                    <div className="text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Player — Right (main, fills remaining height) */}
            <div className="flex-1 min-w-0">
              <div className="relative h-full min-h-[480px] lg:max-h-0 rounded-2xl overflow-hidden shadow-2xl group bg-[#071525]">
                <video
                  ref={mainVideoRef}
                  src="/images/kejriwal-meeting-video.mp4"
                  poster="/images/about-me0mg/arvind-kejriwal-meeting-removebg-preview.png"
                  className="absolute inset-0 w-full h-full object-cover object-top cursor-pointer"
                  playsInline
                  preload="metadata"
                  onEnded={() => setMainPlaying(false)}
                  onClick={toggleMainVideo}
                />
                {!mainPlaying && (
                  <button onClick={toggleMainVideo} className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#071525]/70 via-[#071525]/10 to-[#071525]/30 hover:from-[#071525]/80 transition-all">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90]" />
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#26ae90] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-0.5" fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#26ae90]/20 rounded-full animate-ping" />
                    </div>
                  </button>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#071525] via-[#071525]/50 to-transparent p-4 sm:p-5 pointer-events-none">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="inline-block bg-[#26ae90]/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">Featured Video</span>
                      <h3 className="text-white font-[var(--font-poppins)] font-bold text-base sm:text-lg">Meeting with Arvind Kejriwal</h3>
                      <p className="text-white/50 text-xs mt-1">Governance reforms and community welfare discussions</p>
                    </div>
                    {mainPlaying && (
                      <button onClick={toggleMainVideo} className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors">
                        <Pause className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio — Political Profile Style */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left — Photo + Quote */}
            <div className="w-full lg:w-[42%] flex-shrink-0 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/about-banner.png" alt="Bijendra Malik" className="w-full h-[320px] sm:h-[380px] object-contain bg-gray-50" />
              </div>
              <div className="bg-gradient-to-br from-[#071525] to-[#066a9c] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-3 left-4 text-white/10"><Quote className="w-12 h-12" /></div>
                <p className="text-white text-sm sm:text-base font-[var(--font-poppins)] font-light italic leading-relaxed relative z-10">
                  &ldquo;Many of life&apos;s failures are people who did not realize how close they were to success when they gave up.&rdquo;
                </p>
                <div className="mt-4 text-[#f2f231] font-semibold font-[var(--font-poppins)] text-sm">— Bijendra Malik</div>
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-[2px] bg-[#f28c28]" />
                <span className="text-[#f28c28] font-semibold text-sm uppercase tracking-[0.2em]">About Me</span>
              </div>
              <h2 className="font-[var(--font-poppins)] text-2xl sm:text-3xl font-bold text-[#066a9c] leading-tight">
                Hello, I am <span className="text-[#26ae90]">Bijendra Malik</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                An individual committed to driving positive change and contributing to the betterment of society. I am honoured to be MLA, Shamli Constituency Candidate 2022.
              </p>
              <p className="text-gray-500 leading-relaxed">
                As a National Spokesperson of Aam Aadmi Party, I actively engage in advocating for the principles and values that define our vision for transparent governance and meaningful social impact.
              </p>
              <p className="text-gray-500 leading-relaxed">
                In addition to my political endeavours, I am the Founder of Indexia Group of Companies, Director Indexia Finance — a venture that reflects my dedication to fostering financial well-being and providing tailored solutions.
              </p>

              {/* Role chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {roles.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2.5 hover:border-[#26ae90]/30 hover:bg-[#26ae90]/5 transition-all">
                    <span className="text-base">{r.icon}</span>
                    <div>
                      <div className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-[11px]">{r.label}</div>
                      <div className="text-gray-400 text-[9px]">{r.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="pt-2">
                <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-3">Education</h3>
                <div className="space-y-2">
                  {education.map((e, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#26ae90] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700 text-sm font-medium">{e.degree}</span>
                        <span className="text-gray-400 text-xs block">{e.school}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link href="/about" className="inline-flex items-center gap-2 bg-[#066a9c] hover:bg-[#066a9c]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider group">
                  Full About <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-[#26ae90] text-[#26ae90] hover:bg-[#26ae90] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider group">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey Timeline */}
      <section className="py-10 lg:py-16 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#f28c28] rounded-full" />
            <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Political Journey</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: t.color }} />
                <div className="text-[#f2f231] font-[var(--font-poppins)] font-bold text-lg mb-2" style={{ color: t.color }}>{t.year}</div>
                <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm mb-1 group-hover:text-[#26ae90] transition-colors">{t.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch & Learn */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#26ae90] rounded-full" />
            <h2 className="font-[var(--font-poppins)] text-2xl font-bold text-[#066a9c]">Watch & Learn</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allVideos.map((v, i) => (
              <div key={i} className="bg-[#f8f9fb] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#26ae90]/30 hover:shadow-xl transition-all group">
                <div className="relative aspect-video bg-black">
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={v.src}
                    poster={v.thumb}
                    className="w-full h-full object-cover"
                    playsInline
                    onClick={() => playMoreVideo(i)}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#26ae90]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{v.tag}</span>
                  </div>
                  {activeVideo !== i && (
                    <button onClick={() => playMoreVideo(i)} className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent hover:from-black/60 transition-all">
                      <div className="w-14 h-14 bg-[#26ae90] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                      </div>
                    </button>
                  )}
                  {activeVideo === i && (
                    <button onClick={() => playMoreVideo(i)} className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors">
                      <Pause className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-[var(--font-poppins)] font-bold text-[#066a9c] text-sm group-hover:text-[#26ae90] transition-colors">{v.title}</h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://www.youtube.com/@FinanceIndexia" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm uppercase tracking-wider group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              Visit YouTube Channel <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-r from-[#071525] to-[#066a9c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the <span className="text-[#f2f231]">Mission</span>
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Your support and participation can bring the change we all wish to see. Together, let&apos;s build a better tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#26ae90] hover:bg-[#26ae90]/90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all uppercase text-sm tracking-wider group shadow-lg shadow-[#26ae90]/30">
              Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/social-work" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-all uppercase text-sm tracking-wider">
              View Social Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
