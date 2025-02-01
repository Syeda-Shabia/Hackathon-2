/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings during build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**', // Adjust this based on your needs
      },
    ],
  },
  experimental: {
    runtime: "nodejs", // ✅ Force Node.js runtime to avoid Clerk errors
  },
};

export default nextConfig;

