const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = function(paths) {
  // read .env file
  const parsedEnvs = dotenv.config({ path: `${ paths.root }/.env` }).parsed ?? {};

  const commonWebpack = {

    // Where webpack looks to start building the bundle
    entry: [ `${ paths.src }/main.jsx` ],

    // Where webpack outputs the assets and bundles
    output: {
      path: paths.build,
      filename: '[name].js',
      publicPath: '/'
    },

    // How and where webpack looks for modules
    resolve: {
      extensions: [ '.jsx', '...' ],

      // use modules from common and current project
      modules: [ paths.common.nodeModules, paths.nodeModules ],

      // aliases to use in imports
      alias: {

        // general aliases
        '@locales': path.resolve(paths.basePath, '../locales'),

        // current project aliases
        '@root': paths.root,
        '@components': `${ paths.src }/components`,
        '@config': `${ paths.src }/config`,
        '@constants': `${ paths.src }/constants`,
        '@containers': `${ paths.src }/containers`,
        '@contexts': `${ paths.src }/contexts`,
        '@hooks': `${ paths.src }/hooks`,
        '@mappers': `${ paths.src }/mappers`,
        '@services': `${ paths.src }/services`,
        '@styles': `${ paths.src }/styles`,
        '@utils': `${ paths.src }/utils`,

        // common project aliases
        '@common-components': `${ paths.common.src }/components`,
        '@common-config': `${ paths.common.src }/config`,
        '@common-constants': `${ paths.common.src }/constants`,
        '@common-contexts': `${ paths.common.src }/contexts`,
        '@common-hooks': `${ paths.common.src }/hooks`,
        '@common-mappers': `${ paths.common.src }/mappers`,
        '@common-services': `${ paths.common.src }/services`,
        '@common-styles': `${ paths.common.src }/styles`,
        '@common-utils': `${ paths.common.src }/utils`,
        'yarn-design-system-react-components': 'yarn-design-system-react-components/css',
        'yarn-design-system-scss-variables': `${ paths.common.nodeModules }/yarn-design-system/src/scss/variables/variables`
      }
    },

    // Customize the webpack build process
    plugins: [

      // Removes/cleans build folders and unused assets when rebuilding
      new CleanWebpackPlugin(),

      // inject env variables into the bundle
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(parsedEnvs)
      }),

      // display the build progress
      new webpack.ProgressPlugin()
    ],

    // Determine how modules within the project are treated
    module: {
      rules: [

        // JavaScript: Use Babel to transpile JavaScript files
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            configFile: path.resolve(paths.common.basePath, '.babelrc.js')
          }
        }
      ]
    },

    // Externals libraries
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM',
      'ag-grid-enterprise': 'agGrid',
      'ag-grid-community': 'agGrid'
    }
  };

  return {
    parsedEnvs,
    commonWebpack
  };
};
