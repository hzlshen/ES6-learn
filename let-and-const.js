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

//let 不能声明提前
//var

console.log(foo);
console.log(bar);

var foo = 3;  //undefined
let bar = 3; //ReferenceError: bar is not defined




