<template>
  <div id="searchBookContainer">
    <div class="header">
      <input @confirm="handleConfirm" confirm-type="搜索" v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span  @click="clear"  v-show="searchContent" class="clear">X</span>
    </div>
    <!--证明v-for的优先级高于v-if-->
    <!--<div >-->
      <!--<div v-if="bookTest.data"  v-for="(item, index) in bookTest.data.list" :key="index"></div>-->
    <!--</div>-->
    <BooksList v-if="booksList.length" :booksList="booksList"/>
  </div>
</template>

<script>
  import request from '../../utils/request'
  import BooksList from '../booksList/index.vue'
  export default {
    components: {
      BooksList
    },
    data(){
      return {
        searchContent: '',
        booksList: [],
        bookTest: { // {data: {list: [1,2,3]}}

        }
      }
    },
    methods: {
      clear(){
        // 清空搜索框的内容
        this.searchContent = '';
      },
      async handleConfirm(){
        console.log(this.searchContent);
        // 1. 收集用户输入的内容
        let searchContent = this.searchContent
        // 2. 发送请求给服务器
          // url
        let url = `/searchBooks`
          // 发请求的方法
        let result = await request(url, {req: searchContent});
        this.booksList = result.data
//        wx.request({
//          url,
//          data: {req: searchContent},
//          success: (res) => {
//            this.booksList = res.data.data
//          },
//          fail: () => {
//            console.log('失败了');
//          }
//          // url: 协议(合同) + 域名(服务器的IP地址) + 端口号(80) + 查询字符串(路由路径 + 参数)
//          // http://localhost:3000/searchBooks?req=rea
//          // https://www.baidu.com/
//        })
      }
    },
    mounted(){
      setTimeout(() => {
        this.bookTest = {
          data: {
            list: [1,2,3]
          }
        }
      }, 2000)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchBookContainer
    .header
      position relative
      width 80%
      height 80rpx
      margin 0 auto
      border-bottom 1rpx solid #02a774
      input
        width 100%
        height 100%
        .placeholder
          color #02a774
          text-align center
          font-size 28rpx
      .clear
        position absolute
        bottom 0
        right 20rpx
        font-size 40rpx
        height 100%
        line-height 80rpx
        z-index 99

</style>