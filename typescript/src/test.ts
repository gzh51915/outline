// 基础类型
let page:number = 1;

// page = 'abc' // 报错
page = 10;


// 联合类型

let age:number|string = 1 ;
let qty:number|string = 1 ;

// // 类型别名
type myType = number|string;

let a:myType = 10;

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

/*
    对象类型校验：接口interface
        * 可选属性： ?
        * 只读属性：readonly
        * 任意类型：any
        * 方法类型：say():viod
*/

interface IPerson{
    username:string,
    readonly age:number,
    gender:string,
    say():string

    // 任意属性
    // [propName:string]:any
}

var person:IPerson = {
    username:'laoxie',
    age:18,
    gender:'男',
    // password:1213,
    // email:'laoxie@qq.com',
    say(){
        return 'hello my name is' + this.username
    }
}

person.gender = 'male';


/*
    函数类型校验
        * 声明式函数
        * 表达式函数
        * 参数
            * 可选
            * 默认
*/

// 声明式函数
interface IResult{
    code:number,
    data:Array<number>,
    msg:string
}
type pageType = number | string;

function getData(page:pageType,size:number=10):IResult{
    console.log(size);//20
    return {
        code:200,
        data:[],
        msg:'success'
    }
}

getData(1,20)

const getUser:(id:number)=>number = function(id:number):number{
    return 100
}

/*
    泛型编程
*/

function identity<T>(arg: T): T {
    return arg;
}

identity(10);// number
identity('/home');// string


/*
    类：与ES6一致
*/
class Student{
    // constructor(){
    //     this.name = ''
    // }
    name:string; // 等效于 public name:string = 'laoxie'
    private type:string = 'student';
    protected age:number = 18;

    constructor(name:string){
        this.name = name
    }

    hello(){
        this.name;//
        this.type;//student
        this.age;//
    }
}

const s = new Student('laoxie');

s.name;//laoxie
// s.type
// s.age;


class Man extends Student{
    constructor(name:string){
        super(name);
        this.age;
    }
}

// import xxx from 'xxx'