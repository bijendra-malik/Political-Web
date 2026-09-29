import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | Bijendra Malik — Building a Progressive India",
  description:
    "Bijendra Malik's vision for a corruption-free, inclusive India — with focus on education, healthcare, youth empowerment, infrastructure and community development.",
  alternates: { canonical: "https://bijendramalik.com/vision-mission/" },
  openGraph: {
    title: "Vision & Mission | Bijendra Malik — Building a Progressive India",
    description:
      "Bijendra Malik's vision for a corruption-free, inclusive India — with focus on education, healthcare, youth empowerment, infrastructure and community development.",
    url: "https://bijendramalik.com/vision-mission/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bijendra Malik Vision & Mission" }],
  },
};

export default function VisionMissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
