let dbHelper = require('../../lib/dbHelper');
let HrModel = dbHelper.getModel('hr');

class HrOpt {
  /**
   * 注册
   * 插入数据
   * @param {*} data 
   */
  regist(data) {
    return new Promise((resolve, reject) => {
      HrModel.create(data)
        .then(hr => {
          resolve(hr);
        })
        .catch(() => {
          reject('fail');
        });
    });
  }
  /**
   * 登录
   * 查询数据
   */
  login(data) {
    console.log("data=============",data)
    return new Promise((resolve, reject) => {
      HrModel.findOne({ Account: data.Account })
        .then(hr => {
          console.log('查询结果', JSON.stringify(hr, null, 2));
          if (hr.Password == data.Password) {
            resolve(hr);
          } else {
            reject();
          }
        })
        .catch(() => {
          reject();
        });
    });
  }
  /**
   * 查看所有信息
   * 查询数据
   */
  findHr(data) {
    console.log("data=============",data)
    return new Promise((resolve, reject) => {
      HrModel.find(data)
        .then(hr => {
          console.log('查询结果', JSON.stringify(hr, null, 2));
          resolve(hr);
        })
        .catch(() => {
          reject();
        });
    });
  }

}
module.exports = new HrOpt;
