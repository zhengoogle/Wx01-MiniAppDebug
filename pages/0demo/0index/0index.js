// pages/0demo/0index/0index.js
/**
 * 小程序工程模板参考页面
 * API dev@2019.08.07
 * TODO 一级卡片/二级卡片设计
 *
 View scroll
 两个View scroll嵌套事件穿透问题
 @设置上层绑定catchtouchmove事件
 页面滚动事件
 @onPageScroll/onReachBottom
 原生ScrollView与下拉共存问题

 组件模板
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singleList: [{
      name: '1.wx动态绑定样式',
      path: '/pages/0demo/0demo/0demo'
    },{
      name: '2.小程序ScrollView',
      path: '/pages'
    },{
      name: '3.小程序模板组件',
      path: '/pages'
    }]
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