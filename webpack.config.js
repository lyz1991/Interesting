const webpack = require('webpack')
const config = require('./public/config/config.js')
const merge = require('webpack-merge')
const path = require('path')
const webpackserver = require('./server/webpackserver')
const projectRoot = path.join(__dirname, './public')
module.exports = merge(webpackserver, {
    entry: config.entry,
    output: {
        path: './public/build',
        publicPath:"http://127.0.0.1:8080/public/build",
        filename: '[name].js'
    },
    module: {
      preLoaders: [
          {
              test: /\.js$/,
              loader: 'eslint',
              include: projectRoot,
              exclude: [/node_modules/, /lib/,/ts/,/js/]
          }],
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel'
          },
          {
              test: /\.ts$/,
              loader:'ts'
          },
          {
              test: require.resolve('./public/lib/angular.min.js'),
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
        })
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
})