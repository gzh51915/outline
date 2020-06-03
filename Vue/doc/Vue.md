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
    <script type='text/javascript' src="vue.js">

```

## 组件层级结构
* 所有组件都是Vue的实例，共享vue的原型
* 每个组件跟其他组件有着直接或者间件的联系
    * $parent
    * $children
    * $root
* 在组件通讯或组件编写过程中常用到这些结构属性       