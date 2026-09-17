import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Media & Updates | Bijendra Malik", "Explore news coverage, videos, photographs and public events featuring Bijendra Malik.", "/media");

export default function MediaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}