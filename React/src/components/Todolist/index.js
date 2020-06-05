import React, { Component } from 'react';

import TodoContent from './TodoContent'
import TodoForm from './TodoForm'

import MyContext from './MyContext'

class Todolist extends Component {
    constructor() {
        super();

        // 类组件的状态（数据）
        this.state = {
            current: 0,
            data: [
                {
                    id: 1,
                    title: '实现个小目标，转她1个亿',
                    done: false,
                    date: Date.now()
                },
                {
                    id: 2,
                    title: '月薪过万',
                    done: false,
                    date: Date.now() + 100
                }

            ]
        }


        // 在这里确定this指向
        this.createItem = this.createItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }
    createItem(title) {
        const { data } = this.state;
        const newData = {
            id: data.length + 1,
            title,
            done: false,
            date: Date.now()
        }

        data.unshift(newData);

        // 更新组件状态：this.setState()
        // 数据更新后会自动刷新组件（调用render方法）
        // setState是异步
        // this.state.curent = 20 // 不推荐
        this.setState({
            // current: 2,
            data
        }, () => {
            // 发起请求
        })

        // console.log(this.state.current);// 这里获取的还是旧的值
    }
    removeItem(idx) {
        const { data } = this.state;
        // data.splice(idx,1);
        // this.setState({
        //     data
        // })
        this.setState({
            data: data.filter((item, i) => i !== idx)
        })
    }
    completeItem(idx) {
        const {data} = this.state;
        data[idx].done = true;
        this.setState({
            data
        })
    }
    render() {
        const {createItem,removeItem,completeItem} = this;
        const {data} = this.state;
        const doneList = data.filter(item=>item.done)
        const undoneList = data.filter(item=>!item.done)
        return (
            <div>
                <MyContext.Provider value={{createItem,removeItem,completeItem}}>
                    <TodoForm/>
                    <TodoContent data={data} renderFooter={
                       (value)=>(
                        <div>
                            <span>总数：{data.length}</span>
                            <span>完成：{doneList.length}</span>
                            <span>未完成：{undoneList.length}</span>
                        </div>
                       )
                    }>
                        
                    </TodoContent>
                </MyContext.Provider>
            </div>
        )
    }
}

export default Todolist