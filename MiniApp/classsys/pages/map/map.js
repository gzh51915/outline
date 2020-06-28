// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/assets/img/current.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    latitude:'',
    longitude:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 获取当前授权信息
     wx.getSetting({
      success:(res)=>{
        console.log('res',res);
        // 判断用户是否授权摄像头使用
        if(!res.authSetting['scope.userLocation']){
          wx.authorize({
            scope:'scope.userLocation',
            success:()=>{
              // 用户授权
              this.getLocation();
            },
            fail(){
              // 用户拒绝
            }
          })
        }else{
          console.log(666)
          this.getLocation();
        }
      }
    })
    
  },

  getLocation(){
    let {markers} = this.data;
    wx.getLocation({
      isHighAccuracy:true,
      success:(res)=>{
        console.log('location:',res);
        const {latitude,longitude} = res;
        

        // 添加标识
        markers = [...markers,{
          iconPath: "/assets/img/current.png",
          id: 1,
          latitude,
          longitude,
          width: 50,
          height: 50
        }];

        console.log(longitude,latitude)

        this.setData({
          latitude,
          longitude,
          markers
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})