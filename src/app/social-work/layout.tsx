import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Social Work & Community Initiatives | Bijendra Malik", "Learn about Bijendra Malik's social work, community initiatives, youth empowerment and public welfare programs.", "/social-work");

export default function SocialWorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}