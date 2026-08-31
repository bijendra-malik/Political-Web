"use client";

import { useEffect, useRef } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
}

interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  progressIndicator?: boolean;
  cardAlignment?: "left" | "right" | "alternating";
  revealAnimation?: "fade" | "slide-up" | "slide-left" | "slide-right";
}

export function ScrollTimeline({
  events,
  title,
  subtitle,
  progressIndicator = true,
  cardAlignment = "alternating",
  revealAnimation = "fade",
}: ScrollTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll-based reveal animation
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  // Progress line animation on scroll
  useEffect(() => {
    if (!progressIndicator || !timelineRef.current || !progressRef.current) return;

    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      if (!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max((windowHeight * 0.5 - timelineTop) / timelineHeight, 0),
        1
      );

      progress.style.height = `${scrollProgress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [progressIndicator]);

  const getAnimationClass = () => {
    switch (revealAnimation) {
      case "slide-up":
        return "timeline-slide-up";
      case "slide-left":
        return "timeline-slide-left";
      case "slide-right":
        return "timeline-slide-right";
      default:
        return "timeline-fade";
    }
  };

  const getCardPosition = (index: number) => {
    if (cardAlignment === "alternating") {
      return index % 2 === 0 ? "left" : "right";
    }
    return cardAlignment;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      {title && (
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-royal font-medium text-sm uppercase tracking-wider mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            {title}
          </h2>
        </div>
      )}

      {/* Timeline container */}
      <div ref={timelineRef} className="relative">
        {/* Center line */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-royal/20 via-royal/10 to-transparent">
          {/* Progress line */}
          {progressIndicator && (
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-royal to-royal/60 rounded-full transition-none"
              style={{ height: "0%" }}
            />
          )}
        </div>

        {/* Timeline events */}
        <div className="space-y-8 sm:space-y-12">
          {events.map((event, index) => {
            const position = getCardPosition(index);
            const animClass = getAnimationClass();

            return (
              <div
                key={index}
                className={`timeline-item ${animClass} relative flex items-start ${
                  position === "right"
                    ? "sm:flex-row-reverse"
                    : "sm:flex-row"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-white border-[3px] border-royal shadow-md shadow-royal/20 timeline-dot" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-royal/30 timeline-dot-ping" />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    position === "right"
                      ? "sm:pr-0 sm:pl-8"
                      : "sm:pl-8 sm:pr-0"
                  }`}
                >
                  <div className="timeline-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-royal/20 transition-all duration-300 group">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="bg-royal text-white text-xs font-bold px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                      {event.subtitle && (
                        <span className="text-gray-400 text-xs font-medium">
                          {event.subtitle}
                        </span>
                      )}
                    </div>

                    <h3 className="font-[var(--font-poppins)] text-lg font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
