/*
1、var声明变量存在的问题，及let的引出
1.1 越域问题
总结：以后声明变量，再也不用var，都用let

1.2 重复声明
var可以声明多次
let只能声明一次

1.3 变量提升
var会存在变量提升、let不存在变量提升，推荐使用let
*/
{
    var a = 1;
    let b = 2;
}
console.log(a); // 1
console.log(b); // ReferenceError: b is not defined

var m = 1
var m = 2
let n = 3
let n = 4
console.log(m) // 2
console.log(n) // Identifier 'n' has already been declared

// var 会变量提升
// let 不存在变量提升
console.log(x); // undefined
var x = 10;
console.log(y); // ReferenceError: y is not defined
let y = 20;


/*
2、const声明常量
const用来声明常量，声明之后不允许修改，防止误修改
一旦声明必须初始化，否则会报错
 */

const a = 1;
// a = 3; // Uncaught TypeError: Assignment to constant variable.

/*
3、解构
解构分为数组结构和对象结构
3.1 数组解构

3.2 对象解构
 */
// 数组解构
let arr = [1, 2, 3]
let [x, y, z] = arr;
console.log(z);

// 对象解构
const person = {
    name: "jack",
    age: 21,
    language: ['java', 'javascript', 'python']
}

console.log(person.name);

const {name, age, language} = person;
console.log(age);

// 还可以从对象中把属性单独解出来
const {name} = person;
console.log(name);

/*
4、链判断
场景：如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。

 */
let message = null;
// 错误的写法
const firstName = message.body.user.firstName || 'default';

// 正确的写法
// const firstName = (message
//     && message.body
//     && message.body.user
//     && message.body.user.firstName) || 'default';
// console.log(firstName)

// 这样的层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator）?.，简化上面的写法。
// 可选属性，这个东西不一定有，如果没有就不用继续往下做事了。
const firstName = message?.body?.user?.firstName || 'default';


/*
5、参数默认值
 */

//在 ES6 以前，我们无法给一个函数参数设置默认值，只能采用变通写法：
function add(a, b) {
    // 判断 b 是否为空，为空就给默认值 1
    b = b || 1;
    return a + b;
}

// 传一个参数
console.log(add(10));

//现在可以这么写：直接给参数写上默认值，没传就会自动使用默认值
function add2(a, b = 1) {
    return a + b;
}

// 传一个参数
console.log(add2(10));


/*
6、箭头函数
 */
// 以前声明一个方法
var print = function (obj) {
    console.log(obj);
}
// 可以简写为
var printx = obj => console.log(obj);

// 测试调用
print(100)

// 对于两个参数的情况
var sum = function (a, b) {
    return a + b;
}
// 可以简写为如下的样式。
// 1.1 当只有一行语句，并且需要返回结果时，可以省略{}，结果会自动返回
var sum2 = (a, b) => a + b;

// 1.2 当代码不止一行，可以用{}括起来
var sum3 = (a, b) => {
    c = a + b;
    console.log(c);
    return c;
}

/*
7、Promise
代表 异步对象，类似 Java中的CompletableFuture
 */
// 1、先看一下什么是fetch
// fetch 是浏览器支持从远程获取数据的一个函数，这个函数返回的就是 Promise 对象
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`已收到响应：${response.status}`);
})

// 关于嵌套的Promise
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((json) => {
        console.log(json[0].name);
    });
});

// 对于 Promise对象，有三种状态
// ● 待定（pending）：初始状态，既没有被兑现，也没有被拒绝。这是调用 fetch() 返回 Promise 时的状态，此时请求还在进行中。
// ● 已兑现（fulfilled）：意味着操作成功完成。当 Promise 完成时，它的 then() 处理函数被调用。
// ● 已拒绝（rejected）：意味着操作失败。当一个 Promise 失败时，它的 catch() 处理函数被调用。


/*
Promise对象
 */
const promise = new Promise((resolve, reject) => {
    if('异步操作成功') {
        // 调用 resolve，代表 Promise 将返回成功的结果
        resolve(value);
    } else {
        // 调用 reject，代表 Promise 会返回失败结果
        reject(error);
    }
})


/*
Async关键字
由于Promise的写法比较麻烦，因此出来了这个Async
Async主要目的是希望 把Promise.then的各种写法，转换为 同步代码块写法的方式，增强可读性
 */
async function myFunction() {
    // 这是一个异步函数
}

async function fetchProducts() {
    try {
        // 加了await，我们的函数将等待fetch调用完成
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if(!response.ok) {
            throw new Error(`HTTP请求错误：${response.status}`)
        }

        // 加了await，我们的函数将等待response.json调用完成
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(`无法获取产品列表：${error}`);
    }
}

fetchProducts();
