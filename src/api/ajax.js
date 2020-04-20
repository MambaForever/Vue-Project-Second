// 封装请求后台接口的axios实例

// 引入axios模块
import axios from 'axios'
// 引入nprogress进度条模块和相关样式文件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/* 
对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
5. 所有请求都携带用户临时ID
*/
let instance = axios.create({
  // 1. 配置通用的基础路径和超时
  baseURL:'/api',
  timeout:20000
})

// 设置请求拦截器
instance.interceptors.request.use((config) => {
  NProgress.start()  // 2. 显示请求进度条
  // 5. 所有请求都携带用户临时ID,向请求头中添加用户临时id属性
  config.headers.userTempId = JSON.parse(localStorage.getItem('userTempId'))
  return config
})

// 设置响应拦截器
instance.interceptors.response.use(response => {
  NProgress.done()  // 隐藏请求进度条
  return response.data  // 3. 成功返回的数据不再是response, 而直接是响应体数据response.data
},error => {
  console.log('请求出错: ' + error.message)  // 4. 统一处理请求错误, 具体请求也可以选择处理或不处理
  return new Promise(() => {})  // 中断promise链
})


// 向外暴露封装好的请求后台接口的instance
export default instance