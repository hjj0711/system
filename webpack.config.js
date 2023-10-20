const path = require('path');

module.exports = {
    // ...其他配置项
    module: {
      rules: [
        // ...其他规则
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }, {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            configFile: 'tslint.json',
            emitErrors: true,
            failOnHint: true
          }
        }
      ]
    }
  };