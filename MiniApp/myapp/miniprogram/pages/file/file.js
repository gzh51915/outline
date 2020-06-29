// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:''
  },

  uploadFile(){
     // 上传图片
   wx.chooseImage({
    success: chooseResult => {
      console.log(chooseResult);

       // 将图片上传至云存储空间
       wx.cloud.uploadFile({
        // 指定上传到的云路径
        cloudPath: 'my-photo.png',
        // 指定要上传的文件的小程序临时文件路径
        filePath: chooseResult.tempFilePaths[0],
        // 成功回调
        success: res => {
           console.log('上传成功', res);
           this.setData({
             imgurl:res.fileID
           })
        },
     })
    },
 })
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