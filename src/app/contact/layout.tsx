import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("Contact Bijendra Malik | Get in Touch", "Contact Bijendra Malik for public service, political, media and community-related inquiries.", "/contact");

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}