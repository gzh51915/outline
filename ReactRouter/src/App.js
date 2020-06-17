import React,{Suspense,lazy} from 'react';

// 传统路由加载方式
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Reg from './pages/Reg';
// import Cart from './pages/Cart';
// import Goods from './pages/Goods';
// import Category from './pages/Category';

// 路由懒加载
// 需安装：@babel/plugin-syntax-dynamic-import
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Reg = lazy(() => import("./pages/Reg"));
const Cart = lazy(() => import("./pages/Cart"));
const Goods = lazy(() => import("./pages/Goods"));
const Category = lazy(() => import("./pages/Category"));

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
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        {/* <Route path='/' component={Home} exact /> */}
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/cate" component={Category}/>
                        <Route path="/goods/:id" component={Goods} />
                        <Route path="/notfound" component={()=><div>404</div>} />
                        <Redirect from="/" to="/home" exact /> 
                        <Redirect to="/notfound" /> 
                    </Switch>
                </Suspense>

                {/* <button><NavLink to="/home" activeStyle={{color:'#f00'}}>Home</NavLink></button>
                <button><NavLink to="/login" activeStyle={{color:'#f00'}}>Login</NavLink></button>
                <button><NavLink to="/reg" activeStyle={{color:'#f00'}}>Reg</NavLink></button> */}

            {/* </HashRouter> */}
            
        </div>

    )
}

App = withRouter(App);


export default App;