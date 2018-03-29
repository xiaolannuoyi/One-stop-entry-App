import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/activity/Login'
import Home from '@/components/activity/Home'
import Company from '@/components/activity/Company'
import Check from '@/components/activity/Check'
import UserData from '@/components/activity/UserData'
import Hr from '@/components/accountManager/HR/hr'
import HrAdd from '@/components/accountManager/HR/hrAdd'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Login},
    {path: '/home',component: Home},
    {path: '/company',component: Company},
    {path: '/check',component: Check},
    {path: '/userdata',component: UserData},
    {path: '/accountManager/HR/hr',component: Hr},
    {path: '/accountManager/HR/hrAdd',component: HrAdd},
  ]
})
