/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return 'prod';
  },
};

module.exports = nextConfig;
