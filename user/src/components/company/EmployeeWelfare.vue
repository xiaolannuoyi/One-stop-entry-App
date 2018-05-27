<template>
  <div class="rules">
    <article>
      <div class="header">
        <h3>员工福利</h3>
      </div>     
      <div class="box">
        <div class="smallbox">
          <h4> <span class="square"></span> 餐饮福利 </h4>
          <p>企业根据出勤情况为普通员工提供就餐补贴；入职员工免费提供中餐；用餐时米饭、粥、汤等由企业提供。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
        <h4><span class="square"></span> 服装补贴 </h4>
        <p>企业免费为员工提供工作服装。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 住房福利  </h4>
          <p>根据国家和当地政策法规，为员工缴纳住房公积金；企业提供宿舍（空调、电视、热水器、饮水机等配置齐全），或对不住在企业的员工给予住房补贴。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 交通福利  </h4>
          <p>企业每天安排班车接送员工上下班；春节探亲公司安排专车接送员工，外地员工由公司安排统一购票，并为外地员工报销春节探亲路费；高级管理人员春节回家可报销飞机票。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 交通福利  </h4>
          <p>企业每天安排班车接送员工上下班；春节探亲公司安排专车接送员工，外地员工由公司安排统一购票，并为外地员工报销春节探亲路费；高级管理人员春节回家可报销飞机票。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 带薪休假  </h4>
          <p>入司满一年的部长助理及以上干部和年度优秀个人可于次年享受5--15天的带薪年休假。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 节日福利  </h4>
          <p>值春节、端午、中秋等传统节日为全体员工发放节日物资或补贴；妇女节为全体女职工发放纪念品；儿童节为员工14岁以下子女发放节日礼物。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 生日福利  </h4>
          <p>员工生日时，公司为每位员工赠送礼品表示庆祝。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 员工大事福利  </h4>
          <p>当员工逢婚、育、大病和丧等个人大事时，公司给予员工礼金或慰问金。</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 健康体检 </h4>
          <p>副科及以上干部（含享受待遇），工程技术类员工和特殊工种员工每年由公司统一组织健康体检。  </p>
        </div>
      </div>
      
      
    </article> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rules article{
  background: #fff;
}
.rules article h3{
  text-align: center;
  margin: 10px;
}
.rules article p{
  color: #999;
}
.rules article h4{
  margin-top: 10px;
  padding-left: 20px;
  color: #666;
}
.header{
  margin: 0 auto;
  width: 50%;
  height:43px;
  line-height:43px;
  background: url('../../../static/images/header.png') center center no-repeat;
  background-size: contain;
  margin-bottom: 16px;
}
.box{
  width: 84%;
  border:1.3rem double #3cc1bc;
  border-image:url(../../../static/images/background.png) 45;
  margin: 0 auto;
  margin-top: 15px;
  border-radius:50px;
}
.smallbox{
  padding: -0.38rem -0.63rem -1.63rem -0.63rem;
  width:100%;
  height:100%;
}
.smallbox p{
  font-size:0.94rem;
  text-indent: 2em;
}
.square{
  display: inline-block;
  height: 10px;
  width: 10px;
  background:#FFAA36;
}
</style>
