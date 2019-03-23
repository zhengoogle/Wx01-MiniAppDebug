// pages/api/router/JumpWxApp/JumpWxApp.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 打开另一个小程序
	 * docs
	 * https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html?search-key=navigate
	 * !!!限制
	 * 	1.每个小程序可跳转的其他小程序数量限制为不超过 10 个
	 * 	2.在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序
	 */
	onLoad: function(options) {
		wx.navigateToMiniProgram({
			appId: '',
			path: 'page/index/index?id=123',
			extraData: {
				foo: 'bar'
			},
			envVersion: 'develop',
			success(res) {
				// 打开成功
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
