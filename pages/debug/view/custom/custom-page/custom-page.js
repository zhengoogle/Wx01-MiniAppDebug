// pages/debug/view/custom/custom-page/custom-page.js
/**
 * 组件的方法列表
 * 自定义组件
 * --- https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/
 * --- https://developers.weixin.qq.com/miniprogram/dev/api/wx.nextTick.html
 * blog
 * --- https://www.jianshu.com/p/20a3b9c599bb
 * --- https://www.jianshu.com/p/8a2a730d9e60
 * --- https://blog.csdn.net/u013654125/article/details/80733767
 *
 * 开源组件化框架
 * --- https://github.com/Meituan-Dianping/mpvue
 * --- https://github.com/Tencent/wepy
 * --- https://github.com/NervJS/taro
 * --- https://github.com/didi/mpx
 *
 * 自定义表格
 * --- https://github.com/xiaolin3303/wx-charts
 * --- https://github.com/Small-Years/MiNi_Table_Demo
 * --- https://github.com/antvis/wx-f2
 *
 *
 * 场景
 * ---事件
 * ---传值
 * ---生命周期
 * ---slot用法
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList: [{
      name: '小程序',
      path: '/pages'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.warn('page onLoad')
  },

  /**
   * 调用子组件的方法
   */
  onCallChildMethod () {
    this.data.showList[0].name = '已修改'
    this.setData({})
    this.selectComponent('#customView').onCallViewMethod(this.data.showList)
    // wx.showModal({
    //   title: '提示',
    //   content: JSON.stringify(this.selectComponent('#customView').onCallViewMethod())
    // })
  },

  /**
   * 调用子组件的值
   */
  onGetChildData () {
    this.data.showList[0].name = '已修改'
    this.setData({
      showList: this.data.showList
    })
    wx.showModal({
      title: '提示',
      content: '子组件数据 ' + JSON.stringify(this.selectComponent('#customView').data)
    })
  },

  /**
   * CustomView event
   * --- https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html
   */
  onParentEvent (params) {
    console.log(params)
    wx.showModal({
      title: '提示',
      content: '在父组件显示 ' + JSON.stringify(params)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.warn('page onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.warn('page onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.warn('page onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.warn('page onUnload')
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