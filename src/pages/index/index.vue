<template>
  <div id="indexContainer">
    <swiper @change="handleChange" :indicator-dots="index !== 3" indicator-color="green" indicator-active-color="pink">
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
    <button @click="toBooks" v-show="index === 3" class="btn">开始体验</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        index: 0
      }
    },
    methods: {
      handleChange(event){
        this.index = event.mp.detail.current
      },
      toBooks(){
        wx.switchTab({
          url: '/pages/books/main'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #indexContainer
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      position absolute
      left 50%
      margin-left -140rpx
      bottom 20rpx
      width 280rpx
      height 60rpx
      background rgba(255,255,255, 0.5)
      text-align center
      line-height 60rpx

</style>