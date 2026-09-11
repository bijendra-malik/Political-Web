"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Send, Plus, User, MessageSquare, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  otherSubject: string;
  message: string;
  honeypot: string; // spam protection — must stay empty
};

type FormStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  otherSubject: "",
  message: "",
  honeypot: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function sanitize(value: string): string {
  return value.trim().replace(/[<>]/g, "");
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!validateEmail(formData.email)) errors.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.subject.trim()) errors.subject = "Please select or enter a subject.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — bots fill this, humans don't
    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus("loading");
    setErrorMsg("");

    const finalSubject = formData.subject === "other"
      ? sanitize(formData.otherSubject) || "Other"
      : sanitize(formData.subject);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Contact Form Submission - ${finalSubject}`,
          from_name: "Bijendra Malik Website",
          "Full Name": sanitize(formData.name),
          Subject: finalSubject,
          Email: sanitize(formData.email),
          Phone: sanitize(formData.phone),
          Message: sanitize(formData.message),
          redirect: "false",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData(EMPTY_FORM);
        setFieldErrors({});
      } else {
        throw new Error(data.message || "Submission failed.");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    }
  };

  const contactInfo = [
    { Icon: Phone, label: "Phone", value: "+91 86918 86919 , +91 11 4629 1155", color: "#26ae90" },
    { Icon: Mail, label: "Email", value: "contactus@bijendramalik.com", color: "#f28c28" },
    { Icon: MapPin, label: "Location", value: "Shamli, Uttar Pradesh, India", color: "#ffffff" },
  ];

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/mrbijendramalik/", color: "#E4405F", Icon: FaInstagram },
    { name: "X", href: "https://twitter.com/MrBijendraMalik", color: "#111827", Icon: FaXTwitter },
    { name: "Facebook", href: "https://www.facebook.com/TeamBijendraMalik/", color: "#1877F2", Icon: FaFacebookF },
    { name: "YouTube", href: "https://www.youtube.com/@MrBijendraMalik", color: "#FF0000", Icon: FaYoutube },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/bijendra-malik-123456789/", color: "#0077B5", Icon: FaLinkedinIn },
  ];

  return (
    <main className="flex-1">
      <PageHero
        title="Contact"
        subtitle="Contact Us"
        description="Your suggestions, support and participation are always welcome."
        bgImage="/images/crop-img.jpg"
        panelPosition="top-right"
        bgPosition="center"
      />

      {/* Contact Form + Info */}
      <section className="py-12 lg:py-12 bg-white">
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

              {/* Success banner */}
              {status === "success" && (
                <div className="flex items-start gap-3 bg-[#f0fdf9] border border-[#26ae90]/30 rounded-xl px-5 py-4 mb-6">
                  <CheckCircle className="w-5 h-5 text-[#26ae90] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0f5c4a] font-semibold text-sm">Thank you! Your message has been sent successfully.</p>
                    <p className="text-gray-500 text-xs mt-0.5">We will get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 font-semibold text-sm">Failed to send message.</p>
                    <p className="text-red-500 text-xs mt-0.5">{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Honeypot — hidden from humans, traps bots */}
                <input
                  type="text"
                  name="bot-field"
                  value={formData.honeypot}
                  onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Name + Subject */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <User className="w-4 h-4 text-[#26ae90]" /> Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300 ${fieldErrors.name ? "border-red-400" : "border-gray-200"}`}
                      placeholder="Enter your full name"
                    />
                    {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <FileText className="w-4 h-4 text-[#26ae90]" /> Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all text-gray-500 ${fieldErrors.subject ? "border-red-400" : "border-gray-200"}`}
                    >
                      <option value="">Select subject</option>
                      <option>Public Service</option>
                      <option>Political Inquiry</option>
                      <option>Business Collaboration</option>
                      <option>Media &amp; Press</option>
                      <option value="other">Other</option>
                    </select>
                    {fieldErrors.subject && <p className="text-red-500 text-xs mt-1">{fieldErrors.subject}</p>}
                  </div>
                </div>

                {/* Other subject input */}
                {formData.subject === "other" && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.otherSubject}
                      onChange={e => setFormData({ ...formData, otherSubject: e.target.value })}
                      className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300"
                      placeholder="Enter your subject"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: formData.otherSubject, otherSubject: "" })}
                      className="bg-[#26ae90] hover:bg-[#26ae90]/90 text-white px-4 rounded-xl transition-all flex items-center gap-1 text-sm font-semibold"
                    >
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
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300 ${fieldErrors.email ? "border-red-400" : "border-gray-200"}`}
                      placeholder="Enter your email"
                    />
                    {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                      <Phone className="w-4 h-4 text-[#26ae90]" /> Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all placeholder:text-gray-300 ${fieldErrors.phone ? "border-red-400" : "border-gray-200"}`}
                      placeholder="Enter your phone"
                    />
                    {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-600 text-sm mb-1.5 flex items-center gap-2 font-medium">
                    <MessageSquare className="w-4 h-4 text-[#26ae90]" /> Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#26ae90] focus:ring-1 focus:ring-[#26ae90]/30 transition-all resize-none placeholder:text-gray-300 ${fieldErrors.message ? "border-red-400" : "border-gray-200"}`}
                    placeholder="Write your message here..."
                  />
                  {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#26ae90] to-[#26ae90]/90 text-white font-semibold px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-[#26ae90]/30 text-sm uppercase tracking-wider group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
                          <Icon className="w-5 h-5" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: c.color }} />
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
                  <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                    {socials.map((s) => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="indexia-footer-social flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_4px_14px_rgba(2,16,26,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                        aria-label={`Bijendra Malik on ${s.name}`} style={{ backgroundColor: s.color, borderColor: `${s.color}80`, color: s.name === "X" ? "#f8fafc" : "#fff" }}>
                        <s.Icon className="h-5 w-5 transition-colors" />
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
