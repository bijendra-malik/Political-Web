"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("animate-fadeInUp"); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Connect</span>
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 opacity-0">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-[var(--font-poppins)] text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-5">
              {[
                { icon: "📧", label: "Email", value: "bijendramalikofficial@gmail.com" },
                { icon: "📍", label: "Location", value: "Shamli, Uttar Pradesh, India" },
                { icon: "📞", label: "Phone", value: "+91 98765 43210" },
              ].map((c,i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-white text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="pt-4">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Follow Us</div>
              <div className="flex gap-2">
                {[
                  { name: "Facebook", href: "https://www.facebook.com/indexia.finance.3", p: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { name: "X", href: "https://x.com/FinanceIndexia", p: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { name: "YouTube", href: "https://www.youtube.com/@FinanceIndexia", p: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
                  { name: "LinkedIn", href: "https://in.linkedin.com/company/indexiafinance", p: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-saffron transition-all group" aria-label={s.name}>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.p} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Phone</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all"
                    placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Subject *</label>
                  <input type="text" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all"
                    placeholder="How can we help?" />
                </div>
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1.5 block">Message *</label>
                <textarea rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-saffron/50 transition-all resize-none"
                  placeholder="Write your message..." />
              </div>
              <button type="submit"
                className="w-full bg-gradient-to-r from-saffron to-saffron-hover text-white font-semibold py-3.5 rounded-lg hover:shadow-lg hover:shadow-saffron/30 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                {submitted ? (
                  <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg> Message Sent!</>
                ) : (
                  <>Send Message <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
