import type { NextConfig } from 'next';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/egovchain',
  assetPrefix: '/egovchain/',
};

module.exports = nextConfig;
