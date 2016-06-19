var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'eventsource-polyfill',           // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js?|\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
}
