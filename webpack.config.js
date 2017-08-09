const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /pixi.js/, loader: "script-loader" },
      { test: /p2.js/, loader: "script-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: path.posix.join('assets', 'img/[name].[ext]')
            }
          },
          'img-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi.js': pixi,
      'p2': p2,
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new CleanWebpackPlugin(['dist'], {
      _root: __dirname,
      verbose: true,
      dry: false
    }),
  ]
}