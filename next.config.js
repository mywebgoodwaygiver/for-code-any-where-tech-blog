/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      "m.media-amazon.com",
      "blogger.googleusercontent.com",
      "play-lh.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
