import React, { Component,PureComponent } from 'react'

import {withUser,withCommon} from '../utils/hoc'

import store from '../store';

@withCommon
class Cart extends Component {
    componentDidMount(){
        // const user = JSON.parse(localStorage.getItem('user'));
        // this.setState({
        //     user
        // })

        console.log('Cart.componentDidMount')

        console.log('Cart=',store.getState())

        // store.subscribe(()=>{
        //     this.setState({

        //     })
        // })
    }
    render() {
        return (
            <div>
                Cart
            </div>
        )
    }
}

export default withUser(Cart);