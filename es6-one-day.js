/**
 * Created by Administrator on 2017/10/18.
 */
//ES6编程风格

//1、块级作用域
//let 取代 var
'use strict';
if(true){
    let x = 'hello';
}
for(let i = 0; i<10; i++){
    console.log(i);
}
//var 命令存在变量提升效用  let命令没有这个问题
'use strict';
if(true){
    //console.log(x);
    let x = 'word';  //如果用var console.log()就不会报错 而是undefined
}
//使用const 有利于提升程序的运行效率

var a = 1,b=2,c= 3;
//good
const a = 1;
const b = 2;
const c = 3;

//best
const [a,b,c] = [1,2,3];
//const声明的是常用 有利防止无意间改变量值导致错误

// 字符串 静态使用单引号 或者小撇号  不使用双引号 动态一律小撇
//bad
const a ="foobar";

//acceptable
const c = `foobar`;

//good
const a = `foobar`;
const b = `foo{a}bar`;

//解构赋值
//使用数组成员对变量赋值 优先使用解构赋值
const arr =  [1,2,3,4];

//错误的
const first = arr[0];
const second = arr[1];

//good
const [first,second] = arr;

//函数的参数如果也事对象成员 也解构
//bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
}

//good
function getFullName(obj) {
    const { firstName,lastName } = obj;
}

//best
function getFullName({firstName, lastName}) {

}

//返回多个值 依然对象解构fuzhi
//bad
function processInput(input) {
    return [left,right,top,bottom];
}

//good
function processInput(input) {
    return { left,right,top,bottom };
}

const {left,right} = processInput(input);

//定义对象 单行不能逗号结尾 多行以逗号结尾
//错误写法
const a ={ k1:v1,k2:v2,};
const b = {
    k1:v1,
    k2:v2
}

//good code
const a ={ k1:v1,k2:v2};
const b = {
    k1:v1,
    k2:v2,
}
//对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。

//错误
const a ={};
a.x= 3;

//如果要添加
const a = {};
Object.assign(a,{x:2});

//good
const a = { x:null };
a.x = 3;

//如果是动态的 使用属性表达式定义
//bad
const obj = {
    id:5,
    name:'mary',
};
obj[getKey('emable')] = true;
//good
const obj ={
    id:2,
    name:'getbum',
    [getKey('hhehh')]:true
}

//对象的属性和方法 尽量采用简洁表达方法
//如
var ref = 'some value';

//bad
const atom = {
    ref:ref,
    value:1,
    addValue:function (value) {
        return atom.value+value;
    },
};

//good
const atom = {
    ref,
    value:1,
    addValue(value){
        return atom.value+value;
    },
};

//拷贝数组
//bad
const len = items.length;
const itemsCopy = [];

let i;

for(i = 0; i<len ; i++){
    itemsCopy[i] = items[i];
}

//good
const itemsCopy = [...items];

// 使用Array.from方法，将类似数组的对象转为数组。
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);

//箭头函数
(()=>{
    console.log('hello word');
})();

//需要函数表达式的场景 用箭头函数

//bad
[1,2,3].map(function (x) {
    return x*x ;
});

//good
[1,2,3].map((x)=>{
    return x*x ;
});

//best
[1,2,3].map(x=>x*x);




















