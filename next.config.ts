/** @type {import('next').NextConfig} */
const nextConfig = {
  //image url whitelisting...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/jmuteru/wewantwaste-challenge/**',
      },
    ],
  },
};

module.exports = nextConfig;
