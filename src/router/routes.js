// 引入路由子组件
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import Search from '@/pages/Search/Search'
import Detail from '@/pages/Detail/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess/AddCartSuccess'
import ShopCart from '@/pages/ShopCart/ShopCart'


export default [
  {
    path:'/',
    component:Home
  },
  {
    name:'search',
    path:'/search/:keyword?',
    component:Search,
    
  },
  {
    path:'/register',
    component:Register,
    meta:{hasFooter:true}
  },
  {
    path:'/login',
    component:Login,
    meta:{hasFooter:true}
  },
  {
    name: 'detail',
    path:'/detail/:skuId',
    component: Detail,
    // 将params参数映射为props
    props: route => ({skuId: route.params.skuId})
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    // 将query参数映射为props
    props: route => ({skuId: route.query.skuId,skuNum:route.query.skuNum})
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
]