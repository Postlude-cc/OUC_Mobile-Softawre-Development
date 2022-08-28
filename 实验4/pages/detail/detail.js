// pages/detail/detail.js
var common = require('../../utils/common')
//保证可以调用common.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    article:{
      id:'',
      title:'',
      poster:'',
      add_date:'',
      content:'”。'
     },
     isAdd:false
  },
//添加收藏
  addFavorite:function(){
    let article = this.data.article
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd:true
    })
  },
 
  //取消收藏
  cancelFavorite:function(){
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //检验是否携带id号进入页面
    // console.log(options.id)
    let id = options.id
    // let result = common.getNewsDetail(id)
    // if(result.code == 200){
    //   this.setData({
    //     article:result.news
    //   })
    // }
 
    //检查当前新闻是否在收藏夹中
    var newarticle = wx.getStorageSync(id)
    if (newarticle != ''){
      this.setData({
        isAdd:true,
        article:newarticle
      })
    }
    //不存在
    else
    {
      let result = common.getNewsDetail(id)
      if(result.code == 200){
      this.setData({
        article:result.news
      })
      }
    }
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
 
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
 
  }
})