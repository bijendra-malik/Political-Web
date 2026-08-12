import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import type { PortfolioProfile } from "../types";
import { StatCounter } from "../components/StatCounter";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const TERMINAL_LINES = [
  { text: "const developer = {", indent: "" },
  { text: 'name: "Ananya Sharma",', indent: "  " },
  { text: 'role: "Full-Stack Dev & UI/UX",', indent: "  " },
  { text: "yearsOfExperience: 8+,", indent: "  " },
  { text: 'stack: ["React", "Node", "Design"],', indent: "  " },
  { text: "};", indent: "" },
];

function SocialLinks({ profile }: { profile: PortfolioProfile }) {
  const links = [
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profile.twitter, icon: Twitter, label: "Twitter" },
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  ].filter((link) => link.href);

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10 hover:text-ember"
        >
          <link.icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

export function Hero({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Backdrop */}
      <div className="blueprint-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-ember/12 blur-[130px]" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 font-mono text-xs font-medium text-ember">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-ember" />
                </span>
                {profile.available ? "Available for new projects" : "Currently booked"}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-ember" /> {profile.location}
              </span>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-3">
              <span className="font-mono text-sm font-medium tracking-[0.2em] text-foreground/60 uppercase">
                Hello, I&apos;m
              </span>
              <h1 className="font-display text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {profile.name.split(" ")[0]}{" "}
                <span className="relative whitespace-nowrap text-ember">
                  {profile.name.split(" ").slice(1).join(" ") || "Dev"}
                  <svg
                    aria-hidden
                    viewBox="0 0 220 12"
                    fill="none"
                    className="absolute -bottom-1 left-0 w-full text-ember/50"
                  >
                    <path
                      d="M3 9C60 3 160 3 217 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="font-display text-lg font-medium text-foreground/85 sm:text-xl">
                {profile.role}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-7 text-muted-foreground"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="group rounded-full px-6">
                <a href="#work">
                  View my work
                  <ArrowDown className="ml-2 size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-border/80 px-6"
              >
                <a href="#contact">
                  Get in touch
                  <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
              {profile.resumeUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-5 text-muted-foreground"
                >
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 size-4" /> CV
                  </a>
                </Button>
              )}
            </motion.div>

            <motion.div variants={item}>
              <SocialLinks profile={profile} />
            </motion.div>
          </div>

          {/* Terminal mockup */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-ember/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 border-b border-border/70 bg-muted/50 px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/70" />
                <span className="size-3 rounded-full bg-ember/70" />
                <span className="size-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  portfolio.ts — zsh
                </span>
              </div>
              <div className="flex flex-col gap-2 p-5 font-mono text-[13px] leading-6 sm:text-sm">
                {TERMINAL_LINES.map((line, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.18, duration: 0.4, ease: EASE }}
                    className={line.indent ? "pl-6" : ""}
                  >
                    <span className="text-ember">➜</span>{" "}
                    <span className={index === 1 ? "text-ember" : "text-foreground/90"}>
                      {line.text}
                    </span>
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex items-center gap-1"
                >
                  <span className="text-ember">➜</span>
                  <span className="inline-block h-4 w-2 animate-pulse bg-ember" />
                </motion.span>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-6 -right-4 hidden animate-float items-center gap-2 rounded-xl border border-border/70 bg-card/90 px-3.5 py-2.5 shadow-lg backdrop-blur md:flex"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="font-display text-2xl font-bold text-ember">
                {profile.yearsExperience}+
              </span>
              <span className="text-xs leading-tight text-muted-foreground">
                Years of
                <br />
                experience
              </span>
            </div>
            <div
              className="absolute -bottom-6 -left-4 hidden animate-float items-center gap-2 rounded-xl border border-border/70 bg-card/90 px-3.5 py-2.5 shadow-lg backdrop-blur md:flex"
              style={{ animationDelay: "1.4s" }}
            >
              <span className="text-ember">★</span>
              <span className="text-xs leading-tight text-muted-foreground">
                40+ products
                <br />
                shipped
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-2 gap-8 border-t border-border/70 pt-10 md:mt-24 md:grid-cols-4"
        >
          {[
            {
              value: profile.yearsExperience,
              suffix: "+",
              label: "Years experience",
            },
            { value: 40, suffix: "+", label: "Projects shipped" },
            { value: 25, suffix: "+", label: "Happy clients" },
            { value: 99.9, suffix: "%", label: "Average uptime" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={item}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
