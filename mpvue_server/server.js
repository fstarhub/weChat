let Koa = require('koa');
let KoaRouter = require('koa-router');
let axios = require('axios');


// 创建应用的实例
const app = new Koa();
// 创建路由器
const router = new KoaRouter();

// 注册路由
router.get('/', (ctx, next) => {
  // 1. 接收请求参数
  
  // 2. 处理请求数据
  let msg = '服务器返回的数据11111';
  
  // 3. 返回响应数据
  ctx.body = msg;
});


// 搜索图书的接口
let datas = require('./datas/data.json');
router.get('/searchBooks', (ctx, next) => {
  // 接收请求参数
  let req = ctx.query.req;
  console.log(req, typeof req);
  if(req){
    // 返回数据
    ctx.body = {
      status: 'ok',
      data: datas
      
    }
  }else {
    ctx.body = {
      status: 'invalid key',
      data: []
    }
  }
 
});

// 获取用户openId的接口
router.get('/getOpenId',  async (ctx, next) => {
  
  // 1. 获取code参数
  let code = ctx.query.code;
  let appId = 'wx810e8b1fde386fde'
  let appSecret = 'e13bb2f5b665d3b4f6daa6e8391c0323';
  
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  let result = await axios.get(url)
  console.log(result.data);
  ctx.body = result.data.openid;
  
});

// 声明使用路由器
app
  .use(router.routes())
  .use(router.allowedMethods());


// 监听端口号
app.listen('3000', () => {
  console.log('服务器开启成功');
  console.log('服务器地址: http://localhost:3000');
})