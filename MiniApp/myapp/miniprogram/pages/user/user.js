// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentClass:"H5-1915",
    currentUserId:null,
    currentDate:'2020-06-23',

    userlist:[{
      id:1,
      name:'laoxie',
      password:123,
      classlist:['1915','1911','1910'],
      age:18
    }, {
      id:2,
        name: 'jingjing',
        password: 123,
        classlist: ['1915', '1911', '1910'],
        age: 28
      },{
        id:3,
        name: 'xiaxia',
        password: 123,
        age: 28,
        classlist: ['1915', '1914', '1911'],
      }, {
        id:4,
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
    const {userlist} = this.data;
    const {userid} = e.target.dataset;

  this.setData({
    currentUserId:userid
  })
  },
  removeUser(e){
    // e.detail
    let { userlist} = this.data;
    const {userid} = e.target.dataset
    userlist = userlist.filter(item=>item.id!=userid);

    this.setData({ userlist})
  },
  saveItem(e){
    console.log(e.detail)
    let {userlist} = this.data;
    const {value,target} = e.detail;
    const {userid} = target.dataset;
    userlist = userlist.map(item=>{
      if(item.id === userid){
        // item {id,name,age,password}, value:{name,password,age}
        // for(let key in item){
        //   item[key] = value[key]
        // }

        Object.assign(item,value);
      }

      return item;
    });

    this.setData({
      userlist
    })
  },
  changeDate(e){
    console.log(e.detail)
    this.setData({
      currentDate:e.detail.value
    })
  },
  changeCurrentClass(e){
    // mode = 'selector'时，detail.value返回索引值
    console.log(e)
    let {userlist} = this.data;
    const {value:idx} = e.detail;
    const {userid} = e.target.dataset;
    userlist = userlist.map(item=>{
      if(item.id === userid){
        item.currentClass = item.classlist[idx]
      }
      return item;
    })
    this.setData({
      userlist
    })
  }
})