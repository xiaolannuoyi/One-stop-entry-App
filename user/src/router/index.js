import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/activity/Login'
import Home from '@/components/activity/Home'
import Company from '@/components/activity/Company'
import Check from '@/components/activity/Check'
import UserData from '@/components/activity/UserData'

import preMsg from '@/components/userdata/message/preMsg'
import mod from '@/components/userdata/message/mod'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Login},
    {path: '/home',component: Home},
    {path: '/company',component: Company},
    {path: '/check',component: Check},
    {path: '/userdata',component: UserData},
    {path: '/userdata/message/mod',component: mod},
    {path: '/userdata/message/preMsg',component: preMsg},
  ]
})
