// index.js
Page
(
{
    data:
    {
        src:"/image/logo.png",
        name:"未获取"

    },
    getProfile:function(e)
    {
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            src: res.userInfo.avatarUrl,
            name: res.userInfo.nickName
          })
        }
      })
    }
}
)
