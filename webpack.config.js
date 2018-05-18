 const path = require('path');

 module.exports = {
    entry: {
      app: './library.js'
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: "umd",
      library: "tools"  
    }
}