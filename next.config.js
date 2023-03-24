/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  images: {
    domains: ['images.ctfassets.net'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    dirs: ['app'],
  },
};

module.exports = nextConfig;
