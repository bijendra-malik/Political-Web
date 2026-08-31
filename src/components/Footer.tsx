import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/indexia.finance.3", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "X", href: "https://x.com/FinanceIndexia", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { name: "Instagram", href: "#", path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" },
  { name: "YouTube", href: "https://www.youtube.com/@FinanceIndexia", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
  { name: "LinkedIn", href: "https://in.linkedin.com/company/indexiafinance", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Political Journey", href: "/political-journey" },
  { name: "Vision & Mission", href: "/vision-mission" },
  { name: "Social Work", href: "/social-work" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

const focusAreas = ["Education", "Healthcare", "Youth Empowerment", "Infrastructure", "Environment"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#071525] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/images/social-work01-img.png" alt="" className="w-full h-full object-cover object-center" />
      </div>
      {/* Dark overlay — light enough to show image */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

      <div className="h-1 bg-gradient-to-r from-[#26ae90] via-[#f2f231] to-[#26ae90] relative z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <img src="/logo.webp" alt="Bijendra Malik" className="h-10 mb-4" />
            </Link>
            <p className="text-white/70 text-xs leading-relaxed mb-4">
              Dedicated to public service, community development and building a better tomorrow for every citizen.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#26ae90]/20 transition-all group" aria-label={s.name}>
                  <svg className="w-3.5 h-3.5 text-white/60 group-hover:text-[#26ae90] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-[var(--font-poppins)] font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block text-white/70 text-xs hover:text-[#26ae90] transition-colors">{l.name}</Link>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="text-white font-[var(--font-poppins)] font-bold text-xs uppercase tracking-wider mb-4">Focus Areas</h4>
            <div className="space-y-2">
              {focusAreas.map((f) => (
                <Link key={f} href="/#focus" className="block text-white/70 text-xs hover:text-[#26ae90] transition-colors">{f}</Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-[var(--font-poppins)] font-bold text-xs uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-xs">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-xs">bijendramalikofficial@gmail.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-xs">Shamli, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-[11px]">© {year} Bijendra Malik. All Rights Reserved.</p>
          <div className="flex gap-4 text-white/50 text-[11px]">
            <a href="#" className="hover:text-[#26ae90] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#26ae90] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
