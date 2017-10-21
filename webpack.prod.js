const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    // this will make the server understand "/some-link" routs instead of "/#/some-link"
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, 'src/scripts/index.jsx'), // webpack lloking for jsx file
  output: {
    path: path.resolve(__dirname, 'build/'), // this is used to specify folder for producion bundle
    filename: 'bundle.js', // filename for production bundle
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
      path.resolve(__dirname, 'src/scripts'),
      path.resolve(__dirname, 'node_modules'),
    ], // folders where Webpack is going to look for files to bundle together
    extensions: ['.jsx', '.js'], // extensions that Webpack is going to expect
  },
  module: {
    // loaders allow you to preprocess files as you require() or “load” them.
    // loaders are kind of like “tasks” in other build tools,
    // and provide a powerful way to handle frontend build steps.
    loaders: [
      {
        test: /\.jsx?$/, // here we're going to use JS for react components but including JSX in case this extension is preferable
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: ['react-hot-loader'],
      },
      {
        loader: 'babel-loader',

        // skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'src'),
        ],

        // only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss',
      },
      {
        test: /\.scss$/,
        loader: 'style!css?importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss!sass',
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // webpack will let you know if there are any errors

    // declare global variables
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      _: 'lodash',
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true,
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
  ],
};
