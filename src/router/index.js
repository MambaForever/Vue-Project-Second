// 引入Vue模块
import Vue from 'vue'
// 引入vue-router插件
import VueRouter from 'vue-router'
// 声明使用VueRouter插件
Vue.use(VueRouter)
// 引入路由器配置模块
import routes from './routes'

// 重写VueRouter原型上的方法解决路由跳转时报的NavigationDuplicated错误
// 先将原方法储存到变量上
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push方法
VueRouter.prototype.push = function (location, onComplete = () =>{}, onAbort) {
  return originPush.call(this,location, onComplete, onAbort)
}
// 重写replace方法
VueRouter.prototype.replace = function (location, onComplete, onAbort = () =>{}) {
  return originReplace.call(this,location, onComplete, onAbort)
}


// 向外默认暴露路由器配置对象
export default new VueRouter({
  routes,
  // 配置路由跳转的滚动行为
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }  // 所有路由导航的跳转,页面都滚动到顶部
  }
})