# ReactRouter4


# day6-1

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

## 路由使用
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
        
### 路由跳转
    * 声明式导航
        * Link
        * NavLink
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