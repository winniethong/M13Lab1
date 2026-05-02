const path = require('path')

module.exports = {
  entry: './src/employees.jsx',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'employees.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    static: './public',
    port: 3000
  },

  mode: 'development'
}