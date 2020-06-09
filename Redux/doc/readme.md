# Redux
> flux, mobx, vuex ....
* react是一个视图层框架
* vue是一个完整的MVC架构的框架

## redux与react的关系
* redux是一个独立的产品，与react无直接关系
* 如果你不确定是否使用redux，那就不要使用它

## redux解决了什么问题
1. 数据存储
2. 数据共享
3. 数据更新（自动）

## Redux设计和使用的三项基本原则
1. 唯一数据源：store是必须是唯一的
2. 只有store能改变自己的内容
    > reducer 可以接受state，但是绝对不能修改state
3. Reducer必须是一个纯函数
    > 纯函数指的是，给固定的输入，就一定会有固定的输出，而且不会有任何副作用

## 使用redux
1. 创建store
```js
     import { createStore } from 'redux';
     const store = createStore();
```
2. 创建修改store的方法： reducer


## redux核心
* store
    * getState()        获取store最新状态
    * dispatch(action)  修改store的状态
    * subscribe()       监听state修改
* state
* reducer
* action



## 面试题
* 覆盖第三方组件样式
    * 写全局样式
    * 组件局部样式
        * /deep/
        * >>>
    * vue组件中写带有特定选择器的全局样式
    ```html
        <style scoped>

        </style>
        <style>
            .home xxxx{}
        </style>
    ```
* 父组件调用子组件的方法
    * 组建层级
        * $parent   得到父组件实例
        * $children 得到子组件实例
        * ref