import { cn } from "@/lib/utils";
import { useState } from "react";

const GRADIENTS = [
  "from-amber-500/30 via-orange-500/15 to-transparent",
  "from-teal-500/30 via-emerald-500/15 to-transparent",
  "from-rose-500/30 via-pink-500/15 to-transparent",
  "from-indigo-500/30 via-violet-500/15 to-transparent",
  "from-lime-500/30 via-emerald-500/15 to-transparent",
  "from-sky-500/30 via-cyan-500/15 to-transparent",
];

function initialsOf(title: string) {
  return title
    .split(/[\s-]+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Stylized project "screenshot": shows a real screenshot when `imageUrl` is
 * provided, with a graceful fallback to a browser-chrome frame with gradient
 * and initials watermark.
 */
export function ProjectVisual({
  title,
  index = 0,
  imageUrl,
  className,
}: {
  title: string;
  index?: number;
  imageUrl?: string;
  className?: string;
}) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const [imgError, setImgError] = useState(false);
  const showImage = imageUrl && !imgError;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border-b border-border/70",
        className,
      )}
    >
      {/* Real screenshot image */}
      {showImage && (
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          loading="lazy"
          onError={() => setImgError(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Gradient fallback (shown when no image or image failed) */}
      {!showImage && (
        <>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
              gradient,
            )}
          />
          <div className="blueprint-grid absolute inset-0 opacity-40" />
          <span className="font-display relative select-none text-6xl font-bold tracking-tight text-foreground/15 transition-transform duration-500 group-hover:scale-110 sm:text-7xl">
            {initialsOf(title)}
          </span>
        </>
      )}

      {/* Dark overlay for better text readability on images */}
      {showImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      )}

      {/* Browser chrome bar */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/60 bg-background/50 px-3 py-2 backdrop-blur-sm">
        <span className="size-2 rounded-full bg-destructive/70" />
        <span className="size-2 rounded-full bg-ember/70" />
        <span className="size-2 rounded-full bg-emerald-500/70" />
        <span className="ml-2 h-4 flex-1 rounded-full bg-foreground/5" />
      </div>

      {/* Project title overlay on image */}
      {showImage && (
        <div className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-10">
          <span className="font-display text-sm font-semibold tracking-tight text-foreground/90 drop-shadow-lg sm:text-base">
            {title}
          </span>
        </div>
      )}

      {/* Corner glow on hover */}
      <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-ember/15 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
    </div>
  );
}
