const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { getProxyMiddleware } = require('@rcs-fe-common/local-server');
const projectPaths = require('../paths');
const common = require('./webpack.common.js');

module.exports = async function(options = {}, webpackConfig = {}) {
  const { baseDir } = options;

  // build paths based on baseDir
  const paths = projectPaths(baseDir);

  // build the common config across envs
  const { commonWebpack, parsedEnvs } = common(paths);

  let mockProxy;
  let proxyMiddleware;
  const proxyContexts = [ '/config', '/configuration', '/auth', '/papp', '/vtx' ];

  if (parsedEnvs.PROXY_URL) {
    mockProxy = [
      {
        target: parsedEnvs.PROXY_URL,
        context: proxyContexts
      }
    ];
  } else {
    const proxyConfig = {
      targetUrl: `https://cp-${ parsedEnvs.EXEC_ENVIRONMENT }.adidas.com`,
      username: parsedEnvs.STS_USER,
      password: parsedEnvs.STS_PASS,
      targetSessionCookie: parsedEnvs.STS_COOKIE,
      authProvider: parsedEnvs.AUTH_PROVIDER
    };

    proxyMiddleware = await getProxyMiddleware(proxyConfig);
  }

  const devConfig = {
    mode: 'development',
    devtool: 'eval',

    // Webpack dev server configuration
    devServer: {
      historyApiFallback: true,
      proxy: mockProxy,
      setupMiddlewares(middlewares, { app }) {
        // overcome CORS when loading from other MFE
        app.use((_, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', '*');
          res.header('Access-Control-Allow-Methods', '*');
          next();
        });

        // mount the mocks endpoints if needed
        if (proxyMiddleware) {
          proxyContexts.forEach((context) => app.use(context, proxyMiddleware));
        }

        return middlewares;
      }
    },

    // Customize the webpack build process
    plugins: [

      // A Webpack plugin for generating an asset manifest
      new WebpackManifestPlugin(),

      // Extracts CSS into separate files
      new MiniCssExtractPlugin({
        filename: '[name].css'
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
                sourceMap: true,

                // disable annoying warning
                sassOptions: { quietDeps: true }
              }
            }
          ]
        }
      ]
    }
  };

  return merge(commonWebpack, devConfig, webpackConfig);
};
