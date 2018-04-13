const UserMessageOpt = require('./UserMessage-operations')
/**
 * User 管理类
 * 
 * 
 */
class UserMessageManager {
   /**
   * 修改offer状态 
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
   /**
   * 修改密码
   */
  async ChangePassword(ctx, next) {
    // console.log("2222222222222222")
    // ctx.response.body = ctx.request.body;
    await UserMessageOpt.ChangePassword(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg:"ok",
          result:data
      }
    });
  }
}
module.exports =  new UserMessageManager