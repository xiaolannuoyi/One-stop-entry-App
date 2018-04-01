//构建数据表
const Schema = require('mongoose').Schema;

module.exports = {
    hr: {
        hrname:String,//姓名
        hrnum: Number,//工号
        hrtel: Number,//电话
        hraddress: String,//负责地区
        isAdmin: Number,//是否为管理者 0 :false; 1: true
      },
}
