/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "*" }], unoptimized: true },
  reactStrictMode: false,
  output: "export",
  env: {
    GET_USERS_API: process.env.GET_USERS_API,
    SEND_MESSAGE_API: process.env.SEND_MESSAGE_API,
  },
};

export default nextConfig;
