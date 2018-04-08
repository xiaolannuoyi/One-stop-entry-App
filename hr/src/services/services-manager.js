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
};

export default servicesManager;
