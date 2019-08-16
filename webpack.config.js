// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: './dist/app.bundle.js'
//   }
// }

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js',
    publicPath: '/dist'
  },
  devServer: {
      publicPath: "/dist",
      historyApiFallback: {
        index: 'public/index.html'
      }


    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        //include: APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'

      },
      {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
      },
      {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: 'file-loader'
      }
    ]
  }
}

module.exports = config;