// pages/debug/miniapp/wx-cmd/wx-for/wx-for.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		arrList0: [{
			name: 'user 001',
		}, {
			name: 'user 002',
		}],
		arrList1: [{
			name: 'user 003',
		}, {
			name: 'user 004',
		}],
		arrList2: [{
			id: '1',
			name: 'user 007',
		}, {
			id: '3',
			name: 'user 008',
		}, {
			id: '2',
			name: 'user 009',
		}],
	},

	/**
	 * 生命周期函数--监听页面加载
	 * 使用方式
	 * 1.默认方式
	 * ---wx:for="{{array}}"
	 * ---默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item
	 * 2.自定义方式
	 * ---wx:for-index="idx" wx:for-item="itemName"
	 * ---使用 wx:for-item 可以指定数组当前元素的变量名，使用 wx:for-index 可以指定数组当前下标的变量名
	 * ---使用 wx:key指定列表中项目的唯一的标识符，可以提高性能
	 * 3.wx:key?
	 * ---如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态
	 * ---如不提供 wx:key，会报一个 warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。
	 * 
	 * 总结：
	 * #1.列表渲染小程序与VUE数据访问，小程序数据访问都用{{}}，VUE则值使用{{}}，属性使用""；
	 * #2.指定item、index方式不同，小程序使用wx:for-item/wx:for-index单独指定，VUE使用v-for="(item,index) in items"
	 * docs:
	 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/list.html
	 */
	onLoad: function(options) {

	},
	
	/**
	 * 获取wx:for列表item点击id
	 */
	onItemClick(res){
		console.log(res)
		console.log('currentTarget ' + res.currentTarget.id)
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
