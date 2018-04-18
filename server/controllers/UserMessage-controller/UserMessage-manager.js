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

    /**
   * 提交个人信息
   */
  async submitPreBaseInfo(ctx, next) {
    // console.log("2222222222222222")
    // ctx.response.body = ctx.request.body;
    await UserMessageOpt.submitPreBaseInfo(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg:"ok",
          result:data
      }
    }).catch(err => {
      ctx.response.body = {
        code:300,
        msg:err,
    }
    });
  }

    /**
   * 工资卡信息
   */
  async submitBankcard(ctx, next) {
    // console.log("2222222222222222")
    // ctx.response.body = ctx.request.body;
    await UserMessageOpt.submitBankcard(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg: data.msg,
          result : data.data
      }
    }).catch(err => {
      ctx.response.body = {
        code:300,
        msg:err,
    }
    });
  }
  
    /**
   * 工作经历
   */
  async submitpreWorkInfo(ctx, next) {
    await UserMessageOpt.submitpreWorkInfo(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg: 'ok',
          result : data
      }
    }).catch(err => {
      ctx.response.body = {
        code:300,
        msg:err,
    }
    });
  }

  
    /**
   * 家庭成员
   */
  async submitpreHomeInfo(ctx, next) {
    await UserMessageOpt.submitpreHomeInfo(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg: 'ok',
          result : data
      }
    }).catch(err => {
      ctx.response.body = {
        code:300,
        msg:err,
    }
    });
  }
      /**
   * 教育背景
   */
  async submitEduBgInfo(ctx, next) {
    await UserMessageOpt.submitEduBgInfo(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg: 'ok',
          result : data
      }
    }).catch(err => {
      ctx.response.body = {
        code:300,
        msg:err,
    }
    });
  }
      /**
   * 荣誉证书
   */
  async submitQualifyInfo(ctx, next) {
    await UserMessageOpt.submitQualifyInfo(ctx.request.body).then(data => {
      console.log("data",data)
      ctx.response.body = {
          code:200,
          msg: 'ok',
          result : data
      }
    }).catch(err => {
      ctx.response.body = {
        code:300,
        msg:err,
    }
    });
  }
}
module.exports =  new UserMessageManager