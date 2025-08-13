const { override, addWebpackResolve } = require('customize-cra');

module.exports = override(
  // Add resolve configuration
  addWebpackResolve({
    fallback: {
      fs: false,
      path: false,
      crypto: false
    }
  })
);
