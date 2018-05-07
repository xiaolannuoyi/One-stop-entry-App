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
    }).catch(() => {
      ctx.response.body = {
        msg:"查询错误"
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
    }).catch(() => {
      ctx.response.body = {
        msg:"查询错误"
      }
    });
  }
//------------------增-------------------------------
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
    console.log("=========",ctx.request.body);
    
    await UserMessageOpt.submitBankcard(ctx.request.body).then(data => {
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
//----------------------删除----------------
  //删除工作经历
  async delWorkInfo(ctx, next) {
    await UserMessageOpt.delWorkInfo(ctx.request.body).then(data => {
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
  //删除家庭成员
  async delHomeInfo(ctx, next) {
    await UserMessageOpt.delHomeInfo(ctx.request.body).then(data => {
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
 
   //删除资格证书
   async delQualifyInfo(ctx, next) {
    await UserMessageOpt.delQualifyInfo(ctx.request.body).then(data => {
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
   // 删除教育背景
   async delEdubgInfo(ctx, next) {
    await UserMessageOpt.delEdubgInfo(ctx.request.body).then(data => {
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
//------------------------编辑----------------
//个人信息
async editPreBaseInfo(ctx, next) {
  await UserMessageOpt.editPreBaseInfo(ctx.request.body).then(data => {
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
  //银行卡
  async editBankcard(ctx, next) {
    await UserMessageOpt.editBankcard(ctx.request.body).then(data => {
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
  //编辑工作经历
  async editpreWorkInfo(ctx, next) {
    await UserMessageOpt.editpreWorkInfo(ctx.request.body).then(data => {
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
  //编辑家庭成员
  async editpreHomeInfo(ctx, next) {
    await UserMessageOpt.editpreHomeInfo(ctx.request.body).then(data => {
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
  //编辑资格证书
  async editpreQualifyInfo(ctx, next) {
    await UserMessageOpt.editpreQualifyInfo(ctx.request.body).then(data => {
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
  //编辑教育背景
  async editEduBgInfo(ctx, next) {
    await UserMessageOpt.editEduBgInfo(ctx.request.body).then(data => {
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
//---------------------查----------------------
  //个人信息
  async findPreBaseInfo(ctx, next) {
    console.log(ctx.request.body);
    
    await UserMessageOpt.findPreBaseInfo(ctx.request.body).then(data => {
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
  
  //工资卡
  async findbankcard(ctx, next) {
    console.log(ctx.request.body);
    
    await UserMessageOpt.findbankcard(ctx.request.body).then(data => {
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

    //工作经历
    async findworkInfo(ctx, next) {
      console.log(ctx.request.body);
      
      await UserMessageOpt.findworkInfo(ctx.request.body).then(data => {
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
    //资格证书
    async findqualifyInfo(ctx, next) {
      console.log(ctx.request.body);
      
      await UserMessageOpt.findqualifyInfo(ctx.request.body).then(data => {
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
    //家庭
    async findhomeInfo(ctx, next) {
      console.log(ctx.request.body);
      
      await UserMessageOpt.findhomeInfo(ctx.request.body).then(data => {
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
    //教育背景
    async findedubgInfo(ctx, next) {
      console.log(ctx.request.body);
      
      await UserMessageOpt.findedubgInfo(ctx.request.body).then(data => {
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