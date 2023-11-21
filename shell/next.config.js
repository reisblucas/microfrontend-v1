/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf')

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks'
  return {
    // client: `client@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    // member: `member@http://localhost:3002/_next/static/${location}/remoteEntry.js`
  }
}

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'layout',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {
          './Layout': './src/ui/Layout/layout.tsx'
        }
      })
    )
    return config
  }
}

module.exports = nextConfig
