/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "*" }], unoptimized: true },
  env: {
    GET_COMPANIES_API: process.env.GET_COMPANIES_API,
    SEND_MESSAGE_API: process.env.SEND_MESSAGE_API,
  },
  reactStrictMode: false,
  output: "export",
};

export default nextConfig;
