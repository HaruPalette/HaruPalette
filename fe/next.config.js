/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'dimg.donga.com',
      'haru-palette.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
