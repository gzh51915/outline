import React, { Component,PureComponent } from 'react'

import {withUser,withCommon} from '../utils/hoc'

@withCommon
class Cart extends Component {
    componentDidMount(){
        // const user = JSON.parse(localStorage.getItem('user'));
        // this.setState({
        //     user
        // })

        console.log('Cart.componentDidMount')
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