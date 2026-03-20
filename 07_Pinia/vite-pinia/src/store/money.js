// 每一个js都是一个存储单元，这里是定义 money存储单元

import {defineStore} from 'pinia'

//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)

// 第一个参数是你的应用中 Store 的唯一 ID。定义money存储单元，ID：唯一标识
const useMoneyStore = defineStore('money', {
    // p1:核心数据是什么，写在这里
    state: () => ({money: 100}),
    // p2:给外部提供一些获取方法
    getters: {
        rmb: (state) => state.money,
        usd: (state) => state.money * 0.14,
        eur: (state) => state.money * 0.13,
    },
    // p3:给外部提供一些修改方法
    actions: {
        win(arg) {
            this.money += arg
        },
        pay(arg) {
            this.money -= arg
        }
    }
})

export default useMoneyStore;


// 上面的是选项式写法 Option，还有一个组合式API => 看速通
