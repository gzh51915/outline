# 微信小程序

## 组成部分
* json配置文件
    * 全局
    * 页面
* js逻辑文件
    * 全局
    * 页面
* wxss样式文件
    * 全局
    * 页面
* wxml布局文件


## 结构与逻辑
* 数据绑定
* 列表渲染
* 条件渲染
* 运算

* 绑定事件
    * 事件传参
        * e.detail
        * e.target.dataset


## api
* 请求：wx.request
* 跳转：
    > tabbar页面与非tabbar页面
    * 声明式导航：`<navigator>`
    * 编程式导航：
        * navigateTo
        * redirectTo
        * wx.switchTab
        * wx.reLaunch

## 班级管理系统接口
> 地址：http://api.qfh5.cn
* 班级
    * `get /api/class`      获取所有班级

* 用户
    * `get /api/user`       获取班级所有用户
        * 参数
            * class_id
    * `get /api/user/:id`   获取某个用户
* 分组
    * `get /api/group`      获取班级所有分组
        * 参数
            * class_id
    * `get /api/group/:id`   获取某个分组信息
    * `post /api/group/:id`   修改分组信息
        * 参数
            * name      分组项目名称
            * leader    分组负责人
            * members   分组成员
* 登录
    * `post /api/login`
        * 参数
            * username  用户名
            * password  密码
            * class_id  班级id


## wxml模板
> 把公共的代码写到一个单独的wxml文件中，然后通过import或include引入

* import
    > 可以通过data属性传递数据到模板中，更加灵活
    * `<template is="name" />`
        * template可以嵌套
* include
    > include一般用户固定代码的引入

## 微信模块化开发
* wxs
    > 写在wxml文件中的模块
    ```js
        <wxs module="tools">
            function formatDate(){

            }
            module.exports = {
                formatDate:formatDate
            }
            //module.exports.formatDate = formatDate;
            //exports.formatDate = formatDate
        </wxs>
        <view>
            {{tools.fomatDate()}}
        </view>
    ```
    PS：wxs不能与js模块通讯，也不能使用微信小程序的api
* js
    > js逻辑文件也能够实现模块化开发
    * 自定义模块
    * 第三方模块(npm)
        * 微信小程序不能直接使用npm模块，可通过菜单`工具->构建npm`来转译成微信小程序支持的代码


* 原生js中的使用
```js
    // utils/common.js

    // formatDate是一个全局方法
    function formatDate(){

    }

    export default formatDate;
```
```html
    <!-- es module -->
    
    <!-- <button onclick="formatDate()">click me</button> -->
    <script type="module">
        import formatDate from '../utils/common.js'

        const date = formatDate(new Date())
    </script>
```

### 自定义组件

### 第三方组件
* vant-weapp