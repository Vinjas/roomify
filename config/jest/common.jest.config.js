const path = require('path');
const projectPaths = require('../paths');

const INCLUDE_FULL_COVERAGE = !!process.env.INCLUDE_FULL_COVERAGE;

module.exports = function(options = {}) {
  const { baseDir } = options;

  const paths = projectPaths(baseDir);

  const commonConfig = {
    transform: {
      '^.+\\.(jsx?)$': [ 'babel-jest', { configFile: path.resolve(paths.common.basePath, '.babelrc.js') }]
    },
    testMatch: [ path.resolve(paths.basePath, 'test/**/*.spec.{js,jsx}') ],
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{js,jsx}',
      '!<rootDir>/src/**/__mocks__/**/*',
      '!<rootDir>/src/{constants,config}/**/*',
      '!<rootDir>/src/{main.jsx,.eslintrc.js}'
    ],
    coverageDirectory: path.resolve(paths.basePath, 'test/results/unit/coverage'),
    coverageReporters: [
      'clover',
      'json',
      'text',
      INCLUDE_FULL_COVERAGE ? 'lcov' : 'lcovonly'
    ],
    modulePaths: [ paths.common.nodeModules, paths.nodeModules ],
    setupFiles: [ path.resolve(paths.basePath, 'test/setup-files.js') ],
    setupFilesAfterEnv: [ path.resolve(paths.basePath, 'test/setup-files-after-env.js') ],
    rootDir: paths.basePath,
    moduleNameMapper: {

      // ignore modules
      '^.+\\.(css|less|scss|png|jpg|ttf|woff|woff2|svg)$': require.resolve('babel-jest'),

      // local common modules
      '^@root(.*)$': path.join(paths.root, '$1'),
      '^@common-components(.*)$': path.resolve(paths.common.src, 'components$1'),
      '^@common-config(.*)$': path.resolve(paths.common.src, 'config$1'),
      '^@common-constants(.*)$': path.resolve(paths.common.src, 'constants$1'),
      '^@common-contexts(.*)$': path.resolve(paths.common.src, 'contexts$1'),
      '^@common-hooks(.*)$': path.resolve(paths.common.src, 'hooks$1'),
      '^@common-mappers(.*)$': path.resolve(paths.common.src, 'mappers$1'),
      '^@common-services(.*)$': path.resolve(paths.common.src, 'services$1'),
      '^@common-styles(.*)$': path.resolve(paths.common.src, 'styles$1'),
      '^@common-utils(.*)$': path.resolve(paths.common.src, 'utils$1'),
      '^@test-utils$': path.resolve(paths.common.basePath, 'test/utils.js'),
      '^@test-helpers(.*)$': path.resolve(paths.common.basePath, 'test/helpers$1'),

      // external common modules
      '^lodash-es': path.resolve(paths.common.nodeModules, 'lodash'),
      '^i18next': path.resolve(paths.common.nodeModules, 'i18next'),
      '^react$': path.resolve(paths.common.nodeModules, 'react'),
      '^react-dom$': path.resolve(paths.common.nodeModules, 'react-dom'),
      'yarn-design-system-react-components': require.resolve('yarn-design-system-react-components/css'),

      // root modules
      '^@locales(.*)$': path.resolve(paths.root, 'locales$1'),

      // project specific modules
      '^@config(.*)$': '<rootDir>/src/config$1',
      '^@constants(.*)$': '<rootDir>/src/constants$1',
      '^@containers(.*)$': '<rootDir>/src/containers$1',
      '^@contexts(.*)$': '<rootDir>/src/contexts$1',
      '^@components(.*)$': '<rootDir>/src/components$1',
      '^@hooks(.*)$': '<rootDir>/src/hooks$1',
      '^@mappers(.*)$': '<rootDir>/src/mappers$1',
      '^@services(.*)$': '<rootDir>/src/services$1',
      '^@utils(.*)$': '<rootDir>/src/utils$1'
    }
  };

  return commonConfig;
};
