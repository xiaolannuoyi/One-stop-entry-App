import axios from 'axios';

if(process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000/';
} else {
  axios.defaults.baseURL = 'http://192.168.10.113:3000/';
}

let servicesManager = {
  //hr-----------------
  hrRegist(data) {
    return axios.post('/hr/regist', data);
  },
  hrLogin(data) {
    return axios({
      method: 'get',
      url: 'hr/login',
      params: data
    });
  },
  findHr(data) {
    console.log("前端传入data",data);
    
    return axios({
      method: 'get',
      url: 'hr/findHr',
      params: data,     
    });
  },

  findHrOne(data) {
    return axios({
      method: 'get',
      url: 'hr/findHrOne/' + data
    });
  },

  hrEdit(id,data) {
    console.log(id,data)
    return axios({
      method: 'post',
      url: '/hr/hrEdit',
      data: {id,data},
    });
  },

  hrDel(data){
    console.log(data)
    return axios({
      method: 'post',
      url: '/hr/hrDel',
      data: {
        id: data
      },
    });
  },
  //hr重置密码
  hrResetPassword(id,password){
      console.log("qianduan ",id,password)
      return axios({
        method: 'post',
        url: '/hr/hrResetPassword',
        data: {id,password}
      });
  },
  //user---------------------------
  userRegist(data) {
    return axios.post('/user/regist', data);
  },
  findUser(data) {
    return axios({
      method: 'get',
      url: '/user/findUser',
      params: data,     
    });
  },
  findUserOne(data) {
    return axios({
      method: 'get',
      url: '/user/findUserOne/' + data
    });
  },
  UserEdit(id,data) {
    console.log(id,data)
    return axios({
      method: 'post',
      url: '/user/UserEdit',
      data: {id,data},
    });
  },
//删除用户，及所有文件
  UserDel(data){
    console.log(data)
    return axios({
      method: 'post',
      url: '/user/UserDel',
      data: {
        id: data
      },
    });
  },

    //User重置密码
    UserResetPassword(id,password){
      console.log("qianduan ",id,password)
      return axios({
        method: 'post',
        url: '/user/UserResetPassword',
        data: {id,password}
      });
  },
  

  //查看提交审核的列表
  // offerState :3,address
  findcheck(check,address){
    console.log(check,address)
    return axios({
      method: 'get',
      url: '/user/findcheck',
      params: {
        checkState:check,
        HRaddress:address
      },     
    });
  }, 

  //个人信息
  findusercheckMsg(data) {
    return axios({
      method: 'get',
      url: '/user/findusercheckMsg/' + data
    });
  },

  //------------hr审核结果--------
confirmCherk(id,checkState,checkText) {
  console.log("qianduan ",id,checkState,checkText)
  return axios({
    method: 'post',
    url: '/user/confirmCherk',
    data: {id,checkState,checkText}
  });
},
};

export default servicesManager;
