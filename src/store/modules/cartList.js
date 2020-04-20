// vuex管理的购物车模块

// 引入所需的接口请求函数
import {getSqlCartList} from '@/api'

let state = {
  cartList:[]  // 获取的购物车列表数据
}

let mutations = {
  // 得到数据后直接更新购物车列表的函数
  RECEIVE_CART_LIST(state,data){
    state.cartList = data
  },

}

let actions = {
  // 异步获取购物车列表数据的请求函数
  async getCartList({commit}){
    let result = await getSqlCartList()
    if (result.code===200) {
      commit('RECEIVE_CART_LIST',result.data)
    }else{
      throw new Error('获取购物车列表失败')
    }
  },

}

let getters = {}


export default {
  state,
  actions,
  mutations,
  getters
}
