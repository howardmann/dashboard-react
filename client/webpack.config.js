module.exports = {
  entry: {
    helloWorld: './components/helloWorld/index.js',
    reactHelloWorld: './components/reactHelloWorld/index.js',
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