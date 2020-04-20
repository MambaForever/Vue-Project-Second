<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img,index) in skuImageList" :key="img.id">
        <img :src="img.imgUrl" :class="{active:currentIndex===index}" @click="switchImg(index,img.imgUrl)">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import {mapGetters} from 'vuex'
  export default {
    name: "ImageList",

    data(){
      return {
        currentIndex: 0  // 当前图片的下标
      }
    },

    methods: {
      // 切换图片的回调函数
      switchImg(index){
        this.currentIndex = index
        // 通过全局事件总线向兄弟组件zoom分发自定义事件
        this.$bus.$emit('chooseImg',index)
      }
    },

    // 配置计算属性
    computed: {
      ...mapGetters(['skuImageList'])
    },

    watch: {
      skuImageList: {
        handler(newVal){
          if (newVal.length===0) return
          this.$nextTick(() => {  // 在数据更新并且下一次页面更新后执行$nextTick中的回调
            new Swiper(this.$refs.swiper, {
              slidesPerView: 3, // 一次显示3页
              slidesPerGroup: 2, // 以2页为单位翻页
              navigation: { //指定翻页按钮
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            })
          })
        },
        immediate: true, // 初始化立即调用
      }
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>