//构建数据表
const Schema = require('mongoose').Schema;

module.exports = {
    hr: {
        Account: Number,//工号
        Password: String,//密码，默认为工号 6-16位 
        Name: String,//姓名
        Tel: Number,//电话
        Address: String,//负责地区
        IsAdmin: Number,//是否为管理者 0 :false; 1: true
      },
      //user
    user: {
        Name: String,//姓名
        Tel: Number,//电话
        Password: String,//密码，默认为电话后六位 6-16位
        Address: String,//工作地区
        Department:String,//部门
        EntryTime:String,//入职时间
        offerState:{
            type: Number,
            default:0, // 0: 注册，1:接受，2：拒绝，
        },
        checkState:{
            type: Number,
            default:0, // 1：提交（等待审核），2：hr审核中，3：审核有错误（修改后走1），4：审核结束（审核结果）
        },
        avatar:{//头像
            type:String,
            default:'uploads/pic.png'
        }
      },
      //审核进度表
      checkProgress:{
        checkState:{
            type: Number,
            default:1, // 1：提交（等待审核），2：hr审核中，3：审核有错误（修改后走1），4：审核结束（审核结果）
        },
          checkText:{
              type:String,
          },
          date:{
              type:Date,
              default:Date.now
          },
          user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
      },

    //个人信息
    preBaseInfo:{
        email:{
            type: String,
            default:null,
        },
        urgentPeo:{
            type: String,
            default:null,
        },//紧急联系人
        secuArea:{
            type: String,
            default:null,
        },//缴纳社保地区

        tel:{
            type: Number,
            default:null,
        },                
        idCard:{
            type: Number,
            default:null,
        },//身份ID n
        sex:{
            type: Number,
            default:null,
        }, //性别 
        nation:{
            type: Number,
            default:null,
        },//民族
        location:{
            type: Number,
            default:null,
        }, //国籍
        plocitical:{
            type: Number,
            default:null,
        }, //政治面貌
        marital:{
            type: Number,
            default:null,
        },//婚姻状况
        eduHighest:{
            type: Number,
            default:null,
        },//最高学历
        bgSurvey:{
            type: Number,
            default:null,
        },//背景调查
        urgentTel:{
            type: Number,
            default:null,
        },//紧急联系方式
        bodyState:{
            type: Number,
            default:null,
        },//身体状况
        medical:{
            type: Number,
            default:null,
        },//既往病史
        hered:{
            type: Number,
            default:null,
        },//重大疾病以及遗传病
        hkType:{
            type: Number,
            default:null,
        },//户口性质
        secuRi:{
            type: Number,
            default:null,
        },//是否缴纳过社保 

        oriPlace:{
            type: Array,
            default:null,
        }, //籍贯                
        nowAdress:{
            type: Array,
            default:null,
        },//现住址
        hkAdress:{
            type: Array,
            default:null,
        },//户口所在地

        graduDate:{
            type: String,
            default:null,
        },//毕业日期
        workDate:{
            type: String,
            default:null,
        },//工作日期
        birthDay:{
            type: String,
            default:null,
        }, //生日
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
    },
    //银行卡信息
    bankcard:{
        sPfaccount:{
            type: String,
            default:null,
        },//账户名
        sPfid:{
            type: Number,
            default:null,
        },//身份证号码
        sPfcardNum:{
            type: Number,
            default:null,
        },//卡号
        sPfopenban:{
            type: String,
            default:null,
        },//开户行名称
        sPfopCity:{
            type: String,
            default:null,
        },//开户城市
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
    },
    //工作经历
    workInfo:{
        company:{//公司名称
            type: String,
            default:null,
        },
        Startdate:{//开始时间
            type: String,
            default:null,
        },
        Enddate:{//结束时间
            type: String,
            default:null,
        },
        post:{//工作岗位
            type: String,
            default:null,
        },
        Provider:{//证明人职位
            type: String,
            default:null,
        },
        Proname:{//证明人
            type: String,
            default:null,
        },
        Prophone:{//联系方式(证明人)
            type: Number,
            default:null,
        },
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
       
    },
    //家庭成员
    homeInfo:{
        name:{
            type: String,
            default:null,
        },//姓名
        Relation:{
            type: String,
            default:null,
        },//与本人关系
        Company:{
            type: String,
            default:null,
        },//工作单位
        Contact:{
            type: Number,
            default:null,
        },//联系方式
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
    },
    //学历信息
    eduBg:{
        Startdate:{
            type: String,
            default:null,
        },//开始日期
        Enddate:{
            type: String,
            default:null,
        },//结束日期
        Schoolname:{
            type: String,
            default:null,
        },//学校名称
        College:{
            type: String,
            default:null,
        },//院系
        Major:{
            type: String,
            default:null,
        },//专业
        Education:{
            type: String,
            default:null,
        },//学历
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
    },
    //资格证书
    qualifyInfo:{
        Getdate:{
            type: String,
            default:null,
        },//获得年月
        Name:{
            type: String,
            default:null,
        },//证书名称
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
    },
    image: {
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        },
        IDface:{//身份证
            type: String,
            default: 'uploads/ID-face-card.png'
        },
        IDback:{
            type: String,
            default:'uploads/ID-back-card.png'
        },
        oneph:{//一寸照
            type: String,
            default:'uploads/one-inch-photo.png'
        },
        Diploma:{//毕业证
            type: String,
            default:'uploads/diploma-card.png'
        },
        degree:{//学位证
            type: String,
            default:'uploads/certificate-card.png'
        },
        StudentID:{//学生证
            type: String,
            default:'uploads/student-card.png'
        },
        Quit:{//离职证明
            type: String,
            default:'uploads/leave-prove-img.png'
        },
        bank:{//银行卡
            type: String,
            default:'uploads/pf-bank-card.png'
        },
        ResidenceHomepage:{//户口主页
            type: String,
            default:'uploads/household-register-card.png'
        },
        ResidenceOwnpage:{//户口本人
            type: String,
            default:'uploads/household-register-card.png'
        }


        
    }

}
