let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');
let PreBaseInfoModel = dbHelper.getModel('preBaseInfo');

class UserMessageOpt {
  //offer 接受，拒绝
  UserOfferState(data){
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(data.id,{
        $set: {
          State: data.state,
        }
      }).then(() => {
          UserModel.findById(data.id).then(User => {
            console.log('修改User数据', JSON.stringify(User, null, 2));
            resolve(User);
          });
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
      }).then(() => {
        UserModel.findById(data.id).then(User => {
            console.log('修改User数据', JSON.stringify(User, null, 2));
            resolve(User);
          });
        })
        .catch(() => {
          reject('fail');
        });
    });
  }

    //个人信息提交
    /**
     * 
     * @param {*}
     *  data :{
     * id,preBaseInfo
     * }
     */
    submitPreBaseInfo(data){
      return new Promise((resolve, reject) => {
        UserModel.findById(data.id).then(back => {
          console.log("back",back)
          if(back.preBaseInfo==null){
            PreBaseInfoModel.create(data.preBaseInfo).then( back2 =>{
              UserModel.findByIdAndUpdate(data.id,{
                $set:{
                  preBaseInfo: back2._id
                }
              }).then(back3=>{
                console.log('1提交成功', JSON.stringify(back3, null, 2));
                resolve("1提交成功");


              }).catch(() => {
                reject('fail1');
              });
              
            }).catch(() => {
              reject('fail2');
            });
          }else{
            console.log(222222222222)
            PreBaseInfoModel.findByIdAndRemove({_id:back.preBaseInfo}).then(()=>{
              
                PreBaseInfoModel.create(data.preBaseInfo).then( back4 =>{
                  UserModel.findByIdAndUpdate(data.id,{
                    $set:{
                      preBaseInfo: back4._id
                    }
                  }).then(back5=>{
                    
                    console.log('2提交成功', JSON.stringify(back5, null, 2));                    
                    resolve("2提交成功");
    
                  }).catch(() => {
                    reject('fail3');
                  });
                  
                }).catch(() => {
                  reject('fail4');
                });

            }).catch(() => {
              reject('fail5');
            });

          }
        }).catch(() => {
          reject('fail6');
        });
         
      });
    }
}
module.exports = new UserMessageOpt;
