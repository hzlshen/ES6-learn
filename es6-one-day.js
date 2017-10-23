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

//箭头函数取代Function.prototype.bid 不再用that之类绑定this
//bad
const self = this;
const boundMethod = function (...params) {
    return method.apply(self,params);
}

//accepable
const boundMethod = method.bind(this);

//best
const boundMethod = (...params)=>method.apply(this,params);

//简单的、单行的、不会复用的函数，建议采用箭头函数。
// 如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。

//bad
function divide(a, b, option = false) {

}

//good
function divide(a, b, {option = false} = {}) {

}
//不要在函数体内使用arguments变量，使用rest运算符（...）代替
//bad
function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}

//good
function concatenateAll(...args) {
    return args.join('');
}

//设置函数参数的默认值
//bad
function handleThings(opts) {
    opts = opts || {};
}

//good
function handleThings(opts = {}) {
    //...
}

//Map 结构
//它內建有遍历机制
let map = new Map(arr);

for(let key of map.keys()){
    console.log(key);
}

for(let value of map.value()){
    console.log(value);
}

for(let item of map.entries()){
    console.log(item[0],item[1]);
}

//用class取代prototype的操作 写法更简洁 姿势更帅
//bad
function Queue(contents = []) {
    this._queue = [...contents];
}
Queue.prototype.pop = function () {
    const value = this._queue[0];
    this._queue.slice(0,1);
    return value;
}

//good
class Queue{
    constructor(contents = []){
        this._queue = [...contents];
    }
    pop(){
        const value = this._queue[0];
        this._queue.slice(0,1);
        return value;
    }
}

//使用extend实现继承

//bad
const inherits = require('inherits');
function PeekableQueue(contents) {
    Queue.apply(this,contents);
}
inherits(PeekableQueue,Queue);
PeekableQueue.prototype.peek = function () {
    return this._queue[0];
}

//good
class PeekableQueue extends Queue{
    peek(){
        return this._queue[0];
    }
}
//模块
//module语法是JavaScript模块的标准写法 坚持使用这种写法
//使用import取代require

//bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

//import
import { func1 , func2 } from  'moduleA';

//使用export取代module.exports

//commonJS的写法
var React = require('react');

var Breadcrumbs  = React.createClass({
    render(){
        return '<nav />';
    }
});

module.exports = Breadcrumbs;

//ES6的写法
import React from 'react';

const Breadcrumbs = React.createClass({
    render(){
        return '<nav />';
    }
});

export default Breadcrumbs;

//不要在模块输入中使用通配符
//bad
import * as myObject from './importModule';

//good
import myObject from  './importModule';

//如果函数默认输出一个函数 函数名首字母应该小写
function makeStyleGuide(){

}
export  default makeStyleGuide;

//如果函数默认一个对象 函数首字母应该大写
const StyleGuide = {
    es6:{

    }
};
export default StyleGuide;

//ESLint的使用
//他是一个语法规则和代码风格的检查工具 可以用来确保语法正确
//安装
 //$ npm i -g eslint

//然后安装Airbnb语法规则

//$ npm i -g eslint-config-airbnb

//最后，在项目的根目录下新建一个.eslintrc文件，配置ESLint。

{
    //"extends": "eslint-config-airbnb"
}
//现在就可以检查，当前项目的代码是否符合预设的规则。

//index.js文件的代码如下。

var unusued = 'I have no purpose!';

function greet() {
    var message = 'Hello, World!';
    alert(message);
}

greet();

//原文件有三个错误，一个是定义了变量，却没有使用，另外两个是行首缩进为4个空格，而不是规定的2个空格。





























































