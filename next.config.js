/** @type {import('next').NextConfig} */
const nextConfig = {
  reactProductionProfiling: true,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
