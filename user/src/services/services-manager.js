import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

let servicesManager = {
  //User-----------------
  UserLogin(data) {
    return axios({
      method: 'get',
      url: 'User/login',
      params: data
    });
  },
  // 接受或拒绝
  UserOfferState(id,state) {
    console.log("qianduan ",id,state)
    return axios({
      method: 'post',
      url: '/UserMessage/UserOfferState',
      data: {id,state}
    });
  },
  // 修改登录密码
  ChangePassword(id,password) {
    console.log("qianduan ",id,password)
    return axios({
      method: 'post',
      url: '/UserMessage/ChangePassword',
      data: {id,password}
    });
  },
  
};

export default servicesManager;
