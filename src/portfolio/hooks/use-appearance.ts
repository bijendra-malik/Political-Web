import { useEffect, useState } from "react";
import type { PortfolioProfile } from "../types";

export type FontChoice = "modern" | "grotesk" | "serif" | "mono";

export interface AppearanceSettings {
  accent: string;
  text: string;
  font: FontChoice;
}

export const FONT_OPTIONS: { value: FontChoice; label: string; hint: string }[] = [
  { value: "modern", label: "Modern", hint: "Inter + Space Grotesk" },
  { value: "grotesk", label: "Display", hint: "Space Grotesk" },
  { value: "serif", label: "Editorial", hint: "Serif" },
  { value: "mono", label: "Terminal", hint: "JetBrains Mono" },
];

const FONT_STACKS: Record<FontChoice, { sans: string; display: string }> = {
  modern: {
    sans: '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    display: '"Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif',
  },
  grotesk: {
    sans: '"Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif',
    display: '"Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif',
  },
  serif: {
    sans: 'Georgia, "Times New Roman", ui-serif, serif',
    display: 'Georgia, "Times New Roman", ui-serif, serif',
  },
  mono: {
    sans: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    display: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  },
};

const STORAGE_KEY = "portfolio-appearance";

const DEFAULT_APPEARANCE: AppearanceSettings = {
  accent: "",
  text: "",
  font: "modern",
};

export const TEXT_PRESETS = [
  "#fafaf9",
  "#e7e5e4",
  "#d6d3d1",
  "#1c1917",
  "#292524",
  "#44403c",
  "#78716c",
  "#0ea5e9",
];

export const ACCENT_PRESETS = [
  "#f59e0b",
  "#f97316",
  "#ef4444",
  "#ec4899",
  "#8b5cf6",
  "#3b82f6",
  "#14b8a6",
  "#10b981",
  "#84cc16",
  "#0ea5e9",
];

function load(): AppearanceSettings {
  if (typeof window === "undefined") return DEFAULT_APPEARANCE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_APPEARANCE;
    const parsed = JSON.parse(raw) as Partial<AppearanceSettings>;
    return {
      accent: typeof parsed.accent === "string" ? parsed.accent : "",
      text: typeof parsed.text === "string" ? parsed.text : "",
      font:
        parsed.font && parsed.font in FONT_STACKS ? parsed.font : "modern",
    };
  } catch {
    return DEFAULT_APPEARANCE;
  }
}

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

function applyAppearance(
  settings: AppearanceSettings,
  profile?: PortfolioProfile | null,
) {
  const root = document.documentElement;
  const keys = [
    "--ember",
    "--primary",
    "--primary-foreground",
    "--foreground",
    "--background",
    "--font-sans",
    "--font-display",
  ] as const;
  for (const key of keys) root.style.removeProperty(key);

  // Font family
  const font = FONT_STACKS[settings.font];
  root.style.setProperty("--font-sans", font.sans);
  root.style.setProperty("--font-display", font.display);

  // Accent — local panel choice wins over the owner's saved site color
  const accent = settings.accent.trim() || profile?.accentColor?.trim() || "";
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

  // Text color — local choice wins over the owner's saved site color
  const text = settings.text.trim() || profile?.textColor?.trim() || "";
  if (text) {
    root.style.setProperty("--foreground", text);
  }

  // Background only comes from the owner's saved site color
  const background = profile?.backgroundColor?.trim() || "";
  if (background) {
    root.style.setProperty("--background", background);
  }
}

/**
 * Site-wide appearance: accent + text colors and the font family. The owner's
 * saved Convex colors are the base; a visitor's in-browser choices (from the
 * navbar appearance panel) override them via localStorage.
 */
export function useAppearance(profile?: PortfolioProfile | null) {
  const [appearance, setAppearance] = useState<AppearanceSettings>(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appearance));
    } catch {
      // localStorage unavailable — appearance just won't persist
    }
  }, [appearance]);

  useEffect(() => {
    applyAppearance(appearance, profile);
  }, [
    appearance,
    profile?.accentColor,
    profile?.textColor,
    profile?.backgroundColor,
  ]);

  const update = (patch: Partial<AppearanceSettings>) =>
    setAppearance((prev) => ({ ...prev, ...patch }));

  const reset = () => setAppearance(DEFAULT_APPEARANCE);

  return { appearance, update, reset };
}
