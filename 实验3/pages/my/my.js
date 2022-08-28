// pages/my/my.js
Page({
  data: 
  {
      num: 0
  },
  getMyInfo: function (e) 
  {
      wx.getUserProfile({
          desc: '用于获取信息',
          success: (res) => {
              this.setData({
                  isLogin: true,
                  src: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName
              })
              wx.setStorageSync('islogin', true)
          }
      })
      this.getMyFavorites()
  },
  goLogout: function() 
  {
      wx.showModal({
          title: '提示',
          content: '您确定要退出登录吗',
          success: (res) => {
              if (res.confirm) { //这里是点击了确定以后
                  console.log('用户点击确定')
                  wx.setStorageSync('islogin', false)
                  this.setData({
                      src: '',
                      nickName: '',
                      isLogin: false
                  })
              } else { //这里是点击了取消以后
                  console.log('用户点击取消')
              }
          }
      })
  },
  getMyFavorites: function () 
  {
      let info = wx.getStorageInfoSync();
      let keys = info.keys;
      let num = keys.length - 1;
      let myList = [];
      for (var i = 0; i < num; i++) {
          let obj = wx.getStorageSync(keys[i]);
          myList.push(obj);
      }
      this.setData({
          newsList: myList,
          num: num
      });
  },
  goToDetail: function (e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
          url: '../detail/detail?id=' + id,
      })
  },
  onShow: function () 
  {
      if (this.data.isLogin) {
          this.getMyFavorites()
      }
  }
})