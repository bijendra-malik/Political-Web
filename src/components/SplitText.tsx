"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  delay?: number;
  duration?: number;
  splitType?: "chars" | "words";
  textAlign?: "left" | "center" | "right";
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function SplitText({
  text,
  className = "",
  textClassName = "",
  delay = 0.2,
  duration = 0.6,
  splitType = "chars",
  textAlign = "left",
  tag = "span",
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const textEl = containerRef.current.querySelector(".split-text-content");
    if (!textEl) return;

    const splitter = splitType === "chars" ? "" : " ";
    const parts = text.split(splitter);

    textEl.innerHTML = parts
      .map((part) => {
        const space = splitType === "words" ? "&nbsp;" : "";
        const display = part === " " ? "&nbsp;" : part;
        return `<span class="inline-block ${textClassName}" style="opacity:0; transform:translateY(40px)">${display}${space}</span>`;
      })
      .join("");

    const elements = textEl.querySelectorAll("span");

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration,
      ease: "power3.out",
      stagger: splitType === "chars" ? 0.03 : 0.06,
      delay,
    });
  }, [text, delay, duration, splitType, textClassName]);

  const Tag = tag;

  return (
    <div ref={containerRef} className={`inline ${className}`} style={{ textAlign, display: "inline" }}>
      <Tag className="split-text-content inline whitespace-nowrap" />
    </div>
  );
}
