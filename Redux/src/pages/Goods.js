import React, { Component, PureComponent } from 'react'
import { Button } from 'antd';
import http from '../utils/http'
import { connect } from 'react-redux'

const mapStateToProps = ({ cart }) => {
    return {
        cartlist: cart.cartlist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add2cart(goods) {
            dispatch({
                type: 'ADD_TO_CART',
                goods
            })
        },
        changeQty(_id, qty) {
            dispatch({
                type: 'CHANGE_GOODS_QTY',
                _id,
                qty
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Goods extends Component {
    state = {
        data: {}
    }
    add2cart = () => {
        const { data } = this.state;
        const { add2cart, changeQty, cartlist } = this.props;
        // 判断当前商品是否已经存在购物车中
        // 存在：数量++
        // 不存在：添加到购物车
        const goods = cartlist.filter(item => item._id === data._id)[0];
        if (goods) {
            changeQty(goods._id, goods.qty + 1);
        } else {
            data.qty = 1;
            add2cart(data);
        }

    }
    buynow = () => {
        const { history } = this.props;
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