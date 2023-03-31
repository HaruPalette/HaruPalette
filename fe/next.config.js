/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'dimg.donga.com',
      'haru-palette.s3.ap-northeast-2.amazonaws.com',
      'harupalette.com',
    ],
  },
  compiler: {
    emotion: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites: {
    source: '/api/v1/:path*',
    destination: 'https://harupalette.com:8080/:path*',
  },
};

module.exports = nextConfig;
