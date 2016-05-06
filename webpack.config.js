
require('es6-promise').polyfill();

module.exports = {

  entry: './src/js/main.js',

  output: {
    path: './build',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        loaders: ['style','css','sass']
        // loaders: ['css','sass']
      }
    ]
  }

};
