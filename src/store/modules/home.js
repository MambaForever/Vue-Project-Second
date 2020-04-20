// vuex管理的home模块

// 引入对应ajax请求函数
import {getSqlCategoryList,getMockBanners,getMockFloors} from '@/api'


let state = {
  categoryList: [],  // 商品三级列表数据
  banners: [],  // 轮播图数据
  floors: []  // 楼层数据
}

let mutations = {
  // 直接更新商品三级列表数据的函数
  RECEIVE_LIST(state,data){
    state.categoryList = data
  },
  // 直接更新轮播图数据的函数
  RECEIVE_BANNERS(state,data){
    state.banners = data
  },
  // 直接更新轮播图数据的函数
  RECEIVE_FLOORS(state,data){
    state.floors = data
  },
}

let actions = {
  // 向后台发送异步获取商品三级列表数据请求的函数
  async getCategoryList({commit}){
    let result = await getSqlCategoryList()
    if (result.code === 200) {
      let data = result.data.slice(0,-2)
      commit('RECEIVE_LIST',data)
    }
  },


  // 向mock接口发送异步获取轮播图数据请求的函数
  async getBanners({commit}) {
    let result = await getMockBanners()
    if (result.code===200) {
      commit('RECEIVE_BANNERS',result.data)
    }
  },
  // 向mock接口发送异步获取楼层数据请求的函数
  async getFloors({commit}) {
    let result = await getMockFloors()
    if (result.code===200) {
      commit('RECEIVE_FLOORS',result.data)
    }
  },
}

let getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}