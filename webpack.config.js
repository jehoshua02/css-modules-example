var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new HtmlPlugin()
  ]
}
