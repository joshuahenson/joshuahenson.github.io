const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// TODO: Update the following in prod
// extract styles
// babel
// dist to docs
// remove hmr https://webpack.js.org/guides/hot-module-replacement/

module.exports = {
  entry: './src/js/index.js',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // TODO: change to docs after testing
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/html/index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // TODO: change to docs after testing
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  }
};