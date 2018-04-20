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
      console.log("1=====",data)
      return new Promise((resolve, reject) => {
        PreBaseInfoModel.create(data).then(back => {
      console.log("2====",back)
          
          resolve(back)
        }).catch(() => {
          reject('fail');
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
      console.log("bank",data);
      
      return new Promise((resolve, reject) => {
        bankcardModel.create(data).then(back => {
        console.log("bank2",back);
          
          resolve(back)
          
        }).catch(() => {
          reject('fail');
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
     //个人信息编辑
     editPreBaseInfo(data){
      return new Promise((resolve, reject) => {
        PreBaseInfoModel.findByIdAndUpdate(data._id,{
          $set:{
                email:data.email,
                urgentPeo:data.urgentPeo,//紧急联系人
                secuArea:data.secuArea,//缴纳社保地区
                tel:data.tel,                
                idCard:data.idCard,//身份ID n
                sex:data.sex, //性别 
                nation:data.nation,//民族
                location:data.location, //国籍
                plocitical:data.plocitical, //政治面貌
                marital:data.marital,//婚姻状况
                eduHighest:data.eduHighest,//最高学历
                bgSurvey:data.bgSurvey,//背景调查
                urgentTel:data.urgentTel,//紧急联系方式
                bodyState:data.bodyState,//身体状况
                medical:data.medical,//既往病史
                hered:data.hered,//重大疾病以及遗传病
                hkType:data.hkType,//户口性质
                secuRi:data.secuRi,//是否缴纳过社保 
                oriPlace:data.oriPlace, //籍贯                
                nowAdress:data.nowAdress,//现住址
                hkAdress:data.hkAdress,//户口所在地
                graduDate:data.graduDate,//毕业日期
                workDate:data.workDate,//工作日期
                birthDay:data.birthDay //生日
          }
        }).then(() => {
          PreBaseInfoModel.findById(data._id).then(back=>{
            resolve(back)
          }).catch(() => {
            reject('fail');
          });
          
        }).catch(() => {
          reject('fail');
        });
         
      });
    }
     //银行卡信息编辑
     editBankcard(data){
       
      return new Promise((resolve, reject) =>{
        bankcardModel.findByIdAndUpdate(data._id,{
          $set: {
                sPfaccount:data.sPfaccount,//账户名
                sPfid:data.sPfid,//身份证号码
                sPfcardNum:data.sPfcardNum,//卡号
                sPfopenban:data.sPfopenban,//开户行名称
                sPfopCity:data.sPfopCity//开户城市
          }
        }).then( () =>{
          bankcardModel.findById(data._id).then( bankcard =>{
            resolve(bankcard)
          }).catch(() => {
            reject('fail');
          });

        }).catch(() => {
          reject('fail');
        });
      })
      
    }

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
//------------------------查-----------------------
  //查找个人信息
  findPreBaseInfo(data){
    console.log("data",data.id);
    
    return new Promise((resolve, reject) =>{
      PreBaseInfoModel.findOne({'user':data.id}).then( PreBaseInfo =>{
        console.log(PreBaseInfo);
        resolve(PreBaseInfo)
      }).catch(() => {
        reject('fail');
      });
    })
    
  }
  
  //查找个人信息
  findbankcard(data){
    console.log("data",data.id);
    
    return new Promise((resolve, reject) =>{
      bankcardModel.findOne({'user':data.id}).then( bankcard =>{
        console.log(bankcard);
        resolve(bankcard)
      }).catch(() => {
        reject('fail');
      });
    })
    
  }
  
    //查找工作信息
    findworkInfo(data){
      console.log("data",data.id);
      
      return new Promise((resolve, reject) =>{
        workInfoModel.find({'user':data.id}).then( bankcard =>{
          console.log(bankcard);
          resolve(bankcard)
        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    //资格证书
    findqualifyInfo(data){
      console.log("data",data.id);
      
      return new Promise((resolve, reject) =>{
        QualifyInfoModel.find({'user':data.id}).then( qualifyInfo =>{
          console.log(qualifyInfo);
          resolve(qualifyInfo)
        }).catch(() => {
          reject('fail');
        });
      })
      
    }
    
    //家庭成员
    findhomeInfo(data){
      console.log("data",data.id);
      
      return new Promise((resolve, reject) =>{
        HomeInfoModel.find({'user':data.id}).then( HomeInfo =>{
          console.log(HomeInfo);
          resolve(HomeInfo)
        }).catch(() => {
          reject('fail');
        });
      })
      
    }

        //
        findedubgInfo(data){
          console.log("data",data.id);
          
          return new Promise((resolve, reject) =>{
            EduBgModel.find({'user':data.id}).then( EduBg =>{
              console.log(EduBg);
              resolve(EduBg)
            }).catch(() => {
              reject('fail');
            });
          })
          
        }
}
module.exports = new UserMessageOpt;
