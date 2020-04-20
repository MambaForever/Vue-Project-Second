// 封装发送异步ajax请求的函数模块

// 引入请求后台接口的axios实例
import instance from './ajax'
// 引入请求mock接口的axios实例
import instanceMock from './ajax-mock'

// 从后台获取首页商品三级列表数据的请求
let getSqlCategoryList = () => instance.get('product/getBaseCategoryList')
// 向后台发送post登录请求
let postSqlLogin = ({mobile,password}) => instance.post('user/passport/login',{mobile,password})
// 向后台发送post请求获取搜索产品的数据
let postSqlProductList = (searchParams = {}) => instance.post('list',searchParams)
// 向后台发送获取商品详情的请求
let getSqlSkuDetail = skuId => instance.get('item/'+skuId)
// 向后台发送添加商品到购物车的请求
let postSqlAddCart = ({skuId,skuNum}) => instance.post(`cart/addToCart/${skuId}/${skuNum}`)
// 向后台发送获取购物车列表的请求
let getSqlCartList = () => instance.get('cart/cartList')


// 向mock接口发送请求获取轮播图数据
let getMockBanners = () => instanceMock.get('banners')
// 向mock接口发送请求获取楼层数据
let getMockFloors = () => instanceMock.get('floors')


// 统一暴露请求函数
export {getSqlCategoryList,postSqlLogin,getMockBanners,getMockFloors,postSqlProductList,getSqlSkuDetail,
    postSqlAddCart,getSqlCartList}