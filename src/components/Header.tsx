"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SparkleNavbar from "@/components/lightswind/sparkle-navbar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Political Journey", href: "/political-journey" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Social Work", href: "/social-work" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref = navLinks.find(
    (l) => pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
  )?.href || "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-xl py-2" : "bg-navy/80 backdrop-blur-sm py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.webp" alt="Bijendra Malik" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav — SparkleNavbar */}
          <nav className="hidden xl:block">
            <SparkleNavbar
              items={navLinks.map((l) => ({ name: l.name, href: l.href }))}
              color="#26ae90"
            />
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="xl:hidden mt-3 pb-3 border-t border-white/10 pt-3 space-y-1">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link key={l.name} href={l.href} onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive ? "bg-royal/20 text-royal" : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}>
                  {l.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
