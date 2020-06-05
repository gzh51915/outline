import React, { Component } from 'react'
import MyContext from './MyContext';

class TodoForm extends Component {
    constructor() {
        super();

        this.state = {
            title: ''
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.add = this.add.bind(this)

        this.input = React.createRef();
    }
    changeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    add() {
        const { title } = this.state;
        const { createItem } = this.context;
        createItem(title)

        // 清空并自动获得焦点
        this.setState({
            title:''
        })

        // this.input.focus();
        this.input.current.focus();
    }


    render() {
        console.log('this.context=', this.context)

        const { title } = this.state;
        return (
            <div>
                <input type="text" 
                    value={title} 
                    onChange={this.changeTitle}
                    // ref={el=>this.input = el}
                    ref={this.input}
                />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

TodoForm.contextType = MyContext

export default TodoForm;