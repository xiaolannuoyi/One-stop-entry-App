const UserMessageOpt = require('./UserMessage-operations')
/**
 * User 管理类
 * 
 * 
 */
class UserMessageManager {
   /**
   * 注册返回信息
   */
  async UserOfferState(ctx, next) {
    // console.log("2222222222222222")
    // ctx.response.body = ctx.request.body;
    await UserMessageOpt.UserOfferState(ctx.request.body).then(data => {
      ctx.response.body = {
          code:200,
          msg:"ok",
          result:data
      }
    });
  }
}
module.exports =  new UserMessageManager