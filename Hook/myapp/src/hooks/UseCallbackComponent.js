import React, { Component, useState, useCallback } from 'react';


// function addItem(){

// }

const MySet = new Set();// 自动去重

const MyComponent = (props) => {
    const [qty, changeQty] = useState(1);

    // addItem的值，在依赖有更新时得到一个新的函数
    // 否则，得到缓存函数
    const addItem = useCallback(() => {
        console.log('addItem', qty);
    },[]);
    // MySet.add(addItem);
    // console.log('length:',Array.from(MySet))

    return <div>
        <h4>useCallback</h4>
        <button onClick={addItem}>点我</button>
        <button onClick={() => {
            changeQty(qty + 1)
        }}>修改数量{qty}</button>
    </div>
}

export default MyComponent;