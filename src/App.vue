<script>
  import request from './utils/request'
  export default {
    mounted(){
      wx.login({
        success: async (msg) => {
          console.log(msg);
          let code = msg.code;
          let url = '/getOpenId'
          let result = await request(url, {code});
          // 获取openId存入storage
          if(result){
            wx.setStorageSync('openId', result)
          }
//          wx.request({
//            url: 'http://localhost:3000/getOpenId',
//            data: {code},
//            success: (res) => {
//              console.log(res);
//              // 缓存openId
//              wx.setStorageSync('openId', res.data)
//            }
//          })
        }
      });
    }
  }
</script>





<style lang="stylus" rel="stylesheet/stylus" >
  page
    width 100%
    height 100%

</style>