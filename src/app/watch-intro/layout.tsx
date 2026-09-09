import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Bijendra Malik | Videos & Public Addresses",
  robots: { index: false, follow: true },
};

export default function WatchIntroLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
