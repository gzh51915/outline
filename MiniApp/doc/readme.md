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


## 云开发

* http与https
    > ssl证书（公钥与私钥）
* 加密
    * 单向加密：不可逆md5
    * 对称加密
        * 密钥：laoxie
        * 过程：明文<->（密钥+算法）<->密文
        * 优点：速度快
        * 缺点：不安全
    * 非对称加密
        * 公钥：公钥机密的内容私钥解密
        * 私钥：私钥加密的内容公钥解密
        * 优点：安全
        * 缺点：速度慢
* 解决方案
    * 对**数据**进行**对称称加密**
    * 对**密钥**进行**非对称加密**

    * https：非对称加密
        * 证书：公钥

* nginx 配置ssl
```
    server {
        listen       443 ssl;
        server_name  offer.xxx.cn;

        ssl_certificate     C:/nginx-1.17.1/ssl/3946648_offer.qfh5.cn.pem;
        ssl_certificate_key  C:/nginx-1.17.1/ssl/3946648_offer.qfh5.cn.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            proxy_pass http://127.0.0.1:9988;
            proxy_set_header HOST $http_host;
        }
    }

```

* nginx反向代理
```
    server {
        listen       80;
        server_name  localhost;
        location / {
            proxy_pass http://127.0.0.1:2010;
            proxy_set_header HOST $http_host;
        }
    }
    server {
        listen       80;
        server_name  vue.qfh5.cn;
        location / {
            proxy_pass http://127.0.0.1:2011;
           # proxy_set_header HOST $http_host;
        }
    }
    server {
        listen       80;
        server_name  api.qfh5.cn;
        location / {
            proxy_pass http://127.0.0.1:2020;
            proxy_set_header HOST $http_host;
        }
    }
```

* 正向代理与反向代理
    * 正向代理代理的是客户端
    * 反向代理代理的是服务端


## 小程序云开发
* 前端（小程序端）
    ```js
        wx.cloud.xxx
    ```
* 服务端（云函数）
    ```js
        // wx-server-sdk
    ```

* 初始化

* 环境env
    * 云开发可创建两个环境

### 云开发操作
* 数据库
* 云存储
* 云函数

### 云调用
### 服务器与云开发的协同操作