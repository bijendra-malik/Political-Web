import { useAuth } from "@/hooks/use-auth";
import {
  Github,
  Heart,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useNavigate } from "react-router";
import type { PortfolioProfile } from "../types";

interface Social {
  href: string;
  icon: LucideIcon;
  label: string;
  color: string;
}

export function Footer({ profile }: { profile: PortfolioProfile }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const socials: Social[] = [
    { href: profile.github, icon: Github, label: "GitHub", color: "hover:text-white hover:border-white/40" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0077B5] hover:border-[#0077B5]/40" },
    { href: profile.twitter ?? "", icon: Twitter, label: "Twitter / X", color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40" },
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email", color: "hover:text-ember hover:border-ember/40" },
  ].filter((social) => social.href);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-card/20 to-card/60 backdrop-blur-sm">
      {/* Decorative gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main footer content */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-bold tracking-tight">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building modern web experiences with passion and precision.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground/70">
              <MapPin className="size-3.5" />
              <span>Noida, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Navigation
            </p>
            <ul className="space-y-2">
              {["#about", "#skills", "#projects", "#contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="h-px w-3 bg-border transition-all duration-200 group-hover:w-5 group-hover:bg-ember" />
                    {link.replace("#", "").charAt(0).toUpperCase() + link.replace("#", "").slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Get in touch
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="size-3.5 text-ember/70" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </li>
              {profile.phone && (
                <li>
                  <a
                    href={`tel:${profile.phone}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <Phone className="size-3.5 text-ember/70" />
                    {profile.phone}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Send className="size-3.5 text-ember/70" />
                <span>Available for freelance</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
              Connect
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-sm text-muted-foreground transition-all duration-200 ${social.color}`}
                >
                  <social.icon className="size-4" />
                  <ArrowUpRight className="size-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/30 py-5 sm:flex-row">
          <p className="text-xs text-muted-foreground/50">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground/50">
            Designed &amp; built with
            <Heart className="inline size-3 fill-ember/50 text-ember/50 transition-colors hover:fill-ember hover:text-ember" />
            using React · Tailwind · Convex
          </p>
          <button
            type="button"
            onClick={() =>
              navigate(
                isAuthenticated
                  ? "/dashboard"
                  : "/auth?returnTo=%2Fdashboard",
              )
            }
            className="group inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-card/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-ember/50 hover:bg-ember/5 hover:text-ember"
          >
            <LayoutDashboard className="size-3.5" />
            {isAuthenticated ? "Manage" : "Sign in"}
          </button>
        </div>
      </div>
    </footer>
  );
}
