import type { ReactNode } from "react";

export default function CommonPageLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="min-h-full flex flex-col">{children}</div>;
}
