/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'client',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Client': './src/pages/index.tsx',
          './Navigation': './src/navigation'
        }
      })
    )

    return config
  }
}

module.exports = nextConfig
