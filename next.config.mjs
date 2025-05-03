/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure other options as needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and update the following line if your site is not at the root of your GitHub Pages domain
  // basePath: '/portfolio-website',
}

export default nextConfig
