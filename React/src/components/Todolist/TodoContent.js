import React from 'react'

import TodoItem from './TodoItem'

function TodoContent({ data, children,renderFooter }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>预计完成时间</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, idx) => <TodoItem data={item} index={idx} key={item.id} />)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5">
                        {renderFooter(100)}
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default TodoContent;