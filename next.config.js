/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "@prisma/client": "@prisma/client",
    });
    return config;
  },
};

module.exports = nextConfig;
