const path = require('path');
const Clear = require('clean-webpack-plugin');

module.exports = {
  mode: process
    .argv
    .includes('--dev')
    ? 'development'
    : 'production',
  entry: {
    page1: './src/page1',
    page2: './src/page2',
    page3: './src/page3'
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env', '@babel/preset-react'
          ],
          plugins: ["transform-do-expressions", "transform-function-bind"]
        }
      }
    ]
  },
  plugins: [new Clear('build')]
};
