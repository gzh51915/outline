import React, { useMemo,useState } from 'react';



const MyComponent = () => {
    const [qty,changeQty] = useState(1);
    const [goodslist,changeGoods] = useState([{
            id:1,
            name:'goods1',
            price:98,
            qty:1
        },{
            id:2,
            name:'goods2',
            price:198,
            qty:3
        },{
            id:3,
            name:'goods3',
            price:998,
            qty:1
        }]
    )

    // const totalPrice = goodslist.reduce((pre,item)=>pre+item.price*item.qty,0)
    const totalPrice = useMemo(()=>{
        console.log('usemon')
        return goodslist.reduce((pre,item)=>pre+item.price*item.qty,0);
    },[goodslist])
    
    return <div>
        <h4>useMemo</h4>
        <p>商品总价：{totalPrice.toFixed(2)}</p>
        <button onClick={()=>{
            changeQty(qty+1)
        }}>修改数量：{qty}</button>
    </div>
}

export default MyComponent;