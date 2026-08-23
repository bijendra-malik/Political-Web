"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface MeteorImpactBorderProps {
  children: React.ReactNode;
  glowColor?: string;
  speed?: number;
  className?: string;
}

/**
 * Animated gradient border that simulates meteors / particles travelling
 * around the card edge.  The animation pauses on hover so the user can
 * focus on the content inside.
 */
export function MeteorImpactBorder({
  children,
  glowColor = "#f59e0b",
  speed = 3,
  className = "",
}: MeteorImpactBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const [, forceRender] = useState(0);

  const handleMouseEnter = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    pausedRef.current = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Parse glow colour to RGB
    const hexToRgb = (hex: string) => {
      const h = hex.replace("#", "");
      const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    };
    const rgb = hexToRgb(glowColor);

    // Meteor particles
    interface Particle {
      progress: number;
      speed: number;
      size: number;
      opacity: number;
      offset: number;
    }

    const particles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
      progress: i / 6,
      speed: (0.0008 + Math.random() * 0.0006) * speed,
      size: 1.5 + Math.random() * 2,
      opacity: 0.5 + Math.random() * 0.5,
      offset: Math.random() * 0.15,
    }));

    const drawBorder = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const r = 16; // border-radius
      const pad = 1; // inset so stroke is centred on the edge

      // Full perimeter path
      const perimeterPath = (ctx: CanvasRenderingContext2D) => {
        const w = width - pad * 2;
        const h = height - pad * 2;
        ctx.beginPath();
        ctx.moveTo(pad + r, pad);
        ctx.lineTo(pad + w - r, pad);
        ctx.arcTo(pad + w, pad, pad + w, pad + r, r);
        ctx.lineTo(pad + w, pad + h - r);
        ctx.arcTo(pad + w, pad + h, pad + w - r, pad + h, r);
        ctx.lineTo(pad + r, pad + h);
        ctx.arcTo(pad, pad + h, pad, pad + h - r, r);
        ctx.lineTo(pad, pad + r);
        ctx.arcTo(pad, pad, pad + r, pad, r);
        ctx.closePath();
      };

      // Faint base border
      perimeterPath(ctx);
      ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Animated glow along perimeter
      perimeterPath(ctx);
      const totalLen = 2 * (width + height - 4 * r) + 2 * Math.PI * r;
      ctx.setLineDash([totalLen * 0.12, totalLen * 0.88]);
      ctx.lineDashOffset = -(time * 0.04 * speed);
      ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.35)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.setLineDash([]);

      // Meteor particles
      particles.forEach((p) => {
        const pos = getPointOnPerimeter(
          (p.progress + p.offset) % 1,
          width,
          height,
          r,
          pad,
        );

        // Glow
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.size * 8);
        grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.25 * p.opacity})`);
        grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(255,255,255,${0.8 * p.opacity})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    let lastTime = 0;
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!pausedRef.current) {
        particles.forEach((p) => {
          p.progress = (p.progress + p.speed * delta * 0.06) % 1;
        });
      }

      drawBorder(time);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [glowColor, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}

/** Get (x,y) on a rounded-rect perimeter at progress 0→1. */
function getPointOnPerimeter(
  t: number,
  w: number,
  h: number,
  r: number,
  pad: number,
): { x: number; y: number } {
  const segments = [
    { len: w - 2 * r, fn: (s: number) => ({ x: pad + r + s, y: pad }) },
    { len: Math.PI * r * 0.5, fn: (s: number) => { const a = s / r; return { x: pad + w - r + Math.sin(a) * r, y: pad + r - Math.cos(a) * r }; } },
    { len: h - 2 * r, fn: (s: number) => ({ x: pad + w, y: pad + r + s }) },
    { len: Math.PI * r * 0.5, fn: (s: number) => { const a = s / r; return { x: pad + w - r + Math.cos(a) * r, y: pad + h - r + Math.sin(a) * r }; } },
    { len: w - 2 * r, fn: (s: number) => ({ x: pad + w - r - s, y: pad + h }) },
    { len: Math.PI * r * 0.5, fn: (s: number) => { const a = s / r; return { x: pad + r - Math.sin(a) * r, y: pad + h - r + Math.cos(a) * r }; } },
    { len: h - 2 * r, fn: (s: number) => ({ x: pad, y: pad + h - r - s }) },
    { len: Math.PI * r * 0.5, fn: (s: number) => { const a = s / r; return { x: pad + r - Math.cos(a) * r, y: pad + r - Math.sin(a) * r }; } },
  ];

  const total = segments.reduce((acc, s) => acc + s.len, 0);
  let target = t * total;

  for (const seg of segments) {
    if (target <= seg.len) return seg.fn(target);
    target -= seg.len;
  }
  return segments[0].fn(0);
}

export default MeteorImpactBorder;
