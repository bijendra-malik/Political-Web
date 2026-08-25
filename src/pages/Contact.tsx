import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useAction, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Reveal } from "@/portfolio/components/Reveal";
import { Navbar } from "@/portfolio/components/Navbar";
import { Footer } from "@/portfolio/components/Footer";
import { usePortfolio } from "@/portfolio/hooks/use-portfolio";
import { useAppearance } from "@/portfolio/hooks/use-appearance";
import { useNavigate } from "react-router";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/** Noida Sector 62 coordinates */
const NOIDA_COORDS = { lat: 28.6285, lng: 77.3749 };

export default function ContactPage() {
  const { profile, projects, experience, education, skills } = usePortfolio();
  const { appearance, update, reset } = useAppearance(profile);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = useAction(api.email.sendContactEmail);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSending(true);
    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        subject: form.subject || `Message from ${form.name}`,
        message: form.message,
      });
      setSent(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send message. Try again."
      );
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: profile.twitter ?? "", icon: Twitter, label: "Twitter" },
  ].filter((s) => s.href);

  return (
    <div className="relative min-h-screen scroll-smooth bg-background text-foreground antialiased">
      <Navbar
        profile={profile}
        appearance={appearance}
        onAppearanceChange={update}
        onAppearanceReset={reset}
      />

      <main className="relative pt-24 pb-16">
        {/* Back button */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="mb-8 gap-2 rounded-full text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Back to home
            </Button>
          </motion.div>
        </div>

        <section className="relative overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-x-0 bottom-0 h-[420px] rounded-t-full bg-ember/10 blur-[120px]" />
          <div className="grain absolute inset-0" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            {/* Header */}
            <Reveal className="mb-12 flex flex-col gap-4 md:mb-16">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-ember">
                <span className="text-foreground/40">01</span>
                <span className="h-px w-8 bg-ember/60" />
                Contact
              </span>
              <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Let&apos;s build something great together.
              </h2>
              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                {profile.available
                  ? "I'm currently available for freelance and open to interesting conversations."
                  : "I'm currently booked but always open to interesting conversations."}
              </p>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
              {/* Left — info + socials + map */}
              <Reveal delay={0.1} className="flex flex-col gap-6">
                <p className="text-base leading-7 text-muted-foreground">
                  Whether you have a product idea, a project that needs rescuing, or just want
                  to say hi — my inbox is open.
                </p>

                {/* Location */}
                <div className="rounded-xl border border-border/60 bg-card/50 p-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-ember" />
                    <p className="font-mono text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Location
                    </p>
                  </div>
                  <p className="mt-2 text-sm font-medium">
                    {profile.location || "Noida, Sector 62 — India"}
                  </p>
                </div>

                {/* Map — OpenStreetMap embed for Noida Sector 62 */}
                <div className="overflow-hidden rounded-xl border border-border/60">
                  <iframe
                    title="Location map — Noida Sector 62"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${NOIDA_COORDS.lng - 0.02}%2C${NOIDA_COORDS.lat - 0.015}%2C${NOIDA_COORDS.lng + 0.02}%2C${NOIDA_COORDS.lat + 0.015}&layer=mapnik&marker=${NOIDA_COORDS.lat}%2C${NOIDA_COORDS.lng}`}
                    className="h-56 w-full border-0 grayscale dark:invert dark:hue-rotate-180 dark:brightness-[0.85] dark:contrast-[1.1]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="flex items-center justify-between border-t border-border/60 bg-card/50 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-60" />
                        <span className="relative inline-flex size-2 rounded-full bg-ember" />
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        Noida Sector 62, UP, India
                      </span>
                    </div>
                    <a
                      href={`https://www.openstreetmap.org/?mlat=${NOIDA_COORDS.lat}&mlon=${NOIDA_COORDS.lng}#map=15/${NOIDA_COORDS.lat}/${NOIDA_COORDS.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-ember hover:underline"
                    >
                      Open map ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="group w-full justify-start rounded-full px-6">
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="mr-2 size-4" />
                      {profile.email}
                      <ArrowUpRight className="ml-auto size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  {profile.phone && (
                    <Button asChild size="lg" variant="outline" className="w-full justify-start rounded-full border-border/80 px-6">
                      <a href={`tel:${profile.phone}`}>
                        <Phone className="mr-2 size-4" />
                        {profile.phone}
                      </a>
                    </Button>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={copyEmail}
                    className="w-full justify-start rounded-full border-border/80 px-6"
                  >
                    {copied ? (
                      <Check className="mr-2 size-4 text-emerald-500" />
                    ) : (
                      <Copy className="mr-2 size-4" />
                    )}
                    {copied ? "Copied!" : "Copy email address"}
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-11 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10 hover:text-ember"
                    >
                      <social.icon className="size-4" />
                    </a>
                  ))}
                </div>

                <div className="rounded-xl border border-border/60 bg-card/50 p-4">
                  <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                    Response time
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Usually within 24 hours on weekdays
                  </p>
                </div>
              </Reveal>

              {/* Right — contact form */}
              <Reveal delay={0.2}>
                <Card className="border-border/60 bg-card/80 backdrop-blur">
                  <CardContent className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                            Name *
                          </label>
                          <Input
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                            Email *
                          </label>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                          Subject
                        </label>
                        <Input
                          placeholder="What's this about?"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                          Message *
                        </label>
                        <Textarea
                          placeholder="Tell me about your project, idea, or just say hello..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                          rows={5}
                          className="rounded-xl resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={sending || !form.name || !form.email || !form.message}
                        className="group mt-2 w-full rounded-xl"
                      >
                        {sending ? (
                          <>
                            <Loader2 className="mr-2 size-4 animate-spin" />
                            Sending...
                          </>
                        ) : sent ? (
                          <>
                            <Check className="mr-2 size-4" />
                            Message sent!
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            Send message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer profile={profile} />
    </div>
  );
}
