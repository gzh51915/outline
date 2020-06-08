import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';

import { Route,HashRouter,BrowserRouter,Link,NavLink,Redirect,Switch,withRouter } from 'react-router-dom';


function App(props) {
    console.log('App',props);
    const {history} = props;
    const gotoReg = ()=>{
        history.push('/reg')
    }
    const gotoLogin = ()=>{
        history.replace('/login');
    }
    return (
        <div>
            {/* <Home a={10} username='laoxie' />
            <Login />
            <Reg /> */}
             <header className='header'>
                <button onClick={gotoReg}>注册</button>
                <button onClick={gotoLogin}>登录</button>
            </header>
            {/* <HashRouter> */}
                {
                    // Route 只要path匹配浏览器路径，则渲染component中的组件
                }
                <Switch>
                    {/* <Route path='/' component={Home} exact /> */}
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/notfound" component={()=><div>404</div>} />
                    <Redirect from="/" to="/home" exact /> 
                    <Redirect to="/notfound" /> 
                </Switch>


                {/* <button><NavLink to="/home" activeStyle={{color:'#f00'}}>Home</NavLink></button>
                <button><NavLink to="/login" activeStyle={{color:'#f00'}}>Login</NavLink></button>
                <button><NavLink to="/reg" activeStyle={{color:'#f00'}}>Reg</NavLink></button> */}

            {/* </HashRouter> */}
            
        </div>

    )
}

App = withRouter(App);


export default App;