// 所有的功能不用写在一个JS中
import {user,isAdult} from './libs/user.js'


alert("当前用户："+user.username)

isAdult(user.age);