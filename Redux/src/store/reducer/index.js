import { combineReducers } from 'redux';

import cartReducer from './cart'
import commonReducer from './common'

//合并Reducer
const allReducers = {
    common: commonReducer,
    cart: cartReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;