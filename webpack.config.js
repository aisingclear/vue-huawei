var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: '/Users/aisingclear/Desktop/vue/vue-huawei/dist',
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index-[hash].html.js',
      inject:'head',
      template: 'index.html',
      title: 'we to good'
    })
  ]
};