<script setup>
import {reactive, ref} from "vue";

let name = "布布";
let price = 1;

let msg = "<p style='color: red'>Hello World</p>";

function buy() {
  alert("购买成功")
}

let foods = ['Apple', 'Banana', 'Orange'];

let url = "https://www.bilibili.com"

let address = ref("192.168.31.120")

function changeAddress() {
  console.log(address)
  address.value = "www.bubua12.com"
}

let car = reactive({
  brand: '小米 Su7 Max',
  price: 299998
})

function addPrice() {
  car.price += 100
}
</script>

<template>
  <!-- 插值 -->
  <h2>姓名：{{ name }}</h2>

  <!-- 2、指令 v-xxx
   基础指令：v-html、v-text
   事件指令：v-on
   判断指令：v-if
   循环指令：v-for
   -->
  <div v-html="msg"></div>
  <button v-on:click="buy">购买</button>
  <br/>
  <button @click="buy">购买</button>
  <br/>

  <span style="color: green" v-if="price < 1000">很便宜</span>
  <span style="color: red" v-else-if="price > 1000">太贵啦</span>

  <br/>
  <li v-for="food in foods">{{ food }}</li>
  <br/>
  <li v-for="(food, index) in foods">{{ food }} ==> {{ index }}</li>

  <!-- 3、属性绑定 v-bind -->
  <a v-bind:href="url">出发</a>
  <!-- 简写为冒号，标签上的所有属性，无论是官方定义的（style、id、class）还是自定义的，属性值都可以使用v-bind进行绑定 -->
  <a :href="url">出发</a>
  <br/>

  <!-- 4、响应式：ref()、reactive()
   ref():
   1、把基本数据使用 ref() 包装成响应数据
   2、使用 代理对象.value = "" 修改新值
   3、页面取值，查看还是直接 {{变量名}}

   reactive():
   1、把对象类型使用reactive()包装成响应式数据、reactive()只能包对象
   2、使用代理对象时不用.value
   3、页面取值，查看还是直接 {{变量名}}


   最佳实践:
   1、我该使用哪个函数？答：可以ref()一把梭、也可以ref()包装基本数据、reactive()包装对象
   2、使用const声明响应式常量
   3、响应式数据具有深层响应式特性（属性.属性.属性 也都是响应式的）
   -->
  <button @click="changeAddress">修改地址</button>
  <h3>{{ address }}</h3>

  <br/>
  <h3>车的信息: {{ car.brand }}, {{ car.price }}</h3>
  <button @click="addPrice">加价</button>

</template>

<style scoped>

</style>