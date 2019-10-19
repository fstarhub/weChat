import config from './config'
export default function (url, data, method='GET') {
  
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        console.log(res.data);
        resolve(res.data);
      },
      fail: (error) => {
        resolve(false);
      }
    })
  })
  
}