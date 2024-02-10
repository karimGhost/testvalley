/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'imgix', 
    path: '',
  },

  output: 'export',
  assetPrefix: './',
};

export default nextConfig;




