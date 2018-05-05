import axios from 'axios';

import store from '../store/store'

axios.defaults.baseURL = store.getters.baseURL;
// axios.defaults.baseURL = 'http://localhost:3000/';
// if(process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://localhost:3000/';
// } else {
//   // axios.defaults.baseURL = 'http://192.168.10.113:3000/';
//   axios.defaults.baseURL = 'http://192.168.88.255:3000/';
// }


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
  //------------------------------
  // 查找个人信息
  findPreBaseInfo(id) {
    console.log(" ",id)
    return axios({
      method: 'post',
      url: '/UserMessage/step/findPreBaseInfo',
      data: {id}
    });
  },
  // 提交个人信息
  submitPreBaseInfo(preBaseInfo) {
    console.log(" ",preBaseInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitPreBaseInfo',
      data: preBaseInfo
    });
  },
  //编辑
  editPreBaseInfo(preBaseInfo) {
    console.log(" ",preBaseInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/editPreBaseInfo',
      data: preBaseInfo
    });
  },

//---------------工资卡信息--------------------

 // 查找
 findbankcard(id) {
  console.log(" ",id)
  return axios({
    method: 'post',
    url: '/UserMessage/step/findbankcard',
    data: {id}
  });
},
  //提交工资卡信息
  submitBankcard(Bankcard) {
    console.log(" ",Bankcard)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitBankcard',
      data: Bankcard
    });
  },
  editBankcard(Bankcard) {
    console.log(" ",Bankcard)
    return axios({
      method: 'post',
      url: '/UserMessage/step/editBankcard',
      data: Bankcard
    });
  },

//---------------工作信息------------------

  //提交工作信息
  submitpreWorkInfo(preWorkInfo) {
    console.log(" ",preWorkInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitpreWorkInfo',
      data: preWorkInfo
    });
  },
    //删除某条工作经历
    delWorkInfo(work) {
      console.log(" ",work)
      return axios({
        method: 'post',
        url: '/UserMessage/step/delWorkInfo',
        data: work
      });
    },
  
    //编辑工作经历
    editpreWorkInfo(work) {
      console.log(" ",work)
      return axios({
        method: 'post',
        url: '/UserMessage/step/editpreWorkInfo',
        data: work
      });
    },
    //查找
    findworkInfo(id) {
      console.log(" ",id)
      return axios({
        method: 'post',
        url: '/UserMessage/step/findworkInfo',
        data: {id}
      });
    },

//-----------------家庭信息--------------------
  //提交家庭信息
  submitpreHomeInfo(preHomeInfo) {
    console.log(" ",preHomeInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitpreHomeInfo',
      data: preHomeInfo
    });
  },

  //删除家庭
  delHomeInfo(home) {
    console.log(" ",home)
    return axios({
      method: 'post',
      url: '/UserMessage/step/delHomeInfo',
      data: home
    });
  },
  //编辑
  editpreHomeInfo(home) {
    console.log(" ",home)
    return axios({
      method: 'post',
      url: '/UserMessage/step/editpreHomeInfo',
      data: home
    });
  },
  findhomeInfo(id) {
    console.log(" ",id)
    return axios({
      method: 'post',
      url: '/UserMessage/step/findhomeInfo',
      data: {id}
    });
  },

//-------------荣誉证书---------------------------
  //提交荣誉证书
  submitpreQualifyInfo(QualifyInfo) {
    console.log(" ",QualifyInfo)
    return axios({
      method: 'post',
      url: '/UserMessage/step/submitQualifyInfo',
      data: QualifyInfo
    });
  },
  //编辑资格证书
  editpreQualifyInfo(qualify) {
    console.log(" ",qualify)
    return axios({
      method: 'post',
      url: '/UserMessage/step/editpreQualifyInfo',
      data: qualify
    });
  },
    //删除某条资格证书
    delQualifyInfo(qualify) {
      console.log(" ",qualify)
      return axios({
        method: 'post',
        url: '/UserMessage/step/delQualifyInfo',
        data: qualify
      });
    },
    findqualifyInfo(id) {
      console.log(" ",id)
      return axios({
        method: 'post',
        url: '/UserMessage/step/findqualifyInfo',
        data: {id}
      });
    },

//-------------------------教育经历--------------
    //提交教育背景
    submitEduBgInfo(EduBgInfo) {
      console.log(" ",EduBgInfo)
      return axios({
        method: 'post',
        url: '/UserMessage/step/submitEduBgInfo',
        data: EduBgInfo
      });
    },
    //编辑教育经历
    editEduBgInfo(EduBg) {
      console.log(" ",EduBg)
      return axios({
        method: 'post',
        url: '/UserMessage/step/editEduBgInfo',
        data: EduBg
      });
    },
      //删除某条教育经历
      delEdubgInfo(EduBg) {
        console.log(" ",EduBg)
        return axios({
          method: 'post',
          url: '/UserMessage/step/delEdubgInfo',
          data: EduBg
        });
      },
      findedubgInfo(id) {
        console.log(" ",id)
        return axios({
          method: 'post',
          url: '/UserMessage/step/findedubgInfo',
          data: {id}
        });
      },
//---------------图片-------------------
      findImg(id) {
        console.log(" ",id)
        return axios({
          method: 'post',
          url: '/upload/findImg',
          data: {id}
        });
      },

};

export default servicesManager;
