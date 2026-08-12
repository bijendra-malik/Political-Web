export interface PortfolioProfile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
  resumeUrl?: string;
  avatar?: string;
  yearsExperience: number;
  available: boolean;
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface Project {
  _id?: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  order: number;
  overview?: string;
  features?: string[];
  role?: string;
  year?: string;
}

export interface ExperienceEntry {
  _id?: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
  order: number;
}

export interface Skill {
  _id?: string;
  name: string;
  level: number;
  category: string;
  order: number;
}

export interface PortfolioData {
  profile: PortfolioProfile;
  projects: Project[];
  experience: ExperienceEntry[];
  skills: Skill[];
}

export const SKILL_CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend",
  "Design",
  "Tools",
] as const;
