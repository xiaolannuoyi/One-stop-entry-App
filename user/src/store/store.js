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
    image:{},//图片
    checkProgress:[]//审核进度
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

 const mutations = {
    setUserInfo(state, data){
        console.log(data)
        return state.UserInfo=data;
     },
     setpreBaseInfo(state, data){
        console.log(data)
        return state.preBaseInfo=data;
     },
     setbankcard(state, data){
        console.log(data)
        return state.bankcard=data;
     },
     setworkInfo(state, data){
        console.log(data)
        return state.workInfo = data;
     },
     sethomeInfo(state, data){
        console.log(data)
        return state.homeInfo = data;
     },
     setqualifyInfo(state, data){
        console.log(data)
        return state.qualifyInfo = data;
     },
     setedubgInfo(state, data){
        console.log(data)
        return state.edubgInfo = data;
     },
     addworkInfo(state, data){
        console.log(data)
        return state.workInfo.push(data);
     },
     addhomeInfo(state, data){
        console.log(data)
        return state.homeInfo.push(data);
     },
     addqualifyInfo(state, data){
        console.log(data)
        return state.qualifyInfo.push(data);
     },
     addedubgInfo(state, data){
        console.log(data)
        return state.edubgInfo.push(data);
     },
     setImage(state, data){
        console.log(data)
        return state.image=data;
     },
     setofferStateFlag(state, data){
        console.log(data)
        return state.offerStateFlag=data;
     },
     setcheckProgress(state, data){
        console.log(data)
        return state.checkProgress = data;
     },

 }

 export default new Vuex.Store({
     state,mutations,getters
 });