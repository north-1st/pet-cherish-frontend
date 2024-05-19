/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixabay.com'],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
