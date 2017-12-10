var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  context: __dirname,
  entry: './src/js/main.js',
  output: {
    path: '/Users/aisingclear/Desktop/vue/vue-huawei/dist',
    filename: 'js/[name].js',
    // filename: 'js/[name]-[chunkhash].js',
    // publicPath: 'https://www.taobao.com'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:path.resolve(__dirname,'node_modules'),
        include: path.resolve(__dirname,'src'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index-[hash].html',
      inject:'head',
      template: 'index.html',
      title: 'we to good',
      date: new Date()
    })
  ]
};