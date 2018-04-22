import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/activity/Login'
import FooterTab from '@/components/activity/FooterTab'
import Home from '@/components/activity/Home'
import Company from '@/components/activity/Company'
import Check from '@/components/activity/Check'
import UserData from '@/components/activity/UserData'

// 信息
import changePassword from '@/components/userdata/message/changePassword'

import Step from '@/components/userdata/message/step'
import PreBaseInfo from '@/components/userdata/message/preBaseInfo'
import BankCards from '@/components/userdata/message/bankCards'
//work
import PreWorkInfo from '@/components/userdata/message/work/preWorkInfo'
import PreAddWorkInfo from '@/components/userdata/message/work/preAddWorkInfo'
import EditWorkInfo from '@/components/userdata/message/work/EditWorkInfo'
//home
import HomeInfo from '@/components/userdata/message/home/HomeInfo'
import AddHomeInfo from '@/components/userdata/message/home/addHomeInfo'
import EdithomeInfo from '@/components/userdata/message/home/EditHomeInfo'
//qualify
import QualifyInfo from '@/components/userdata/message/qualify/qualifyInfo'
import AddQualifyInfo from '@/components/userdata/message/qualify/addqualifyInfo'
import EditQualifyInfo from '@/components/userdata/message/qualify/EditQualifyInfo'

//edubg
import EduBgInfo from '@/components/userdata/message/edubg/EduBgInfo'
import AddEduBgInfo from '@/components/userdata/message/edubg/addEduBgInfo'
import EditEduBgInfo from '@/components/userdata/message/edubg/EditEduBgInfo'

//----------------
import fileStep from '@/components/userdata/imagefile/fileStep'
import IDCard from '@/components/userdata/imagefile/IDCard'
import OneInchPhoto from '@/components/userdata/imagefile/OneInchPhoto'
import bankCard from '@/components/userdata/imagefile/bankCard'
import leaveWork from '@/components/userdata/imagefile/leaveWork'
import Education from '@/components/userdata/imagefile/Education'
import other from '@/components/userdata/imagefile/other'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Login },
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
          path: 'company',
          name: 'Company',
          component: Company
        },
        {
          path: 'check',
          name: 'Check',
          component: Check
        }, {
          path: 'userData',
          name: 'UserData',
          component: UserData
        }]
    },
    { path: '/userdata/message/changePassword', component: changePassword },
    {
      path: '/userdata/message/step',
      component: Step,
      redirect: '/userdata/message/step/preBaseInfo',
      children: [
        {
          path: 'preBaseInfo',
          name: 'PreBaseInfo',
          component: PreBaseInfo
        },
        {
          path: 'bankCards',
          name: 'bankCards',
          component: BankCards
        },
        {
          path: 'preWorkInfo',
          name: 'preWorkInfo',
          component: PreWorkInfo,
        },
        {
          path: 'preAddWorkInfo',
          name: 'preAddWorkInfo',
          component: PreAddWorkInfo
        },
        {
          path: 'EditWorkInfo/:index',
          name: 'EditWorkInfo',
          component: EditWorkInfo
        },
        {
          path: 'homeInfo',
          name: 'homeInfo',
          component: HomeInfo
        },
        {
          path: 'addHomeInfo',
          name: 'addHomeInfo',
          component: AddHomeInfo
        },
        {
          path: 'EdithomeInfo/:index',
          name: 'EdithomeInfo',
          component: EdithomeInfo
        },
        {
          path: 'qualifyInfo',
          name: 'qualifyInfo',
          component: QualifyInfo
        },
        {
          path: 'addQualifyInfo',
          name: 'addQualifyInfo',
          component: AddQualifyInfo
        },
        {
          path: 'EditQualifyInfo/:index',
          name: 'EditQualifyInfo',
          component: EditQualifyInfo
        },
        {
          path: 'eduBgInfo',
          name: 'eduBgInfo',
          component: EduBgInfo
        },
        {
          path: 'addEduBgInfo',
          name: 'addEduBgInfo',
          component: AddEduBgInfo
        },
        {
          path: 'EditEduBgInfo/:index',
          name: 'EditEduBgInfo',
          component: EditEduBgInfo
        }
      ]
    },
    {
      path: '/userdata/imagefile/fileStep',
      component: fileStep,
      redirect: '/userdata/imagefile/fileStep/IDCard',
      children: [
        {
          path: 'IDCard',
          name: 'IDCard',
          component: IDCard
        },
        {
          path: 'OneInchPhoto',
          name: 'OneInchPhoto',
          component: OneInchPhoto
        },
        {
          path: 'bankCard',
          name: 'bankCard',
          component: bankCard
        },
        {
          path: 'Education',
          name: 'Education',
          component: Education
        },
        {
          path: 'leaveWork',
          name: 'leaveWork',
          component: leaveWork
        },
        {
          path: 'other',
          name: 'other',
          component: other
        },
        
      ]
    },
  ]
})
