/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // BASE_DEV_URL: 'http://158.160.126.80/api/v1/',
    BASE_DEV_URL: 'http://194.34.134.165/api/v1/',
    // BASE_DEV_URL: 'https://lintu.finance/',
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
