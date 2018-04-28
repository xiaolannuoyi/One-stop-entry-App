const ImgOpt = require('./img-operations')

class ImgManager {

    /**
     * 注册返回信息
     */
    async uploadFace(ctx, next) {
        console.log("tupian",ctx.request.body);
      await ImgOpt.uploadFace(ctx.request.body).then(data => {
        ctx.response.body = {
            code:200,
            msg:"注册成功",
            result:data
        }
      });
    }
   
  }
  module.exports =  new ImgManager