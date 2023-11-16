/** @type {import('next').NextConfig} */

let envImageUnoptimize = process.env.NODE_ENV !== 'production' ? false : true;

const nextConfig = {
  generateBuildId: async () => {
    return 'prod';
  },
  output: process.env.NODE_ENV !== 'production' ? undefined : 'export',
  images: {
    unoptimized: envImageUnoptimize,
  },
};

module.exports = nextConfig;
