const webpack = require('webpack')
const config = require('./config.js')
const path = require('path')
const projectRoot = path.join(__dirname, '../public')
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
const htmlplugin = require('html-webpack-plugin')
Object.keys(config.entry).forEach(function (name) {
  config.entry[name] = [hotMiddlewareScript].concat(config.entry[name])
})
module.exports = {
  entry: config.entry,
  output: {
    path: '/',
    publicPath:"http://127.0.0.1:8080/public/build",
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, /lib/]
      }],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: require.resolve('../lib/angular.min.js'),
        loader: 'exports?window.angular'
      },{
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url'
      }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
       angular: 'angular'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  babel: {
    presets: ['es2015']
  },
  resolve: {
    alias: config.alias

  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}