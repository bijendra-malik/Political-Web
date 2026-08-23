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
    const education = await ctx.db
      .query("education")
      .withIndex("by_order")
      .collect();
    const skills = await ctx.db.query("skills").withIndex("by_order").collect();

    const sortByOrder = (a: { order: number }, b: { order: number }) =>
      a.order - b.order;

    return {
      profile,
      projects: [...projects].sort(sortByOrder),
      experience: [...experience].sort(sortByOrder),
      education: [...education].sort(sortByOrder),
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
    overview: v.optional(v.string()),
    features: v.optional(v.array(v.string())),
    role: v.optional(v.string()),
    year: v.optional(v.string()),
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
// Education
// ---------------------------------------------------------------------------

export const upsertEducation = mutation({
  args: {
    id: v.optional(v.id("education")),
    institution: v.string(),
    degree: v.string(),
    period: v.string(),
    location: v.optional(v.string()),
    details: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    await requireUser(ctx);
    const { id, ...data } = args;
    if (id) {
      const existing = await ctx.db.get(id);
      if (!existing) throw new Error("Education entry not found.");
      await ctx.db.patch(id, data);
      return id;
    }
    return await ctx.db.insert("education", data);
  },
});

export const deleteEducation = mutation({
  args: { id: v.id("education") },
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
        bio: "I'm a Full Stack Developer currently at Refinednest, building responsive web applications with React.js, Tailwind CSS, Node.js, and MongoDB. Previously at Bitharco Technology (10+ production projects) and DS Digital Editation — specializing in JWT authentication, role-based dashboards, and pixel-perfect UI. Pursuing MCA from AKTU, with a Diploma in Computer Science from BTEUP.",
        location: "Greater Noida, India",
        email: "hello@kmprabha.dev",
        phone: "+91 98765 43210",
        github: "https://github.com/kmprabha",
        linkedin: "https://linkedin.com/in/kmprabha",
        twitter: "https://x.com/kmprabha",
        website: "https://kmprabha.dev",
        resumeUrl: "",
        avatar: "/profile-photo.jpg",
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
          title: "Indexia Loan Portal",
          description:
            "End-to-end loan application portal for Indexia Finance — India's international finance company with 15+ loan products.",
          overview:
            "A multi-product loan application platform covering personal, business, home, education, loan-against-property, car, project loans and working capital. Includes EMI & eligibility calculators, live application tracking, and franchisee/associate login portals — with an admin workflow for verification and approval.",
          features: [
            "Apply for 15+ loan products in one portal",
            "EMI & eligibility calculators",
            "Live application tracking with status updates",
            "Franchisee & associate login portals",
            "Admin workflow for verification & approval",
          ],
          role: "Frontend Developer",
          year: "2024",
          tags: ["React", "Next.js", "Node.js", "REST API", "Tailwind CSS"],
          liveUrl: "https://indexia-web-portal-orpin.vercel.app",
          repoUrl: "https://indexiagroup.com",
          featured: true,
          order: 0,
        },
        {
          title: "Foods Platform",
          description:
            "Full-stack food ordering & delivery platform with Clerk authentication and a Node.js API backend.",
          overview:
            "A complete online food-ordering ecosystem — browse restaurants, explore menus, manage a cart, place orders and track delivery status. Secured with Clerk authentication on the Next.js frontend and backed by a Node.js REST API handling orders, menus and user data.",
          features: [
            "Clerk-powered authentication (email OTP + social logins)",
            "Restaurant & menu browsing with search",
            "Cart, checkout & order tracking",
            "Node.js REST backend API",
            "Role-based dashboards (customer / restaurant / admin)",
          ],
          role: "Full Stack Developer",
          year: "2024",
          tags: ["Next.js", "Node.js", "Clerk", "MongoDB", "Tailwind CSS"],
          liveUrl: "https://foods-platform.vercel.app",
          featured: true,
          order: 1,
        },
        {
          title: "AP News Bihar",
          description:
            "High-performance news platform with categorized feeds, live updates, and an analytics dashboard.",
          overview:
            "A Next.js news application delivering categorized news — politics, sports, technology, entertainment and live updates — with server-side rendering and SEO optimization for fast, shareable articles. Includes an admin dashboard built with axios, Chart.js and Redux Toolkit Query for publishing and analytics.",
          features: [
            "Categorized news feeds (politics, sports, tech, entertainment)",
            "Live updates & trending section",
            "SSR + SEO-optimized article pages",
            "Admin dashboard with Chart.js analytics",
            "Redux Toolkit Query state management",
          ],
          role: "Full Stack Developer",
          year: "2024",
          tags: ["Next.js", "Redux Toolkit Query", "Axios", "Chart.js", "Node.js"],
          liveUrl: "https://apnewsbihar.in",
          repoUrl: "https://ap-news-dash.vercel.app",
          featured: true,
          order: 2,
        },
        {
          title: "SHY-EYES — Discover Meaningful Connections",
          description:
            "A social platform for discovering meaningful connections through rich profiles, interests, and chat.",
          overview:
            "A modern social-connection platform where users build rich profiles, discover people by shared interests, and start conversations — with a polished, mobile-first interface and real-time chat experience.",
          features: [
            "User profiles with interests & photos",
            "Interest-based discovery & matching",
            "Real-time chat & connection requests",
            "Responsive, mobile-first UI",
            "Secure authentication & privacy controls",
          ],
          role: "Full Stack Developer",
          year: "2024",
          tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
          liveUrl: "https://shyeeyes-web.vercel.app",
          featured: true,
          order: 3,
        },
        {
          title: "Healthcare CRM Frontend",
          description:
            "Next.js + RTK Query frontend for a healthcare CRM with role-based login and live API data.",
          overview:
            "The frontend of a healthcare CRM built with Next.js and Redux Toolkit Query — fetching live data from a REST API, with user-role-based login (admin, doctor, receptionist) driving different dashboards, tables and workflows.",
          features: [
            "RTK Query for cached API fetching",
            "User role-based login & guarded routes",
            "Dashboards with real-time data tables",
            "Appointment & patient management views",
            "Responsive component-driven UI",
          ],
          role: "Frontend Developer",
          year: "2024",
          tags: ["Next.js", "Redux Toolkit Query", "REST API", "Tailwind CSS"],
          liveUrl: "https://healthcrmfrontend.vercel.app",
          featured: true,
          order: 4,
        },
        {
          title: "Hostel Management System",
          description:
            "Hostel dashboard for managing students, rooms, fees, and daily operations.",
          overview:
            "A centralized dashboard that digitizes hostel operations — student admission & profiles, room allocation, fee records & receipts, attendance and mess management — with role-based access for admins, wardens and students.",
          features: [
            "Student admission & profile management",
            "Room allocation with availability tracking",
            "Fee records, receipts & due reminders",
            "Attendance & mess management",
            "Role-based dashboards (admin / warden / student)",
          ],
          role: "Full Stack Developer",
          year: "2023",
          tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
          liveUrl: "https://hostel-mange.vercel.app",
          featured: false,
          order: 5,
        },
        {
          title: "Health CRM Dashboard",
          description:
            "Healthcare CRM dashboard for clinics — patients, appointments, and records in one place.",
          overview:
            "A healthcare CRM that streamlines clinic operations: patient profiles, appointment scheduling, consultation history and follow-up tracking, all behind a role-based login (doctor / receptionist / admin).",
          features: [
            "Patient records & consultation history",
            "Appointment scheduling & calendar",
            "Doctor & staff management",
            "Follow-up & reminder tracking",
            "Role-based access control",
          ],
          role: "Frontend Developer",
          year: "2024",
          tags: ["React", "Next.js", "Redux Toolkit", "REST API", "Tailwind CSS"],
          liveUrl: "https://crm-health.vercel.app",
          featured: false,
          order: 6,
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
          role: "Web Developer",
          company: "Refinednest",
          period: "Oct 2024 — Present · Greater Noida, IN",
          description:
            "Building responsive, full-stack web applications with React.js, Tailwind CSS, REST APIs, Node.js, and MongoDB.",
          highlights: [
            "Built responsive, full-stack web applications using React.js, Tailwind CSS, REST APIs, Node.js, and MongoDB",
            "Implemented JWT Authentication for secure user sign-up, sign-in, and role-based access",
            "Built reusable UI components using React and Tailwind CSS",
          ],
          current: true,
          order: 0,
        },
        {
          role: "Web Developer",
          company: "Bitharco Technology",
          period: "Oct 2023 — Sept 2024 · Greater Noida, IN",
          description:
            "Developed and optimized responsive web applications using React.js and JavaScript for 10+ production projects.",
          highlights: [
            "Developed and optimized responsive web applications using React.js and JavaScript for 10+ production projects",
            "Integrated secure JWT authentication and role-based dashboards",
            "Improved accessibility, responsiveness, and performance across all major projects",
          ],
          current: false,
          order: 1,
        },
        {
          role: "Web Developer",
          company: "DS Digital Editation",
          period: "April 2022 — Aug 2023 · Noida, IN",
          description:
            "Collaborated with design teams to implement pixel-perfect, high-performance web applications.",
          highlights: [
            "Collaborated with design teams to implement pixel-perfect, high-performance web applications",
            "Built REST APIs and optimized database queries for improved functionality",
            "Improved UI/UX performance and responsiveness",
          ],
          current: false,
          order: 2,
        },
      ];
      for (const item of experience) {
        await ctx.db.insert("experience", item);
      }
    }

    const existingEducation = await ctx.db.query("education").collect();
    if (existingEducation.length === 0) {
      const education = [
        {
          institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
          degree: "Master of Computer Applications (MCA) — Pursuing",
          period: "2024 — 2026",
          location: "Greater Noida, IN",
          details: "CGPA: 7.4 · Specializing in full-stack web development, software engineering, and modern web technologies.",
          order: 0,
        },
        {
          institution: "Board of Technical Education, Uttar Pradesh (BTEUP)",
          degree: "Diploma in Computer Science",
          period: "2021 — 2024",
          location: "Noida, IN",
          details: "Focused on programming fundamentals, data structures, web development, and database management.",
          order: 1,
        },
      ];
      for (const item of education) {
        await ctx.db.insert("education", item);
      }
    }

    const existingSkills = await ctx.db.query("skills").collect();
    if (existingSkills.length === 0) {
      const skills = [
        { name: "JavaScript", level: 95, category: "Languages", order: 0 },
        { name: "HTML5 / CSS3", level: 97, category: "Languages", order: 1 },
        { name: "React.js", level: 95, category: "Frontend", order: 2 },
        { name: "React Native", level: 80, category: "Frontend", order: 3 },
        { name: "Next.js", level: 92, category: "Frontend", order: 4 },
        { name: "Tailwind CSS", level: 96, category: "Frontend", order: 4 },
        { name: "Material UI / Bootstrap", level: 88, category: "Frontend", order: 5 },
        { name: "Node.js / Express.js", level: 88, category: "Backend", order: 6 },
        { name: "MongoDB", level: 85, category: "Backend", order: 7 },
        { name: "REST APIs / JWT Auth", level: 92, category: "Backend", order: 8 },
        { name: "Git / GitHub", level: 90, category: "Tools", order: 9 },
        { name: "Vercel / Docker", level: 82, category: "Tools", order: 10 },
        { name: "Figma / Canva", level: 85, category: "Design", order: 11 },
      ];
      for (const skill of skills) {
        await ctx.db.insert("skills", skill);
      }
    }
  },
});
