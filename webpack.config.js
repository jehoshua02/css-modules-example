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
  plugins: [
    new HtmlPlugin()
  ]
}
