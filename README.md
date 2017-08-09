## Phaser 101

## สารบัญ
- [Setup Phaser ด้วย Webpack](#webpack-config)
- [ทดสอบเรียกใช้งาน Phaser](#index)

## Webpack Config
```javascript
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
    loaders: [
      { test: /pixi.js/, loader: "script-loader" },
      { test: /p2.js/, loader: "script-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
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
    })
  ]
}
```

## Index
```javascript
import PIXI from 'pixi.js'
import p2 from 'p2'
import Phaser from 'phaser'

const game = new Phaser.Game(640, 360, Phaser.AUTO)
const GameState = {
  preload () {},
  create () {},
  update () {}
}

game.state.add('GameState', GameState)
game.state.start('GameState')
```