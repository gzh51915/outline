import React, { Component, PureComponent } from 'react'
import { List, Avatar } from 'antd'
import { withUser } from '../utils/hoc'
import http from '../utils/http'

import './Home.css'

class Home extends Component {
    state = {
        goodslist: []
    }
    async componentDidMount() {
        // const res = await fetch('http://localhost:1915/api/goods');
        // console.log('result=',await res.json())
        const { data } = await http.get('/goods');
        this.setState({
            goodslist: data
        })
    }
    gotoDetail = (id)=>{
        const {history} = this.props

        history.push('/goods/'+id);
    }
    render() {
        const { goodslist } = this.state;
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => (
                        <List.Item onClick={this.gotoDetail.bind(this,item._id)}>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={item.name}
                                description={<div className="price"><del>{(item.sale_price / 0.8).toFixed(2)}</del><span>{item.sale_price.toFixed(2)}</span></div>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

// Home = withUser(Home)

export default Home;