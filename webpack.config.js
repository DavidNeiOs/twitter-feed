const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        // For .js or .jsx files use babel-loader. Exclude node modules
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // for .css files use css-loader. If that doesn't work use style-loader
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    // Name the css file sent to the build folder style.css
    new ExtractTextPlugin({ filename: 'style.css' }),
  ],
};
