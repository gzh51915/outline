import { createStore,applyMiddleware,compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// 1. 引入redux-saga
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer/index.js'
import mySaga from '../store/saga'

// 2. 利用redux-saga创建一个中间件
const sagaMiddleware = createSagaMiddleware();
// console.log('sagaMiddleware',sagaMiddleware)
// 3.将 sagaMiddleware 连接至 Store
let enhancer = applyMiddleware(sagaMiddleware);
// console.log('enhancer',enhancer)

const devTools = composeWithDevTools();

const rootMiddleware = compose(enhancer,devTools)

const store = createStore(reducer,rootMiddleware);

// 4.运行 Saga配置
sagaMiddleware.run(mySaga);

// function * show(){
//     console.log('start');
//     yield 'laoxie';
//     console.log(1)      // next()
//     yield 'jingjing';
//     console.log('end')
// }
// const it = show();// suspended挂起
// for(let item of it){
//     // it.next()
//     console.log('item=',item)
// }
// console.log('it1=',it.next());
// console.log('it2=',it.next());


export default store;