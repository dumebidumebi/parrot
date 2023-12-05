/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["github.com", "lh3.googleusercontent.com"]
    },
    env:{
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    }
}

module.exports = nextConfig
