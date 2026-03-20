<script setup>

</script>

<!-- 嵌套路由 -->
<template>
  <h1>我是用户页</h1>
  <h2>欢迎你，{{ $route.params.id }}用户</h2>
<!--  <a>个人信息</a><br/>-->
<!--  <a>未读邮件</a>-->
  <router-link to="/user/1/profile">个人信息页面</router-link>
  <router-link to="/user/1/mail">未读邮件</router-link>

  <div style="width: 300px; height: 200px; border: 2px">
    <router-view/>
  </div>
</template>

<style scoped>

</style>