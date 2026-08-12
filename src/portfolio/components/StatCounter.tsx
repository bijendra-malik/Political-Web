import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  sublabel,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  const decimals = value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="group flex flex-col gap-1.5">
      <span className="font-display text-3xl font-bold tracking-tight tabular-nums sm:text-4xl">
        {display.toFixed(decimals)}
        <span className="text-ember">{suffix}</span>
      </span>
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      {sublabel && (
        <span className="text-xs text-muted-foreground">{sublabel}</span>
      )}
    </div>
  );
}
