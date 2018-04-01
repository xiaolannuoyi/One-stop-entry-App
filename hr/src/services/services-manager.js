import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

let servicesManager = {
  hrRegist(data) {
      console.log("server",data);
      
    return axios.post('/hr/regist', data);
  },
};

export default servicesManager;
