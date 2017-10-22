const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    // this will make the server understand "/some-link" routs instead of "/#/some-link"
    hot: true,
    inline: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, 'src/scripts/index.jsx'),
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
    ], // folder that webpack make as bundle
    extensions: ['.jsx', '.js'], // extenseion that webpack expecting
  },
  module: {
    // loaders allow you to preprocess files as you require() or “load” them.
    // loaders are kind of like “tasks” in other build tools,
    // and provide a powerful way to handle frontend build steps.
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.scss$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/,
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'build/[name].[hash:8].[ext]',
        },
      },
      {
        // skip any files outside of your project's `src` directory
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        // only run `.js` and `.jsx` files through Babel
        test: /\.(js|jsx)?$/,
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
    new webpack.HotModuleReplacementPlugin(), // hot reloading
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
      hash: false,
    }),
  ],
};
