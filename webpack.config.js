var path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  }
}
