/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  experimental: {
    appDir: true,
  },
  api: {
    bodyParser: true,
  },
};

module.exports = nextConfig;
