import { useEffect } from "react";
import type { PortfolioProfile } from "../types";

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

function luminance([r, g, b]: [number, number, number]) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

/**
 * Applies the owner's custom theme colors (accent / text / background) as CSS
 * variables on <html>, which instantly recolors the entire site. Colors are
 * stored on the Convex profile and this hook keeps the site in sync reactively.
 *
 * The accent drives `--ember` (accents everywhere) and `--primary` (buttons),
 * and the foreground/background vars drive the overall look. `--primary-foreground`
 * is auto-derived from the accent luminance so button text stays readable.
 */
export function useThemeCustomization(profile?: PortfolioProfile | null) {
  const accent = profile?.accentColor?.trim();
  const text = profile?.textColor?.trim();
  const background = profile?.backgroundColor?.trim();

  useEffect(() => {
    const root = document.documentElement;

    // Reset any previous inline overrides so cleared fields revert to the
    // built-in light/dark palette.
    const keys = [
      "--ember",
      "--primary",
      "--primary-foreground",
      "--foreground",
      "--background",
    ] as const;
    for (const key of keys) root.style.removeProperty(key);

    if (accent) {
      root.style.setProperty("--ember", accent);
      root.style.setProperty("--primary", accent);
      const rgb = hexToRgb(accent);
      if (rgb) {
        root.style.setProperty(
          "--primary-foreground",
          luminance(rgb) > 0.55 ? "#0a0a0b" : "#fafafa",
        );
      }
    }
    if (text) {
      root.style.setProperty("--foreground", text);
    }
    if (background) {
      root.style.setProperty("--background", background);
    }
  }, [accent, text, background]);
}
