# React

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


## 组件化开发

### 组件类型
* 函数组件（无状态组件，UI组件）
    * 推荐使用
    * 必须有返回值
* 类组件（状态组件）
    * 必须包含render方法
        * render方法必须有返回值