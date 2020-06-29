// 云函数入口文件
const cloud = require('wx-server-sdk')

// 云开发初始化
cloud.init({
  // DYNAMIC_CURRENT_ENV 指云函数当前所在的环境
  env:cloud.DYNAMIC_CURRENT_ENV
})


const db = cloud.database();



// 云函数入口函数
exports.main = async (event, context) => {
  // event
  // const wxContext = cloud.getWXContext();
  console.log('event=',event)
  const {page,size} = event;
  const skip = (page-1)*size

  const collection = db.collection('student');
  const data = await collection .skip(skip).limit(size).get();
  console.log(data);
  return data;

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}