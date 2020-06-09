import React, { Component, PureComponent } from 'react'

import store from '../store';

console.log('state:',store.getState());
store.subscribe(()=>{
    console.log(666);
    console.log('newState=',JSON.stringify(store.getState()));
})

class Goods extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        // ajax()


        const action = {type:'CHANGE_USER',user:{username:'jingjing',age:30}};
        store.dispatch(action);
        
    }
    render() {
        console.log('goods=', this.props)
        return (
            <div>
                Goods
            </div>
        )
    }
}

export default Goods;