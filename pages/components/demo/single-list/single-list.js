// pages/components/demo/single-list/single-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    singleList:{
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * Item事件点击处理
     */
    onItemClick(res) {
      console.log(res.currentTarget.id)
      let curIndex = res.currentTarget.id
      wx.navigateTo({
        url: this.data.singleList[curIndex].path
      })
    }
  }
})
