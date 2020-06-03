# 从0搭建Vue项目

1. 创建目录
    * doc
    * src
        * components
        * pages
        * utils
        * ...
2. 安装依赖
    * vue
    * webpack
    * webpack-dev-server
    * vue-template-compiler
    * html-webpack-plugin
    * vue-loader
    * @babel/core
    * balel-loader
    * ...
3. 配置webpack参数
    * webpack.config.js
    * 遵循commonJS规范
4. 编写Vue组件
5. 编译

## npm script
    * dev
    * build
    * start


## vue的单文件组件
* template
* script
* style


### 不要为了分离而分离
```js
    <div id='app'>
        <!-- 能在这里直接使用的变量一定是组件实例的属性 -->
        {{username}} - {{age}}
    </div>
    Vue.component()
    const vm = new Vue({
        el:'#app',
        // template:'html'
        data:{
            username:'xxx',
            age:18
        },
        components:{
            a:{
                data(){
                    return {}
                },
                data:{}
            },
            b:{

            }
        },
        methods:{
            
        }
    })
    console.log(vm.username,vm.age)
```

```html
    <script type='text/javascript' src="vue.js"/>
```

## 组件层级结构
* 所有组件都是Vue的实例，共享vue的原型
* 每个组件跟其他组件有着直接或者间件的联系
    * $parent
    * $children
    * $root
* 在组件通讯或组件编写过程中常用到这些结构属性

## 插槽slot
    * 默认插槽
    * 命名插槽
    * 作用域插槽
### 组件的可定制化


## Vue Router
* mode: history || hash
    * hash路由的原理：window.onhashchange = ()=>{}
    * history路由的原理：HTML5 history api中的pushState()和replaceState()

###  SPA（Sign Page Application） & MPA
    * history路由：不管访问什么地址，都应该响应index.html的内容（静态资源除外）

    ```js
        const express = require('express');
        const app = express();

        // 内置中间件：利用中间件实现静态资源服务器（加上__dirname，可在任意目录运行程序，如：npm start）
        app.use(express.static(path.join(__dirname,'./public')));

        // history路由服务器配置
        app.use((req,res)=>{
            let content  = fs.readFileSync(path.join(__dirname,'./public/index.html'));
            res.set('Content-Type','text/html; charset=utf-8');
            res.send(content)
        })

    ```
### 路由拦截
* router.beforeEach((to,from,next)=>{

})
* router.afterEach(()=>{})

## VueX
* 核心
    * state                 data
    * getters               computed
    * mutations             methods
    * actions               methods
* 使用
    1. 创建store
    2. 注入store到Vue实例
    3. this.$store使用
* 注意事项
    * state只能在mutaiton中修改
    ```js
        this.$store.commit('changeName','xiaoxie');
    ```
    * 触发action
    ```js
        this.$store.dispatch('changeName',1234);

        this.$store.state.user.username;
    ```
    * 模块化 vuex后写法的改变
    ```js
        this.$store.state.user -> this.$store.state.common.user
    ```