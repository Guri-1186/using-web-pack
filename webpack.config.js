const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/index.html'),
          to: path.resolve(__dirname, 'dist/index.html'),
        },
        {
          from: path.resolve(__dirname, 'src/styles/style.css'),
          to: path.resolve(__dirname, 'dist/styles/style.css'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/images/your-logo-here.png'),
          to: path.resolve(__dirname, 'dist/your-logo-here.png'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/images/your-logo-footer.png'),
          to: path.resolve(__dirname, 'dist/your-logo-footer.png'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  // Add the stats option to get more detailed build information
  stats: {
    assets: true,
    colors: true,
    timings: true,
    version: true,
    hash: true,
    modules: false,
  },
};

