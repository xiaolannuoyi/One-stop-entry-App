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
  UserOfferState(id,data) {
    console.log("qianduan ",id,data)
    return axios({
      method: 'post',
      url: '/UserMessage/UserOfferState',
      data: {id,data}
    });
  },
  
};

export default servicesManager;
