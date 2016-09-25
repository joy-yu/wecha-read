//index.js
//onload，onReady，onShow，onHide，onUnload

//获取应用实例
var app = getApp()

//Page() 函数数用来注册一个页面
Page( {

  //页面初始数据
  data: {
    title: '',
    author: '',
    main: [],
    scrollTop: 0,
    bottomAnimation:{}
  },

  toTop: function(){
    this.setData( { scrollTop: this.data.scrollTop - 1 })
  },

  getToday: function(){
    
    this.toTop()
    var value = wx.getStorageSync('today')
    if(value.title === this.data.title) return;
    this.setData( value )
  },

  getRandom: function() {
    var that = this

    wx.request( {
      url: 'http://123.206.211.247:6789/random',
      header: {
        "Content-Type": "text/json"
      },
      success: function( res ) {
        that.toTop()
        that.setData( res.data )
      },
      fail: function( err ) {
        console.log( err )
      }
    });

  },

  hideBottom: function(){
    this.aanimation.translateY(50).step()
    this.setData({
      bottomAnimation:this.aanimation.export()
    })
  },

  showBottom: function(){
    this.aanimation.translateY(0).step()
    this.setData({
      bottomAnimation:this.aanimation.export()
    })
  },

  onLoad: function() {
    var value = wx.getStorageSync('today')
    this.setData( value )
  },

  onReady: function(){
    this.aanimation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
    })
  }
  
})

