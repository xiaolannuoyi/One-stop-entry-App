import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/activity/Login'
import FooterTab from '@/components/activity/FooterTab'
import Home from '@/components/activity/Home'
import Company from '@/components/activity/Company'
import Check from '@/components/activity/Check'
import UserData from '@/components/activity/UserData'
import Hr from '@/components/accountManager/HR/hr'
import HrSee from '@/components/accountManager/HR/hrSee'
import HrAdd from '@/components/accountManager/HR/hrAdd'
import HrMsg from '@/components/accountManager/HR/hrMsg'
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
          path: 'check',
          name: 'Check',
          component: Check
        },{
          path: 'userData',
          name: 'UserData',
          component: UserData
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
  ]
})
