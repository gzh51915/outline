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

## 跨平台框架
* uni-app
* mpvue
* wepy
* taro