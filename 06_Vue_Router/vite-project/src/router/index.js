// 这里写所有路由有关的配置
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Order from "../views/Order.vue";

import {createMemoryHistory, createRouter} from "vue-router";
import Profile from "../views/user/Profile.vue";
import Mail from "../views/user/Mail.vue";

// 1、路由表
const routes = [
    {path: '/', component: Home},
    {
        path: '/user/:id',
        component: User,
        children: [
            {
                path: 'profile', // 用户信息 /usr/1/profile
                component: Profile,
            },
            {
                path: 'mail',
                component: Mail,
            }
        ]
    },
    {path: '/order', component: Order}
]

// 2、创建路由器（路由表只是路由器里面的一个条目）
const router = createRouter({
    history: createMemoryHistory(),
    routes: routes, // 可以直接简写成 routes
})


// 3、让Vue App使用这个路由器

export default router;