/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'guidesoft-it.com', 'guideitsol.com'],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:5000',
  },
}

module.exports = nextConfig
