/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/egovchain-demo',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/egovchain-demo/',
};

module.exports = nextConfig;
