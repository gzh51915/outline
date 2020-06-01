
const express = require('express');
const Router = express.Router(); // function(){}


// 获取所有用户
Router.get('/',(req,res)=>{
    res.send('所有用户')
})

// 获取某一个用户的信息
Router.get('/:id',(req,res)=>{
    // 获取id值
    // const id = req.query
    const {id} = req.params
    res.send(`id为${id}的用户`)
})

// 添加一个用户
Router.post('/',(req,res)=>{console.log('body=',req.body);
    // 获取username,password
    const {username,password} = req.body;
    console.log('user=',username,password)
    res.send(`添加一个用户${username},${password}`)
})

module.exports = Router