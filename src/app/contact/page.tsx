"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Send, Plus, User, MessageSquare, FileText } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", otherSubject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", otherSubject: "", message: "" });
  };

  const contactInfo = [
    { Icon: Phone, label: "Phone", value: "+91 98765 43210", color: "#26ae90" },
    { Icon: Mail, label: "Email", value: "bijendramalikofficial@gmail.com", color: "#f28c28" },
    { Icon: MapPin, label: "Location", value: "Shamli, Uttar Pradesh, India", color: "#066a9c" },
  ];

  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/indexia.finance.3", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "X", href: "https://x.com/FinanceIndexia", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { name: "YouTube", href: "https://www.youtube.com/@FinanceIndexia", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
    { name: "LinkedIn", href: "https://in.linkedin.com/company/indexiafinance", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
  ];

  return (
    <main className="flex-1">
      <PageHero
        title="Let's"
        titleHighlight="Connect"
        subtitle="Contact Us"
        description="Your suggestions, support and participation are always welcome."
        bgImage="/images/contact-img.png"
      />

      {/* Contact Form + Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-[#26ae90]" />
                <span className="text-[#26ae90] font-semibold text-sm uppercase tracking-[0.2em]">Get In Touch</span>
              </div>
              <h2 className="font-[var(--font-poppins)] text-3xl font-bold text-[#066a9c] mb-2">Send a Message</h2>
              <p className="text-gray-400 text-sm mb-8">Feel free to reach out. I would love to hear from you.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Subject in one row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <User className="w-4 h-4 text-[#26ae90]" /> Full Name *
                    </label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300"
                      placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <FileText className="w-4 h-4 text-[#26ae90]" /> Subject *
                    </label>
                    <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all text-gray-500">
                      <option value="">Select subject</option>
                      <option>Public Service</option>
                      <option>Political Inquiry</option>
                      <option>Business Collaboration</option>
                      <option>Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Other subject input */}
                {formData.subject === "other" && (
                  <div className="flex gap-2">
                    <input type="text" value={formData.otherSubject} onChange={e => setFormData({...formData, otherSubject: e.target.value})}
                      className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300"
                      placeholder="Enter your subject" />
                    <button type="button" onClick={() => setFormData({...formData, subject: formData.otherSubject, otherSubject: "" })}
                      className="bg-[#26ae90] hover:bg-[#26ae90]/90 text-white px-4 rounded-xl transition-all flex items-center gap-1 text-sm font-semibold">
                      <Plus className="w-4 h-4" /> Add
                    </button>
                  </div>
                )}

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <Mail className="w-4 h-4 text-[#26ae90]" /> Email *
                    </label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300"
                      placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <Phone className="w-4 h-4 text-[#26ae90]" /> Phone *
                    </label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300"
                      placeholder="Enter your phone" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                    <MessageSquare className="w-4 h-4 text-[#26ae90]" /> Message *
                  </label>
                  <textarea rows={5} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all resize-none placeholder:text-gray-300"
                    placeholder="Write your message here..." />
                </div>

                <button type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#26ae90] to-[#26ae90]/90 text-white font-semibold px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#26ae90]/30 text-sm uppercase tracking-wider group">
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Card — 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-[#066a9c] rounded-2xl p-8 text-white h-full">
                <h3 className="font-[var(--font-poppins)] text-2xl font-bold mb-2">Contact Information</h3>
                <div className="w-12 h-1 bg-[#f2f231] rounded-full mb-8" />

                <div className="space-y-6">
                  {contactInfo.map((c, i) => {
                    const Icon = c.Icon;
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: `${c.color}30` }}>
                          <Icon className="w-5 h-5" style={{ color: c.color }} />
                        </div>
                        <div>
                          <div className="text-white/60 text-sm font-medium mb-0.5">{c.label}</div>
                          <div className="text-white text-sm font-semibold">{c.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-white/60 text-sm font-medium mb-4">Follow Me</div>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-[#f2f231] hover:border-[#f2f231] transition-all duration-300 group"
                        aria-label={s.name}>
                        <svg className="w-4 h-4 text-white/70 group-hover:text-[#066a9c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55942.01484092644!2d77.29515999999999!3d29.4646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c35a2e3f0c03d%3A0x2f8d2d2c5b3c3e3c!2sShamli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Shamli Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
