//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);

const state = {
    HrInfo:{},//hr个人信息
    baseURL:{},
    usercheckData:{},//提交审核的人的个人信息
 }
 //  192.168.88.255//公司
//  192.168.43.8//手机热点
//  192.168.2.107//家
 const getters= {
    baseURL: state =>
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'http://192.168.43.8:3000/'
  }
 const mutations={
    setusercheckData(state,data){
        console.log('cun',data)
        state.usercheckData[data.userid] = data.userdata;
     },
 }

 export default new Vuex.Store({
     state,mutations,getters
 });