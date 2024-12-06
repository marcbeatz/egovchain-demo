import type { NextConfig } from 'next';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/egovchain-demo',
  assetPrefix: '/egovchain-demo/',
};

module.exports = nextConfig;
