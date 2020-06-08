# React

# Day5-4

## 前端框架历史
1. Angular
    * 双向数据绑定
    * 指令
    * 依赖注入
    * 数据驱动渲染
    ....
2. React
    * 虚拟DOM   === js对象  ->  diff算法    -> 高性能
    ```jsx
        const VirtualDOM = {
            type:'div',
            props:{
                id:'box'
            },
            children:[
                {
                    type:'ul',
                    props:null,
                    children:[
                        {
                            type:'li',
                            props:null,
                            children:'data1'
                        },
                        {
                            type:'li',
                            props:null,
                            children:'data2'
                        }
                    ]
                }
            ]
        }

        <div id="box">
            <ul>
                <li>data11</li>
                <li>data2</li>
            </ul>
        </div>
    ```

3. Vue

## React特点
* 虚拟DOM
* 声明式
    * 命令式
    ```js
        var a = 10;
        a = a + 5;
    ```
* 容易混淆的概念
    * 单向数据流（层级结构）
    * 双向数据绑定（View <-> Model）

## 模块化开发
* commonJS
* ES Module
* AMD
* CMD

## React的使用
* 引入 react,react-dom
* 在浏览器中解析JSX：性能特别低下
    * babel

## JSX
* 规则
* React.createElement()
```js
    const container = <div></div> // React.createElement() => {}
```


## 组件化开发

### 组件类型
* 函数组件（无状态组件，UI组件）
    * 推荐使用
    * 必须有返回值
* 类组件（状态组件,容器组件）
    * 必须包含render方法
        * render方法必须有返回值

## 配置基于webpack的react项目环境

### 依赖
* react & react-dom
* webpack & webpack-cli & webpack-dev-server
* @babel/core & babel-loader & @babel/preset-react
* html-webpack-plugin

### 热更新
devServer{
    hot:true
}

### react事件绑定
* 驼峰
* 事件处理函数默认没有this指向

# Day5-5

## 复习
* React特点
    * 虚拟DOM+diff算法
    * 单向数据流
    * JSX

* 渲染方法与创建节点方法
    * ReactDOM.render()
    * React.createElement()

* 解析JSX的方式
    * 浏览器端（运行时runtime）解析: babel
    * 编译阶段解析
        * webpack
* React的使用
    * React组件
        * 函数组件（无状态组件，UI组件）
        * 类组件（状态组件，容器组件）
    * 状态改变与组件刷新
        > 数据的改变一定是创建一个新的数据并覆盖
        * this.setState(state,callback)
            * 异步
            * 自动合并
        * this.setState((prevState)=>{},callback)
            * 根据上一次的state值进行操作

## 知识点
* 组件通讯
    * props
* 深层次组件通讯
    * context

* 受控组件与非受控组件
    * 非受控组件：不受React组件控制，而是通过节点操作去实现
    * 受控组件：受到React组件的控制

* 事件处理函数
    * this指向
        * 改变this指向: bind
    * 传参
    * event对象：事件处理函数的最后一个参数

* Render Props
> 告诉组件如何渲染内容的prop传递方式称为render Props

### 生命周期函数
* Initial: 初始化阶段
    * constructon
* Mounting：挂载阶段
    * componentWillMount
    * componentDidMount
* Updating：更新阶段
    * componentWillUpdate
    * componentDidUpdate
* Unmounting：卸载阶段
    * componentWillUnmount

* 特殊生命周期函数
    * shouldComponentUpdate 
        * 必须返回boolean，默认返回true
        * 一般用于性能优化
        
* 组件更新的条件
    * state有改变
    * props有改变
* 类组件性能优化
    * shouldComponentUpdate
    * componentWillUnmount
        * 取消ajax请求
            * XMLHttpRequest()  -> xhr.abort()
            * axios     -> 
            * fetch     -> 无法取消
        * 清除定时器
    * PureComponent

* props数据类型校验
    * 官方模块：`prop-types`
    * 给组件设置**静态属性**：propTypes
* props默认值
    * 给祖教你设置静态属性：defaultProps
    ```js
        MyComponent.defaultProps = {}
        MyComponent.propTypes = {}

        // ES
        // 需要bable插件的支持：@babel/plugin-proposal-class-properties
        static defaultProps = {}
        static propTypes = {}
    ```