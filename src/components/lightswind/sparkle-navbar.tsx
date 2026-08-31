"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  tx: number;
  ty: number;
}

interface NavItem {
  name: string;
  href: string;
}

interface SparkleNavbarProps {
  items: NavItem[];
  color?: string;
}

const COLORS = ["#f2f231", "#26ae90", "#ffffff", "#066a9c"];

export default function SparkleNavbar({
  items,
  color = "#26ae90",
}: SparkleNavbarProps) {
  const pathname = usePathname();

  const getActiveIndex = () => {
    const idx = items.findIndex(
      (l) =>
        pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
    );
    return idx >= 0 ? idx : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const sparkleIdRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      const tab = tabRefs.current[activeIndex];
      const container = containerRef.current;
      if (tab && container) {
        const containerRect = container.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();
        setIndicatorStyle({
          left: tabRect.left - containerRect.left,
          width: tabRect.width,
        });
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  const createSparkles = useCallback((x: number, y: number) => {
    const newSparkles: Sparkle[] = Array.from({ length: 16 }, () => ({
      id: sparkleIdRef.current++,
      x,
      y,
      size: Math.random() * 6 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      tx: (Math.random() - 0.5) * 60,
      ty: (Math.random() - 0.5) * 60,
    }));
    setSparkles((prev) => [...prev, ...newSparkles]);
    setTimeout(() => {
      setSparkles((prev) =>
        prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id))
      );
    }, 700);
  }, []);

  const handleClick = (index: number, e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    createSparkles(e.clientX - rect.left, e.clientY - rect.top);
    setActiveIndex(index);
  };

  return (
    <div ref={containerRef} className="relative flex items-center gap-1">
      {/* Sparkles layer */}
      <div className="absolute inset-0 pointer-events-none overflow-visible z-50">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
              animation: `sparkle-fly 0.6s ease-out forwards`,
              ["--tx" as string]: `${s.tx}px`,
              ["--ty" as string]: `${s.ty}px`,
            }}
          />
        ))}
      </div>

      {/* Nav items — using Next.js Link for reliable client-side routing */}
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          ref={(el) => { tabRefs.current[i] = el; }}
          onClick={(e) => handleClick(i, e)}
          className={`relative px-3 py-2 rounded-lg text-[12px] font-medium transition-colors duration-300 uppercase tracking-wider ${
            activeIndex === i
              ? "text-white"
              : "text-white/50 hover:text-white/80"
          }`}
          style={
            activeIndex === i
              ? { textShadow: `0 0 12px ${color}80`, color }
              : {}
          }
        >
          {item.name}
        </Link>
      ))}

      {/* Glowing strike-through indicator */}
      <div
        className="absolute bottom-0 h-[2.5px] rounded-full transition-all duration-500 ease-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60, 0 0 30px ${color}30`,
        }}
      />
    </div>
  );
}
