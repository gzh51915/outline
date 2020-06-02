const express = require('express');

// 使用express中间件Router来实现server与router的连接
const Router = express.Router()


// 查询所有商品 /goods/
Router.get('/',(req,res)=>{ 
    // 请求<->响应
    res.send([{
        name:"xiaomi 10 pro"
    },{
        name:"huawei p40 pro"
    }])
})
Router.post('/goods',(req,res)=>{ //增
    // db.create('goods')
})

// 查询id为某个值的商品
Router.get('/goods/:id',()=>{

})

module.exports = Router