import type { PortfolioData } from "./types";

/**
 * Default sample content. The landing page shows this until the owner adds
 * their own content via the /dashboard admin panel (which is stored in Convex).
 * Edit anything here to change what visitors see before custom content exists.
 */
export const DEFAULT_PORTFOLIO: PortfolioData = {
  profile: {
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
  },
  projects: [
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
