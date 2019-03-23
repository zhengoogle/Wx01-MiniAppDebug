// pages/api/login/OpenId/OpenId.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 获取小程序openid
	 * docs
	 * 	https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
	 * blog
	 * 	https://blog.csdn.net/qq_27626333/article/details/54614037
	 */
	onLoad: function(options) {
		console.log(this.getOpenId())
	},
	/**
	 * 获取openid
	 */
	getOpenId: function() {
		var that = getApp()
		var user = wx.getStorageSync('user') || {};
		var userInfo = wx.getStorageSync('userInfo') || {};
		if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
			wx.login({
				success: function(res) {
					if (res.code) {
						wx.getUserInfo({
							success: function(res) {
								var objz = {};
								objz.avatarUrl = res.userInfo.avatarUrl;
								objz.nickName = res.userInfo.nickName;
								//console.log(objz);
								wx.setStorageSync('userInfo', objz); //存储userInfo
							}
						});
						var d = that.globalData; //这里存储了appid、secret、token串  
						var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret +
							'&js_code=' + res.code + '&grant_type=authorization_code';
						wx.request({
							url: l,
							data: {},
							method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
							// header: {}, // 设置请求的 header  
							success: function(res) {
								var obj = {};
								obj.openid = res.data.openid;
								obj.expires_in = Date.now() + res.data.expires_in;
								//console.log(obj);
								wx.setStorageSync('user', obj); //存储openid  
							}
						});
					} else {
						console.log('获取用户登录态失败！' + res.errMsg)
					}
				}
			});
		}
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
