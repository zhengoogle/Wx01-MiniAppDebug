// pages/debug/view/layout/scroll-view/scroll-view.js
/**
 * 小程序组件
 * --- scroll-view
 * docs
 * --- https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html
 * blogs
 * ---NG
 * 
 * usage scene
 * #1.滚动到指定位置
 * ---固定距离
 * ---某一组件
 * #2.滚动条隐藏
 * #3.获取组件高度
 * #4.滚动事件
 * #5.禁止滚动
 *
 *
 * ScrollView
 * ---2种实现方式
 * ---使用小程序scroll-view组件
 * ---普通view + scroll属性
 *
 * 使用场景
 * 单Scroll组件场景，Scroll嵌套Scroll场景
 * ---1.scroll-view
 * ---事件：
 * ---@scroll-x/scroll-y: 允许滚动
 * ---@bindscrolltoupper: 滚动到顶部/左边时触发
 * ---@bindscrolltolower: 滚动到底部/右边时触发
 * ---@bindscroll: 滚动时触发
 * ---@scroll-top/left: 设置滚动条位置
 * ---@scroll-into-view: 滚动到该元素，值应为某子元素id
 * ---
 * ---2.view
 * --- @onPageScroll: 页面滚动
 * --- @onReachBottom: 页面滚动到底部
 * ---
 * ---3.scroll-view + scroll-view
 * ---4.view + view
 * ---5.scroll-view + view
 *
 * issue
 * #1.scroll-view外层使用fixed布局无法下拉刷新；
 * #2.外层使用fixed布局，走scroll-view滚动事件，否则执行page滚动事件；
 * #3.两个View scroll嵌套事件穿透问题？？？组件场景
 * ---@设置上层绑定catchtouchmove事件
 *
 * Router
 * --- "/pages/debug/view/layout/scroll-view/scroll-view"
 */
let _self
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollEvent: 4, // 0(scroll-view)/1(view)
        scrollTop: 10,
        scrollY: true // #5.禁止滚动
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        _self = this
        // #1.滚动到指定位置
        setTimeout(item => {
            console.warn('scroll...')
            // 某一组件
            // this.setData({
            //     toView: 'svElm1'
            // })
            //固定距离 
            this.setData({
                scrollTop: 325,
                // scrollY: false
            })
        }, 3000)
        // #3.计算组件高度
        _self.getElementHeight({
            id: '#svRoot'
        })
        _self.getElementHeight({
            id: '#svScroll'
        })
        _self.getElementHeight({
            id: '#svElm1'
        })
    },
    /**
     * #4.滚动事件
     * @param {Object} e
     */
    upperScroll: function(e) { // 滚动到顶部/左边时触发
        console.log('upperScroll')
        console.log(e)
    },
    lowerScroll: function(e) { // 滚动到底部/右边时触发
        console.log('lowerScroll')
        console.log(e)
    },
    onScroll: function(e) { // 滚动时触发
        console.log('onScroll')
        console.log(e)
    },
    onPageScroll(params){
        console.log('onPageScroll')
        console.log(params)
    },
    /**
     * 获取组件高度
     */
    getElementHeight(params) {
        // #3.计算组件高度
        // https://www.cnblogs.com/rachelch/p/9178998.html
        // 创建节点选择器
        var query = wx.createSelectorQuery();
        // 选择id
        query.select(params.id).boundingClientRect()
        query.exec(function(res) {
            // res就是 所有标签为myText的元素的信息 的数组
            console.log(res);
            // 取高度
            console.log(params.id + ' ' + res[0].height + 'px');
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
        console.log('onPullDownRefresh')
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        console.log('onReachBottom')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
