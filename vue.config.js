'use strict'
const UglifyPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV == 'production') {
      // 为生产环境修改配置
      config.mode = 'production'
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        minimizer: [new UglifyPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          }
        })]
      }
      Object.assign(config, {
        optimization
      })
    } else {
      // 为开发环境修改配置
      config.mode = 'development'
    }
  },

  devServer: {
    open: true,
    https: false,
    hot: true,
    proxy: {
      '/api': {
        //target: 'http://wf1611.com/',
        target: 'http://45.116.164.146:3198/',
        ws: false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}
