<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id"><img :src="banner.imgUrl"></div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入swiper模块
  import Swiper from 'swiper'

  export default {
    name: 'banner',

    // 声明接收属性
    props:['banners'],

    // mounted() {
    //   // 挂载后配置swiper
    //   new Swiper('.swiper-container', {
    //     loop: true, // 循环模式选项

    //     // 如果需要分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },

    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },

    //     // 如果需要滚动条
    //     // scrollbar: {
    //     //   el: '.swiper-scrollbar',
    //     // },
    //   })
    // },

    // 配置监视属性
    watch:{
      banners: {
        handler(){
          // 用 vm.$nextTick() 方法将监视回调延迟到界面异步更新后执行
          this.$nextTick(()=>{
            new Swiper('.swiper-container', {
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            })
          })
        },
        // 在初始显示时就立即执行一次, 默认是false(只有数据改变才立即执行)
        immediate: true
      },

    },

  }
</script>

<style lang="less" scoped>

 
</style>
