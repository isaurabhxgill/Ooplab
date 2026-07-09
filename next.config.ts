import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  images: {
    remotePatterns: [],
    localPatterns: [{ pathname: '/Assest/**', search: '' }],
  },
};

export default nextConfig;
