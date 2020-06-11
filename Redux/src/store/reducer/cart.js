// 初始化状态（数据）
const initState = {
        cartlist: [{ "_id": "5c128dc0afe9c8dcfcc6e1e2", "name": "天梭TISSOT-库图系列 T035.617.11.051.00 石英男表", "model": "", "category": "天梭", "price": 0, "sale_price": 3080, "add_time": 1544719807634,qty:4 }, { "_id": "5c128dc0afe9c8dcfcc6e1e3", "name": "天梭TISSOT-库图系列 T035.210.16.051.00 石英女表", "model": "", "category": "天梭", "price": 0, "sale_price": 1750, "add_time": 1544719807634 ,qty:1}],
}

/**
 * reducer是在redux内部被调用，并自动传入以下两个参数，一定要返回一个新的state
 * 注意：修改state的原则 -> 重新创建一个数据并覆盖
 * @param {Object} state 
 * @param {Object} action   {type:'CHANGE_USER',user},{type:'CHANGE_MENU_VISIBLE'}
 */
function reducer(state = initState, action) {
    switch (action.type) {

        // 购物车操作
        // {type:'ADD_TO_CART',goods}
        case 'ADD_TO_CART':
            return {
                ...state,
                cartlist: [action.goods, ...state.cartlist]
            }

        // {type:'REMOVE_FROM_CART',_id}
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartlist: state.cartlist.filter(item => item._id !== action._id)
            }
        // {type:'CLEAR_CART'}
        case 'CLEAR_CART':
            return {
                ...state,
                cartlist: []
            }

        // {type:'CHANGE_GOODS_QTY',_id,qty}
        case 'CHANGE_GOODS_QTY':
            const cartlist = state.cartlist.map(item => {
                if (item._id === action._id) {
                    item.qty = action.qty;
                }
                return item;
            });
            return {
                ...state,
                cartlist
            }

        default:
            // 如果以上条件都不满足，则返回最新的state
            return state;

    }
}

export default reducer;