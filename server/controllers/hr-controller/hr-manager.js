const HrOpt = require('./hr-operations')
/**
 * HR 管理类
 * 
 * 
 */
class HrManager {

  /**
   * 注册返回信息
   */
  async regist(ctx, next) {
    await HrOpt.regist(ctx.request.body).then(data => {
      ctx.response.body = {
          code:200,
          msg:"注册成功",
          result:data
      }
    });
  }
  /**
   * 登录返回信息
   */
  async login(ctx, next) {
    await HrOpt.login(ctx.query).then(data => {
      ctx.response.body = {
        code:200,
        msg:"登录成功",
        result:data
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"用户名密码错误"
      }
    });
  }

}
module.exports =  new HrManager