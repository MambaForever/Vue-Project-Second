// 封装向mock接口发送请求的axios实例
// 引入axios模块
import axios from 'axios'
// 引入nprogress进度条模块和相关样式文件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let instanceMock = axios.create({
  baseURL: '/mock',
  timeout: 20000
})

// 设置请求拦截器
instanceMock.interceptors.request.use((config) => {
  NProgress.start()  // 2. 显示请求进度条
  return config
})

// 设置响应拦截器
instanceMock.interceptors.response.use(response => {
  NProgress.done()  // 隐藏请求进度条
  return response.data  // 3. 成功返回的数据不再是response, 而直接是响应体数据response.data
},error => {
  console.log('请求出错: ' + error.message)  // 4. 统一处理请求错误, 具体请求也可以选择处理或不处理
  return new Promise(() => {})  // 中断promise链
})


// 向外暴露封装好的请求mock接口的instance
export default instanceMock
