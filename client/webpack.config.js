module.exports = {
  entry: {
    todoApp: './components/TodoApp/index.js',
    colorPicker: './components/colorPicker/index.js',
    profile: './components/profile/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public/js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};