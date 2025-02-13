import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['react-dom/server'] = resolve(__dirname, 'server/react-dom-server-shim.js');
    }
    return config;
  },
  // You can remove serverExternalPackages if it causes issues
};

export default nextConfig;