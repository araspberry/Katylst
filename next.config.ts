import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow cross-origin image sources if needed in future
  images: {
    remotePatterns: [],
  },
}

export default nextConfig
