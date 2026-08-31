import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialDrawer from "@/components/SocialDrawer";
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
  title: "Bijendra Malik | Political Leader • Entrepreneur • Public Representative",
  description:
    "Official website of Bijendra Malik — MLA Candidate Shamli, Aam Aadmi Party National Spokesperson, Founder Indexia Group of Companies. Discover his political journey, vision, social work and professional achievements.",
  keywords:
    "Bijendra Malik, MLA Shamli, Aam Aadmi Party, Indexia Group, Political Leader, Entrepreneur, Social Work, Public Representative",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Bijendra Malik | Political Leader • Entrepreneur • Public Representative",
    description:
      "Official website of Bijendra Malik — MLA Candidate Shamli, National Spokesperson, Founder Indexia Group.",
    type: "website",
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
        {children}
        <Footer />

        {/* Social Drawer */}
        <SocialDrawer />
      </body>
    </html>
  );
}
