const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const projectPaths = require('../paths');
const common = require('./webpack.common.js');

module.exports = function(options = {}, webpackConfig = {}) {
  const { baseDir } = options;

  // build paths based on baseDir
  const paths = projectPaths(baseDir);

  // build the common config across envs
  const { commonWebpack } = common(paths);

  const prodConfig = {
    mode: 'production',
    devtool: false,

    output: {
      filename: '[name].min.js'
    },

    plugins: [

      // Extracts CSS into separate files
      new MiniCssExtractPlugin({
        filename: '[name].min.css'
      })
    ],

    module: {
      rules: [
        {
          test: /.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),

              // we don't have need urls since all the images are in the PORTAL
              options: { url: false }
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                postcssOptions: {
                  plugins: [ require.resolve('autoprefixer') ]
                }
              }
            },
            require.resolve('resolve-url-loader'),
            {
              loader: require.resolve('sass-loader'),
              options: {

                // this is required by (resolve-url-loader)
                sourceMap: true
              }
            }
          ]
        }
      ]
    },

    optimization: {
      minimizer: [ new CssMinimizerPlugin(), '...' ]
    }
  };

  return merge(commonWebpack, prodConfig, webpackConfig);
};

