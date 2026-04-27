/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/NaukriAdminPanel',
  assetPrefix: '/NaukriAdminPanel/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;