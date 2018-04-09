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
/**
   * 查看一个
   * 查询数据
   */
  findHrOne(data) {
    console.log("data=============",data)
    return new Promise((resolve, reject) => {
      HrModel.findOne(data)
        .then(hr => {
          console.log('查询结果', JSON.stringify(hr, null, 2));
          resolve(hr);
        })
        .catch(() => {
          reject();
        });
    });
  }

  /**
   * 修改数据
   */
  hrEdit(id, data) { 
    console.log(JSON.stringify(data, null, 2));
    return new Promise((resolve, reject) => {
      HrModel.findByIdAndUpdate(id, {
        $set: {
          Account: data.Account,//工号
          Name: data.Name,//姓名
          Tel: data.Tel,//电话
          Address: data.Address,//负责地区
          IsAdmin: data.IsAdmin,//是否为管理者 0 :false; 1: true
        }
      }).then(() => {
          HrModel.findById(id).then(hr => {
            console.log('更新医生信息结果', JSON.stringify(hr, null, 2));
            hr.__v = undefined;
            resolve(hr);
          });
        })
        .catch(() => {
          reject('fail');
        });
    });
  }

  /**
   * 删除数据
   */
  hrDel(data) {
    console.log("data=============",data)
    return new Promise((resolve, reject) => {
      HrModel.findByIdAndRemove(data.id)
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
