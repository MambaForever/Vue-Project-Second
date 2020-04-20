// vuex管理的search模块

// 获取发送ajax请求所需的函数
import {postSqlProductList} from '@/api'

let state = {
  productList: {},  // 从后台获取的产品数据
}

let mutations = {
  // 直接更新产品数据的方法
  RECEIVE_PRODUCT_LIST(state,data){
    state.productList = data
  }
}

let actions = {
  // 向后台发送异步请求获取产品数据的方法
  async postProductList({commit},searchParams) {
    // 在这对请求参数进行优化,将值为空串的参数删除再发送请求
    searchParams = { ...searchParams }
    let paramsArr = Object.keys(searchParams)
    paramsArr.forEach(params => {
      if (searchParams[params] === '') {
        delete searchParams[params]
      }
    })
    let result = await postSqlProductList(searchParams)
    if (result.code===200) {
      commit('RECEIVE_PRODUCT_LIST',result.data)
    }
  }
}

let getters = {
  // 从state里拆出所需的数据,使读取更便捷
  trademarkList(state){
    return state.productList.trademarkList || []
  },
  attrsList(state){
    return state.productList.attrsList || []
  },
  goodsList(state){
    return state.productList.goodsList || []
  },
  total(state){
    return state.productList.total || 0
  },
}


export default {
  state,
  actions,
  mutations,
  getters
}