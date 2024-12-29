/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            // ... other domains if any ...
            'raevmuktjsgqgxiugoro.supabase.co',
            'assets.aceternity.com' // Also adding this since you're using images from here
        ],
    },
}

module.exports = nextConfig 