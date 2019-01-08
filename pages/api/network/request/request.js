// pages/api/network/request.js
/**
 * wx request
 * ref:
 * ---https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html
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
	onLoad: function(options) {
		console.log('onLoad')
		this.sendGetRequest()
		this.sendPostRequest()
	},

	/**
	 * GET request example
	 */
	sendGetRequest: function() {
		let url = 'https://postman-echo.com/get?test=123'
		wx.request({
			url: url,
			method: 'GET',
			data: {
				"cookie": false
			},
			header: {
				'content-type': 'application/json' // 
			},
			success(res) {
				console.log(res.data)
			}
		})
	},

	/**
	 * POST request example
	 */
	sendPostRequest: function() {
		let url = 'https://postman-echo.com/post'
		wx.request({
			url: url,
			method: 'POST',
			data: {
				"cookie": false
			},
			header: {
				'content-type': 'application/json' // 
			},
			success(res) {
				console.log(res.data)
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
