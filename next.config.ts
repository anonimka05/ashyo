/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ashyo.store",
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "api.ashyo.fullstackdev.uz",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
