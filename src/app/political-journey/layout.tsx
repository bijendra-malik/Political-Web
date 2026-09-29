import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Political Journey of Bijendra Malik | Aam Aadmi Party",
  description:
    "Explore Bijendra Malik's political journey — from contesting the Shamli Assembly election with AAP in 2022 to becoming National Spokesperson and leading the UP-wide Padayatra.",
  alternates: { canonical: "https://bijendramalik.com/political-journey/" },
  openGraph: {
    title: "Political Journey of Bijendra Malik | Aam Aadmi Party",
    description:
      "Explore Bijendra Malik's political journey — from contesting the Shamli Assembly election with AAP in 2022 to becoming National Spokesperson and leading the UP-wide Padayatra.",
    url: "https://bijendramalik.com/political-journey/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bijendra Malik Political Journey" }],
  },
};

export default function PoliticalJourneyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
