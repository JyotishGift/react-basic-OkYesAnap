var path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      }
    ]
  },
  devServer: {
    open: true,
    port: 3000,
    inline: true,
    hot: true
  },
  plugins:[new webpack.HotModuleReplacementPlugin()]
};