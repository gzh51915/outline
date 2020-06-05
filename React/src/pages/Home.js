import React, { Component,PureComponent } from 'react'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            num: 0,
            b:100
        }
        this.changeNum = this.changeNum.bind(this);
        console.log('constructor');
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')

        // const xhr = new XMLHttpRequest()
        // setInterval(()=>{

        // },20)
    }

    // 更新
    componentWillUpdate(nextProps,nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate')
    }

    // 特殊生命周函数
    shouldComponentUpdate(nextProps,nextState) {
        console.log('shouldComponentUpdate')
        const { num } = nextState;

        if(num % 5 !== 0){
            return false;
        }

        if(nextProps.a === this.props.a){
            return false
        }

        if(nextProps.b === this.state.b){
            return false;
        }

        return true
    }
    // 组件被销毁时执行
    componentWillUnmount(){
        // xhr.abort()
        // clearInterval()
    }
    changeNum() {
        const { num } = this.state;
        this.setState({
            num: num + 1
        })
    }
    render() {
        console.log('render')
        const { num } = this.state;
        return (
            <div>
                Home
                <button onClick={this.changeNum}>修改num值{num}</button>
            </div>
        )
    }
}

export default Home;