import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Watch Intro | Bijendra Malik",
  "Watch the intro video — Bijendra Malik, political leader, entrepreneur and social contributor, on his journey and vision.",
  "/watch-intro"
);

export default function WatchIntroLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
