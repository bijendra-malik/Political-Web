"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Flag, Heart, Award } from "lucide-react";

function useCount(target: number, dur = 2000) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let s = 0; const inc = target / (dur / 16);
    const t = setInterval(() => { s += inc; if (s >= target) { setVal(target); clearInterval(t); } else setVal(Math.floor(s)); }, 16);
    return () => clearInterval(t);
  }, [started, target, dur]);
  return { val, ref };
}

const stats = [
  { target: 10, suffix: "+", label: "Years of Public Service", Icon: Users },
  { target: 5, suffix: "+", label: "Years in Leadership", Icon: Flag },
  { target: 50, suffix: "+", label: "Community Initiatives", Icon: Heart },
  { target: 15, suffix: "+", label: "Honors & Recognitions", Icon: Award },
];

export default function Achievements() {
  const counters = stats.map(s => useCount(s.target));

  return (
    <section className="bg-[#066a9c]">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90]" />
      <div className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, i) => {
              const Icon = s.Icon;
              return (
                <div key={i} ref={counters[i].ref} className="flex items-center gap-4 text-center lg:text-left">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#f2f231]" />
                  </div>
                  <div>
                    <div className="font-[var(--font-poppins)] text-2xl sm:text-3xl font-bold text-white">
                      {counters[i].val}{s.suffix}
                    </div>
                    <div className="text-white/60 text-xs uppercase tracking-wider mt-0.5 font-medium">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90]" />
    </section>
  );
}
