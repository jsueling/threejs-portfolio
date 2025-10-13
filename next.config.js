/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/threejs-portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
