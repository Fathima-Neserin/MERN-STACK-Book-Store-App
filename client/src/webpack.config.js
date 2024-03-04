const path = require('path');

module.exports = {
  // other webpack configurations...

  resolve: {
    fallback: {
      querystring: require.resolve('querystring-es3'),
      crypto: require.resolve('crypto-browserify'),
      fs: false, // or require.resolve('fs')
      http: require.resolve('stream-http'),
      net: false, // or require.resolve('net'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
    },
  },
  
};
