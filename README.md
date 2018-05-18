# webpack-library-base

利用webpack来创建库，
打包的方法不依赖任何外部文件，没有引入外部文件，

filename: '[name].min.js',                 
//生成的library名成
path: path.resolve(__dirname, 'dist'),
libraryTarget: "umd",
// amd或者commonjs的方式可访问
// var --- 作为一个全局变量，通过 script 标签来访问
// window --- 通过 window 对象访问，在浏览器中
// this --- 通过 this 对象访问
library: "tools"  
//library暴露的变量名
      
若引用外部文件，并且该外部文件不需要打包到该库中，使用externals属性
 externals: {
    lodash: {
       commonjs: 'lodash', // exports
       commonjs2: 'lodash', // module.exports
       amd: 'lodash',  // require,define
       root: '_' // 全局变量
     }
   }
