/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
          // ... other domains if any ...
          'raevmuktjsgqgxiugoro.supabase.co',
          'assets.aceternity.com', // Also adding this since you're using images from here
          'api.microlink.io'
      ],
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  onError: (error:Error) => {
      if (error.message.includes('Hydration failed')) {
          console.error('Hydration error details:', error);
      }
  },
}

module.exports = nextConfig 