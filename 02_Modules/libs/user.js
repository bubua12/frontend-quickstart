const user = {
    username: "张三",
    age: 18
}

const isAdult = (age) => {
    if (age > 18) {
        console.log("成年人")
    } else {
        console.log("未成年")
    }
}

// 暴露功能，只有暴露出去的才能被别的引入
export {user, isAdult}

// Java 怎么模块化；
// 1、 druid.jar
// 2、import 导入类

// JS 模块化；
// 1、 xxx.js
// 2、 xxx.js 暴露功能；
// 3、import 导入 xxx.js 的功能
//xxx.js 暴露的功能，别人才能导入
