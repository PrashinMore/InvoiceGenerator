/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages (matches repository name)
  basePath: '/InvoiceGenerator',
  assetPrefix: '/InvoiceGenerator/',
}

module.exports = nextConfig

