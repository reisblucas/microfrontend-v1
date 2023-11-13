/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf')

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'client-remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Client': './src/app/page.tsx',
          './Navigation': './src/navigation'
        }
      })
    )

    return config
  }
}

module.exports = nextConfig
