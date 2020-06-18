# React Hook
在React16.8版本中推出了，为了在函数组件中使用类组件的特性，Hook是一个函数

* 类组建操作
    * state
    * ajax请求位置： componentDidMount
    * 取消ajax请求：componentWillUnmount
    * 数据更新后发起请求：componentDidUpdate
* 函数组件优势
    * 轻便
    * 简单
    * 高性能

* 常用Hook
    * useState： 在函数组件中使用class组件的状态，返回一个数组[state,修改State的方法]
    * 格式：useState(defaultValue)

* 其他hook

* 自定义hook