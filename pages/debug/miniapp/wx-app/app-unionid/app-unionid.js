// pages/debug/miniapp/wx-app/app-unionid/app-unionid.js
/**
 * 小程序开发
 * --- 获取openId/unionId
 * docs
 * 小程序登陆
 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
 * ---1.获取code
 * --- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
 * --- https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
 * ---2.获取code2Session
 * --- https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html
 * --- https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
 * --- {"session_key":"GOpEnjgi08TWyIjstTOmQQ==","openid":"oj2sZ47agXXjtozK6-axi3M9Y7Nk"}
 * ---3.获取UnionID/用户信息(需要绑定到开发者账号)
 * --- https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html
 * --- 解密
 * --- https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95
 * --- https://www.cnblogs.com/cai-rd/p/6816849.html
 * ---构建npm
 * --- https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html
 * --- https://blog.csdn.net/yuanqi3131/article/details/89950687
 * --- npm init
 * --- npm install --save miniprogram-sm-crypto
 * --- https://github.com/wechat-miniprogram/sm-crypto
 * blogs
 * ---NG
 * 
 * usage scene
 * #1.多个公众号、小程序关联
 * 
 * issue
 * #1.NG
 *
 * Router
 * --- "pages/debug/miniapp/wx-app/app-unionid/app-unionid"
 */
// var WXBizDataCrypt = require('./RdWXBizDataCrypt')
// const sm2 = require('miniprogram-sm-crypto').sm2;
// var WXBizDataCrypt = require('RdWXBizDataCrypt.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.wxLogin()
  },
  /**
   * 小程序登陆
   */
  wxLogin() {
    wx.login({
      success(res) {
        console.log(res.code)
      }
    })
    // 查看是否授权
    // button设置请求授权 open-type="getUserInfo"
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       var AppId = 'wx497664c007e32bb8'
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function(res) {
    //           console.log(res)
    //           console.log(res.userInfo)
    //           var pc = new WXBizDataCrypt(AppId,'GOpEnjgi08TWyIjstTOmQQ==')
    //           var data = pc.decryptData(res.encryptedData , res.iv)
    //           console.log('解密后 data: ', data)
    //         }
    //       })
    //     }
    //   }
    // })

    // let keypair = sm2.generateKeyPairHex();
    // publicKey = keypair.publicKey; // 公钥
    // privateKey = keypair.privateKey; // 私钥
    // const cipherMode = 1; // 1 - C1C3C2，0 - C1C2C3，默认为1
    // let encryptData = sm2.doEncrypt('msgString', publicKey, cipherMode); // 加密结果
    // let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode); // 解密结果
    // console.log(decryptData)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
