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
    return axios({
      method: 'get',
      url: 'hr/findHr',
      params: data
    });
  }
};

export default servicesManager;
