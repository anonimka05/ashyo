/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ashyo.store",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
