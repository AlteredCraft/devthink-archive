import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dev-think-scrape' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dev-think-scrape/' : '',
};

export default nextConfig;
