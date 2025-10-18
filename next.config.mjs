/** @type {import('next').NextConfig} */
const nextConfig = {
 output: 'export',
  images: {
    unoptimized: true, // required if you’re using next/image
  },

};

export default nextConfig;
