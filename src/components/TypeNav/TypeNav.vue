<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="isFirstShow">
        <h2 class="all" @mouseenter="firstListHide = false">全部商品分类</h2>
        <transition name="gradient">
          <div class="sort" @click="toSearch" v-show="!firstListHide">
            <div class="all-sort-list2">
              <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId"
                :class="{item_on:currentIndex === index}" @mouseenter="switchItem(index)">
                <h3>
                  <a href="javascript:;" :data-categoryName='c1.categoryName' :data-category1Id='c1.categoryId'>
                    {{c1.categoryName}}
                  </a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <a href="javascript:;" :data-categoryName='c2.categoryName' :data-category2Id='c2.categoryId'>
                          {{c2.categoryName}}
                        </a>
                      </dt>
                      <dd>
                        <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                          <a href="javascript:;" :data-categoryName='c3.categoryName' :data-category3Id='c3.categoryId'>
                            {{c3.categoryName}}
                          </a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入vuex中的mapState辅助函数
  import {
    mapState
  } from 'vuex'
  // 按需引入loadsh工具模块
  import throttle from 'lodash/throttle' // 引入函数节流工具

  export default {

    name: 'TypeNav',

    data() {
      return {
        currentIndex: -1, // 标识当前鼠标移入一级列表项的下标
        firstListHide: false // 控制商品一级列表是否显示
      }
    },

    mounted() {
      // 判断当前路径是否是'/'
      if (this.$route.path !== '/') {
        this.firstListHide = true
        this.currentIndex = -1
        // this.isFirstShow()
      }
    },

    // 配置计算属性
    computed: {
      // 通过mapState函数获取vuex管理的所需数据
      ...mapState({
        categoryList: state => state.home.categoryList // 商品三级列表数据
      })
    },

    methods: {
      // 通过事件委派为商品名称绑定点击事件监听
      // ?categoryName=图书、音像、电子书刊&category1Id=1
      toSearch(event) {
        console.log(event)
        let {
          categoryname,
          category1id,
          category2id,
          category3id
        } = event.target.dataset
        if (categoryname) {
          let query = {
            categoryName: categoryname
          }
          if (category1id) {
            query.category1Id = category1id
          } else if (category2id) {
            query.category2Id = category2id
          } else if (category3id) {
            query.category3Id = category3id
          }
          // 如果当前是在search页面,同时携带params和query参数
          if (this.$route.path.indexOf('/search') === 0) {
            this.$router.replace({
              path: this.$route.path,
              query
            })
          } else {
            // 跳转到search路由组件
            this.$router.push({
              path: '/search',
              query
            })
          }
        }
        this.firstListHide = true
      },

      // 鼠标移出隐藏商品列表的回调
      isFirstShow() {
        // if (this.$route.path.indexOf('/search')!==-1) {
        if (this.$route.path !== '/') {
          this.firstListHide = true
        }
        setTimeout(() => {
          this.currentIndex = -1
        }, 131);
      },

      // 用throttle工具创建节流函数
      switchItem: throttle(function (index) {
        this.currentIndex = index
      }, 130)

    },

    // watch: {
    //   // 判断当前路径是否是'/'
    //   'route'(newRoute){
    //     if (this.$route.path !== '/') {
    //       this.firstListHide = true
    //       // this.currentIndex = -1
    //     }
    //   }
    // }
  }
</script>

<style lang="less" scoped>
  .type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }

      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }

      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;
        &.gradient-enter,&.gradient-leave-to {
          opacity: 0;
          height: 0;
        }
        &.gradient-enter-active,&.gradient-leave-active {
          transition: all .5s;
        }
        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;

              a {
                color: #333;
              }
            }

            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              _height: 200px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;

              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;

                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;

                  &.fore {
                    border-top: 0;
                  }

                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }

                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;

                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }

            &.item_on {
              background: #ccc;

              .item-list {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>