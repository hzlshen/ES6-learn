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




































