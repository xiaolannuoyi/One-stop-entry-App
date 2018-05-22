let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');
let PreBaseInfoModel = dbHelper.getModel('preBaseInfo');
let bankcardModel = dbHelper.getModel('bankcard');
let workInfoModel = dbHelper.getModel('workInfo');
let HomeInfoModel = dbHelper.getModel('homeInfo');
let EduBgModel = dbHelper.getModel('eduBg');
let QualifyInfoModel = dbHelper.getModel('qualifyInfo');
let ImgModel = dbHelper.getModel('image');
let CheckProgressModel = dbHelper.getModel('checkProgress');

class UserOpt {
    /**
   * 删除数据
   */
  UserDel(data) {
    console.log("data=============",data)
    var user = new Promise((resolve, reject) => {
      UserModel.findByIdAndRemove(data.id)
        .then(() => {
          console.log('userok');
          resolve('userok');          
          
        })
        .catch(() => {
          reject();
        });
    });
    var base = new Promise((resolve, reject) => {
      PreBaseInfoModel.remove({user:data.id})
        .then(() => {
          console.log('baseok');
          resolve('baseok');          
        })
        .catch(() => {
          reject();
        });
    });
    var bank = new Promise((resolve, reject) => {
      bankcardModel.remove({user:data.id})
        .then(() => {
          console.log('bankok');
          resolve('bankok');
          
        })
        .catch(() => {
          reject();
        });
    });
    var work = new Promise((resolve, reject) => {
      workInfoModel.remove({user:data.id})
        .then(() => {
          console.log('workok');
          resolve('workok');
          
        })
        .catch(() => {
          reject();
        });
    });
    var home = new Promise((resolve, reject) => {
      HomeInfoModel.remove({user:data.id})
        .then(() => {
          console.log('homeok');
          resolve('homeok');
          
        })
        .catch(() => {
          reject();
        });
    });
    var edubg = new Promise((resolve, reject) => {
      EduBgModel.remove({user:data.id})
        .then(() => {
          console.log('edubgok');
          resolve('Qualifyok');
          
        })
        .catch(() => {
          reject();
        });
    });
    var Qualify = new Promise((resolve, reject) => {
      QualifyInfoModel.remove({user:data.id})
        .then(() => {
          console.log('Qualifyok');
          resolve('Qualifyok');
        })
        .catch(() => {
          reject();
        });
    });
    //var image = ImgModel.remove({user:data.id});
    var image =new Promise((resolve, reject) => {
       ImgModel.remove({user:data.id}).then(() => {
        console.log('imageok');
        resolve('imageok');
      })
      .catch(() => {
        reject();
      });
    });
    
    var file = new Promise((resolve, reject) => {
      let fse = require('fs-extra')
      let savePath = `pubilc/uploads/${data.id}`;
      console.log(savePath)
      fse.remove(savePath).then(() => {
        console.log('fileok');
        resolve('fileok');
      })
      .catch(() => {
        reject();
      });

    });
    var check =new Promise((resolve, reject) => {
      CheckProgressModel.remove({user:data.id}).then(() => {
       console.log('check');
       resolve('check');
     })
     .catch(() => {
       reject();
     });
   });
    return Promise.all([user,base,bank,work,home,edubg,Qualify,image,file,check])
  }
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

    //
    //提交审核
    //
    confirmCherk(data){
      var a =new Promise((resolve, reject) => {
        CheckProgressModel.create({
          user:data.id,
          checkState:data.checkState,
          checkText:data.checkText
        }).then(aa =>{
          UserModel.findByIdAndUpdate(data.id,{
            $set: {
              checkState: 1,//提交
            }
          }).then( bb =>{
            resolve(bb);
          }).catch(() => {
            reject('fail');
          });
          
        }).catch(() => {
          reject('fail');
        });
     });

     var b =new Promise((resolve, reject) => {
      UserModel.findOneAndUpdate({checkState:data.checkState}).then(bb =>{
        resolve(bb);
      }).catch(() => {
        reject('fail');
      }); 
    });
         
    return Promise.all([a,b]);
  }
  //checkState=1
  findcheck(check,HRaddress) {
    console.log("findcheck",check,HRaddress)
    return new Promise((resolve, reject) => {
      UserModel.find({checkState:check,Address:HRaddress})
        .then(user => {
          console.log('查询结果', JSON.stringify(user, null, 2));
          resolve(user);
        })
        .catch(() => {
          reject();
        });
    });
  }
//查看用户所有信息 
  findusercheckMsg(data){
    var user = new Promise((resolve, reject) => {
      UserModel.findById(data)
        .then( user1 => {
          console.log('userok',user1);
          resolve(user1);          
          
        })
        .catch(() => {
          reject();
        });
    });
    var base = new Promise((resolve, reject) => {
      PreBaseInfoModel.findOne({user:data})
        .then(base1 => {
          console.log('baseok',base1);
          resolve(base1);          
        })
        .catch(() => {
          reject();
        });
    });
    var bank = new Promise((resolve, reject) => {
      bankcardModel.findOne({user:data})
        .then(bank1 => {
          console.log('bankok',bank1);
          resolve(bank1);
          
        })
        .catch(() => {
          reject();
        });
    });
    var work = new Promise((resolve, reject) => {
      workInfoModel.find({user:data})
        .then(work1 => {
          console.log('workok',work1);
          resolve(work1);
          
        })
        .catch(() => {
          reject();
        });
    });
    var home = new Promise((resolve, reject) => {
      HomeInfoModel.find({user:data})
        .then(home1 => {
          console.log('homeok',home1);
          resolve(home1);
          
        })
        .catch(() => {
          reject();
        });
    });
    var edubg = new Promise((resolve, reject) => {
      EduBgModel.find({user:data})
        .then(edubg1 => {
          console.log('edubgok',edubg1);
          resolve(edubg1);
          
        })
        .catch(() => {
          reject();
        });
    });
    var Qualify = new Promise((resolve, reject) => {
      QualifyInfoModel.find({user:data})
        .then(Qualify1 => {
          console.log('Qualifyok',Qualify1);
          resolve(Qualify1);
        })
        .catch(() => {
          reject();
        });
    });
    //var image = ImgModel.remove({user:data});
    var image =new Promise((resolve, reject) => {
       ImgModel.findOne({user:data}).then(image1 => {
        console.log('imageok',image1);
        resolve(image1);
      })
      .catch(() => {
        reject();
      });
    });
    return Promise.all([user,base,bank,work,home,edubg,Qualify,image])
  }
  

  //查找所有审核状态
  findcheckState(data) {
    console.log("findcheck",data)
    return new Promise((resolve, reject) => {
      CheckProgressModel.find({user:data})
        .then( back => {
          console.log('查询结果', JSON.stringify( back, null, 2));
          resolve( back);
        })
        .catch(() => {
          reject();
        });
    });
  }
}
module.exports = new UserOpt;
