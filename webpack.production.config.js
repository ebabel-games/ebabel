const path = require('path');
const config = require('./package.json');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: path.resolve(__dirname, config.main),
  devtool: 'source-map',
  output: {
    library: process.env.NAME,
    libraryTarget: process.env.TARGET,
    path: __dirname,
    filename: `dist/${process.env.NAME}.min.js`,
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks.
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 1024,
      minRatio: 0.8
    }),
  ],
};
