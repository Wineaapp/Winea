import type { NextConfig } from "next";
/* import { resolve } from "path"; */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ng.jumia.is",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent-*.xx.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "scontent-*.cdninstagram.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
