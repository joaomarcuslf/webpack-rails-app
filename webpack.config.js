var webpack = require('webpack');

module.exports = {
  entry: "./app/frontend/app.es6",
  output: {
    path: "./app/assets/javascripts/",
    filename: "application.js"
  },
  module: {
    loaders: [{
        test: [/\.es6$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        }
    }]
  }
};
