// 定义mock接口的模块

// 引入mockjs模块
import Mock from 'mockjs'

// 引入模拟返回的数据
import banners from './banners.json'
import floors from './floors.json'


// 定义mock的banners和floors接口
Mock.mock('/mock/banners',{code:200,data:banners})
Mock.mock('/mock/floors',{code:200,data:floors})

// 定义的mock接口不需要向外暴露,但需要确保执行一次才能调用
// 测试有没有执行
console.log('mock执行了')