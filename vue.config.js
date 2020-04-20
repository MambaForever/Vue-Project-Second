// 脚手架相关配置对象
module.exports = {
  lintOnSave: false, // 直接关闭eslint检查
  // lintOnSave: 'warning', // 配置eslint,只是输出提示信息, 项目正常运行

  // 配置devServer
  devServer:{
    proxy:{  // 配置代理服务器
      '/api':{
        target:'http://182.92.128.115/', // 转发的目标url
        changeOrigin: true  // 支持跨域
      }
    }
  },
}