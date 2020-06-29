// pages/dbtest/dbtest.js

const db = wx.cloud.database();
console.log('db=',db);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    size:15,
    datalist:[]
  },

  async getStudent(){
    let {page,size,datalist} = this.data;
    // 调用云函数
    const data = await wx.cloud.callFunction({
      name:'student',
      data:{
        page,
        size
      }
    });

    console.log('data=',data);

    if(datalist.length===0){
      datalist = data.result.data;
    }else{
      datalist = [...datalist,...data.result.data];
    }

    this.setData({
      datalist
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 利用云开发接口wx.cloud实现数据库操作
    // 获取集合
    const category = db.collection('student');

    // 读取所有数据
    const data = await category.get();
    console.log(data);

    this.getStudent();
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
    let {page} = this.data;
    page++;
    console.log('page=',page)

    this.setData({
      page
    },()=>{
      this.getStudent();
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})