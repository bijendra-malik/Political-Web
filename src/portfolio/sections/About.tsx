import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import type { PortfolioProfile } from "../types";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function About({ profile }: { profile: PortfolioProfile }) {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

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
          {/* Bio */}
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

          {/* Profile card */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-ember/25 via-transparent to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-ember via-orange-500/40 to-amber-300/30 blur-[10px] opacity-70" />
                    {profile.avatar ? (
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="relative size-32 rounded-full border-2 border-background object-cover shadow-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className={`font-display relative flex size-32 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-ember/80 to-orange-500/80 text-3xl font-bold text-primary-foreground shadow-lg ${profile.avatar ? 'hidden' : ''}`}>
                      {initials}
                    </span>
                    <span className="absolute right-1 bottom-1 flex size-5 items-center justify-center rounded-full border-2 border-card bg-emerald-500">
                      <span className="size-1.5 rounded-full bg-white" />
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-lg font-semibold">{profile.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{profile.role}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 font-mono text-[11px] font-medium text-ember">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-60" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-ember" />
                    </span>
                    {profile.yearsExperience}+ years · Senior level
                  </div>
                  <p className="text-center text-xs leading-5 text-muted-foreground">
                    &ldquo;Great design is invisible. Great engineering makes it
                    possible.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
