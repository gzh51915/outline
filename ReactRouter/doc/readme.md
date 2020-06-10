# ReactRouter4


# day6-1

## 知识点
* SPA: 一个程序只有一个页面
```js
    // index.html
    <div id="app">
        // 页面内容
    </div>
```

* Web应用
    * BS架构
    * CS架构
* 引入文件
    * react-router
    * react-router-dom

### 路由使用
* 路由类型
    * HashRouter
        * window.onhashchange = ()=>{}
    * BrowserRouter
        * history.pushState()
        * history.replaceState()
* 路由渲染
    * 渲染组件：Route
        * path
        * component
    * 重定向：Redirect
    * 路由匹配：Switch
        
### 路由跳转
* 声明式导航
    * Link
    * NavLink
        * to        
        * replace   true:history.replace(),false:history.push()
* 编程式导航
    * 在js代码中实现跳转
    * 如何获取history对象？？
        * 通过Route中的component渲染的组件
            * 自动在props中传递history,location,match
        * withRouter
        ```js
            function withRouter(InnerComponent){
                return function(){
                    return <InnerComponent history location match/>
                }
            }

            App = withRouter(App);
        ```
    * history   一般用于跳转
    * location  一般用户传递数据
    * match     一般用户路径匹配
* 传递参数
    location

* 高阶组件: HOC （High Order Component）
    > 高阶组件不是一个React组件，而是一个包装函数（纯函数）
    * 纯函数
        > * 不修改传入的参数，只是通过参数展示不同的状态的函数
        * 任何时候传入相同的参数，得到的结果都一样
    ```js
        // 纯函数
        function sum(a,b){
            return a+b;
        }

        // 非纯函数
        function random(min,max){
            return parseInt(Math.random()*(max-min+1))+min;
        }
        sum(10,20);// 30
        random(10,20);// 11,15,20

    ```
    * 需求
        * 用户登录后，每个组件都能获取到用户信息
    * 应用
        * 封装公共代码
        * 操作props
        * 权限控制
        * ....
* 动态路由
    * 获取动态路由参数：props.match.params
* 嵌套路由
    * 
    ```js
        // Vue嵌套路由
        new VueRouter({
            routes:[
                {
                    path:'/category',
                    component:Category,
                    children:[
                        {
                            path:'phone', // /category/phone
                            component:{Phone}
                        }
                    ]
                }
            ]
        })

    ```
## 练习
* 创建一个电商项目，要求包含以下内容
    * 页面
        * 首页
        * 商品列表
        * 商品详情
        * 购物车
        * 生成订单页面
        * 注册
        * 登录
    * 页面说明
        * 商品详情配置动态路由
        * 商品列表配置子分类
        * 完成注册流程
            * 用户不可重复注册
            * 保存数据库
        * 完成登录流程
            * 登录返回token，2个小时有效期
            * 过期自动跳到登录页面重新登录
    * 数据库设计
        * 商品表
        * 订单表
        * 用户表
        * ...


## 面试题
* 如何用数组的map方法获取到一组dom节点的内容
```js
    const lis = document.getElementsByTagName('li'); // 类数组
    lis.map(item=>{// lis.map is not a function

    });

    Array.from(lis).map(item=>item.innerText);
    Array.prototype.map.call(lis,item=>item.innerText);
```
* html5新特性
    * 新标签，新表单类型
    * Canvas
    * Audio/Video
    * SVG
    * webStorage（localStorage+sesstionStorage）
    * webSocket
    * Promise
    * Worker
    * Draggable
    * FormData
    * ...

* 项目优化
    * 性能优化
    * 用户体验优化
    * seo优化
