import React,{Component,useState,useEffect} from 'react';

const MyComponent = ()=>{
    console.log('effect hook')
    const [num,changeNum] = useState(1);
    const [page,changePage] = useState(1);
    useEffect(()=>{
        // 这里的代码在组件渲染后执行，拥有class组件中的componentDidMount + componentDidUpdate + componentWillUnmount
        console.log('ajax');

        // 发起ajax

        return function(){
            // 这里的代码在组件被销毁时执行
            // 取消ajax请求
            console.log('cancel ajax')
        }
    },[page])
    return <div>
        <h4>UseEffect</h4>
        <button onClick={()=>{
            changeNum(num+1)
        }}>数值：{num}</button>
        <button onClick={()=>{
            changePage(page+1)
        }}>页码： {page}</button>
    </div>
}

export default MyComponent;