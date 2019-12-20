// // 引用npm ip包，用来获取本地ip地址，文档地址：https://www.npmjs.com/package/ip
// //const id = require('ip')
// // 引用path包（path属于node自带包，无需在package.json中引用安装即可直接引用），用来操作路径，文档地址：https://nodejs.org/docs/latest/api/path.html
// const path = require('path')
// const resolve = _ => path.resolve(__dirname, _)
// module.exports = {
//   // 是否在保存的时候使用 `eslint-loader` 进行检查。
//   // 有效的值：`ture` | `false` | `"error"`
//   // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
//   lintOnSave: false,
//   //baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
//   publicPath: process.env.NODE_ENV === 'production' ? '/web' : '/',
//   chainWebpack(config) {
//     config.entry('app').add('babel-polyfill')
//   },
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'scss',
//       patterns: [
//         resolve('src/styles/variable.scss')
//       ]
//     }
//   }
// }

const path = require('path')

const resolve = _ => path.resolve(__dirname, _)


module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('src/styles/variable.scss'),
        resolve('src/styles/element.scss')
      ]
    }
  }
}
