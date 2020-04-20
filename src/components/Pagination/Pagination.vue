<template>
  <!--分页组件-->
  <div class="pagination">
    <!--上一页-->
    <button :disabled='currentPage===1' @click="switchPage(currentPage-1)">上一页</button>
    <!-- 第1页 -->
    <button v-if="start>1" @click="switchPage(1)" >1</button>
    <!-- 省略号 -->
    <button disabled v-if="start>2">···</button>
      <!-- 连续页码 -->
    <button :class="{active:currentPage===item}" v-for="item in end" :key="item"
     v-if="item>=start" @click="switchPage(item)"
     >{{item}}</button>

    <!-- 省略号 -->
    <button disabled v-if="end<totalPage-1">···</button>
    <!-- 最后一页 -->
    <button v-if="end<totalPage" @click="switchPage(totalPage)">{{totalPage}}</button>
    <!--下一页-->
    <button :disabled='currentPage===totalPage' @click="switchPage(currentPage+1)">下一页</button>
    <!-- 总记录数 -->
    <button disabled style="margin-left: 30px">共 {{pageConfig.total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",

    data(){
      return {
        currentPage: this.pageConfig.pageNo
      }
    },

    // 声明接收属性
    props:{
      // 从search父组件接收的分页参数
      pageConfig:{
        type: Object,
        default: {
          pageNo: 1,  // 当前第几页
          pageSize: 5,  // 每页最多显示多少条数据
          showPage: 3,   // 连续显示页数
          total: 0  // 数据总数
        }
      },
      switchPage:{
        type: Function
      }
    },


    // 配置计算属性
    computed:{
      // 计算总页数的函数
      totalPage(){
        // 得到计算所需数据
        let {total,pageSize} = this.pageConfig
        return Math.ceil(total/pageSize)
      },

      // 计算连续页码的开始和结束函数
      startEnd(){
        // 得到计算所需数据
        let {totalPage,pageConfig:{showPage,pageNo}} = this
        let half = Math.floor(showPage/2)
        let start = pageNo - half
        if (start<1) start = 1
        let end = start + showPage - 1
        if (end>totalPage) {
          end = totalPage
          start = end - showPage
          if (start<1) start = 1
        }
        return {start,end}
      },

      // 提取连续页码的开始结束页码
      start(){
        return this.startEnd.start
      },
      end(){
        return this.startEnd.end
      },
    },

    // 配置监视属性
    watch:{
      // 监视当前动态页码是否发生变化,如发生变化则修改对应当前页码
      'pageConfig.pageNo' (newVal){
        this.currentPage = newVal
      }
    },
  }
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline:none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>