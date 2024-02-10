/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'imgix', // or 'default', or a custom loader if implemented
    path: '',
  },
  target: 'experimental-serverless-trace', // or 'serverless'
 assetPrefix: './', // or remove this line if not needed
};

export default nextConfig;
