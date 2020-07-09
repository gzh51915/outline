# Typescript
* typescript的作用
    * 类型校验
    * 检测与调试

> TS是专门为大型项目而设置的

* js写法
```js
    var page = 1;

    page++

    page = 'abc';
```

* ts写法
```ts
    var page:number = 1;
    var age = 18;
```

* 类型校验
    * 基本类型校验
    * 复杂数据类型校验
        * 数组
        * 对象
        * 函数
    * 特殊类型
        * any
* 类型断言
>格式：value as xxx
```js
    goods = {
        qty:10
    }
    person.qty = 10;
    (person as goods).qty = 10;
```

* 泛型编程

* 类型

* 命名空间
```js
    var a = {
        username:'aaa'
    }
    var b = {
        username:'bbb'
    }
    // var username = 'aaa'
    // var username = 'bbb'
    a.username;
    b.username;
```

* 类型声明文件
> 后缀：xxx.d.ts