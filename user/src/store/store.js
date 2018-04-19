//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);

const state = {
    UserInfo:{},//user个人信息
    offerStateFlag:false,//offer 弹框显示标志
    preBaseInfo:{},//个人信息
    bankcard:{},//工资卡信息
    workInfo:[],//工作经历
    homeInfo:[],//家庭成员
 }
 
 const mutations={
 }

 export default new Vuex.Store({
     state,mutations
 });