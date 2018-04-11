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
      if (data === '已存在') {
        ctx.response.body = {
          code: 300,
          msg: "已存在",
          result: data
        }
      } else {
        ctx.response.body = {
          code: 200,
          msg: "注册成功",
          result: data
        }
      }

    });
  }
  /**
   * 登录返回信息
   */
  async login(ctx, next) {
    await HrOpt.login(ctx.query).then(data => {
      ctx.response.body = {
        code: 200,
        msg: "登录成功",
        result: data
      }
    }).catch(() => {
      ctx.response.body = {
        msg: "用户名密码错误"
      }
    });
  }
  /**
   * 查看所有hr 返回信息
   */
  async findHr(ctx, next) {
    await HrOpt.findHr().then(data => {
      ctx.response.body = {
        code: 200,
        msg: "查询成功",
        result: data
      }
    }).catch(() => {
      ctx.response.body = {
        msg: "查询错误"
      }
    });
  }
  /**
   * 查看id 对应的hr信息 
   */
  async findHrOne(ctx, next) {
    console.log("ctx.params.hrId", ctx.params.hrId);
    await HrOpt.findHrOne({ _id: ctx.params.hrId }).then(data => {
      ctx.response.body = {
        code: 200,
        msg: "查询成功",
        result: data
      }
    }).catch(() => {
      ctx.response.body = {
        msg: "查询错误"
      }
    });
  }
  /**
   * 修改 hr 信息
   */
  async hrEdit(ctx, next) {
    console.log("1111111111");

    // console.log("ctx.query",ctx.request.body.id);
    // ctx.response.body = ctx.request.body;
    await HrOpt.hrEdit(ctx.request.body.id, ctx.request.body.data).then(data => {
      ctx.response.body = {
        code: 200,
        msg: "查询成功",
        result: data
      }
    }).catch(() => {
      ctx.response.body = {
        msg: "查询错误"
      }
    });
  }
  /**
   * 删除 hr 信息
   */
  async hrDel(ctx, next) {
    console.log("ctx.request.body", ctx.request.body);

    await HrOpt.hrDel(ctx.request.body).then(data => {
      ctx.response.body = {
        code: 200,
        msg: "查询成功",
        result: data
      }
    }).catch(() => {
      ctx.response.body = {
        msg: "查询错误"
      }
    });
  }

}
module.exports = new HrManager