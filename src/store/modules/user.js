// vuex管理的user模块

// 引入生成用户临时ID的工具函数
import getTempId from '@/utils/storage-uuid'

let state = {
  userTempId: getTempId(),  // 用户临时ID
  userInfo:{}  // 登录的用户信息数据对象
}

let mutations = {}

let actions = {}

let getters = {}


export default {
  state,
  actions,
  mutations,
  getters
}