import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Users, ShieldCheck, Building2, Heart } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Corruption Free India", href: "/vision-mission" },
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
        <img src="/images/Imgs-AI/footer-bg.png" alt="" className="w-full h-full object-cover object-center" />
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
            <div className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-1">
              {[
                { name: "Facebook", href: "https://www.facebook.com/TeamBijendraMalik/", color: "#1877F2", Icon: FaFacebookF },
                { name: "X", href: "https://twitter.com/MrBijendraMalik", color: "#111827", Icon: FaXTwitter },
                { name: "Instagram", href: "https://www.instagram.com/mrbijendramalik/", color: "#E4405F", Icon: FaInstagram },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/bijendra-malik-123456789/", color: "#0077B5", Icon: FaLinkedinIn },
                { name: "YouTube", href: "https://www.youtube.com/@MrBijendraMalik", color: "#FF0000", Icon: FaYoutube },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="indexia-footer-social flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-[0_4px_14px_rgba(2,16,26,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white" aria-label={`Bijendra Malik on ${s.name}`} style={{ backgroundColor: s.color, borderColor: `${s.color}80`, color: s.name === "X" ? "#f8fafc" : "#fff" }}>
                  <s.Icon className="h-5 w-5 transition-colors" />
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
                <span className="text-white/70 text-sm">+91 86918 86919 , +91 11 4629 1155</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">contactus@bijendramalik.com</span>
              </div>
              {/* <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#26ae90] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">www.bijendramalik.in</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <span className="text-[#f28c28] text-4xl font-serif leading-none">&ldquo;</span>
            <p className="text-white/80 text-sm italic font-medium">
              Together, let&apos;s build a corruption free india.
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
