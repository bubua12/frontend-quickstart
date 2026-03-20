<script setup>
import Wallet from "./components/Wallet.vue";
import Game from "./components/Game.vue";
</script>

<template>

  <!-- 不同组件要操作同一种数据，把数据用pinia共享一下即可 -->
  <!-- 1、基本上是用这个来替换之前的父子组件传值，可以完全替代父子组件传值 -->
  <Wallet/>
  <Game/>
</template>

<style>

</style>
