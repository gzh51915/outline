// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    page:1,
    size:10,
    hasmore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('class',options);
    const {classid} = options;

    // wx.setNavigationBarTitle({
    //   title:'1810班详情'
    // })

    // wx.hideNavigationBarLoading();

    // wx.showToast({
    //   title:'登录成功'
    // })

    // wx.showLoading({
    //   title:'玩命加载中...'
    // });
    this.setData({
      classid
    },()=>{
      this.getData();

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
    console.log('bottom')
    this.setData({
      page:this.data.page+1
    },()=>{
      this.getData();
    })

   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  getData(){
    let {page,size,datalist,classid,hasmore} = this.data;
    if(!hasmore) return;
    wx.request({
      url: 'http://api.qfh5.cn/api/user',
      data:{
        class_id:classid,
        page,
        size
      },
      success:({data})=>{
        // {data:[],code:200,msg:'succeess',total:40}
        if(datalist.length>0){
          datalist = [...datalist,...data.data];
        }else{
          datalist = data.data;
        }
        console.log(data);
        this.setData({
          datalist,
          hasmore:datalist.length<100
        })
        // wx.hideLoading()
      }
    })
  }
})