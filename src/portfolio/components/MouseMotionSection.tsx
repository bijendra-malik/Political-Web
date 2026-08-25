import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** A single floating particle that reacts to the mouse. */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  speed: number;
  color: string;
}

const PARTICLE_COLORS = [
  "bg-ember/30",
  "bg-ember/20",
  "bg-orange-400/20",
  "bg-amber-400/25",
  "bg-yellow-500/15",
  "bg-primary/20",
];

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 10,
    delay: Math.random() * 4,
    speed: 0.5 + Math.random() * 2,
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
  }));
}

/** Interactive orbiting ring around cursor */
function CursorOrbit({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const rotation = useMotionValue(0);

  useEffect(() => {
    let frame: number;
    const tick = () => {
      rotation.set((rotation.get() + 0.4) % 360);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [rotation]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[6]"
      style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="relative size-32 rounded-full border border-ember/20"
        style={{ rotate: rotation }}
      >
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-ember/60" />
        <span className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-ember/40" />
        <span className="absolute top-1/2 -right-1 size-2 -translate-y-1/2 rounded-full bg-ember/50" />
      </motion.div>
    </motion.div>
  );
}

/** Magnetic card that attracts/repels based on mouse proximity */
function MagneticCard({
  children,
  className,
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  className?: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const unsubscribe = mouseX.on("change", (mx: number) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distX = mx - cx;
      const myVal = mouseY.get() as number;
      const distY = myVal - cy;
      const dist = Math.sqrt(distX * distX + distY * distY);
      const maxDist = 300;

      if (dist < maxDist) {
        const strength = (1 - dist / maxDist) * 18;
        x.set(distX * strength * 0.01);
        y.set(distY * strength * 0.01);
      } else {
        x.set(0);
        y.set(0);
      }
    });

    return unsubscribe;
  }, [mouseX, mouseY, x, y]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative transition-shadow duration-300", className)}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

/** Floating tag badge with mouse-reactive tilt */
function TiltTag({
  text,
  mouseX,
  mouseY,
}: {
  text: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unsubscribe = mouseX.on("change", () => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mxVal = mouseX.get() as number;
      const myVal = mouseY.get() as number;
      rotateX.set((myVal - cy) * 0.08);
      rotateY.set((mxVal - cx) * -0.08);
    });
    return unsubscribe;
  }, [mouseX, mouseY, rotateX, rotateY]);

  return (
    <motion.span
      ref={ref}
      className="inline-block rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 font-mono text-xs font-medium text-ember transition-colors hover:bg-ember/20 hover:border-ember/50"
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 600,
      }}
    >
      {text}
    </motion.span>
  );
}

const SHOWCASE_TAGS = [
  "React",
  "TypeScript",
  "Node.js",
  "Convex",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Next.js",
  "Redis",
];

const CAPABILITIES = [
  {
    title: "Frontend Architecture",
    desc: "React, Vue, and modern SPA patterns with performance-first mindset.",
    emoji: "⚡",
  },
  {
    title: "Backend & APIs",
    desc: "RESTful services, real-time APIs, and scalable serverless functions.",
    emoji: "🔧",
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, containerization, and infrastructure as code.",
    emoji: "☁️",
  },
];

/**
 * A visually stunning, fully interactive mouse-motion section that replaces
 * the old contact section on the landing page. Features particle field,
 * magnetic cards, tilting tags, and cursor orbit animation.
 */
export function MouseMotionSection() {
  const mouseX = useMotionValue<number>(-400);
  const mouseY = useMotionValue<number>(-400);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.4 });
  const [particles] = useState(() => generateParticles(28));
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  // Gradient that follows cursor
  const bgX = useTransform(springX, (v: number) => `${v}px`);
  const bgY = useTransform(springY, (v: number) => `${v}px`);

  // Combined gradient background
  const bgGradient = useTransform([bgX, bgY], ([x, y]: string[]) =>
    `radial-gradient(ellipse 500px 400px at ${x} ${y}, color-mix(in oklch, var(--ember) 14%, transparent), transparent)`,
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Cursor-reactive radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: bgGradient }}
      />

      {/* Floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className={cn("absolute rounded-full", p.color)}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -20 * p.speed, 0],
              x: [0, 10 * (p.id % 2 === 0 ? 1 : -1), 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + p.speed * 2,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cursor orbit effect */}
      <div className="hidden md:block">
        <CursorOrbit x={springX} y={springY} />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center md:mb-20">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-ember">
            <span className="text-foreground/40">06</span>
            <span className="h-px w-8 bg-ember/60" />
            What I Do
          </span>
          <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Building digital experiences
            <span className="text-ember"> that matter.</span>
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Hover around and feel the interactivity — each element responds to
            your cursor.
          </p>
        </div>

        {/* Capability cards with magnetic effect */}
        <div className="grid gap-6 sm:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <MagneticCard key={cap.title} mouseX={mouseX} mouseY={mouseY}>
              <motion.div
                className={cn(
                  "group relative cursor-default rounded-2xl border p-6 transition-all duration-300",
                  hoveredCard === i
                    ? "border-ember/50 bg-ember/10 shadow-lg shadow-ember/10"
                    : "border-border/60 bg-card/80 hover:border-ember/30",
                )}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-ember/15 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {cap.emoji}
                </span>
                <h3 className="font-display text-lg font-bold">{cap.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {cap.desc}
                </p>
                {/* Hover glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-ember/10 to-transparent opacity-0 transition-opacity duration-300",
                    hoveredCard === i && "opacity-100",
                  )}
                />
              </motion.div>
            </MagneticCard>
          ))}
        </div>

        {/* Tech stack tags with 3D tilt */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 md:mt-20">
          {SHOWCASE_TAGS.map((tag) => (
            <TiltTag
              key={tag}
              text={tag}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>

        {/* Animated gradient line */}
        <div className="relative mx-auto mt-16 h-px max-w-md overflow-hidden md:mt-20">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-ember/60 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
