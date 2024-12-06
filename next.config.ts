/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/egovchain-demo', // Replace with your repository name
  assetPrefix: '/egovchain-demo/', // Replace with your repository name
};

module.exports = nextConfig;
