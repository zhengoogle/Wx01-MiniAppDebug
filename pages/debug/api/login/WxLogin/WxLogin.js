// pages/api/login/WxLogin/WxLogin.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * wx.login
	 * descrip:获取小程序临时登陆凭证，用于获取小程序openid
	 * docs
	 * https://developers.weixin.qq.com/miniprogram/dev/api/wx.login.html?search-key=login
	 */
	onLoad: function(options) {
		wx.login({
			success(res) {
				console.log(res)
				if (res.code) {
					// 发起网络请求
					wx.request({
						url: 'https://www.baidu.com',
						data: {
							code: res.code
						}
					})
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			},fail(res) {
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
