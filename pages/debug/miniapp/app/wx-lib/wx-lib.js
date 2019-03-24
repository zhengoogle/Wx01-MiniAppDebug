// pages/debug/miniapp/app/wx-lib/wx-lib.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 微信小程序基础库
	 * 1.微信开发者工具调试基础库版本
	 * ---微信官方开发工具基础库版本仅与模拟器有关，与移动APP版本无关？
	 * 2.
	 * ref:
	 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/
	 * ---兼容处理
	 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html
	 * ---基础库版本与客户端版本对应关系
	 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/client.html
	 * ---用户百分比
	 * ---基础库2.4.4版本及以上用户约95%-2019.03.24
	 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html
	 */
	onLoad: function(options) {
		// 获取系统信息
		// version 微信版本号
		wx.getSystemInfo({
			success(res) {
				console.log(res)
			}
		})
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
