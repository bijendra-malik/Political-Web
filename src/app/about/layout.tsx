import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("About Bijendra Malik | Political Leader & Entrepreneur", "Learn about Bijendra Malik's leadership, entrepreneurial work, political journey and commitment to public service.", "/about");

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}