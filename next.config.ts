import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ],
    dangerouslyAllowSVG: true, // <-- lo sblocchi tu
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // sicurezza base
  }
};

export default nextConfig;