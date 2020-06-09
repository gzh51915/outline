import React, { Component,PureComponent } from 'react'
import {withUser} from '../utils/hoc'

import './Home.css'

@withUser
class Home extends Component {
    // 给实例添加属性
    // static defaultProps = {

    // }
    // 给实例添加方法
    gotoLogin = ()=>{
        console.log(this.props);
        const {history} = this.props;
        // 只要获取到history对象就可以进行跳转
        // 等效于Link中的to属性
        history.push('/login')

    }
    gotoReg = ()=>{
        const {history} = this.props;
        history.push({
            pathname:'/reg',
            search:'?id=123',
            state:{
                username:'laoxie'
            }
        })
    }
    
    // 给原型添加方法
    // gotoReg(){

    // }
    render() {
        console.log('Home',this);
        return (
            <div>
                {/* <header className='header'>
                    <button onClick={this.gotoReg}>注册</button>
                    <button onClick={this.gotoLogin}>登录</button>
                </header> */}
                Home


            </div>
        )
    }
}

// Home = withUser(Home)

export default Home;