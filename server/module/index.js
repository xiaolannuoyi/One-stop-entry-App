//构建数据表
const Schema = require('mongoose').Schema;

module.exports = {
    hr: {
        Account: Number,//工号
        Password: String,//密码，默认为工号
        Name: String,//姓名
        Tel: Number,//电话
        Address: String,//负责地区
        IsAdmin: Number,//是否为管理者 0 :false; 1: true
      },
      //user
    user: {
        Name: String,//姓名
        Tel: Number,//电话
        Password: String,//密码，默认为电话后六位
        Address: String,//工作地区
        Department:String,//部门
        EntryTime:String,//入职时间
        State:{
            type: Number,
            default:0, // 0: 注册，1:接受，2：拒绝，3：提交（等待审核），4：hr审核中，5：审核结束（审核结果）
        },
      },
}
