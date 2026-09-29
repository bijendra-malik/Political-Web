import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bijendra Malik | Get In Touch",
  description:
    "Reach out to Bijendra Malik — share your ideas, feedback or support. Contact via phone, email or the online form.",
  alternates: { canonical: "https://bijendramalik.com/contact/" },
  openGraph: {
    title: "Contact Bijendra Malik | Get In Touch",
    description:
      "Reach out to Bijendra Malik — share your ideas, feedback or support. Contact via phone, email or the online form.",
    url: "https://bijendramalik.com/contact/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Bijendra Malik" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
