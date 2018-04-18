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
  // 提交个人信息
  submitPreBaseInfo(id,preBaseInfo) {
    console.log(" ",id,preBaseInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitPreBaseInfo',
      data: {id,preBaseInfo}
    });
  },
  //提交工资卡信息
  submitBankcard(id,Bankcard) {
    console.log(" ",id,Bankcard)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitBankcard',
      data: {id,Bankcard}
    });
  },
  //提交工作信息
  submitpreWorkInfo(preWorkInfo) {
    console.log(" ",preWorkInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitpreWorkInfo',
      data: preWorkInfo
    });
  },
  //提交家庭信息
  submitpreHomeInfo(preHomeInfo) {
    console.log(" ",preHomeInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitpreHomeInfo',
      data: preHomeInfo
    });
  },
  //提交教育背景
  submitEduBgInfo(EduBgInfo) {
    console.log(" ",EduBgInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitEduBgInfo',
      data: EduBgInfo
    });
  },
  //提交荣誉证书
  submitpreQualifyInfo(QualifyInfo) {
    console.log(" ",QualifyInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitQualifyInfo',
      data: QualifyInfo
    });
  },
};

export default servicesManager;
