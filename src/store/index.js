// vuex的核心管理对象模块

// 引入Vue模块
import Vue from 'vue'
// 引入vuex插件模块
import Vuex from 'vuex'
// 声明使用vuex插件
Vue.use(Vuex)
// 引入vuex的核心管理对象的属性对象模块
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

// 实例化并暴露vuex的核心管理对象store
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules
})

