const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');

module.exports = function() {
  return merge(parts.commonConfig);
}