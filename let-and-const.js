//let只在其所在代码块有效 var 不是
//let严格 var垃圾
{
    let a = 10 ;
    var b = 1;
}
//console.log(b);  //1
//console.log(a);  //ReferenceError: a is not defined

//for循环 很适合用let命令
for (let i = 0; i< 10 ;i++){ }
console.log(i);  //ReferenceError: i is not defined
//i只在for循环体内有效，在循环体外引用就会报错。

//用var
var a = [];
for(var i = 0 ; i<10; i++){
    a[i] = function () {
        console.log(i);
    }
}
a[6](); // 10
//i 是全局的 以致每次循环新的i都会覆盖旧的i 导致输出的是最后一轮的i
//如果是let
var b  = [];
for(let i = 0 ; i<10 ; i++){
    b[i] = function () {
        console.log(i);
    }
}
b[6]();  //6
//变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量

//let 不存在声明提前
//var

console.log(foo);
//console.log(bar);

var foo = 3;  //undefined
let bar = 3; //ReferenceError: bar is not defined

//只要块级作用域存在let命令 它所声明的变量就绑定在这个区域 不受外部影响
var tmp = 123;
if(true){
    //tmp = 'abc';//ReferenceError: tmp is not defined
    //let tmp;
}
//局部干掉了全局 tmp 被声明提前 所以报错

//在代码块内，使用let命令声明变量之前，该变量都是不可用的。
// 这在语法上，称为“暂时性死区”（temporal dead zone，简称TDZ）。
if (true){
    //TDZ开始
    //tmp = 'abc';// ReferenceError
    //console.log(tmp);// ReferenceError

    let tmp ;//TDZ结束
    console.log(tmp); //undefined

    tmp = 124;
    console.log(tmp);  //124
}
//在let命令声明变量tmp之前，都属于变量tmp的“死区”。

/*function bar(x = y, y = 2) {
    return [x, y];
}*/

//bar(); // 报错

//是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“。
// 如果y的默认值是x，就不会报错，因为此时x已经声明了。
function dis(x = 2, y = x) {
    return [x, y];
}
dis();

//不允许重复声明
//let 不允许在相同的作用域内 重复声明一个变量

//报错
// function() {
//     let a = 10;
//     var a = 1;
//}

//报错
/*function () {
    let a = 10;
    let a = 1;
}*/

//因此 不能在函数内部重新声明参数
/*function func(arg) {
    let arg;  //报错
}*/
function func(arg) {
    {
        let arg;  //不报错
    }
}

//块级作用域
//为什么需要
//ES5只有全局作用域和函数作用域 没有块级作用域者带来很多不合理的场景
//第一种场景 内层变量可能会覆盖外层变量

var tmp = new Date();

function f() {
    console.log(tmp);
    if(false){
        var tmp = "hello word";
    }
}
f()   //undefinde
//原因在于变量提升 导致内层的tmp覆盖外层的

//第二种场景 用来计数的循环变量泄露为全局变量

var s = 'hello';
for(var i = 0; i<s.length;i++){
    console.log(s[i]);
}
console.log(i);// 5
//变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。

//let新增了块级作用域
function f1() {
    let n = 5;
    if (true){
        let n =10;
    }
    console.log(n);
    //都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。
    // 如果使用var定义变量n，最后输出的值就是10。
}
//ES6允许块级作用域的任意嵌套
{{{{{let insane = 'hello world'}}}}};

//外层作用域无法读取内层作用域的变量。

{{{{
    {let insane = 'Hello World'}
    console.log(insane); // 报错
}}}};
//内层作用域可以定义外层作用域的同名变量。

{{{{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
}}}};

//IIFE写法
(function () {
//    var tmp = ...;
}());

//块级作用域和函数声明
//函数能不能在块级作用域中声明 是一个相当令人混淆的问题
//ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

//情况一
if(true){
    function f() {
    }
}
//情况二
try{
    function f() {
    }
}catch (e){

}
//上面代码的两种函数声明，根据ES5的规定都是非法的。
//ES5严格模式下会报错
//ES6不会

//ES6规定 块级作用域之中 函数声明语句的行为类似于let 在块级作用域之外不可引用
function f() {
    console.log("I'm shuaige");
}
(function(){
    if (false){
        //重复声明一次函数f
        function f() {
            console.log("I'm shuaige");
        }
    }
    f();
}())

// ES5下运行实际是这样子的
function f() { console.log('I am outside!'); }
(function () {
    function f() { console.log('I am inside!'); }
    if (false) {
    }
    f();
}());
// ES6是这样子的
function f() { console.log('I am outside!'); }
(function () {
    f();
}());

//前面那段代码，在 Chrome 环境下运行会报错。

// ES6的浏览器环境
function f() { console.log('I am outside!'); }
(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());
// Uncaught TypeError: f is not a function
//上面的代码报错，是因为实际运行的是下面的代码。

// ES6的浏览器环境
function f() { console.log('I am outside!'); }
(function () {
    var f = undefined;
    if (false) {
        function f() { console.log('I am inside!'); }
    }

    f();
}());
// Uncaught TypeError: f is not a function

//如果确实需要，也应该写成函数表达式，而不是函数声明语句。

//函数声明语句
{
    let a = 'select';
    function f() {
        return a;
    }
}

//函数表达式
{
    let a = 'select';
    let f = function () {
        return a ;
    }
}
//ES6的块级作用域允许声明函数的规则，
// 只在使用大括号的情况下成立，如果没有使用大括号，就会报错。
// 不报错
// 'use strict';
if (true) {
    function f() {}
}

// 报错
// 'use strict';
if (true)
    function f() {}

//do 表达式 本质上块级作用域是一个语句 将多个操作封装在一起 没有返回值
{
    let t = f();
    t = t*t+1;
}
//块级将两个语句封装到一起 但是在块级之外是没办法得到t的值 因为块级作用域不返回值
//除非t是全局变量
//现在 有一个操作 让这个块级作用域有返回值 办法就是在块级作用域之前加do
let x = do{
    let t = f();
    t * t+1;
}
//变量x 会得到整个块级作用域的返回值

//const命令
//const声明一个只读的常量。一旦声明，常量的值就不能改变。





























































