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
    * useState
        > 在函数组件中使用class组件的状态，返回一个数组[state,修改State的方法]
        * 格式：useState(defaultValue)
    * useEffect
        > 根据依赖参数与返回值不同实现class组件中componentDidMount、componentDidUpdate、componentWillUnmount的功能
        * 格式：useEffect(fn,[])
* 其他hook
    * useMemo
    * useCallback
    * useContext
    * useReducer
    * useRef
        * current
    ```js
        const ref = React.createRef()
        <input ref={ref}>
        ref.current
    ```
    * useLayoutEffect
    * useImperativeHandle
    * useDebugValue

* 自定义hook
    * hook是一个函数
    * 命名以'use'开头的命名规范



### json，json对象，json字符串, js对象
* json：是一种数据规范
    * json对象：符合json规范的js对象
    * json字符串：符合json规范的字符串
* js对象
```js
    var obj = [{
        name:'laoxie',
        gender:'male'
    },{
        name:'jingjing',
        gender:'female'
    }]

    const data = JSON.stringify(obj);// 得到json字符串
    const result = JSON.parse(data); // 得到json对象
    JSON.parse(obj);//
```