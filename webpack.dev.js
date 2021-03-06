// const configs = require('./webpack.config.js');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
// tools
const path = require('path');
const ip = require('ip').address();
const chalk = require('chalk');
// const config = Array.isArray(configs) ? configs[0] : configs;
// configs.plugins.push(new webpack.HotModuleReplacementPlugin());
console.log('server is running! Please open ' + chalk.green('http://' + ip + ':8080/'));
/**
 * Webpack Plugins
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
/**
 * Webpack configuration
 */
// mode = development
// module.exports = function () {
  // return webpackMerge(config, {
    module.exports = {
      entry: path.resolve(__dirname, './src/entry.js'),
      devtool: 'eval-source-map',
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
      },
      /*
      * Options affecting the resolving of modules.
      *
      * See: http://webpack.github.io/docs/configuration.html#module
      */
      module: {
        rules: [
          // support for .html antd .css as raw text
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.(css|scss)$/,
            loader: 'style-loader!css-loader!sass-loader'
          },
          {
            test: /\.(eot|woff|woff2|ttf)$/,
            loader: 'file-loader'
          },
          {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'file-loader'
          }
        ]
      },
      /*
      * Add additional plugins to the compiler.
      *
      * See: http://webpack.github.io/docs/configuration.html#plugins
      */
      plugins: [
        /*
        * Plugin: HtmlWebpackPlugin
        * Description: Simplifies creation of HTML files to serve your webpack bundles.
        * This is especially useful for webpack bundles that include a hash in the filename
        * which changes every compilation.
        *
        * See: https://github.com/ampedandwired/html-webpack-plugin
        */
        new HtmlWebpackPlugin({
          template: 'web/index.dev.html',
          title: 'Hello Weex',
          isDevServer: true,
          chunksSortMode: 'dependency',
          inject: 'head'
        }),
        /*
        * Plugin: ScriptExtHtmlWebpackPlugin
        * Description: Enhances html-webpack-plugin functionality
        * with different deployment options for your scripts including:
        *
        * See: https://github.com/numical/script-ext-html-webpack-plugin
        */
        new ScriptExtHtmlWebpackPlugin({
          defaultAttribute: 'defer'
        }),
        
        new webpack.HotModuleReplacementPlugin()
      ],
      /**
       * Webpack Development Server configuration
       * Description: The webpack-dev-server is a little node.js Express server.
       * The server emits information about the compilation state to the client,
       * which reacts to those events.
       *
       * See: https://webpack.github.io/docs/webpack-dev-server.html
       */
      devServer: {
        compress: true,
        host: '0.0.0.0',
        port: '8081',
        historyApiFallback: true,
        public: ip + ':8081',
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        },
        proxy: {
          '/server': {
            target: 'http://192.168.1.153:7001',
            changeOrigin: true,
            pathRewrite: {
              '^/server': ''
            }
          }
        }
      }
    };
  // });
// };
