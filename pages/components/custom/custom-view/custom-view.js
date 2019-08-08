// pages/components/custom/custom-page/custom-page.js
Component({
  options:{
    multipleSlots: true //在组件定义时的选项中启用多slot支持
    ,addGlobalClass: true,//使组件接受全局样式,尽量避免
  },
  /**
   * 组件的属性列表
   */
  properties: {
    showList: { // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: [], // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) {
      } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 生命周期
   * --- https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html
   */
  created(){
    console.warn('view created')
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached(){
    console.warn('view attached')
  },
  ready(){
    console.warn('view ready')
  },
  moved(){
    console.warn('view moved')
  },
  // 在组件实例被从页面节点树移除时执行
  detached(){
    console.warn('view detached')
  },
  error(){
    console.warn('view error')
  },
  pageLifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    // 组件所在页面的生命周期函数
    show () {
      //console.log(this)
    },
    hide () {
    },
    resize () {
    },
  },
  methods: {
    onLoad () {
      //console.log(this)
    },
    /**
     * 调用组件方法
     */
    onCallViewMethod(params){
      console.log(params)
      wx.showModal({
        title: '提示',
        content: '来自子组件的方法 ' + JSON.stringify(params)
      })
    },
    /**
     * 调用父组件方法
     */
    onCallParentMethod (res) {
      this.triggerEvent('onChildTrigger', {name: 'CustomView'})
    },
    onGetParentData(){
      wx.showModal({
        title: '提示',
        content: '取父组件数据 ' + JSON.stringify(this.data.showList)
      })
    }
  }
})

