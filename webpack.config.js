var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  // context: path.join(__dirname, "csc394"),
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: './src/js/client.js',

  module: {
    loaders: [
      // { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: path.resolve('./assets/'),
    publicPath: "/static/",
    filename: 'client.min.js'
    // filename: '[name]-[hash].js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
    proxy: [{
      path: '/rest/*',
      target: 'http://192.168.99.100'
    },
    {
      path: '/static/*',
      target: 'http://192.168.99.100'
    },
    {
      path: '/login/*',
      target: 'http://192.168.99.100'
    }

    ],
  }
};
