const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      start_url: '/',
      scope: '/',
      name: 'Petgram = Tu app de fotos de mascotas',
      filename: 'manifest.webmanifest',
      display: 'standalone',
      short_name: 'Petgram',
      description: 'Con Petgram puedes encontrar fotos de animales domesticos muy facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      orientation: 'portrait',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          type: 'image/png'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server-tony-to-var-anthonytorresvargas.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html'
    }
  }
}
