import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/toggle-theme";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, LayoutDashboard, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { AppearanceSettings } from "../hooks/use-appearance";
import type { PortfolioProfile } from "../types";
import { AppearancePanel } from "./AppearancePanel";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  profile: PortfolioProfile;
  appearance: AppearanceSettings;
  onAppearanceChange: (patch: Partial<AppearanceSettings>) => void;
  onAppearanceReset: () => void;
}

export function Navbar({
  profile,
  appearance,
  onAppearanceChange,
  onAppearanceReset,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="font-display flex size-9 items-center justify-center rounded-lg border border-ember/40 bg-ember/10 text-sm font-bold text-ember transition-all duration-300 group-hover:rotate-6 group-hover:bg-ember group-hover:text-primary-foreground">
            {initials}
          </span>
          <span className="font-mono hidden text-sm font-medium tracking-tight sm:block">
            {profile.name.split(" ")[0].toLowerCase()}
            <span className="text-ember">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3.5 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground after:absolute after:inset-x-3.5 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ToggleTheme animationType="circle-spread" duration={500} />
          <AppearancePanel
            appearance={appearance}
            onChange={onAppearanceChange}
            onReset={onAppearanceReset}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="hidden rounded-full border-border/80 md:inline-flex"
            onClick={() =>
              isAuthenticated
                ? navigate("/dashboard")
                : navigate("/auth?returnTo=%2Fdashboard")
            }
          >
            {isLoading ? (
              <span className="text-muted-foreground">…</span>
            ) : isAuthenticated ? (
              <>
                <LayoutDashboard className="size-3.5" /> Admin
              </>
            ) : (
              <>
                Sign in <ArrowUpRight className="size-3.5" />
              </>
            )}
          </Button>
          <Button
            type="button"
            asChild
            size="sm"
            className="hidden rounded-full md:inline-flex"
          >
            <a href="/contact">
              Hire me <ArrowUpRight className="size-3.5" />
            </a>
          </Button>

          {/* Mobile menu toggle */}
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-ember/10 hover:text-ember"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-border/70 pt-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                  onClick={() => {
                    setOpen(false);
                    navigate(
                      isAuthenticated
                        ? "/dashboard"
                        : "/auth?returnTo=%2Fdashboard",
                    );
                  }}
                >
                  {isAuthenticated ? "Admin panel" : "Sign in"}
                </Button>
                <Button
                  type="button"
                  asChild
                  size="sm"
                  className="flex-1 rounded-full"
                >
                  <a href="/contact" onClick={() => setOpen(false)}>
                    Hire me
                  </a>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
