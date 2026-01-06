<script setup>
let name = "布布";
let price = 1;

let msg = "<p style='color: red'>Hello World</p>";

function buy() {
  alert("购买成功")
}

let foods = ['Apple', 'Banana', 'Orange'];

let url = "https://www.bilibili.com"
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

</template>

<style scoped>

</style>