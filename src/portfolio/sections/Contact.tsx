import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { PortfolioProfile } from "../types";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Contact({ profile }: { profile: PortfolioProfile }) {
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
    { href: profile.twitter, icon: Twitter, label: "Twitter" },
  ].filter((social) => social.href);

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 bottom-0 h-[420px] rounded-t-full bg-ember/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something great together."
          description={
            profile.available
              ? "I'm currently available for freelance and open to interesting conversations."
              : "I'm currently booked but always open to interesting conversations."
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left — info + socials */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-base leading-7 text-muted-foreground">
              Whether you have a product idea, a project that needs rescuing, or just want to
              say hi — my inbox is open.
            </p>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="group w-full justify-start rounded-full px-6">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 size-4" />
                  {profile.email}
                  <ArrowUpRight className="ml-auto size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
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
  );
}
