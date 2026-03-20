<script setup>

import useMoneyStore from "../store/money.js";

  const moneyStore = useMoneyStore()

</script>

<template>
  <h1>我的钱包</h1>
  <div>
    人民币：{{ moneyStore.rmb }}<br/>
    美 元：{{ moneyStore.usd }}<br/>
    欧 元：{{ moneyStore.eur }}<br/>
  </div>
</template>

<style scoped>

</style>