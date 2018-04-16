import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Validator from 'vue-validator'

// 首页导航条
import Home from '@/view/home'
// 注册
import Register from '@/view/register'
// 登录
import Login from '@/view/login'
// 首页内容
import Hello from '@/view/home_content/hello'
// 个人信息
import Personal from '@/view/information/personal'

// 个人中心模块模块
import User from '@/view/user/user'
import UserInformation from '@/view/user/userInformation'

// 搜索模块
import Search from '@/view/search/search'

// 详细页模块
import Description from '@/view/desciption/description'


Vue.use(Router)
Vue.use(Resource)
Vue.use(Validator)

// const routers = [
//     {
//         path: '/',
//         name: 'index',
//         component: (resolve) => require(['./views/index.vue'], resolve)
//     }
// ]
 // component: (resolve) => require(['./views/index.vue'], resolve)
export default new Router({
  routes: [
    {path:'/',component: Login},
    { path: '/register',component: Register},
    // { path: '/register',component:(resolve) => require(['./../view/register.vue'], Register)},
    { path: '/home',component: Home,
        children:[
            {path:'personal',component: Personal },
            {path:'hello',component: Hello,
                children:[
                   {path:'login',component: Login}
                   
                ]
            },
            {path: 'description',component: Description},
            {path: 'search',component: Search},
            {path:'user',component: User,
                children:[                 
                  {path:'userInformation',component: UserInformation},
                  {path: '/', redirect: 'userInformation' }//在子路由定向到userInformation
                ]
            }
           
        ]
}     
  ]
})
