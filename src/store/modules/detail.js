// vuex管理的detail数据

// 引入需要的接口请求函数
import {getSqlSkuDetail} from '@/api'

let state = {
  skuDetail: {}  // 商品详情数据
}

let mutations = {
  // 得到数据直接更新商品详情的函数
  RECEIVE_SKU_INFO(state,data){
    state.skuDetail = data
  },
}

let actions = {
  // 向后台发送请求获取商品详情数据
  async getSkuDetail({commit},skuId){
    let result = await getSqlSkuDetail(skuId)
    if (result.code===200) {
      commit('RECEIVE_SKU_INFO',result.data)
    }else{
      alert('获取商品详情出错: ' + result.message)
    }
  }
}

let getters = {
  // 拆分获取的商品详情数据,使读取更加方便
  categoryView(state){
    let categoryView = state.skuDetail.categoryView
    return categoryView ? categoryView : {}
  },
  spuSaleAttrList(state){
    let spuSaleAttrList = state.skuDetail.spuSaleAttrList
    return spuSaleAttrList ? spuSaleAttrList : []
  },
  skuInfo(state){
    let skuInfo = state.skuDetail.skuInfo
    return skuInfo ? skuInfo : {}
  },
  skuImageList(state){
    let skuInfo = state.skuDetail.skuInfo
    return skuInfo ? skuInfo.skuImageList : []
  },
}


export default {
  state,
  mutations,
  actions,
  getters
}
