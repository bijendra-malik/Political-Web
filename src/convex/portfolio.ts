import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query, MutationCtx } from "./_generated/server";
import { v } from "convex/values";

/**
 * Public portfolio content. Anyone can read it; it powers the landing page.
 */
export const getPortfolio = query({
  args: {},
  handler: async (ctx) => {
    const profile = await ctx.db.query("portfolio").first();
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_order")
      .collect();
    const experience = await ctx.db
      .query("experience")
      .withIndex("by_order")
      .collect();
    const skills = await ctx.db.query("skills").withIndex("by_order").collect();

    const sortByOrder = (a: { order: number }, b: { order: number }) =>
      a.order - b.order;

    return {
      profile,
      projects: [...projects].sort(sortByOrder),
      experience: [...experience].sort(sortByOrder),
      skills: [...skills].sort(sortByOrder),
    };
  },
});

/** Require a signed-in user for every admin mutation. */
async function requireUser(ctx: MutationCtx) {
  const userId = await getAuthUserId(ctx);
  if (userId === null) {
    throw new Error("You must be signed in to edit portfolio content.");
  }
  return userId;
}

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

export const upsertProfile = mutation({
  args: {
    id: v.optional(v.id("portfolio")),
    name: v.string(),
    role: v.string(),
    tagline: v.string(),
    bio: v.string(),
    location: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    github: v.string(),
    linkedin: v.string(),
    twitter: v.optional(v.string()),
    website: v.optional(v.string()),
    resumeUrl: v.optional(v.string()),
    avatar: v.optional(v.string()),
    yearsExperience: v.number(),
    available: v.boolean(),
    accentColor: v.optional(v.string()),
    textColor: v.optional(v.string()),
    backgroundColor: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireUser(ctx);
    const { id, ...data } = args;

    if (id) {
      const existing = await ctx.db.get(id);
      if (!existing) throw new Error("Profile not found.");
      await ctx.db.patch(id, data);
      return id;
    }

    // Only ever keep a single profile document.
    const existing = await ctx.db.query("portfolio").first();
    if (existing) {
      await ctx.db.patch(existing._id, data);
      return existing._id;
    }
    return await ctx.db.insert("portfolio", data);
  },
});

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const upsertProject = mutation({
  args: {
    id: v.optional(v.id("projects")),
    title: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    image: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    repoUrl: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    await requireUser(ctx);
    const { id, ...data } = args;
    if (id) {
      const existing = await ctx.db.get(id);
      if (!existing) throw new Error("Project not found.");
      await ctx.db.patch(id, data);
      return id;
    }
    return await ctx.db.insert("projects", data);
  },
});

export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, { id }) => {
    await requireUser(ctx);
    await ctx.db.delete(id);
  },
});

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const upsertExperience = mutation({
  args: {
    id: v.optional(v.id("experience")),
    role: v.string(),
    company: v.string(),
    period: v.string(),
    description: v.string(),
    highlights: v.array(v.string()),
    current: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    await requireUser(ctx);
    const { id, ...data } = args;
    if (id) {
      const existing = await ctx.db.get(id);
      if (!existing) throw new Error("Experience entry not found.");
      await ctx.db.patch(id, data);
      return id;
    }
    return await ctx.db.insert("experience", data);
  },
});

export const deleteExperience = mutation({
  args: { id: v.id("experience") },
  handler: async (ctx, { id }) => {
    await requireUser(ctx);
    await ctx.db.delete(id);
  },
});

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const upsertSkill = mutation({
  args: {
    id: v.optional(v.id("skills")),
    name: v.string(),
    level: v.number(),
    category: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    await requireUser(ctx);
    const { id, ...data } = args;
    if (id) {
      const existing = await ctx.db.get(id);
      if (!existing) throw new Error("Skill not found.");
      await ctx.db.patch(id, data);
      return id;
    }
    return await ctx.db.insert("skills", data);
  },
});

export const deleteSkill = mutation({
  args: { id: v.id("skills") },
  handler: async (ctx, { id }) => {
    await requireUser(ctx);
    await ctx.db.delete(id);
  },
});

// ---------------------------------------------------------------------------
// Seed sample content so the portfolio looks complete immediately
// ---------------------------------------------------------------------------

export const seedPortfolio = mutation({
  args: {},
  handler: async (ctx) => {
    await requireUser(ctx);

    const existingProfile = await ctx.db.query("portfolio").first();
    if (!existingProfile) {
      await ctx.db.insert("portfolio", {
        name: "KM Prabha",
        role: "Full Stack Developer",
        tagline:
          "I design and build premium digital products — 8+ years of turning complex problems into elegant, high-performance web experiences.",
        bio: "I'm a full-stack developer with 8+ years of experience shipping products for startups and enterprises. My sweet spot is the intersection of design and engineering: pixel-perfect UI, buttery-smooth animations, and architecture that scales. I've led teams, mentored juniors, and shipped 40+ production projects used by millions of users.",
        location: "Bengaluru, India",
        email: "hello@kmprabha.dev",
        phone: "+91 98765 43210",
        github: "https://github.com/kmprabha",
        linkedin: "https://linkedin.com/in/kmprabha",
        twitter: "https://x.com/kmprabha",
        website: "https://kmprabha.dev",
        resumeUrl: "",
        avatar: "",
        yearsExperience: 8,
        available: true,
        accentColor: "",
        textColor: "",
        backgroundColor: "",
      });
    }

    const existingProjects = await ctx.db.query("projects").collect();
    if (existingProjects.length === 0) {
      const projects = [
        {
          title: "Nebula Commerce",
          description:
            "Headless e-commerce platform handling 1M+ monthly orders with 99.98% uptime. Built a custom checkout flow that lifted conversion by 32%.",
          tags: ["Next.js", "TypeScript", "Node.js", "Stripe", "Redis"],
          liveUrl: "https://example.com",
          repoUrl: "https://github.com",
          featured: true,
          order: 0,
        },
        {
          title: "Pulse Health Dashboard",
          description:
            "Real-time patient analytics dashboard for a health-tech startup. Live vitals streaming, drill-down charts, and role-based access for 200+ hospitals.",
          tags: ["React", "D3.js", "WebSockets", "PostgreSQL"],
          liveUrl: "https://example.com",
          repoUrl: "https://github.com",
          featured: true,
          order: 1,
        },
        {
          title: "Orbit Design System",
          description:
            "A 60+ component design system used across 12 product teams. Cut UI development time by 45% with tokens, docs, and automated a11y checks.",
          tags: ["React", "Storybook", "Tailwind CSS", "Figma"],
          liveUrl: "https://example.com",
          repoUrl: "https://github.com",
          featured: true,
          order: 2,
        },
        {
          title: "SaaSpace Analytics",
          description:
            "B2B SaaS analytics suite with custom dashboards, scheduled reports, and anomaly detection. Scaled to 40M events/day on a lean stack.",
          tags: ["Vue", "Node.js", "ClickHouse", "Docker"],
          liveUrl: "https://example.com",
          repoUrl: "https://github.com",
          featured: false,
          order: 3,
        },
        {
          title: "DevCoach Mentorship",
          description:
            "A mentorship platform pairing junior developers with senior mentors. Includes code-review rooms, live pairing, and a progress tracker.",
          tags: ["React", "Express", "Socket.io", "MongoDB"],
          liveUrl: "https://example.com",
          repoUrl: "https://github.com",
          featured: false,
          order: 4,
        },
        {
          title: "FarmLink Marketplace",
          description:
            "Direct farm-to-retail marketplace with logistics tracking and UPI payments. Onboarded 5,000+ farmers across three states.",
          tags: ["React Native", "Node.js", "Google Maps API"],
          liveUrl: "https://example.com",
          repoUrl: "https://github.com",
          featured: false,
          order: 5,
        },
      ];
      for (const project of projects) {
        await ctx.db.insert("projects", project);
      }
    }

    const existingExperience = await ctx.db.query("experience").collect();
    if (existingExperience.length === 0) {
      const experience = [
        {
          role: "Lead Full-Stack Developer",
          company: "Finlytics (Series B Fintech)",
          period: "2022 — Present",
          description:
            "Leading a squad of 6 engineers building the company's core payments platform.",
          highlights: [
            "Shipped a new checkout that increased approval rates by 18%",
            "Introduced CI/CD that cut release time from days to minutes",
            "Mentored 4 engineers to senior roles",
          ],
          current: true,
          order: 0,
        },
        {
          role: "Senior Frontend Engineer",
          company: "Cloudly Systems",
          period: "2019 — 2022",
          description:
            "Owned the frontend architecture of a multi-tenant enterprise dashboard product.",
          highlights: [
            "Rebuilt the UI framework, reducing bundle size by 55%",
            "Designed the design system used by 8 product squads",
            "Drove adoption of automated testing (85% coverage)",
          ],
          current: false,
          order: 1,
        },
        {
          role: "Frontend Developer",
          company: "Bright Labs (Agency)",
          period: "2016 — 2019",
          description:
            "Delivered 25+ client websites and web apps across e-commerce, education, and media.",
          highlights: [
            "Awarded 'Best UI' at internal hackathon twice",
            "Built reusable animation library used by the whole agency",
          ],
          current: false,
          order: 2,
        },
      ];
      for (const item of experience) {
        await ctx.db.insert("experience", item);
      }
    }

    const existingSkills = await ctx.db.query("skills").collect();
    if (existingSkills.length === 0) {
      const skills = [
        { name: "TypeScript", level: 95, category: "Languages", order: 0 },
        { name: "JavaScript (ES2024)", level: 98, category: "Languages", order: 1 },
        { name: "HTML / CSS", level: 97, category: "Languages", order: 2 },
        { name: "React / Next.js", level: 95, category: "Frontend", order: 3 },
        { name: "Vue / Nuxt", level: 85, category: "Frontend", order: 4 },
        { name: "Tailwind CSS", level: 96, category: "Frontend", order: 5 },
        { name: "Framer Motion", level: 90, category: "Frontend", order: 6 },
        { name: "Node.js / Express", level: 90, category: "Backend", order: 7 },
        { name: "PostgreSQL", level: 85, category: "Backend", order: 8 },
        { name: "MongoDB", level: 82, category: "Backend", order: 9 },
        { name: "Figma / UI Design", level: 88, category: "Design", order: 10 },
        { name: "AWS / Docker", level: 80, category: "Tools", order: 11 },
      ];
      for (const skill of skills) {
        await ctx.db.insert("skills", skill);
      }
    }
  },
});
