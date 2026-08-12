import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A soft amber glow that trails the cursor. Rendered only on devices with a
 * fine pointer, and hidden on small screens to keep the page light.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const wide = window.innerWidth >= 768;
    if (!finePointer || !wide) return;
    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[5] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: springX,
        top: springY,
        background:
          "radial-gradient(circle, color-mix(in oklch, var(--ember) 10%, transparent) 0%, transparent 62%)",
      }}
    />
  );
}
