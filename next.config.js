/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "m.media-amazon.com",
      "blogger.googleusercontent.com",
      "play-lh.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
