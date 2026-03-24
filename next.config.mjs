import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfigBase = {
  webpack: (config, { dev, isServer }) => {
    // Workaround for Windows EPERM issues writing webpack pack cache.
    // Memory cache is plenty for dev and avoids file locks from AV/indexers.
    if (dev) {
      config.cache = false;
    }

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

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
  ...nextConfigBase,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

export default nextConfig;
