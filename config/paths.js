const path = require('path');

function getPaths(basePath) {
  return {
    basePath,
    src: path.resolve(basePath, './src'),
    build: path.resolve(basePath, './dist'),
    public: path.resolve(basePath, './public'),
    nodeModules: path.resolve(basePath, './node_modules')
  };
}

module.exports = function(basePath) {
  return {
    ...getPaths(basePath),
    root: path.resolve(basePath, '..'),
    common: getPaths(path.resolve(basePath, '../common'))
  };
};
