import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialDrawer from "@/components/SocialDrawer";
import CommonPageLayout from "@/components/CommonPageLayout";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bijendramalik.com"),
  title: "Bijendra Malik | Political Leader • Entrepreneur • Public Representative",
  description:
    "Official website of Bijendra Malik — MLA Candidate Shamli, Aam Aadmi Party National Spokesperson, Founder Indexia Group of Companies. Discover his political journey, vision, social work and professional achievements.",
  keywords:
    "Bijendra Malik, MLA Shamli, Aam Aadmi Party, Indexia Group, Political Leader, Entrepreneur, Social Work, Public Representative",
  alternates: { canonical: "https://bijendramalik.com/" },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Bijendra Malik | Political Leader • Entrepreneur • Public Representative",
    description:
      "Official website of Bijendra Malik — MLA Candidate Shamli, National Spokesperson, Founder Indexia Group.",
    url: "https://bijendramalik.com/",
    siteName: "Bijendra Malik",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bijendra Malik — Political Leader & Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bijendra Malik | Political Leader • Entrepreneur",
    description:
      "Official website of Bijendra Malik — MLA Candidate Shamli, National Spokesperson, Founder Indexia Group.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <CommonPageLayout>{children}</CommonPageLayout>
        <Footer />

        {/* Social Drawer */}
        <SocialDrawer />
      </body>
    </html>
  );
}
