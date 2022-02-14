const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,

  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'jsx', 'js'],
  // Support loading `.md`, `.mdx`:
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      //webpack aliase for Preact for production mode only
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
});
