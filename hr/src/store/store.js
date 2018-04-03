//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);

const state = {
    HrInfo:{},//hr个人信息
 }
 
 const mutations={
 }

 export default new Vuex.Store({
     state,mutations
 });