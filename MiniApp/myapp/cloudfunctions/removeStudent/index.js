// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const collection = db.collection('student');
  const {_id} = event;

  const result = await collection.doc(_id).remove();
  // const result = await collection.where({
  //   _id
  // }).remove();
  console.log('remove=',result);
  return result;
}