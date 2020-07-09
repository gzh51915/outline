// 基础类型
let page:number = 1;

// page = 'abc' // 报错
page = 10;


// 联合类型

let age:number|string = 1 ;
let qty:number|string = 1 ;

// // 类型别名
// let myType = number|string;
// let a:myType = 10;

// 类型推论
let username = 'laoxie';

// username = 100

// 数组的类型
const numberlist:number[] = [10,20,30];
const userlist:Array<string> = ['laoxie','jingjing'];

// 复杂数组类型定义：接口
interface IGoods{
    name:string,
    price:number,
    imgurl:string,
    oldPrice?:number
}
interface IGoodsList{
    [index:number]:IGoods
}
const goodslist:IGoodsList = [{name:'good1',price:998,imgurl:'img/goods1.jpg',oldPrice:1000},{name:'good1',price:998,imgurl:'img/goods1.jpg'}]


// 元组
let arr:[number,number,string] = [10,20,'h5']