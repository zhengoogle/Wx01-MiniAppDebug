// pages/debug/view/layout/pull-down/pull-down.js
/**
 * 小程序下拉刷新
 * --- https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html
 * --- https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html
 *
 * 使用场景
 * 1.NG
 *
 * issue
 * #1.scroll-view外层使用fixed布局无法下拉刷新；
 * #2.onPageScroll/onScroll优先级？
 *
 * Router
 * --- "/pages/debug/view/layout/pull-down/pull-down"
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
    // 调用后触发下拉刷新动画
    wx.startPullDownRefresh()
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
    console.log('onPullDownRefresh')
    // 停止当前页面下拉刷新
    wx.stopPullDownRefresh()
  },

  onPageScroll(params){
    console.log('onPageScroll')
    console.log(params)
  },

  onScroll(params){
    console.log('onScroll')
    console.log(params)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})