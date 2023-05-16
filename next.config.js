/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/confirmation",
        destination: "/",
      },
      {
        source: "/validation",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
