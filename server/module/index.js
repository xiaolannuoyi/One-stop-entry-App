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
}
