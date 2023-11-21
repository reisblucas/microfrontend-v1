/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf')

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks'
  return {
    layout: `layout@http://localhost:3000/_next/static/${location}/remoteEntry.js`
  }
}

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'client',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer)
        // exposes: {
        //   './pages-map': './pages-map.js',
        //   './Client': './src/pages/index.tsx',
        //   './Navigation': './src/navigation'
        // }
      })
    )

    return config
  }
}

module.exports = nextConfig
