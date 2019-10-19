<template>
    <ul id="booksListContainer" >
      <li class="bookItem" v-for="(item, index) in booksList" :key="index">
        <img class="bookImg" :src="item.image" alt="">
        <div class="bookInfo">
          <p>{{item.title}}</p>
          <p>{{item.author}}</p>
          <p>出版社: {{item.publisher}}</p>
        </div>
        <p class="bookPrice">{{item.price}}</p>
      </li>
    </ul>
</template>

<script>
  export default {
    data(){
      return {
        booksList: []
      }
    },
    props: ['booksList'],
    // mpvue支持： Vue和原生小程序的生命周期函数，但是尽量不要使用小程序的生命周期函数
    mounted(){
      console.log('mounted');
      console.log(this);
      if(this.$mp){
        this.booksList = JSON.parse(this.$mp.query.booksList)
      }
    },
//    onLoad(options){
//      console.log('onLoad');
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #booksListContainer
    .bookItem
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      .bookImg
        width 140rpx
        height 140rpx
      .bookInfo
        margin-left 10rpx
        font-size 30rpx
        line-height 50rpx
        width 70%
      .bookPrice
        font-size 32rpx
        color red
        font-weight bold

</style>