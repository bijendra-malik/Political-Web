import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & News Coverage | Bijendra Malik",
  description:
    "Latest news, videos, debates, interviews and event highlights featuring Bijendra Malik — AAP National Spokesperson and political leader from Shamli, Uttar Pradesh.",
  alternates: { canonical: "https://bijendramalik.com/media/" },
  openGraph: {
    title: "Media & News Coverage | Bijendra Malik",
    description:
      "Latest news, videos, debates, interviews and event highlights featuring Bijendra Malik — AAP National Spokesperson and political leader from Shamli, Uttar Pradesh.",
    url: "https://bijendramalik.com/media/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Bijendra Malik Media Coverage" }],
  },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
