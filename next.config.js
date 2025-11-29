/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    // Ignore src directory to avoid conflicts with app directory
    appDir: true,
  },
};

module.exports = nextConfig;
