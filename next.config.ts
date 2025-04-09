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
    ],
  },
};

export default nextConfig;
