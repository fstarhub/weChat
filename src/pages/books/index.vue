<template>
  <div id="booksContainer">
    <swiper indicator-dots indicator-color="green" indicator-active-color="pink">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <div class="listContainer">
      <div class="list_header">
        <span>全部商品</span>
        <span @click="toBooksList" class="more"> > </span>
      </div>
      <ul class="booksList">
        <li v-for="(item, index) in booksArr" :key="index" class="booksItem">
          <img :src="item.image" alt="">
          <p>《{{item.title}}》</p>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import datas from './datas/data.json'
  console.log(typeof datas); // string, number boolean undefined object function symbol
  export default {
    data(){
      return {
        booksArr: []
      }
    },
    mounted(){
      // 更新状态数据
      this.booksArr = datas
    },
    methods: {
      toBooksList(){
        wx.navigateTo({
          url: '/pages/booksList/main?booksList=' + JSON.stringify(this.booksArr)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #booksContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .listContainer
      .list_header
        padding 10rpx
        .more
          float right
      .booksList
        display flex
        flex-wrap wrap
        .booksItem
          width 50%
          display flex
          flex-direction column
          align-items center
          padding 10rpx 0;
          border-bottom 1rpx solid #eee
          &:nth-child(2n + 1)
            border-right 1rpx solid #eee
            box-sizing border-box
          img
            width 200rpx
            height 200rpx
          p
            line-height 50rpx
            font-size 30rpx
</style>