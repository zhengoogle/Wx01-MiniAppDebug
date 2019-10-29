// pages/debug/frame/nav-bar/nav-bar.js
/**
 * 小程序@框架/自定义导航栏(返回/Home)
 * ---lingxiaoyi/navigation-bar
 * ---示例完善、机型测试充分、设计合理
 * --- https://github.com/lingxiaoyi/navigation-bar
 * ---chen-yt/wx_custom_navigation_bar
 * --- https://github.com/chen-yt/wx_custom_navigation_bar
 *
 * 使用场景
 * 1.NG
 *
 * issue
 * #1.NG
 *
 * Router
 * --- "/pages/0demo/0demo/0demo"
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
   * Back
   * @param {*} delta 
   */
  handlerGobackClick(delta) {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: delta
      });
    } else {
      wx.navigateTo({
        url: '/pages/index/index'
      });
    }
  },
  /**
   * Home
   */
  handlerGohomeClick() {
    wx.navigateTo({
      url: '/pages/index/index'
    });
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