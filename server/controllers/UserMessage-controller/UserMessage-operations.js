let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');
let PreBaseInfoModel = dbHelper.getModel('preBaseInfo');
let bankcardModel = dbHelper.getModel('bankcard');
let workInfoModel = dbHelper.getModel('workInfo');
let HomeInfoModel = dbHelper.getModel('homeInfo');
let EduBgModel = dbHelper.getModel('eduBg');
let QualifyInfoModel = dbHelper.getModel('qualifyInfo');

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
                resolve("个人信息提交成功");


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
                    resolve("个人信息更新成功");
    
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

     //工资卡信息提交
    /**
     * 
     * @param {*}
     *  data :{
     * id,Bankcard
     * }
     */
    submitBankcard(data){
      return new Promise((resolve, reject) => {
        UserModel.findById(data.id).then(back => {
          console.log("back",back)
          if(back.preBaseInfo==null){
            bankcardModel.create(data.Bankcard).then( back2 =>{
              UserModel.findByIdAndUpdate(data.id,{
                $set:{
                  bankcard: back2._id
                }
              }).then(back3=>{
                bankcardModel.findById(back3.bankcard).then(bank4=>{
                  console.log('1提交成功', JSON.stringify(bank4, null, 2));
                  resolve({
                    data:bank4,
                    msg:"工资卡信息提交成功"
                  });
                }).catch(() => {
                  reject('fail1');
                });
                


              }).catch(() => {
                reject('fail1');
              });
              
            }).catch(() => {
              reject('fail2');
            });
          }else{
            console.log(222222222222)
            bankcardModel.findByIdAndRemove({_id:back.preBaseInfo}).then(()=>{
              
                bankcardModel.create(data.Bankcard).then( back5 =>{
                  UserModel.findByIdAndUpdate(data.id,{
                    $set:{
                      bankcard: back5._id
                    }
                  }).then(back6=>{
                    
                    bankcardModel.findById(back6.bankcard).then(bank7=>{
                      console.log('1提交成功', JSON.stringify(bank7, null, 2));
                      resolve({
                        data:bank7,
                        msg:"工资卡信息更新成功"
                      });
                    }).catch(() => {
                      reject('fail1');
                    });
                    
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

    /**
     * 工作经历
     */
    submitpreWorkInfo(data){
      return new Promise((resolve, reject) =>{
        workInfoModel.create(data).then( work =>{
          console.log("work",work);
          
          resolve(work);
        }).catch(() => {
          reject('fail');
        });
      })
      
       
    }

    /**
     * 家庭成员
     */
    submitpreHomeInfo(data){
      return new Promise((resolve, reject) =>{
        HomeInfoModel.create(data).then( home =>{
          console.log("home",home);
          
          resolve(home);
        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    
    /**
     * 教育背景
     */
    submitEduBgInfo(data){
      return new Promise((resolve, reject) =>{
        EduBgModel.create(data).then( edubg =>{
          console.log("edubg",edubg);
          
          resolve(edubg);
        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    
    /**
     * 荣誉证书
     */
    submitQualifyInfo(data){
      return new Promise((resolve, reject) =>{
        QualifyInfoModel.create(data).then( Qualify =>{
          console.log("Qualify",Qualify);
          resolve(Qualify);
        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    //------------删除--------------------
    //删除工作经历
    delWorkInfo(data){
      return new Promise((resolve, reject) =>{
        workInfoModel.findByIdAndRemove(data._id).then( () =>{
          workInfoModel.find({user:data.user}).then( newwork =>{
            resolve(newwork)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    
    //删除家庭成员
    delHomeInfo(data){
      return new Promise((resolve, reject) =>{
        HomeInfoModel.findByIdAndRemove(data._id).then( () =>{
          HomeInfoModel.find({user:data.user}).then( newhome =>{
            resolve(newhome)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    //删除资格证书
    delQualifyInfo(data){
      return new Promise((resolve, reject) =>{
        QualifyInfoModel.findByIdAndRemove(data._id).then( () =>{
          QualifyInfoModel.find({user:data.user}).then( newqualify =>{
            resolve(newqualify)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    //删除教育背景
    delEdubgInfo(data){
      return new Promise((resolve, reject) =>{
        EduBgModel.findByIdAndRemove(data._id).then( () =>{
          EduBgModel.find({user:data.user}).then( newedubg =>{
            resolve(newedubg)
          }).catch(() => {
            reject('fail');
          });
        }).catch(() => {
          reject('fail');
        });
      })
      
    }
     //------------编辑--------------------
     //编辑工作经历(返回所有)
    
    editpreWorkInfo(data){
      return new Promise((resolve, reject) =>{
        workInfoModel.findByIdAndUpdate(data._id,{
          $set: {
                company : data.company,
                Startdate : data.Startdate,
                Enddate : data.Enddate,
                post : data.post,
                Provider : data.Provider,
                Proname : data.Proname,
                Prophone : data.Prophone,
          }
        }).then( () =>{
          workInfoModel.find({user:data.user}).then( newwork =>{
            resolve(newwork)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    
     //编辑家庭成员
    
     editpreHomeInfo(data){
      return new Promise((resolve, reject) =>{
        HomeInfoModel.findByIdAndUpdate(data._id,{
          $set: {
            name : data.name,
            Relation : data.Relation,
            Company : data.Company,
            Contact : data.Contact,
            
          }
        }).then( () =>{
          HomeInfoModel.find({user:data.user}).then( newhome =>{
            resolve(newhome)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }

    //编辑资格证书
    
    editpreQualifyInfo(data){
      return new Promise((resolve, reject) =>{
        QualifyInfoModel.findByIdAndUpdate(data._id,{
          $set: {
                  Getdate:data.Getdate,
                  Name:data.Name
          }
        }).then( () =>{
          QualifyInfoModel.find({user:data.user}).then( newedubg =>{
            resolve(newedubg)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    //编辑教育背景
    editEduBgInfo(data){
      return new Promise((resolve, reject) =>{
        EduBgModel.findByIdAndUpdate(data._id,{
          $set: {
            Startdate:data.Startdate,
            Enddate:data.Enddate,
            Schoolname:data.Schoolname,
            College:data.College,
            Major:data.Major,
            Education:data.Education
          }
        }).then( () =>{
          EduBgModel.find({user:data.user}).then( newqualify =>{
            resolve(newqualify)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }
}
module.exports = new UserMessageOpt;
