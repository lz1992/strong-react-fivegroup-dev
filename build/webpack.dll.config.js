const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')
const config = require('../config')
 
const paths = config.utils_paths
module.exports = {
    entry: {
      vendors: []
    },
    output: {
      filename: '[name].dll.js',
      path: paths.modules('modules'),
      libraryTarget: 'amd'  
    },
    plugins: [
       
      new webpack.DllPlugin({
        path: paths.modules('modules')+'/[name]-manifest.json',
        // This must match the output.library option above
        name: '[name]',
        context:__dirname
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      })
    ],
  }
