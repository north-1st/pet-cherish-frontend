/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pixabay.com',
      'storage.googleapis.com',
      'firebasestorage.googleapis.com',
      'picsum.photos',
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
