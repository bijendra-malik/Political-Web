import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import type { PortfolioProfile } from "../types";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function About({ profile }: { profile: PortfolioProfile }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const hasImage = !!profile.avatar && !imgError;

  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: Mail, label: "Email", value: profile.email },
    ...(profile.phone ? [{ icon: Phone, label: "Phone", value: profile.phone }] : []),
    {
      icon: null,
      label: "Availability",
      value: profile.available ? "Open to freelance & full-time" : "Not available",
    },
  ];

  const socials = [
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profile.twitter, icon: Twitter, label: "Twitter" },
  ].filter((social) => social.href);

  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="About me"
          title="Design-minded engineer, product-obsessed builder."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Bio — left side */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-lg leading-8 text-foreground/85">{profile.bio}</p>

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition-colors duration-300 hover:border-ember/40"
                >
                  {fact.icon && (
                    <fact.icon className="mt-0.5 size-4 shrink-0 text-ember" />
                  )}
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10 hover:text-ember"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
              {profile.resumeUrl && (
                <Button asChild size="sm" variant="outline" className="ml-auto rounded-full">
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 size-4" /> Download CV
                  </a>
                </Button>
              )}
            </div>
          </Reveal>

          {/* Profile card — right side with prominent photo */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-32">
              {/* Glow backdrop */}
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-ember/20 via-orange-500/10 to-transparent blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
                {/* Decorative top gradient */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ember/15 to-transparent" />
                <div className="blueprint-grid absolute inset-0 opacity-20" />

                <div className="relative flex flex-col items-center gap-5 p-8 pt-10">
                  {/* Profile photo — large and prominent */}
                  <div className="relative">
                    {/* Animated glow ring */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-ember via-orange-500/50 to-amber-300/40 blur-lg opacity-60 animate-pulse" />

                    {/* Photo or initials fallback */}
                    <div className="relative size-40 overflow-hidden rounded-full border-[3px] border-background shadow-2xl">
                      {hasImage && (
                        <img
                          src={profile.avatar}
                          alt={profile.name}
                          loading="lazy"
                          onLoad={() => setImgLoaded(true)}
                          onError={() => setImgError(true)}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                            imgLoaded ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      )}
                      {/* Initials always rendered behind image as fallback */}
                      <span className="flex size-full items-center justify-center bg-gradient-to-br from-ember via-orange-500 to-amber-600 text-4xl font-bold text-white">
                        {initials}
                      </span>
                    </div>

                    {/* Online status dot */}
                    <span className="absolute right-2 bottom-2 flex size-6 items-center justify-center rounded-full border-[3px] border-card bg-emerald-500 shadow-lg">
                      <span className="size-2 rounded-full bg-white" />
                    </span>
                  </div>

                  {/* Name & role */}
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold tracking-tight">
                      {profile.name}
                    </p>
                    <p className="mt-1 font-mono text-sm text-ember">
                      {profile.role}
                    </p>
                  </div>

                  {/* Experience badge */}
                  <div className="flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2 font-mono text-xs font-medium text-ember">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-ember" />
                    </span>
                    {profile.yearsExperience}+ years experience
                  </div>

                  {/* Stats row */}
                  <div className="grid w-full grid-cols-3 gap-3">
                    {[
                      { value: "40+", label: "Projects" },
                      { value: "25+", label: "Clients" },
                      { value: "99%", label: "Uptime" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center rounded-xl border border-border/50 bg-background/50 p-3"
                      >
                        <span className="font-display text-lg font-bold text-ember">
                          {stat.value}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground uppercase">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-center text-xs italic leading-5 text-muted-foreground">
                    &ldquo;Great design is invisible. Great engineering makes it
                    possible.&rdquo;
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10 hover:text-ember"
                      >
                        <social.icon className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
