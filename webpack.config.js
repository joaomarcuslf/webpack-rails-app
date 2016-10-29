// module.exports = {
//   entry: "./app/frontend/app.es6",
//   output: {
//     path: "./app/assets/javascripts/",
//     filename: "app.js"
//   },
//   module: {
//     loaders: [{
//         test: [/\.es6$/, /\.jsx$/],
//         exclude: /node_modules/,
//         loader: 'babel',
//         query: {
//             presets: ['es2015', 'react', 'stage-0']
//         }
//     }]
//   }
// };

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './app/frontend/app.es6',

  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'application.js',
    publicPath: '/assets',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: [ 'node_modules'],
  },

  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.package.json', ['main'])
    ])
  ],

  module: {
    loaders: [
      {
        test: [/\.es6$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};