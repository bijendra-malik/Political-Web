import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import type { PortfolioProfile } from "../types";
import { Reveal } from "../components/Reveal";

export function Contact({ profile }: { profile: PortfolioProfile }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  };

  const socials = [
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profile.twitter, icon: Twitter, label: "Twitter" },
  ].filter((social) => social.href);

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[420px] rounded-t-full bg-ember/10 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="font-mono inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-ember uppercase">
            <span className="h-px w-8 bg-ember/60" /> 05 · Contact{" "}
            <span className="h-px w-8 bg-ember/60" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-ember">great</span> together.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            I&apos;m currently{" "}
            {profile.available ? (
              <span className="font-medium text-ember">available for freelance</span>
            ) : (
              "booked"
            )}{" "}
            and always open to interesting conversations. Whether you have a
            product idea, a project that needs rescuing, or just want to say hi —
            my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="group rounded-full px-7">
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 size-4" />
                {profile.email}
                <ArrowUpRight className="ml-2 size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={copyEmail}
              className="rounded-full border-border/80 px-6"
            >
              {copied ? (
                <Check className="mr-2 size-4 text-emerald-500" />
              ) : (
                <Copy className="mr-2 size-4" />
              )}
              {copied ? "Copied!" : "Copy email"}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-10 flex items-center justify-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10 hover:text-ember"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
