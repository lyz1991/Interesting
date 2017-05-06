const webpack = require('webpack')
module.exports = {
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    iframe: true,
    progress:true
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE.ENV':"development"
  }),
    new webpack.HotModuleReplacementPlugin()]
}
