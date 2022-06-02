/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log("isServer", isServer);
      require("./scripts/sitemap-generator.js");
      console.log("required");
    }
    return config;
  },
};

module.exports = nextConfig;
