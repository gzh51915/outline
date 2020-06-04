import React, { Component } from 'react';

import TodoContent from './TodoContent'

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
            current: 2,
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
        return (
            <div>
                {/* <TodoForm/> */}
                <TodoContent data={this.state.data} onComplete={this.completeItem} />
            </div>
        )
    }
}

export default Todolist