import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
   images: {
    unoptimized: true 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.jsx'
        }
      }
    }
  }
};

export default nextConfig;