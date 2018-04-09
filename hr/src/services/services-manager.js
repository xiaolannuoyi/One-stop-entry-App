import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

let servicesManager = {
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
  }
};

export default servicesManager;
