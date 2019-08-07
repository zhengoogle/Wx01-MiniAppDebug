// pages/content/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showList: [{
			name: '小程序API',
			path: '/pages/debug/api/0api/0api'
		}, {
			name: '小程序框架',
			path: '/pages/debug/miniapp/0miniapp/0miniapp'
		}, {
			name: '小程序组件',
			path: '/pages/debug/view/0view/0view'
		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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
	 * 不允许分享需要删除！！！
	 */
	onShareAppMessage: function () {

	}
})
