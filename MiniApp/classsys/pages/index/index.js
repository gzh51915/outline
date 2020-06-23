//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classList:[]
  },
 
  onLoad: function () {
    wx.request({
      url: 'http://api.qfh5.cn/api/class',
      success:({data})=>{
        console.log(data);
        this.setData({
          classList:data.data
        })
      }
    })
  },

  goto(e){console.log(e)
    const {classid} = e.currentTarget.dataset;
    wx.redirectTo({
      url: '/pages/class/class?classid=' + classid,
    })
  }
})
