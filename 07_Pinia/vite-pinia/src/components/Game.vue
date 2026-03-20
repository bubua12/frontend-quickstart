<script setup>

import useMoneyStore from "../store/money.js";

const moneyStore = useMoneyStore();

const guaguale = (arg) => {
  moneyStore.win(arg)
}

const bugAirplane = (arg) => {
  moneyStore.pay(arg)
}
</script>

<template>
  <h1>游戏组件</h1>

  <button @click="guaguale(100)">刮刮乐</button>
  <br/>
  <button @click="bugAirplane(50)">买飞机</button>
</template>

<style scoped>

</style>