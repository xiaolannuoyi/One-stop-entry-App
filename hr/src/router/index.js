import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/activity/Login'
import FooterTab from '@/components/activity/FooterTab'
import Home from '@/components/activity/Home'
import Company from '@/components/activity/Company'
import Message from '@/components/activity/Message'

import Hr from '@/components/accountManager/HR/hr'
import HrSee from '@/components/accountManager/HR/hrSee'
import HrAdd from '@/components/accountManager/HR/hrAdd'
import HrMsg from '@/components/accountManager/HR/hrMsg'

import User from '@/components/accountManager/User/user'
import UserSee from '@/components/accountManager/User/userSee'
import UserAdd from '@/components/accountManager/User/userAdd'
import UserMsg from '@/components/accountManager/User/userMsg'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Login},
    {
      path: '/home',
      component: FooterTab,
      redirect: '/home/main',
      children: [
        {
          path: 'main',
          name: 'main',
          component: Home
        },
        {
          path:'company',
          name: 'Company',
          component: Company
        },
        {
          path: 'message',
          name: 'Message',
          component: Message
        }]
    },
    {
      path: '/hr',
      component: Hr,
      redirect: '/hr/hrSee',
      children: [
        {
          path:'hrSee',
          name: 'HrSee',
          component: HrSee
        },
        {
          path: 'hrAdd',
          name: 'HrAdd',
          component: HrAdd
        }]
    },
    {
      path: '/hr/hrMsg/:id',
      name: 'HrMsg',
      component: HrMsg,
    },
    {
      path: '/user',
      component: User,
      redirect: '/user/userSee',
      children: [
        {
          path:'userSee',
          name: 'UserSee',
          component: UserSee
        },
        {
          path: 'userAdd',
          name: 'UserAdd',
          component: UserAdd
        }]
    },
    {
      path: '/user/userMsg/:id',
      name: 'UserMsg',
      component: UserMsg,
    },
  ]
})
