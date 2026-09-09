import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Political Journey | Bijendra Malik", "Discover Bijendra Malik's political journey, public responsibilities and grassroots leadership in Shamli and Uttar Pradesh.", "/political-journey");

export default function PoliticalJourneyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}