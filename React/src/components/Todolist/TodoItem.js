import React from 'react'
import moment from 'moment'

function TodoItem({ data, index,onComplete }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.title}</td>
            <td>{moment(data.date).format('YYYY-MM-DD')}</td>
            <td>{data.done ? '完成' : '未完成'}</td>
            <td>
                <button onClick={onComplete.bind(this,index)}>完成</button>
                <button>删除</button>
            </td>
        </tr>
    )
}

export default TodoItem;