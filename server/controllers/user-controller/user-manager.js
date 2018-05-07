const UserOpt = require('./User-operations')
/**
 * User 管理类
 * 
 * 
 */
class UserManager {

  /**
   * 注册返回信息
   */
  async regist(ctx, next) {
    await UserOpt.regist(ctx.request.body).then(data => {
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
    await UserOpt.login(ctx.query).then(data => {
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
    /**
   * 查看所有user 返回信息
   */
  async findUser(ctx, next) {
    await UserOpt.findUser().then(data => {
      ctx.response.body = {
        code:200,
        msg:"查询成功",
        result:data
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"查询错误"
      }
    });
  }
    /**
   * 查看id 对应的User信息 
   */
  async findUserOne(ctx, next) {
    console.log("ctx.params.UserId",ctx.params.UserId);
    await UserOpt.findUserOne({_id:ctx.params.UserId}).then(data => {
      ctx.response.body = {
        code:200,
        msg:"查询成功",
        result:data
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"查询错误"
      }
    });
  }
    /**
   * 修改 User 信息
   */
  async UserEdit(ctx, next) {
    console.log("1111111111");
    await UserOpt.UserEdit(ctx.request.body.id,ctx.request.body.data).then(data => {
      ctx.response.body = {
        code:200,
        msg:"查询成功",
        result:data
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"查询错误"
      }
    });
  }
  /**
   * 删除 User 信息
   */
  async UserDel(ctx, next) {
    console.log("ctx.request.body",ctx.request.body);
    
    await UserOpt.UserDel(ctx.request.body).then(() => {
      
      ctx.response.body = {
        code:200,
        msg:"查询成功"
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"查询错误"
      }
    });
  }
    //重置密码 UserResetPassword
    async UserResetPassword(ctx, next) {
      await UserOpt.UserResetPassword(ctx.request.body).then(data => {
        console.log("data",data)
        ctx.response.body = {
            code:200,
            msg:"ok",
            result:data
        }
      }).catch(() => {
        ctx.response.body = {
          msg:"查询错误"
        }
      });
    }
 
}
module.exports =  new UserManager