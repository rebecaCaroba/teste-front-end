import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.econverse.com.br',
        pathname: '/teste-front-end/**',
      },
    ],
  },
};

export default nextConfig;
