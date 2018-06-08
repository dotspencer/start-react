var path = require('path');

module.exports = {
  entry: {
    'bundle': __dirname + '/src/views/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/js'
  },
  mode: 'development',
};
