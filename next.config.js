/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // No basePath needed for username.github.io sites
}

module.exports = nextConfig
