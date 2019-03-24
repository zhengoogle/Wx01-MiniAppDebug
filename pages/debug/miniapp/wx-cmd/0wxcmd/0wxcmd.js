// pages/debug/miniapp/wx-cmd/0wxcmd/0wxcmd.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showList: [{
			name: 'wx:for循环指令',
			path: '/pages/debug/miniapp/wx-cmd/wx-for/wx-for'
		},]
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
