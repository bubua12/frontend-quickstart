import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 这里默认就是导入文件夹下面的index.js

// createApp(App).mount('#app')
const app = createApp(App);
// 这里要使用 vue-router
app.use(router)

app.mount('#app')

