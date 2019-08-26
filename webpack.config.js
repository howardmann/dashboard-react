module.exports = {
  entry: {
    helloWorld: './src/components/helloWorld/index.js',
    reactHelloWorld: './src/components/reactHelloWorld/index.js',
    todoApp: './src/components/TodoApp/index.js',
    colorPicker: './src/components/colorPicker/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/src/public/js'
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