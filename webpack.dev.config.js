/**
 * Created by lyz on 2016-09-23.
 */
const config = require('./public/config/dev.config.js')
const express = require('express')
const app = express()
app.use(express.static('./'))
app.use(require('./server/router.js'))
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(config)
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true
}))
app.use(WebpackHotMiddleware(compiler, {
  log: console.log
}))

app.listen(8000, function () {
  console.log('Listening on 8080')
})