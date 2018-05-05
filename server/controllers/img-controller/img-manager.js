const ImgOpt = require('./img-operations')

class ImgManager {

    /**
     * 头像上传
     */
    async uploadFace(ctx, next) {
        console.log("tupian",ctx.request.body);
      await ImgOpt.uploadFace(ctx.request.body).then(data => {
        ctx.response.body = {
            code:200,
            msg:"头像上传成功",
            result:data
        }
      }).catch( () =>{
        
      });
    }
   //
   async findImg(ctx, next) {
    await ImgOpt.findImg(ctx.request.body).then(data => {
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

  //ID正面
  async uploadIDface(ctx, next) {
    console.log(ctx.request.body)
    await ImgOpt.uploadIDface(ctx.request.body).then(data => {
      ctx.response.body = {
        code:200,
        msg:"上传成功",
        result:data
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"上传错误"
      }
    });
  }
    //ID背面
  async uploadIDback(ctx, next) {
    await ImgOpt.uploadIDback(ctx.request.body).then(data => {
      ctx.response.body = {
        code:200,
        msg:"上传成功",
        result:data
      }
    }).catch(() => {
      ctx.response.body = {
        msg:"上传错误"
      }
    });
  }

  }
  module.exports =  new ImgManager