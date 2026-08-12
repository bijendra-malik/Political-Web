import { cn } from "@/lib/utils";

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
 * Stylized project "screenshot": a browser-chrome frame with a deterministic
 * gradient, grid texture and the project's initials — no external images
 * needed, and it looks intentional in both themes.
 */
export function ProjectVisual({
  title,
  index = 0,
  className,
}: {
  title: string;
  index?: number;
  className?: string;
}) {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border/70",
        className,
      )}
    >
      {/* deterministic gradient wash */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
          gradient,
        )}
      />
      {/* blueprint grid */}
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      {/* big initials watermark */}
      <span className="font-display relative select-none text-6xl font-bold tracking-tight text-foreground/15 transition-transform duration-500 group-hover:scale-110 sm:text-7xl">
        {initialsOf(title)}
      </span>
      {/* browser chrome */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-border/60 bg-background/50 px-3 py-2 backdrop-blur-sm">
        <span className="size-2 rounded-full bg-destructive/70" />
        <span className="size-2 rounded-full bg-ember/70" />
        <span className="size-2 rounded-full bg-emerald-500/70" />
        <span className="ml-2 h-4 flex-1 rounded-full bg-foreground/5" />
      </div>
      {/* corner glow on hover */}
      <div className="absolute -bottom-16 -right-16 size-40 rounded-full bg-ember/15 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
    </div>
  );
}
