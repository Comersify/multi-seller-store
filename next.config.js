/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com", "picsum.photos", "127.0.0.1"],
  },
};

module.exports = nextConfig;
