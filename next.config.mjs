/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Cloudflare Workers를 위한 설정
  experimental: {
    runtime: 'experimental-edge',
  },
}

export default nextConfig
