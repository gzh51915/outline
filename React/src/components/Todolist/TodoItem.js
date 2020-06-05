import React from 'react'
import moment from 'moment'

// 模块化开发
import MyContext from './MyContext';

function TodoItem({ data, index }) {
    return (
        <MyContext.Consumer>
            {
                ({completeItem,removeItem,a,b})=>{
                    console.log(a,b)
                    return <tr>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{moment(data.date).format('YYYY-MM-DD')}</td>
                    <td>{data.done ? '完成' : '未完成'}</td>
                    <td>
                        <button onClick={completeItem.bind(this,index)}>完成</button>
                        <button onClick={removeItem.bind(this,index)}>删除</button>
                    </td>
                </tr>
                }
            }
        </MyContext.Consumer>
        
    )
}

// 类组件的写法
// TodoItem.contextType = MyContext
// 在组件内部通过：this.context.completeItem

export default TodoItem;