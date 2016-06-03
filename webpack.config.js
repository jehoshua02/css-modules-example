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
      {test: /\.css$/, loader: 'css?modules'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new HtmlPlugin()
  ]
}
