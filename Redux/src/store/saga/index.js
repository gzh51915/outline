import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import http from '../../utils/http';
import {message} from 'antd'

// saga配置

function* changeQty({_id,qty}) {
    // console.log('changeQty=',_id,qty);

    // 请求服务器获取库存数量
    const {data:kucun} = yield call(http.get,'/goods/kucun',{
        _id,
    });

    // 得到库存后，与下单的数量进行对比
    // kucun >= qty 正常修改数量
    // kucun < qty 最多展示数量为库存数量

    if(qty > kucun){
        qty = kucun;
        message.error('库存不足，当前商品只剩'+kucun + '个') 
    }

    // 触发reducer action
    yield put({type:'CHANGE_GOODS_QTY',_id,qty});

    console.log('kucun=',kucun);
}

function* Mysaga() {
    // console.log('start');
    // yield 100;
    // console.log('end');

    yield takeLatest('CHANGE_GOODS_QTY_ASYNC', changeQty);
}

export default Mysaga;