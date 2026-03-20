<script setup>

import {useRouter} from "vue-router";
import axios from "axios";
import {ref} from "vue";

const router = useRouter()

function login() {
  alert("登录成功")
  // 跳转到用户页面
  // 1、拿到路由器 编程式导航
  // let router = useRouter()
  // 2、进行跳转
  router.push('/user/5/profile')
}

const respData = ref("未获取到数据")

function getTest() {
  axios.get("http://localhost:9200/user", {
    // 自动把数据放到url后面，最终的路径是：url?k=v&k=v 这里叫做查询字符串
    params: {
      pageNum: 1,
      pageSize: 1
    }
  }).then(resp => {
    console.log(resp)
    respData.value = resp.data
  })
}

function postTest() {
  axios.post("http://localhost:9200/user", {
    username: "wangbubu",
  }).then(resp => {
    console.log(resp.data)
  })
}

</script>

<template>
  <!-- 1、VueRouter：跳到页面，发送请求给后端，后端不需要处理页面跳转的逻辑了 -->
  <!--  <a>首页</a>-->
  <!--  <a>订单</a>-->
  <!--  <a>用户</a>-->

  <router-link to="/">首页</router-link>
  <router-link to="/user/1">用户</router-link> <!--路径参数-->
  <router-link to="/order">订单</router-link>

  <!-- fixme 这里说的按钮里面包一个router-like为啥不行？ -->
  <br/>
  <button @click="login">点击跳转</button>

  <button @click="getTest ">发送GET</button>
  <button @click="postTest">发送POST</button>
  <button>发送GET</button>
  <button>发送GET</button>

  <router-view/>

  <div>
    响应数据：{{ respData }}
  </div>

</template>

<style>
a {
  margin-left: 20px;
}
</style>
