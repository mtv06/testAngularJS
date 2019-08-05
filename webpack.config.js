const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './source/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ],
        exclude: path.resolve(__dirname, 'index.html')
      }
    ]
  },

  resolve: {
    modules: ['node_modules', 'source', 'source/components', 'source/services', 'source/states']
  },

  plugins: [  
    new HtmlWebpackPlugin({
        template: __dirname + "/index.html",
        inject: 'body'
    })
  ]
}
