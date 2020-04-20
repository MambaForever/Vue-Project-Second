<template>
  <div class="home">
    <!-- 商品分类导航 -->
    <TypeNav/>

    <!--列表-->
    <ListContainer/>

    <!--今日推荐-->
    <TodyRecommend/>

    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
    <Like/>

    <!--楼层-->
    <Floor v-for="floor in floors" :key="floor.id" :floor='floor' />

    <!--商标-->
    <Brand/>

  </div>
</template>

<script type="text/ecmascript-6">
  // 引入vuex中的mapState辅助函数
  import {mapState} from 'vuex'

  // 引入子组件
  import ListContainer from './ListContainer/ListContainer'
  import TodyRecommend from './TodyRecommend/TodyRecommend'
  import Floor from './Floor/Floor'
  import Brand from './Brand/Brand'
  import Like from './Like/Like'
  import Rank from './Rank/Rank'

  export default {
    name: 'Home',
    // 注册子组件
    components:{
      ListContainer,
      TodyRecommend,
      Floor,
      Brand,
      Like,
      Rank
    },

    mounted(){
      // 调用vuex中的actions函数异步获取轮播图数据
      this.$store.dispatch('getBanners')
      // 调用vuex中的actions函数异步获取楼层数据
      this.$store.dispatch('getFloors')
    },

    // 配置计算属性
    computed:{
      // 通过mapState函数获取vuex中所需数据
      ...mapState({
        floors: state => state.home.floors
      })
    }
  }
</script>

<style lang="less" scoped>

  

  
</style>