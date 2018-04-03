import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/activity/Login'
import Home from '@/components/activity/Home'
import Company from '@/components/activity/Company'
import Check from '@/components/activity/Check'
import UserData from '@/components/activity/UserData'
import Hr from '@/components/accountManager/HR/hr'
import HrSee from '@/components/accountManager/HR/hrSee'
import HrAdd from '@/components/accountManager/HR/hrAdd'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Login},
    {path: '/home',component: Home},
    {path: '/company',component: Company},
    {path: '/check',component: Check},
    {path: '/userdata',component: UserData},
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
  ]
})
