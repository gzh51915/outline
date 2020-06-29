// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();

// 添加城市
exports.main = async (event, context) => {
  const {name,is_current=false} = event;
  // 选择集合
  const collection = db.collection('city');

  // 数据的CRUD
  const result = await collection.add({
    data:{
      name,
      is_current
    }
  });
  console.log('add=',result);
  return result
}