/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: "*" }], unoptimized: true },
  reactStrictMode: false,
  output: "export",
};

export default nextConfig;
