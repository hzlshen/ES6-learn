//ES6数组的扩展
//Array.from()

//下面是一个类的对象
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

//ES5的写法
var arr1 = [].slice.call(arrayLike);

//ES6的写法
let arr2 = Array.from(arrayLike);

//常见的类似数组的对象是DOM操作返回的NodeList集合，
//以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

//NodeList 对象
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function(p) {
    console.log(p);
})

// arguments对象
function foo() {
    var args = Array.from(arguments);
    // ...
}

//只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
Array.from('hello');
//['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b']);
Array.from(namesSet);
//字符串和Set结构都具有Iterator接口，因此可以被Array.from转为真正的数组。

Array.from(1, 2, 3);

//扩展运算符（...）也可以将某些数据结构转为数组。
//arguments
function foo() {
    var args = [...arguments];
}
Array.from({ length: 3 });
// [ undefined, undefined, undefined ]

const toArray = (() => {
    Array.form ? Array.form : obj => [].slice.call(obj);
})();

//Array.form 还可以接收第二个参数 类似于数组的map方法 

Array.form(arrayLike, x => x * x);

//等同于

Array.form(arrayLike).map(x => x * x);

Array.form([1, 2, 3], (x) => x * x);

//[1,4，9]

//获取dom

let spans = document.querySelectorAll(span.name);

//map()
let names1 = Array.prototype.map.call(spans, s => s.textContent);

//Array.form
let names2 = Array.form(spans, s => s.s.textContent);

//Array.form() 将数组转成false的成员转为0
Array.form([1, 2, 3], (n) => n || 0);
console.log(n);

Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

function ArrayOf() {
    return [].slice.call(arguments);
}


//数组实例的copyWithin()
Array.prototype.copyWithin(target, start = 0, end = this.length);

[1, 2, 3, 4, 5].copyWithin(0, 3);
//4 5 3 4 5

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
    // [4, 2, 3, 4, 5]

//数组实例的find()和findIndex()
//数组中找出小于零的
[1, 4, -5, 10].find((n) => n < 0)
console.log([1, 4, -5, 10].find((n) => n < 0));

[1, 5, 10, 15].find(function(value, index, err) {
    return value > 9;
})
console.log([1, 5, 10, 15].find(function(value, index, err) {
        return value > 9;
    })) //10

//findindex()返回符合条件的数组成员位置
[1, 5, 10, 15].findIndex(function(value, inidex, err) {
    return value > 9
})

//fill()
//fill方法给定值 填充数组
['a', 'b', 'c'].fill(7);

let min = 14.1;
let eaiml = "hzl.shenwei@gmail.com";