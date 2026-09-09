import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Vision & Mission | Bijendra Malik", "Read Bijendra Malik's vision and mission for transparent governance, education, healthcare and inclusive development.", "/vision-mission");

export default function VisionMissionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}