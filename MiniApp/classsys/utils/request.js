function request(url,data,options={}){
  const baseUrl ='http://api.qfh5.cn/api'
  return new Promise((resolve,reject)=>{
    wx.request({
      url:baseUrl + url,
     ...options,
      data,
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}

function get(url,data,options={}){
  return request(url,data,{
    ...options,
    method:'get'
  })
}

function post(url,data,options={}){
  return request(url,data,{
    ...options,
    method:'post'
  })
}

function put(url,data,options={}){
  return request(url,data,
   {
    ...options,
    method:'put'
  })
}
function remove(url,data,options={}){
  return request(url,data,
   {
    ...options,
    method:'delete'
  })
}

module.exports = {
  request,
  get,
  post,
  put,
  remove
}