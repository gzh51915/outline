// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {

  const collection = db.collection('class');

  const result = await collection.where({
    _id:'5c67a2cc9087416d9123f161'
    // name:'1602'
  }).update({
    data:{
      is_current:false,
      id:_.inc(5)
    }
  });
  console.log('update11=',result);
  return result;
 
}