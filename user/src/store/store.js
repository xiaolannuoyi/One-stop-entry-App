//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);

const state = {
    baseURL:'',
    UserInfo:{},//user个人信息
    offerStateFlag: true,//offer 弹框显示标志
    preBaseInfo:{},//个人信息
    bankcard:{},//工资卡信息
    workInfo:[],//工作经历
    homeInfo:[],//家庭成员
    qualifyInfo:[],//资格证书
    edubgInfo:[],//教育背景
    image:{}//图片
 }
//  192.168.88.255//公司
//  192.168.43.8//手机热点
 const getters= {
    baseURL: state =>
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : 'http://192.168.88.255:3000/'
  }

 const mutations = {
    setUserInfo(state, data){
        console.log(data)
        return state.UserInfo=data;
     },
     setImage(state, data){
        console.log(data)
        return state.image=data;
     },

 }

 export default new Vuex.Store({
     state,mutations,getters
 });