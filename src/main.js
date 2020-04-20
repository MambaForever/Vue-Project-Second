// 引入Vue模块
import Vue from 'vue'

// 引入子组件
import App from './App'
import TypeNav from './components/TypeNav/TypeNav.vue'
import Banner from './components/Banner/Banner.vue'
import Pagination from './components/Pagination/Pagination.vue'

// 引入路由配置组件
import router from './router'
// 引入vuex核心管理对象
import store from './store'
// 引入包含所有接口请求函数的模块,保存在对象中
import * as api from './api'
// 将api对象添加到Vue的原型对象上,使所有子组件及路由组件都可见
Vue.prototype.$api = api
// 加载swiper的相关样式文件
import 'swiper/css/swiper.min.css'
// 加载按需引入的element-ui文件
import './element'

// 加载自定义mock接口模块,确保执行一次
import './mock'


// 注册全局组件
Vue.component('TypeNav',TypeNav)
Vue.component('Banner',Banner)
Vue.component('Pagination',Pagination)


new Vue({
  beforeCreate(){
    // 在生命周期beforeCreate钩子中将当前vm设置为全局事件总线对象
    Vue.prototype.$bus = this
  },
  el:'#app',
  render: h=>h(App),
  router,  // 注册路由器
  store,  // 配置vux核心管理对象store
})
