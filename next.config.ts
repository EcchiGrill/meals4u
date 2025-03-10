import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.themealdb.com",
      },
    ],
  },
};

export default nextConfig;
