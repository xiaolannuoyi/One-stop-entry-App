import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

let servicesManager = {
  //user-----------------
  UserLogin(data) {
    return axios({
      method: 'get',
      url: 'user/login',
      params: data
    });
  },
  
};

export default servicesManager;
