module.exports = {
  entry: {
    '001/app.js': './src/001/app.js',
    '002/app.js': './src/002/app.js'
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name]'
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
      },
      {
        test: /\.glsl|\.frag|\.vert$/,
        use: [
          {
            loader: 'webpack-glsl-loader'
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
};
