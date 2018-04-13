let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');

class UserMessageOpt {
  //offer 接受，拒绝
  UserOfferState(data){
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(data.id,{
        $set: {
          State: data.state,
        }
      }).then(user => {
          resolve(user);
        })
        .catch(() => {
          reject('fail');
        });
    });
  }

  //修改密码
  ChangePassword(data){
    console.log(data.password)
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(data.id,{
        $set: {
          Password: data.password,
        }
      }).then(user => {
          resolve(user);
        })
        .catch(() => {
          reject('fail');
        });
    });
  }
}
module.exports = new UserMessageOpt;
