import { useAuth } from "@/hooks/use-auth";
import {
  Github,
  Heart,
  LayoutDashboard,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { useNavigate } from "react-router";
import type { PortfolioProfile } from "../types";

interface Social {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function Footer({ profile }: { profile: PortfolioProfile }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const socials: Social[] = [
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profile.twitter ?? "", icon: Twitter, label: "Twitter / X" },
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  ].filter((social) => social.href);

  return (
    <footer className="border-t border-border/70 bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Designed &amp; built with{" "}
            <Heart className="inline size-3 fill-ember text-ember" /> using
            React · Tailwind · Convex
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/60 hover:bg-ember/10 hover:text-ember"
            >
              <social.icon className="size-4" />
            </a>
          ))}
          <button
            type="button"
            onClick={() =>
              navigate(
                isAuthenticated
                  ? "/dashboard"
                  : "/auth?returnTo=%2Fdashboard",
              )
            }
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-ember/60 hover:text-ember"
          >
            <LayoutDashboard className="size-3.5" />
            {isAuthenticated ? "Manage content" : "Owner sign-in"}
          </button>
        </div>
      </div>
    </footer>
  );
}
