import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { DEFAULT_PORTFOLIO } from "../defaults";
import type { PortfolioData } from "../types";

/**
 * Returns the portfolio content shown on the landing page.
 *
 * It subscribes to the Convex `getPortfolio` query (reactive) and falls back
 * to the built-in sample content whenever the database has no content yet, so
 * the site always looks complete — even before the owner adds their own data
 * from the /dashboard admin panel.
 */
export function usePortfolio(): PortfolioData {
  const data = useQuery(api.portfolio.getPortfolio);

  if (!data) {
    return DEFAULT_PORTFOLIO;
  }

  return {
    profile: data.profile ?? DEFAULT_PORTFOLIO.profile,
    projects:
      data.projects.length > 0 ? data.projects : DEFAULT_PORTFOLIO.projects,
    experience:
      data.experience.length > 0
        ? data.experience
        : DEFAULT_PORTFOLIO.experience,
    education:
      data.education.length > 0
        ? data.education
        : DEFAULT_PORTFOLIO.education,
    skills: data.skills.length > 0 ? data.skills : DEFAULT_PORTFOLIO.skills,
  };
}
