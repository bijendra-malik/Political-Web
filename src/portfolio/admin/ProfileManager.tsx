import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Palette, RotateCcw, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { PortfolioProfile } from "../types";

const PRESET_ACCENTS = [
  "#f59e0b", // amber
  "#f97316", // orange
  "#ef4444", // red
  "#ec4899", // pink
  "#8b5cf6", // violet
  "#3b82f6", // blue
  "#14b8a6", // teal
  "#10b981", // emerald
  "#84cc16", // lime
  "#0ea5e9", // sky
];

interface FormState {
  id?: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  resumeUrl: string;
  avatar: string;
  yearsExperience: number;
  available: boolean;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
}

function toForm(profile?: PortfolioProfile | null): FormState {
  return {
    id: (profile as { _id?: string } | null | undefined)?._id,
    name: profile?.name ?? "",
    role: profile?.role ?? "",
    tagline: profile?.tagline ?? "",
    bio: profile?.bio ?? "",
    location: profile?.location ?? "",
    email: profile?.email ?? "",
    phone: profile?.phone ?? "",
    github: profile?.github ?? "",
    linkedin: profile?.linkedin ?? "",
    twitter: profile?.twitter ?? "",
    website: profile?.website ?? "",
    resumeUrl: profile?.resumeUrl ?? "",
    avatar: profile?.avatar ?? "",
    yearsExperience: profile?.yearsExperience ?? 0,
    available: profile?.available ?? true,
    accentColor: profile?.accentColor ?? "",
    textColor: profile?.textColor ?? "",
    backgroundColor: profile?.backgroundColor ?? "",
  };
}

function ColorField({
  label,
  value,
  onChange,
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  hint: string;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-2">
        <span
          className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-border"
          style={{ background: value || "transparent" }}
        >
          <input
            type="color"
            value={value || "#f59e0b"}
            onChange={(e) => onChange(e.target.value)}
            aria-label={`Pick ${label.toLowerCase()}`}
            className="absolute inset-0 size-full cursor-pointer opacity-0"
          />
          {!value && <span className="text-muted-foreground" />}
        </span>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="font-mono text-xs"
        />
      </div>
      <p className="text-[11px] leading-4 text-muted-foreground">{hint}</p>
    </div>
  );
}

export function ProfileManager({
  profile,
}: {
  profile: PortfolioProfile | null | undefined;
}) {
  const upsert = useMutation(api.portfolio.upsertProfile);

  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>(() => toForm(profile));

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Name and email are required");
      return;
    }
    setSaving(true);
    try {
      await upsert({
        id: form.id as never,
        name: form.name.trim(),
        role: form.role.trim(),
        tagline: form.tagline.trim(),
        bio: form.bio.trim(),
        location: form.location.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        github: form.github.trim(),
        linkedin: form.linkedin.trim(),
        twitter: form.twitter.trim() || undefined,
        website: form.website.trim() || undefined,
        resumeUrl: form.resumeUrl.trim() || undefined,
        avatar: form.avatar.trim() || undefined,
        yearsExperience: form.yearsExperience,
        available: form.available,
        accentColor: form.accentColor.trim() || undefined,
        textColor: form.textColor.trim() || undefined,
        backgroundColor: form.backgroundColor.trim() || undefined,
      });
      toast.success("Profile saved — the site updates instantly");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const resetColors = () => {
    setForm((prev) => ({
      ...prev,
      accentColor: "",
      textColor: "",
      backgroundColor: "",
    }));
    toast.success("Theme colors reset to the built-in palette");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Theme customizer */}
      <div className="rounded-2xl border border-ember/30 bg-gradient-to-br from-ember/10 via-transparent to-transparent p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Palette className="size-4 text-ember" />
            <p className="font-display font-semibold">Site theme colors</p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={resetColors}
            className="rounded-full"
          >
            <RotateCcw className="mr-1.5 size-3.5" /> Reset to default
          </Button>
        </div>
        <p className="mb-4 text-sm leading-6 text-muted-foreground">
          Pick colors and they apply to the <strong>entire website</strong> —
          accent (highlights &amp; buttons), text, and background. Save once and
          every visitor sees your palette. Leave a field empty to keep the
          built-in dark/light theme for it.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <ColorField
            label="Accent color"
            value={form.accentColor}
            onChange={(value) => set("accentColor", value)}
            placeholder="#f59e0b"
            hint="Highlights, borders, buttons, progress bars"
          />
          <ColorField
            label="Text color"
            value={form.textColor}
            onChange={(value) => set("textColor", value)}
            placeholder="#e7e5e4"
            hint="Main heading & body text color"
          />
          <ColorField
            label="Background color"
            value={form.backgroundColor}
            onChange={(value) => set("backgroundColor", value)}
            placeholder="#0a0a0b"
            hint="Page background color"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
            Quick accents
          </span>
          {PRESET_ACCENTS.map((color) => (
            <button
              key={color}
              type="button"
              aria-label={`Use accent ${color}`}
              onClick={() => set("accentColor", color)}
              className="size-6 rounded-full border border-border/60 transition-transform duration-200 hover:scale-125"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>

      {/* Personal details */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="pf-name">Name *</Label>
          <Input
            id="pf-name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-role">Role / title</Label>
          <Input
            id="pf-role"
            value={form.role}
            onChange={(e) => set("role", e.target.value)}
            placeholder="Full Stack Developer"
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="pf-tagline">Tagline</Label>
          <Textarea
            id="pf-tagline"
            value={form.tagline}
            onChange={(e) => set("tagline", e.target.value)}
            rows={2}
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="pf-bio">Bio</Label>
          <Textarea
            id="pf-bio"
            value={form.bio}
            onChange={(e) => set("bio", e.target.value)}
            rows={5}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-location">Location</Label>
          <Input
            id="pf-location"
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="Bengaluru, India"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-email">Email *</Label>
          <Input
            id="pf-email"
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-phone">Phone</Label>
          <Input
            id="pf-phone"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 …"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-years">Years of experience</Label>
          <Input
            id="pf-years"
            type="number"
            min={0}
            value={form.yearsExperience}
            onChange={(e) => set("yearsExperience", Number(e.target.value))}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-github">GitHub URL</Label>
          <Input
            id="pf-github"
            value={form.github}
            onChange={(e) => set("github", e.target.value)}
            placeholder="https://github.com/…"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-linkedin">LinkedIn URL</Label>
          <Input
            id="pf-linkedin"
            value={form.linkedin}
            onChange={(e) => set("linkedin", e.target.value)}
            placeholder="https://linkedin.com/in/…"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-twitter">Twitter / X URL</Label>
          <Input
            id="pf-twitter"
            value={form.twitter}
            onChange={(e) => set("twitter", e.target.value)}
            placeholder="https://x.com/…"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-website">Website URL</Label>
          <Input
            id="pf-website"
            value={form.website}
            onChange={(e) => set("website", e.target.value)}
            placeholder="https://…"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-resume">Resume / CV URL</Label>
          <Input
            id="pf-resume"
            value={form.resumeUrl}
            onChange={(e) => set("resumeUrl", e.target.value)}
            placeholder="https://…/resume.pdf"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="pf-avatar">Avatar image URL</Label>
          <Input
            id="pf-avatar"
            value={form.avatar}
            onChange={(e) => set("avatar", e.target.value)}
            placeholder="https://…/photo.jpg"
          />
        </div>
        <div className="flex items-center gap-3 sm:col-span-2">
          <Switch
            id="pf-available"
            checked={form.available}
            onCheckedChange={(checked) => set("available", checked)}
          />
          <Label htmlFor="pf-available">
            Available for freelance / new projects
          </Label>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="button" onClick={handleSave} disabled={saving} className="rounded-full px-6">
          <Save className="mr-2 size-4" />
          {saving ? "Saving…" : "Save profile"}
        </Button>
      </div>
    </div>
  );
}
