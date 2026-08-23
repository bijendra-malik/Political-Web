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

const TECH_PATTERNS = [
  ["const app = createApp();", "app.use(router);", "app.mount('#root');"],
  ["fetch('/api/data')", ".then(res => res.json())", ".then(data => render(data))"],
  ["export default function Page() {", "  return <Layout><Content /></Layout>", "}"],
  ["docker build -t myapp .", "docker run -p 3000:3000", "✔ Container started"],
  ["npm run build", "✓ 42 modules transformed", "dist/index.js  12.4kb"],
  ["SELECT * FROM users", "WHERE active = true", "ORDER BY created_at DESC"],
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
 * Project visual: always shows a gradient + code pattern background,
 * with an optional real screenshot overlaid on top when loaded.
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
  const pattern = TECH_PATTERNS[index % TECH_PATTERNS.length];
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const hasImage = !!imageUrl && !imgError;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border-b border-border/70",
        className,
      )}
    >
      {/* Layer 1: Always-visible gradient background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
          gradient,
        )}
      />

      {/* Layer 2: Code pattern decoration */}
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 flex flex-col justify-center p-8 font-mono text-[10px] leading-5 text-foreground/10 sm:text-xs sm:leading-6">
        {pattern.map((line, i) => (
          <span key={i} className={i === 0 ? "" : "pl-4"}>
            {line}
          </span>
        ))}
      </div>

      {/* Layer 3: Initials watermark */}
      <span className="font-display pointer-events-none absolute select-none text-6xl font-bold tracking-tight text-foreground/10 transition-transform duration-500 group-hover:scale-110 sm:text-7xl">
        {initialsOf(title)}
      </span>

      {/* Layer 4: Real screenshot (loads on top, fades in) */}
      {hasImage && (
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700",
            imgLoaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30" />

      {/* Browser chrome bar */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/60 bg-background/50 px-3 py-2 backdrop-blur-sm">
        <span className="size-2 rounded-full bg-destructive/70" />
        <span className="size-2 rounded-full bg-ember/70" />
        <span className="size-2 rounded-full bg-emerald-500/70" />
        <span className="ml-2 h-4 flex-1 rounded-full bg-foreground/5" />
      </div>

      {/* Title overlay */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-10">
        <span className="font-display text-sm font-semibold tracking-tight text-foreground/80 drop-shadow-lg sm:text-base">
          {title}
        </span>
      </div>

      {/* Corner glow on hover */}
      <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-ember/15 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
    </div>
  );
}
