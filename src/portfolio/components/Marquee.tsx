export function Marquee({ items }: { items: string[] }) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const row = [...items, ...items];

  return (
    <div className="marquee-track relative overflow-hidden border-y border-border/70 bg-card/40 py-4">
      <div className="marquee-inner flex w-max animate-marquee items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-sm font-medium tracking-wide whitespace-nowrap text-foreground/70 uppercase"
          >
            {item}
            <span aria-hidden className="text-ember">✦</span>
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
