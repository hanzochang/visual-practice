module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}], 'react'
              ]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              failOnError: false,
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map'
};
