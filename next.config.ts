import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages pe direct URL access ke liye — /about -> /about/index.html
  trailingSlash: true,
};

export default nextConfig;
