/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  skipTypescriptChecking: true,
  // or
  typescript: {
    transpileOnly: true, // same as ts-node --transpile-only
  },
  ignoreBuildErrors: true,
  swcMinify: true,
};

module.exports = nextConfig;
