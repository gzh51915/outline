// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentClass:"H5-1915",
    currentUser:{name:'laoxie',gender:'男'},
  
    userlist:[{
      name:'laoxie',
      password:123,
      classlist:['1915','1911','1910'],
      age:18
    }, {
        name: 'jingjing',
        password: 123,
        classlist: ['1915', '1911', '1910'],
        age: 28
      },{
        name: 'xiaxia',
        password: 123,
        age: 28,
        classlist: ['1915', '1914', '1911'],
      }, {
        name: 'linjie',
        password: 123,
        classlist: ['1915', '1911', '1910'],
        age: 20
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    console.log('user.onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('user.onHide')
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
    console.log('onPullDownRefresh');

    //
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 微信小城已经做好节流操作，
    // 滚动到底部，最多执行一次这里的代码
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  changeClass(e){
    this.setData({
      currentClass:e.detail.value
    })
  },
  changeUser(e){
    console.log(e.target.dataset.user)
  }
})