import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Introduction | Bijendra Malik",
  description:
    "Watch Bijendra Malik's personal introduction — learn about his journey as a political leader, entrepreneur and public servant committed to building a better India.",
  alternates: { canonical: "https://bijendramalik.com/watch-intro/" },
  openGraph: {
    title: "Watch Introduction | Bijendra Malik",
    description:
      "Watch Bijendra Malik's personal introduction — learn about his journey as a political leader, entrepreneur and public servant committed to building a better India.",
    url: "https://bijendramalik.com/watch-intro/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bijendra Malik Introduction" }],
  },
};

export default function WatchIntroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
