/** @type {import('next').NextConfig} */

const nextConfig = {
  generateBuildId: async () => {
    return 'prod';
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;
