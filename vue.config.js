const webpack = require('webpack');

module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
      },
    },
  },
};
