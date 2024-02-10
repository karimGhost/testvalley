/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'imgix', 
    path: '',
    
  },
  
  assetPrefix: './',
};

export default nextConfig;

