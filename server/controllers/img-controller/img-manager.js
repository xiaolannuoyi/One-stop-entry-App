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
  //bank
  async uploadBankCard(ctx, next) {
    await ImgOpt.uploadBankCard(ctx.request.body).then(data => {
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

  //毕业证
  async uploadDiploma(ctx, next) {
    await ImgOpt.uploadDiploma(ctx.request.body).then(data => {
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

  //学位证
  async uploaddegree(ctx, next) {
    await ImgOpt.uploaddegree(ctx.request.body).then(data => {
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

  //学生证
  async uploadStudentID(ctx, next) {
    await ImgOpt.uploadStudentID(ctx.request.body).then(data => {
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


  
  //一寸照
  async uploadoneph(ctx, next) {
    await ImgOpt.uploadoneph(ctx.request.body).then(data => {
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


  
    //离职证明
    async uploadQuit(ctx, next) {
      await ImgOpt.uploadQuit(ctx.request.body).then(data => {
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

    
    //户口页主页
    async uploadResidenceHomepage(ctx, next) {
      await ImgOpt.uploadResidenceHomepage(ctx.request.body).then(data => {
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

    //户口页个人页
    async uploadResidenceOwnpage(ctx, next) {
      await ImgOpt.uploadResidenceOwnpage(ctx.request.body).then(data => {
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