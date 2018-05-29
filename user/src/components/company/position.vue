<template>
  <div class="rules">
    <x-header :left-options="{showBack: true}">周边环境</x-header>
    <article>
      <div class="header">
        <h3>周边环境</h3>
      </div>
      <div class="box">
        <div class="smallbox">
          <h4><span class="square"></span> 地理位置  </h4>
            <p><span>北京赞同</span> 	北京市朝阳区来广营西路望京诚盈中心A座1号楼6层 	</p>
            <p><span>北京赞同</span> 	北京市朝阳区花家地北里9号楼（西侧） 	</p>
            <p><span>上海赞同</span> 	上海市杨浦区政立路415号中航天盛广场B座7楼 	</p>
            <p><span>珠海赞同</span> 	珠海市唐家湾镇软件园路1号教学区1号楼三层303-304室 </p>
            <p><span>广州赞同</span>	广州市越秀区先烈中路75号穗丰大厦A座818室 	</p>
            <p><span>深圳赞同</span> 	深圳南山区深圳软件园二期11栋B303 	</p>
            <p><span>西安赞同</span>	西安市高新区唐延路35号旺座现代城F座 705 室 	</p>
            <p><span>南京赞同</span>	南京市建邺区水西门大街249号千峰彩翠大厦1903室 	</p>
            <p><span>福州赞同</span> 	福建福州市软件大道89号B区11栋305室</p>
        </div>
      </div>
      
    </article> 
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
components: {
    XHeader
  },
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
.smallbox span{
  color:#3cc1bc;
}
.square{
  display: inline-block;
  height: 10px;
  width: 10px;
  background:#FFAA36;
}
</style>
