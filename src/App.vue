<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.hasFooter" />
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入子组件
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'

  export default {
    name: 'App',
    // 注册子组件
    components:{
      Header,
      Footer
    },
    // 在生命周期mounted钩子中异步获取所需数据
    mounted(){
      // 调用vuex中的函数异步获取商品三级列表数据
     this.$store.dispatch('getCategoryList')
    },
    
  }
</script>

<style lang="less" scoped>

 
</style>
