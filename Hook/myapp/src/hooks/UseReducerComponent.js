import React, { useMemo,useState,useReducer, useCallback } from 'react';

const initState = {
    cartlist:[{
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
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'add':
            return {...state,cartlist:[action.goods,...state.cartlist]}
        case 'remove':
            return {...state,cartlist:state.cartlist.filter(item=>item.id!=action.id)}
        case 'change':
            const cartlist = state.cartlist.map(item=>{
                if(item.id === action.id){
                    item.qty = action.qty
                }
                return item;
            })
            return {
                ...state,
                cartlist
            }
        case 'clear':
            return {...state,cartlist:[]}
            
    }
}


const MyComponent = () => {
    const [{cartlist},dispatch] = useReducer(reducer,initState);

    const totalPrice = useMemo(()=>{
        return cartlist.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[cartlist]);

    const removeItem = useCallback((id)=>{
        dispatch({type:'remove',id})
    },[])

    const clearCart = useCallback(()=>{
        dispatch({type:'clear'})
    },[])

    return <div>
        <h4>useReducer</h4>
        <ul>
            {
                cartlist.map(item=>{
                return <li key={item.id}>
                    <h4>{item.id} - {item.name} </h4>
                    <p>{item.price} &times; {item.qty}</p>
                    <button onClick={removeItem.bind(this,item.id)}>删除</button>
                </li>
                })
            }

        </ul>
        <p> <button onClick={clearCart}>清空</button></p>
        <p>总价：{totalPrice}</p>
    </div>
}

export default MyComponent;