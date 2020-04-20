// 操作storage数据的工具模块

// 引入uuidjs模块
import UUID from 'uuidjs'

export default  function () {
  let userTempId = localStorage.getItem('userTempId')
  if (!userTempId) {  // 判断localStorage中是否有用户临时ID
    userTempId = UUID.generate()  // 没有就创建并添加到localStorage中
    localStorage.setItem('userTempId',userTempId)
  }
  return userTempId
}



