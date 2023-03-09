const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/index.ejs',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'views/nfts.ejs',
      filename: 'nfts.html',
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    module: 'empty',
    async_hooks: 'empty',
    zlib: 'empty'
  }
};