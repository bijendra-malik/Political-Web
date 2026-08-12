import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Moon, Palette, RotateCcw, Sun, Type } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  ACCENT_PRESETS,
  FONT_OPTIONS,
  TEXT_PRESETS,
  type AppearanceSettings,
  type FontChoice,
} from "../hooks/use-appearance";

interface AppearancePanelProps {
  appearance: AppearanceSettings;
  onChange: (patch: Partial<AppearanceSettings>) => void;
  onReset: () => void;
}

function SwatchRow({
  label,
  presets,
  value,
  onPick,
}: {
  label: string;
  presets: string[];
  value: string;
  onPick: (color: string) => void;
}) {
  return (
    <div className="grid gap-1.5">
      <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-1.5">
        {presets.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={`${label}: ${color}`}
            onClick={() => onPick(color)}
            className={cn(
              "size-6 rounded-full border border-border/70 transition-transform duration-200 hover:scale-125",
              value.toLowerCase() === color.toLowerCase() &&
                "ring-2 ring-ember ring-offset-2 ring-offset-background",
            )}
            style={{ background: color }}
          />
        ))}
        {/* Custom color picker */}
        <label
          className="relative flex size-6 cursor-pointer items-center justify-center rounded-full border border-dashed border-border text-muted-foreground transition-colors hover:border-ember hover:text-ember"
          title="Custom color"
        >
          <Palette className="size-3.5" />
          <input
            type="color"
            value={value || "#f59e0b"}
            onChange={(e) => onPick(e.target.value)}
            className="absolute inset-0 size-full cursor-pointer opacity-0"
          />
        </label>
      </div>
    </div>
  );
}

export function AppearancePanel({
  appearance,
  onChange,
  onReset,
}: AppearancePanelProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Customize appearance"
          className="relative size-9 overflow-hidden rounded-full border-border/80 bg-background/60 backdrop-blur transition-colors hover:border-ember/60 hover:bg-ember/10"
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
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={10}
        className="w-[19rem] rounded-2xl border-border/70 p-0 shadow-2xl"
      >
        <div className="border-b border-border/70 px-4 py-3">
          <p className="font-display text-sm font-semibold">Appearance</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            Theme, colors &amp; fonts — live preview, saved on this device.
          </p>
        </div>

        <div className="grid gap-4 p-4">
          {/* Mode */}
          <div className="grid gap-1.5">
            <span className="font-mono text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
              Mode
            </span>
            <div className="grid grid-cols-2 gap-1.5 rounded-xl border border-border/70 bg-muted/50 p-1">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                  !isDark
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Sun className="size-3.5" /> Light
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all",
                  isDark
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Moon className="size-3.5" /> Dark
              </button>
            </div>
          </div>

          {/* Accent color */}
          <SwatchRow
            label="Accent color"
            presets={ACCENT_PRESETS}
            value={appearance.accent}
            onPick={(color) => onChange({ accent: color })}
          />

          {/* Text color */}
          <SwatchRow
            label="Text color"
            presets={TEXT_PRESETS}
            value={appearance.text}
            onPick={(color) => onChange({ text: color })}
          />

          {/* Font family */}
          <div className="grid gap-1.5">
            <span className="font-mono flex items-center gap-1.5 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
              <Type className="size-3" /> Font family
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {FONT_OPTIONS.map((font) => (
                <button
                  key={font.value}
                  type="button"
                  onClick={() => onChange({ font: font.value as FontChoice })}
                  className={cn(
                    "flex flex-col items-start rounded-xl border px-3 py-2 text-left transition-all",
                    appearance.font === font.value
                      ? "border-ember/60 bg-ember/10"
                      : "border-border/70 hover:border-ember/40",
                  )}
                >
                  <span className="text-xs font-semibold">{font.label}</span>
                  <span className="text-[10px] text-muted-foreground">
                    {font.hint}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/70 px-4 py-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="w-full rounded-full text-muted-foreground"
          >
            <RotateCcw className="mr-1.5 size-3.5" /> Reset to default
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
