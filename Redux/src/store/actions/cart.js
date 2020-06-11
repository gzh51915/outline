
/**
 * Action Creator
 * 一个封装action的函数，用于简化action的写法
 */

function add(goods){
    return {
        type:'ADD_TO_CART',
        goods
    }
}
function changeQty(_id,qty){
    return {
        type:'CHANGE_GOODS_QTY',
        _id,
        qty
    }
}
function clear(){
    return {
        type:'CLEAR_CART',
    }
}
function remove(_id){
    return {
        type:'REMOVE_FROM_CART',
        _id
    }
}


export default {
    add,
    remove,
    clear,
    changeQty
}