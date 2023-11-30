/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "podspace.pod.ir",
        port: "",
        pathname: "/api/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
