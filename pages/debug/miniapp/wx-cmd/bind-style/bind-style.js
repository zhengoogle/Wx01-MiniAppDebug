// pages/debug/miniapp/wx-cmd/bind-style/bind-style.js
/**
 * 小程序动态绑定样式方式
 * 小程序动态设置样式两种方式
 * --- https://blog.csdn.net/Alex81320/article/details/83589200
 * --- style="display:{{displayPhoto}}"
 * --- class="operBtn {{select==1?'activeClass':''}}" bindtap='selectBtn' data-num="1"
 *
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    styleFontColor: '#1fb9ae', // 动态颜色设置-style
    classFontColor: '#88eeae' // 动态颜色设置-class
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 1.样式动态绑定-style
   */
  onStyleTvClick () {
    let color
    if (this.data.styleFontColor === 'blue') {
      color = 'red'
    } else {
      color = 'blue'
    }
    this.setData({
      styleFontColor: color
    })
  },
  /**
   * 2.样式动态绑定-class
   */
  onClazzTvClick(){
    let color
    if (this.data.classFontColor === 'blue') {
      color = 'red'
    } else {
      color = 'blue'
    }
    this.setData({
      classFontColor: color
    })
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