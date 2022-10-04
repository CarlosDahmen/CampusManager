const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// import './public/style.css'

module.exports = {
  mode: 'development',
  entry: {
    app: [
      path.join(__dirname, './src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                // plugins: ['react-hot-loader/babel'],
              }
          }
      },
      {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
      },
    ]
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {from: "public", to: "public"},
        ]
      }),
      new CleanWebpackPlugin(),
    ]
}
