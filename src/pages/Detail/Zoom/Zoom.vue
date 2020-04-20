<template>
  <div class="spec-preview">
    <img :src="skuImageList[currentIndex].imgUrl" v-if="skuImageList.length > 0" />
    <!-- 外层透明遮罩 -->
    <div class="mask" @mousemove="zoom"></div>
    <div class="big">
      <img :src="skuImageList[currentIndex].imgUrl" v-if="skuImageList.length > 0" ref="bigImg"/>
    </div>
    <!-- 鼠标移入跟随的小遮罩 -->
    <div class="smallMask" ref="smallMask"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "Zoom",

    data(){
      return {
        currentIndex: 0  // 当前显示图片的下标
      }
    },

    methods: {
      // 鼠标移动实现放大镜效果的回调
      zoom(event){
        // 得到鼠标在移入透明遮罩后相对遮罩的坐标
        let {offsetX,offsetY,target} = event
        // 得到透明遮罩的宽高
        let maskWidth = target.clientWidth
        let maskHeight = target.clientHeight
        // 得到小遮罩的元素节点对象
        let small = this.$refs.smallMask
        // 得到小遮罩的宽高
        let smallWidth = small.clientWidth
        let smallHeight = small.clientHeight
        
        // 根据鼠标相对透明遮罩的坐标计算小遮罩left/top值
        let left = offsetX - smallWidth/2
        let top = offsetY - smallHeight/2
        // 添加小遮罩的left和top临界值
        if (left<0) {
          left = 0
        }else if (left>maskWidth-smallWidth) {
          left = maskWidth-smallWidth
        }
        if (top<0) {
          top = 0
        }else if (top>maskHeight-smallHeight) {
          top = maskHeight-smallHeight
        }
        // 设置小遮罩的left和top值
        small.style.left = left + 'px'
        small.style.top = top + 'px'
        // 得到隐藏大图片的元素节点对象
        let bigImg = this.$refs.bigImg
        // 设置大图片的left和top值
        bigImg.style.left = -2 * left + 'px'
        bigImg.style.top = -2 * top + 'px'
      }
    },

    mounted(){
      // 通过全局事件总线绑定自定义事件监听
      this.$bus.$on('chooseImg',(index) => {
        this.currentIndex = index
      })
    },

    // 配置计算属性
    computed: {
      ...mapGetters(['skuImageList'])
    },

  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;

    img {
      width: 100%;
      height: 100%
    }

    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 888;
    }

    .smallMask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #ccc;
      overflow: hidden;
      z-index: 998;
      display: none;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .mask:hover~.smallMask,
    .mask:hover~.big {
      display: block;
    }
  }
</style>