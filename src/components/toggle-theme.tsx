import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// All supported animation types for the View Transition API
export type AnimationType =
  | "none"
  | "circle-spread"
  | "round-morph"
  | "swipe-left"
  | "swipe-up"
  | "diag-down-right"
  | "fade-in-out"
  | "shrink-grow"
  | "flip-x-in"
  | "split-vertical"
  | "swipe-right"
  | "swipe-down"
  | "wave-ripple";

interface ToggleThemeProps {
  duration?: number;
  animationType?: AnimationType;
  className?: string;
}

/**
 * Build the CSS `::view-transition-new(root)` keyframes and name for the
 * chosen animation type. Returns the style element and the transition name.
 */
function applyAnimationStyle(type: AnimationType, duration: number) {
  const id = "toggle-theme-vt-style";
  let el = document.getElementById(id) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = id;
    document.head.appendChild(el);
  }

  let keyframes = "";
  let name = "none";

  switch (type) {
    case "circle-spread":
      name = "circle-spread";
      keyframes = `
        @keyframes circle-spread-in {
          from { clip-path: circle(0% at 50% 50%); }
          to   { clip-path: circle(150% at 50% 50%); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out circle-spread-in;
        }`;
      break;
    case "round-morph":
      name = "round-morph";
      keyframes = `
        @keyframes round-morph-in {
          from { clip-path: circle(0% at 50% 50%); border-radius: 50%; }
          to   { clip-path: circle(150% at 50% 50%); border-radius: 0%; }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out round-morph-in;
        }`;
      break;
    case "swipe-left":
      name = "swipe-left";
      keyframes = `
        @keyframes swipe-left-in {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out swipe-left-in;
        }`;
      break;
    case "swipe-right":
      name = "swipe-right";
      keyframes = `
        @keyframes swipe-right-in {
          from { clip-path: inset(0 0 0 100%); }
          to   { clip-path: inset(0 0 0 0); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out swipe-right-in;
        }`;
      break;
    case "swipe-up":
      name = "swipe-up";
      keyframes = `
        @keyframes swipe-up-in {
          from { clip-path: inset(0 0 100% 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out swipe-up-in;
        }`;
      break;
    case "swipe-down":
      name = "swipe-down";
      keyframes = `
        @keyframes swipe-down-in {
          from { clip-path: inset(100% 0 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out swipe-down-in;
        }`;
      break;
    case "diag-down-right":
      name = "diag-down-right";
      keyframes = `
        @keyframes diag-down-right-in {
          from { clip-path: polygon(0 0, 0 0, 0 0); }
          to   { clip-path: polygon(0 0, 200% 0, 0 200%); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out diag-down-right-in;
        }`;
      break;
    case "fade-in-out":
      name = "fade-in-out";
      keyframes = `
        ::view-transition-old(root) {
          animation: ${duration}ms ease-in-out fade-out;
        }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out fade-in;
        }
        @keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
        @keyframes fade-in  { from { opacity: 0; } to { opacity: 1; } }`;
      break;
    case "shrink-grow":
      name = "shrink-grow";
      keyframes = `
        @keyframes shrink-out { to { transform: scale(0); opacity: 0; } }
        @keyframes grow-in   { from { transform: scale(0); opacity: 0; } }
        ::view-transition-old(root) {
          animation: ${duration}ms ease-in-out shrink-out;
        }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out grow-in;
        }`;
      break;
    case "flip-x-in":
      name = "flip-x-in";
      keyframes = `
        @keyframes flip-out { to { transform: rotateX(90deg); opacity: 0; } }
        @keyframes flip-in  { from { transform: rotateX(-90deg); opacity: 0; } }
        ::view-transition-old(root) {
          animation: ${duration}ms ease-in-out flip-out;
          transform-origin: center;
        }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out flip-in;
          transform-origin: center;
        }`;
      break;
    case "split-vertical":
      name = "split-vertical";
      keyframes = `
        @keyframes split-out {
          from { clip-path: inset(0); }
          to   { clip-path: inset(0 0 50% 0); }
        }
        @keyframes split-in {
          from { clip-path: inset(50% 0 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }
        ::view-transition-old(root) { animation: ${duration}ms ease-in-out split-out; }
        ::view-transition-new(root) { animation: ${duration}ms ease-in-out split-in; }`;
      break;
    case "wave-ripple":
      name = "wave-ripple";
      keyframes = `
        @keyframes wave-ripple-in {
          from { clip-path: circle(0% at 50% 50%); filter: hue-rotate(0deg); }
          50%  { filter: hue-rotate(30deg); }
          to   { clip-path: circle(150% at 50% 50%); filter: hue-rotate(0deg); }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) {
          animation: ${duration}ms ease-in-out wave-ripple-in;
        }`;
      break;
    case "none":
    default:
      el.textContent = "";
      return;
  }

  el.textContent = keyframes;
}

/**
 * An accessible toggle button that switches between light and dark themes
 * using the View Transition API for smooth, customizable full-page animations.
 */
export function ToggleTheme({
  duration = 400,
  animationType = "circle-spread",
  className,
}: ToggleThemeProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggle = useCallback(() => {
    const next = isDark ? "light" : "dark";

    // Use View Transition API if supported
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      applyAnimationStyle(animationType, duration);
      (document as any).startViewTransition(() => {
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  }, [isDark, setTheme, animationType, duration]);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={cn(
        "relative size-9 overflow-hidden rounded-full border-border/80 bg-background/60 backdrop-blur transition-colors hover:border-ember/60 hover:bg-ember/10",
        className,
      )}
    >
      <Sun
        className={cn(
          "size-4 transition-all duration-500",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all duration-500",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0",
        )}
      />
    </Button>
  );
}
