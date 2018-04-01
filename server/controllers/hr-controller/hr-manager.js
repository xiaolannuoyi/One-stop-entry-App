const HrOpt = require('./hr-operations')
/**
 * HR 管理类
 * 
 * 
 */
class HrManager {

  async regist(ctx, next) {
    await HrOpt.regist(ctx.request.body).then(data => {
      ctx.response.body = {
          code:200,
          msg:"注册成功",
          result:data
      }
    });
  }

}
module.exports =  new HrManager