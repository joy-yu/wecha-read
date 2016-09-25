//app.js
//App() 函数用来注册一个小程序，必须在 app.js 中注册，且不能注册多个
//onLaunch，onShow，onHiden

App( {

  //监听小程序初始化
  onLaunch: function() {

    var that = this
    var value = wx.getStorageSync('today')
    
    wx.request( {
      url: 'http://123.206.211.247:6789',
      header: {
        "Content-Type": "text/json"
      },
      success: function( res ) {
        if(value && value.data === res.data) return;
        wx.setStorageSync('today', res.data)
      },
      fail: function( err ) {
        console.log( err )
      }
    });
  }
})
