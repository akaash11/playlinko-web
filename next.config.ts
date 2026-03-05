import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add intermediate sizes so the mascot (288px mobile / 352px desktop)
    // is served at a close match instead of jumping straight to 640px.
    deviceSizes: [320, 384, 420, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
