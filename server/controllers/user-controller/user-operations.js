let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');

class UserOpt {
  /**
   * 注册
   * 插入数据
   * @param {*} data 
   */
  regist(data) {
    return new Promise((resolve, reject) => {
      UserModel.create(data)
        .then(user => {
          resolve(user);
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
      UserModel.findOne({ Tel: data.Tel })
        .then(User => {
          console.log('查询结果', JSON.stringify(User, null, 2));
          if (User.Password == data.Password) {
            resolve(User);
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
  findUser(data) {
    return new Promise((resolve, reject) => {
      UserModel.find(data)
        .then(user => {
          console.log('查询结果', JSON.stringify(user, null, 2));
          resolve(user);
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
  findUserOne(data) {
    console.log("data=============",data)
    return new Promise((resolve, reject) => {
      UserModel.findOne(data)
        .then(User => {
          console.log('查询结果', JSON.stringify(User, null, 2));
          resolve(User);
        })
        .catch(() => {
          reject();
        });
    });
  }
  
  /**
   * 修改数据
   */
  UserEdit(id, data) { 
    console.log(JSON.stringify(data, null, 2));
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(id, {
        $set: {
          Name: data.Name,//姓名
          Tel: data.Tel,//电话
          Address: data.Address,//工作地区
          Department: data.Department,//部门
          EntryTime: data.EntryTime,//入职时间
        }
      }).then(() => {
          UserModel.findById(id).then(User => {
            console.log('修改user数据', JSON.stringify(User, null, 2));
            resolve(User);
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
  UserDel(data) {
    console.log("data=============",data)
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndRemove(data.id)
        .then(User => {
          console.log('查询结果', JSON.stringify(User, null, 2));
          resolve(User);
        })
        .catch(() => {
          reject();
        });
    });
  }
    //重置密码
    UserResetPassword(data){
      console.log(data.password)
      return new Promise((resolve, reject) => {
        UserModel.findByIdAndUpdate(data.id,{
          $set: {
            Password: data.password,
          }
        }).then( ()=> {
            UserModel.findById(data.id).then(User => {
            console.log('U改user数据', JSON.stringify(User, null, 2));
            resolve(User);
          });
          })
          .catch(() => {
            reject('fail');
          });
      });
    }
  
}
module.exports = new UserOpt;
