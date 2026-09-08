"use client";

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/mrbijendramalik/", color: "#E4405F", Icon: FaInstagram },
  { name: "Facebook", href: "https://www.facebook.com/TeamBijendraMalik/", color: "#1877F2", Icon: FaFacebookF },
  { name: "X", href: "https://twitter.com/MrBijendraMalik", color: "#FFFFFF", Icon: FaXTwitter },
  { name: "YouTube", href: "https://www.youtube.com/@MrBijendraMalik", color: "#FF0000", Icon: FaYoutube },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("animate-fadeInUp");
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-navy via-navy-light to-royal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-saffron" />
            <span className="text-saffron font-semibold text-sm uppercase tracking-[0.2em]">Get in Touch</span>
            <div className="w-8 h-[2px] bg-saffron" />
          </div>
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Connect</span></h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 opacity-0">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-[var(--font-poppins)] text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-5">
              {[
                { icon: "📧", label: "Email", value: "contactus.bijendramalik@gmail.com" },
                { icon: "📍", label: "Location", value: "Shamli, Uttar Pradesh, India" },
                { icon: "📞", label: "Phone", value: "+91 86918 86919" },
              ].map((contact) => (
                <div key={contact.label} className="flex items-start gap-3">
                  <span className="text-xl">{contact.icon}</span>
                  <div><div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{contact.label}</div><div className="text-white text-sm font-medium">{contact.value}</div></div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Follow Us</div>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-saffron transition-all group" aria-label={social.name}>
                    <social.Icon className="w-4 h-4" style={{ color: social.color }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-white/50 text-xs mb-1.5 block">Full Name *</label><input type="text" required value={formData.name} onChange={event => setFormData({...formData, name: event.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all" placeholder="Your name" /></div>
                <div><label className="text-white/50 text-xs mb-1.5 block">Email Address *</label><input type="email" required value={formData.email} onChange={event => setFormData({...formData, email: event.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all" placeholder="your@email.com" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-white/50 text-xs mb-1.5 block">Phone</label><input type="tel" value={formData.phone} onChange={event => setFormData({...formData, phone: event.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all" placeholder="+91 XXXXX XXXXX" /></div>
                <div><label className="text-white/50 text-xs mb-1.5 block">Subject *</label><input type="text" required value={formData.subject} onChange={event => setFormData({...formData, subject: event.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all" placeholder="How can we help?" /></div>
              </div>
              <div><label className="text-white/50 text-xs mb-1.5 block">Message *</label><textarea rows={4} required value={formData.message} onChange={event => setFormData({...formData, message: event.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all resize-none" placeholder="Write your message..." /></div>
              <button type="submit" className="w-full bg-gradient-to-r from-saffron to-saffron-hover text-white font-semibold py-3.5 rounded-lg hover:shadow-lg hover:shadow-saffron/30 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                {submitted ? <>Message Sent!</> : <>Send Message <span aria-hidden="true">-&gt;</span></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
