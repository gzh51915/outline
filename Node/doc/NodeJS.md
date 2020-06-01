
# NodeJS

## 模块化开发规范
* commonJS: NodeJS
```js
    // 同步
    // 引入
    const express = require('express');

    // 导出
    module.exports = {}
```
* ES Module : ES6(ES2015)
```js
    import express from 'express';

    // express代码....
    export default express
```
* AMD : requireJS
```js
    // 异步
    require(['jquery'],($)=>{
        $('h1');
    }) 
```
* CMD: seaJS

## Node服务器
* 静态资源


## express中间件
* 中间件就是一个函数
* 中间件分类
    * 内置中间件
    * 第三方中间件
    * 自定义中间件
* 如何使用中间件：app.use(中间件)
```js
    // 1. 无路径
    app.use(express.static())

    // 2. 带路径
    app.use('/xxx',...middleware)
```

## 接口编写
* 请类型
    * get           查
    * post          增
    * put/patch     改
    * delete        删
    * ..
* Restful规范
    * 根据请求类型不同编写不同接口
    * 根据请求地址不同编写不同接口

## 学会查看文档
* 技术文档
    * 官网api
    * 接口文档
* 需求文档
    * 功能描述
    * 业务描述



## 模块化开发路由
1. 把goods写到一个文件中
2. 利用express.Router中间件连接服务器与路由
    * 模块化开发
    * express.Router中间件

### 获取前端传入信息: request
* 获取查询参数：req.query
* 获取动态路由参数：req.params
```js
    // get /user?page=1&size=10     通过url参数发送到后端
    const {page,size} = req.query;

    // get /user/10                 通过url发送到后端
    const {id} = req.params

    // post /user 
    // username,password    通过请求体body发送到后端
```


## 三段伦
1. 给定一个已知条件
2. 给定一个前提
3. 推到结论

1. 已知条件：中间件是一个函数
2. 前提：express.Router()是一个中间件
3. 结论：express.Router() 是一个函数