// 初始化状态（数据）
const initState = {
    user: {
        username: 'laoxie'
    },
    menuVisible: true
}

/**
 * reducer是在redux内部被调用，并自动传入以下两个参数，一定要返回一个新的state
 * 注意：修改state的原则 -> 重新创建一个数据并覆盖
 * @param {Object} state 
 * @param {Object} action   {type:'CHANGE_USER',user},{type:'CHANGE_MENU_VISIBLE'}
 */
function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_USER':
            return {
                ...state,
                user: action.user
            }
        case 'CHANGE_MENU_VISIBLE':
            return {
                ...state,
                menuVisible: action.menuVisible
            }
        default:
            // 如果以上条件都不满足，则返回最新的state
            return state;

    }
}

export default reducer;