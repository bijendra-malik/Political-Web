import type { PortfolioData } from "./types";

/**
 * Default sample content. The landing page shows this until the owner adds
 * their own content via the /dashboard admin panel (which is stored in Convex).
 * Edit anything here to change what visitors see before custom content exists.
 */
export const DEFAULT_PORTFOLIO: PortfolioData = {
  profile: {
    name: "Ananya Sharma",
    role: "Full-Stack Developer & UI/UX Designer",
    tagline:
      "I design and build premium digital products — 8+ years of turning complex problems into elegant, high-performance web experiences.",
    bio: "I'm a full-stack developer with 8+ years of experience shipping products for startups and enterprises. My sweet spot is the intersection of design and engineering: pixel-perfect UI, buttery-smooth animations, and architecture that scales. I've led teams, mentored juniors, and shipped 40+ production projects used by millions of users.",
    location: "Bengaluru, India",
    email: "hello@ananyasharma.dev",
    phone: "+91 98765 43210",
    github: "https://github.com/ananyasharma",
    linkedin: "https://linkedin.com/in/ananyasharma",
    twitter: "https://x.com/ananyasharma",
    website: "https://ananyasharma.dev",
    resumeUrl: "",
    avatar: "",
    yearsExperience: 8,
    available: true,
  },
  projects: [
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
  ],
  experience: [
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
  ],
  skills: [
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
  ],
};
