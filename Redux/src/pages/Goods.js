import React, { Component, PureComponent } from 'react'
import {Button} from 'antd';
import http from '../utils/http'



class Goods extends Component {
    state = {
        data: {}
    }
    add2cart = ()=>{
        
    }
    buynow = ()=>{
        const {history} = this.props;
        this.add2cart();
        history.push('/cart')
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        // ajax()
        const { data } = await http.get('/goods/' + id);

        console.log('data=', data);

        this.setState({
            data
        })
    }
    render() {
        // console.log('goods=', this.props)
        const { data } = this.state;
        return (
            <div>
                <h1>{data.name}</h1>
                <ul>
                    <li>分类：{data.category}</li>
                    <li>价格：<span><del>{(data.sale_price / 0.8).toFixed(2)}</del><span>{data.sale_price}</span></span></li>
                </ul>
                <Button.Group>
                    <Button danger onClick={this.add2cart}>加入购物车</Button>
                    <Button type="primary" danger onClick={this.buynow}>立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Goods;