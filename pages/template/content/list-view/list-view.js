// pages/template/content/list-view/list-view.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		showList: { // 属性名
			type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
			value: [], // 属性初始值（可选），如果未指定则会根据类型选择一个
			observer: function(newVal, oldVal) {} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {},

	pageLifetimes: {
		// 组件所在页面的生命周期函数
		show() {
			//console.log(this)
		},
		hide() {},
		resize() {},
	},

	/**
	 * 组件的方法列表
	 * 自定义组件
	 * ---https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/
	 * ---https://developers.weixin.qq.com/miniprogram/dev/api/wx.nextTick.html
	 * blog
	 * ---https://www.jianshu.com/p/8a2a730d9e60
	 * ---https://blog.csdn.net/u013654125/article/details/80733767
	 */
	methods: {
		onLoad() {
			//console.log(this)
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
	}
})
