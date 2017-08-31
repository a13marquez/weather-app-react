const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [

    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    foundation: 'foundation-sites'
  },

  resolve: {
    extensions: [ '.js', '.jsx'],

    alias: {
      'WeatherApp': path.resolve(__dirname, 'app/components/WeatherApp.jsx'),
      'Main': path.resolve(__dirname, 'app/components/Main.jsx'),
      'Navigation': path.resolve(__dirname, 'app/components/Nav.jsx'),
      'Weather': path.resolve(__dirname, 'app/components/Weather.jsx'),
      'WeatherForm': path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
      'WeatherMessage': path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
      'About': path.resolve(__dirname, 'app/components/About.jsx'),
      'openWeatherMap': path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
      'ErrorModal': path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
      //'applicationStyles': path.resolve(__dirname, 'app/styles/app.scss')
    },
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
   // sassLoader will include node_modules explicitly

  devtool: 'cheap-module-eval-source-map'
};
