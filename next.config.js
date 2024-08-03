/** @type {import('next').NextConfig} */

  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
  })
  module.exports = withBundleAnalyzer({})

  const path = require('path');

  module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.xml$/,
        use: 'xml-loader',
      });
  
      return config;
    },
  };