import React, { Component, PureComponent } from 'react'
import { Row, Col, Steps, Button, InputNumber } from 'antd'
import { SketchOutlined, CloseOutlined } from '@ant-design/icons';
import { withUser, withCommon } from '../utils/hoc'
import { connect } from 'react-redux';

// import store from '../store';

const mapStateToProps = (state) => {
    return {
        cartlist: state.cart.cartlist,
        a: 100,
        username: 'laoxie',
        totalPrice: state.cart.cartlist.reduce((prev, item) => {
            return prev + item.sale_price * item.qty;
        }, 0)
    }
}

@connect(mapStateToProps)
class Cart extends Component {
    state = {
        // datalist: [{
        //     "_id": "5c128dc0afe9c8dcfcc6e1e1",
        //     "name": "女神刘亦菲代言同款：天梭TISSOT-杜鲁尔系列 T099.207.16.116.00  自动机械女表",
        //     "model": "",
        //     "category": "天梭",
        //     "price": 0,
        //     "sale_price": 5090,
        //     "add_time": 1544719807634,
        //     qty:10,
        // }, { "_id": "5c128dc0afe9c8dcfcc6e1e2", "name": "天梭TISSOT-库图系列 T035.617.11.051.00 石英男表", "model": "", "category": "天梭", "price": 0, "sale_price": 3080, "add_time": 1544719807634,qty:4 }, { "_id": "5c128dc0afe9c8dcfcc6e1e3", "name": "天梭TISSOT-库图系列 T035.210.16.051.00 石英女表", "model": "", "category": "天梭", "price": 0, "sale_price": 1750, "add_time": 1544719807634 ,qty:1}]
    }

    changeQty = (item, qty) => {
        console.log(item, qty);
        const { dispatch } = this.props;
        dispatch({ type: 'CHANGE_GOODS_QTY', _id: item._id, qty })
    }
    clearCart = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'CLEAR_CART' })
    }
    removeItem = (_id) => {
        const { dispatch } = this.props;
        dispatch({ type: 'REMOVE_FROM_CART', _id })
    }
    componentDidMount() {


    }
    render() {
        console.log('Cart', this)
        // const {datalist} = this.state;
        // const datalist = store.getState().cart.cartlist;
        const { cartlist, totalPrice } = this.props;

        return (
            <div>
                <Steps current={0}>
                    <Steps.Step title="购物车" description="添加到购物车的商品" />
                    <Steps.Step title="下单" description="选择购买的商品并下单" />
                    <Steps.Step title="付款" description="购买商品成功" />
                </Steps>
                <div style={{ marginTop: 30 }}>
                    {
                        cartlist.map((item, idx) => (
                            <Row key={item._id}>
                                <Col span={4} style={{ textAlign: 'center' }}><SketchOutlined style={{ fontSize: 60 }} /></Col>
                                <Col span={16}>
                                    <h4>{item.name}</h4>
                                    <p className="price"><del>{(item.sale_price / 0.8).toFixed(2)}</del><span>{item.sale_price}</span></p>
                                    <div><InputNumber
                                        value={item.qty}
                                        onChange={this.changeQty.bind(this, item)}
                                        min={1}
                                        max={5}
                                        size="small"
                                    /></div>
                                </Col>
                                <Col span={4}>
                                    <Button icon={<CloseOutlined />} size="small" shape="circle" danger onClick={this.removeItem.bind(this, item._id)}></Button>
                                </Col>
                            </Row>
                        ))
                    }
                </div>
                <footer style={{ marginTop: 30 }}>
                    <Row>
                        <Col span={12}>
                            <Button danger onClick={this.clearCart}>清空购物车</Button>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <span className="price">金额：{totalPrice.toFixed(2)}</span>
                            <Button type="primary">立即下单</Button>
                        </Col>
                    </Row>
                </footer>
            </div>
        )
    }
}

// Cart = connect(mapStateToProps,mapDispatchToProps)(Cart)
export default withUser(Cart);

