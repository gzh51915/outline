import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';
import Cart from './pages/Cart';
import Goods from './pages/Goods';
import Category from './pages/Category';

import { Route, HashRouter, BrowserRouter, Link, NavLink, Redirect, Switch, withRouter } from 'react-router-dom';
import { Layout, Button, Badge, Row, Col } from 'antd'
import { ShoppingCartOutlined, AliyunOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
// import 'antd/dist/antd.css'

const { Header, Content, Sider, Footer } = Layout


function App(props) {
    console.log('App', props);
    const { history } = props;
    const goto = (path) => {
        history.push(path);
    }
    return (
        <Layout>
            <Header style={{ padding: '0 20px' }}>
                {/* <Home a={10} username='laoxie' />
                <Login />
                <Reg /> */}
                <header className='header'>
                    <Row>
                        <Col span={12} style={{ textAlign: 'left' }}>
                            <AliyunOutlined style={{ color: '#fff', fontSize: 40, verticalAlign: 'middle' }} onClick={() => {
                                goto('/home')
                            }} />
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Badge count={props.cartCount} showZero>
                                <Button type="link" icon={<ShoppingCartOutlined />} onClick={() => {
                                    goto('/cart')
                                }}>购物车</Button>
                            </Badge>

                            <Button type="link" onClick={() => {
                                goto('/reg')
                            }}>注册</Button>
                            <Button type="link" onClick={() => {
                                goto('/login')
                            }}>登录</Button>
                        </Col>
                    </Row>

                </header>

            </Header>
            <Content style={{ padding: 20 }}>

                {/* <HashRouter> */}
                {
                    // Route 只要path匹配浏览器路径，则渲染component中的组件
                }
                <Switch>
                    {/* <Route path='/' component={Home} exact /> */}
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/cate" component={Category} />
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/notfound" component={() => <div>404</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>


                {/* <button><NavLink to="/home" activeStyle={{color:'#f00'}}>Home</NavLink></button>
                    <button><NavLink to="/login" activeStyle={{color:'#f00'}}>Login</NavLink></button>
                    <button><NavLink to="/reg" activeStyle={{color:'#f00'}}>Reg</NavLink></button> */}

                {/* </HashRouter> */}
            </Content>

        </Layout>

    )
}

App = withRouter(App);

App = connect(state => ({
    cartCount: state.cart.cartlist.length
}))(App);

export default App;