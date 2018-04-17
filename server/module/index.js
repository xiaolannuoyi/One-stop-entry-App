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
        State:{
            type: Number,
            default:0, // 0: 注册，1:接受，2：拒绝，3：提交（等待审核），4：hr审核中，5：审核结束（审核结果）
        },
        preBaseInfo:{
            type: Schema.ObjectId,
            ref: 'preBaseInfo' ,
            default:null
        },
        bankcard:{
            type: Schema.ObjectId,
            ref: 'bankcard' ,
            default:null
        },
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
            type: Date,
            default:null,
        },//毕业日期
        workDate:{
            type: Date,
            default:null,
        },//工作日期
        birthDay:{
            type: Date,
            default:null,
        }, //生日
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
    },
    //工作经历
    workInfo:{
        company:{//公司名称
            type: String,
            default:null,
        },
        Startdate:{//开始时间
            type: Date,
            default:null,
        },
        Enddate:{//结束时间
            type: Date,
            default:null,
        },
        post:{//工作岗位
            type: String,
            default:null,
        },
        user:{
            type: Schema.ObjectId,
            ref: 'user'
        }
       
    },
    // "id":16,
    //       "sEndtime": "2016-8",
    //       "sMyposit": "软件开发",
    //       "sName": "北京赞同",
    //       "sProname": "胡晓群",
    //       "sProphone": "17602131193",
    //       "sProvider": "经理",
    //       "sStartdate": "2015-7"
    // //
    // {
    //     "title":"家庭成员",
    //     "icon":"static/image/category/family-info.png",
    //     "show":false,
    //      "id":"homeMem",
    //     "valueType":"table",
    //     "vueType":"HomeInfo",
    //     "template":"homeMan",
    //     "value":[]
    //   },
    //   {
    //     "title":"资格证书",
    //     "icon":"static/image/category/diploma-info.png",
    //     "show":false,
    //      "id":"qualifica",
    //     "valueType":"table",
    //     "vueType":"QualifyInfo",
    //     "template":"qualifica",
    //     "value":[]
    //   },
    //   {
    //     "title":"教育背景",
    //     "icon":"static/image/category/edu-info.png",
    //     "show":false,
    //      "id":"eduBg",
    //     "valueType":"table",
    //     "vueType":"EduBg",
    //     "template":"eduBg",
    //     "value":[]
    //   },
    //   {
    //     "title":"上传资料",
    //     "icon":"static/image/category/pictures-info.png",
    //     "show":false,
    //      "id":"",
    //      "isShowChecked":false,
    //     "valueType":"link",
    //     "vueType":"EntryApply",
    //     "template":"",
    //     "value":[]
    //   }
}
