"use client";

import React, { useRef, useState, useCallback, createContext, useContext } from "react";

interface GlowingCardsContextType {
  enableGlow: boolean;
  glowRadius: number;
  glowOpacity: number;
  animationDuration: number;
}

const GlowingContext = createContext<GlowingCardsContextType>({
  enableGlow: true,
  glowRadius: 30,
  glowOpacity: 0.8,
  animationDuration: 500,
});

interface GlowingCardsProps {
  children: React.ReactNode;
  enableGlow?: boolean;
  glowRadius?: number;
  glowOpacity?: number;
  animationDuration?: number;
  gap?: string;
  className?: string;
  responsive?: boolean;
}

export function GlowingCards({
  children,
  enableGlow = true,
  glowRadius = 30,
  glowOpacity = 0.8,
  animationDuration = 500,
  gap = "2rem",
  className = "",
  responsive = true,
}: GlowingCardsProps) {
  return (
    <GlowingContext.Provider value={{ enableGlow, glowRadius, glowOpacity, animationDuration }}>
      <div
        className={`glowing-cards ${responsive ? "glowing-cards-responsive" : ""} ${className}`}
        style={{ gap, display: "grid" }}
      >
        {children}
      </div>
    </GlowingContext.Provider>
  );
}

interface GlowingCardProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

export function GlowingCard({
  children,
  glowColor = "#26ae90",
  className = "",
  style,
  ref,
}: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mergedRef = (node: HTMLDivElement | null) => {
    (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  const { enableGlow, glowRadius, glowOpacity, animationDuration } = useContext(GlowingContext);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !enableGlow) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [enableGlow]
  );

  return (
    <div
      ref={mergedRef}
      className={`glowing-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        ...(isHovered && enableGlow
          ? {
              boxShadow: `0 0 ${glowRadius}px ${glowColor}30, 0 8px 32px rgba(0,0,0,0.08)`,
              borderColor: `${glowColor}60`,
            }
          : {}),
        ...style,
      }}
    >
      {/* Glow spotlight */}
      {enableGlow && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
            background: `radial-gradient(${glowRadius * 3}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}${Math.round(glowOpacity * 255).toString(16).padStart(2, "0")}, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: `opacity ${animationDuration}ms ease`,
          }}
        />
      )}
      {/* Glow border */}
      {enableGlow && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            pointerEvents: "none",
            zIndex: 0,
            opacity: isHovered ? 1 : 0,
            transition: `opacity ${animationDuration}ms ease`,
            background: `radial-gradient(${glowRadius * 2}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 50%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude" as never,
            WebkitMaskComposite: "xor",
            padding: "1.5px",
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1, padding: "inherit" }}>
        {children}
      </div>
    </div>
  );
}
