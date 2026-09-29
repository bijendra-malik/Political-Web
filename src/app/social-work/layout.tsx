import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Work & Community Initiatives | Bijendra Malik",
  description:
    "Bijendra Malik's social work — education drives, healthcare camps, women empowerment, youth development and community welfare initiatives across Uttar Pradesh.",
  alternates: { canonical: "https://bijendramalik.com/social-work/" },
  openGraph: {
    title: "Social Work & Community Initiatives | Bijendra Malik",
    description:
      "Bijendra Malik's social work — education drives, healthcare camps, women empowerment, youth development and community welfare initiatives across Uttar Pradesh.",
    url: "https://bijendramalik.com/social-work/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bijendra Malik Social Work" }],
  },
};

export default function SocialWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
