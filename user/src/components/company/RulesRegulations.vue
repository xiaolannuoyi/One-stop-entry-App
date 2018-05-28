<template>
  <div class="rules">
    <article>
      <div class="header">
        <h3>规则制度</h3>
      </div>
      
      <div class="box">
        <div class="smallbox">
          <h4> <span class="square"></span> 顾全大局 </h4>
          <p>1. 服从组织分配，执行领导决定，有意见通过组织渠道提出；</p>
          <p>2. 对同事有意见，直接与本人交流或向上级领导和人力资源部反映，严禁私下议论、诽谤他人；</p>
          <p>3. 树立全局观念和为一线服务的思想，杜绝攀比以及由此而产生的消极工作态度；</p>
          <p>4. 不允许对外或在员工中间散布有害公司的言论。 </p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
        <h4><span class="square"></span> 尽职尽责，遵章守纪 </h4>
        <p>1. 依照岗位职责和工作标准，按时、保质、保量完成个人所承担的工作任务；</p>
        <p>2. 自觉培养和保持认真负责、勤俭节约、谦虚谨慎、实事求是、奉公守法、团结协作的工作作风，不得互相推诿、敷衍搪塞、铺张浪费、文过饰非；</p>
        <p>3. 自觉遵守公司的保密制度，未经允许不得向外界提供公司的内部资料、文件以及相关的保密信息；</p>
        <p>4. 按时上下班，不得无故迟到、早退或外出办理私事，不得谎报考勤，严格履行请假、销假制度；</p>
        </div>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 团结友爱  </h4>
          <p>1. 关心身边的每一个人，主动照顾遇到各种困难的同事；</p>
          <p>2. 主动调解身边发生的各种矛盾，增进同事之间的团结；</p>
          <p>3. 保持健康、良好的工作情绪，营造轻松、和谐的工作氛围，形成积极向上的精神风貌。</p>
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
  background: url('../../images/header.png') center center no-repeat;
  background-size: contain;
  margin-bottom: 16px;
}
.box{
  width: 84%;
  border:1.3rem double #3cc1bc;
  border-image:url(../../images/background.png) 45;
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
}
.square{
  display: inline-block;
  height: 10px;
  width: 10px;
  background:#FFAA36;
}
</style>
