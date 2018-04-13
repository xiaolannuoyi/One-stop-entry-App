let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');

class UserMessageOpt {
  //offer 接受，拒绝
  UserOfferState(data){
    return new Promise((resolve, reject) => {
      console.log("data.State",data.data);
      
      UserModel.findByIdAndUpdate(data.id,{
        $set: {
          State: data.data,
        }
      }).then(State => {
          resolve(State);
        })
        .catch(() => {
          reject('fail');
        });
    });
  }
}
module.exports = new UserMessageOpt;
