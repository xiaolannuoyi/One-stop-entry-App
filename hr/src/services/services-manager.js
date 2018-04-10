import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

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

  UserDel(data){
    console.log(data)
    return axios({
      method: 'post',
      url: '/user/UserDel',
      data: {
        id: data
      },
    });
  }
  
};

export default servicesManager;
