"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface Options {
  direction?: Direction;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const transforms: Record<Direction, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(-40px)",
  right: "translateX(40px)",
  fade: "none",
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const { direction = "up", delay = 0, duration = 700, threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = transforms[direction];
    el.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          if (once) obs.unobserve(el);
        } else if (!once) {
          el.style.opacity = "0";
          el.style.transform = transforms[direction];
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [direction, delay, duration, threshold, once]);

  return ref;
}

export function useScrollStagger<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) {
  const { direction = "up", delay = 0, duration = 600, threshold = 0.1 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = transforms[direction];
      child.style.transition = `opacity ${duration}ms ease-out ${delay + i * 100}ms, transform ${duration}ms ease-out ${delay + i * 100}ms`;
    });

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "none";
          });
          obs.unobserve(el);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [direction, delay, duration, threshold]);

  return ref;
}
