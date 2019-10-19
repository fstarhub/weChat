<template>
  <div id="personalContainer">
    <div class="header">
      <img class="avatar" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo" class="userName">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
    <button @click="scan">扫码看书</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        userInfo: {}
      }
    },
    methods: {
      handleGetUserInfo(info){
        if(info.mp.detail.rawData){
          this.userInfo = JSON.parse(info.mp.detail.rawData)
        }
      },
      scan(){
        wx.scanCode({
          success: (msg) => {
            console.log(msg);
          }
        })
      }
    },
    mounted(){
      wx.getUserInfo({
        success: (info) => {
          console.log(info);
          this.userInfo = info.userInfo
        },
        fail: () => {
          console.log('获取失败');
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      padding 40rpx
      background #02a774
      .avatar
        width 100rpx
        height 100rpx
        vertical-align middle
        margin 0 40rpx
        border-radius 50%
      .userName
        display inline-block
        height 60rpx
        vertical-align middle
        text-align center
        line-height 60rpx
        background rgba(255,255,255, 0.5)
</style>