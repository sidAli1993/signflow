import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.fallback = { ...config.resolve.fallback, canvas: false, fs: false };
    return config;
  },
  turbopack: {},
};

export default nextConfig;
