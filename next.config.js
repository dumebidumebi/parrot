/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["github.com", "lh3.googleusercontent.com"]
    },
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    env:{
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    }
}

module.exports = nextConfig
