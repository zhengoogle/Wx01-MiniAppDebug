// pages/debug/publicNo/get-unionid/get-unionid.js
/**
 * 公众号开发
 * --- 获取unionId
 * docs
 * 方案1
 * ---1.获取access_token
 * --- https://developers.weixin.qq.com/doc/offiaccount/WeChat_Invoice/Nontax_Bill/API_list.html#1.1%20%E8%8E%B7%E5%8F%96access_token
 * --- https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
 * ---2.获取关注用户openid列表
 * --- https://developers.weixin.qq.com/doc/offiaccount/User_Management/Getting_a_User_List.html
 * --- https://api.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&next_openid=NEXT_OPENID
 * ---3.获取UnionID/用户信息(需要绑定到开发者账号)
 * --- https://developers.weixin.qq.com/doc/offiaccount/User_Management/Get_users_basic_information_UnionID.html#UinonId
 * --- https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
 * 方案2
 * ---通过网页授权方式
 * --- https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html
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
 * --- "pages/debug/publicNo/get-unionid/get-unionid"
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})