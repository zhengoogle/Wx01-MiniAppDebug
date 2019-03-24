// pages/debug/miniapp/app/0app/0app.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showList: [{
			name: '小程序基础库 lib',
			path: '/pages/debug/miniapp/app/wx-lib/wx-lib'
		},{
			name: '小程序限制 limit',
			path: '/pages/debug/miniapp/app/wx-limit/wx-limit'
		},{
			name: '小程序打包 pkg',
			path: '/pages/debug/miniapp/app/wx-pkg/wx-pkg'
		}, ]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * Item事件点击处理
	 */
	onItemClick(res) {
		console.log(res.currentTarget.id)
		let curIndex = res.currentTarget.id
		wx.navigateTo({
			url: this.data.showList[curIndex].path
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
