/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fix for @react-three/fiber
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react': 'react',
        'react-dom': 'react-dom',
      };
    }
    
    // Externalize react for server-side
    if (isServer) {
      config.externals = [...config.externals, { 
        '@react-three/fiber': '@react-three/fiber',
        '@react-three/drei': '@react-three/drei',
        'three': 'three'
      }];
    }
    
    return config;
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
