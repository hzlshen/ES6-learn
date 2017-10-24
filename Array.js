//ES6数组的扩展
//Array.from()

//下面是一个类的对象
let arrayLike = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    length : 3
};

//ES5的写法
var arr1 = [].slice.call(arrayLike);

//ES6的写法
let arr2 = Array.from(arrayLike);

//常见的类似数组的对象是DOM操作返回的NodeList集合，
//以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

//NodeList 对象
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function(p){
    console.log(p);
})