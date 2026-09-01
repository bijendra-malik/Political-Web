import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Users, ShieldCheck, Building2, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Initiatives", href: "/social-work" },
  { name: "Media", href: "/media" },
  { name: "Gallery", href: "/media" },
  { name: "Contact Us", href: "/contact" },
];

const focusAreas = [
  { name: "People First", icon: Users },
  { name: "Transparent Governance", icon: ShieldCheck },
  { name: "Inclusive Development", icon: Building2 },
  { name: "Empowering Communities", icon: Heart },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1a2a] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/images/footer-bg.png" alt="" className="w-full h-full object-cover object-center" />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2a]/70 via-[#0a1a2a]/85 to-[#0a1a2a]/95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Main footer content - 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#26ae90] rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl leading-tight">BIJENDRA</h3>
                <h3 className="text-[#26ae90] font-bold text-xl leading-tight">MALIK</h3>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Committed to public service, inclusive development and building a stronger, better and self-reliant India.
            </p>
            <div className="w-12 h-[3px] bg-[#f28c28] mb-5" />
            <div className="flex gap-3">
              {[
                { name: "Facebook", href: "https://www.facebook.com/indexia.finance.3", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { name: "X", href: "https://x.com/FinanceIndexia", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "Instagram", href: "#", path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" },
                { name: "YouTube", href: "https://www.youtube.com/@FinanceIndexia", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#26ae90] hover:border-[#26ae90] transition-all group" aria-label={s.name}>
                  <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="w-10 h-[3px] bg-[#f28c28] mb-5" />
            <div className="space-y-3">
              {quickLinks.map((l) => (
                <Link key={l.name} href={l.href} className="flex items-center gap-2 text-white/70 text-sm hover:text-[#26ae90] transition-colors group">
                  <span className="text-[#26ae90] group-hover:translate-x-1 transition-transform">&gt;</span>
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* My Focus */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">My Focus</h4>
            <div className="w-10 h-[3px] bg-[#f28c28] mb-5" />
            <div className="space-y-4">
              {focusAreas.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#26ae90]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#26ae90]" />
                  </div>
                  <span className="text-white/70 text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Get in Touch</h4>
            <div className="w-10 h-[3px] bg-[#f28c28] mb-5" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">New Delhi, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">info@bijendramalik.in</span>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">www.bijendramalik.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <span className="text-[#f28c28] text-4xl font-serif leading-none">&ldquo;</span>
            <p className="text-white/80 text-sm italic font-medium">
              Together, let&apos;s build a progressive and prosperous India for all.
            </p>
            <span className="text-[#f28c28] text-4xl font-serif leading-none">&rdquo;</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-xs">
            &copy; {year} <span className="text-[#26ae90] font-semibold">Bijendra Malik</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
