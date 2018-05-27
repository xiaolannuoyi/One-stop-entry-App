<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footer">
      <tabbar>
        <tabbar-item :link="{path:'/home/main', replace: true}" selected>
          <img slot="icon"  src="static/images/b-home.png">
          <img slot="icon-active"  src="static/images/a-home.png">        
          <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/home/userdata', replace: true}" >
          <img slot="icon" src="static/images/b-auditing.png">
          <img slot="icon-active" src="static/images/a-auditing.png">
          <span slot="label">填写</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/home/check', replace: true}">
          <img slot="icon" src="static/images/b-offer.png">
          <img slot="icon-active" src="static/images/a-offer.png">
          <span slot="label">进度</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/home/company', replace: true}">
          <img slot="icon" src="static/images/b-system.png">
          <img slot="icon-active" src="static/images/a-system.png">
          <span slot="label">公司</span>
        </tabbar-item>
      </tabbar>
    </div>

  </div>
  
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'
export default {
  name:"FooterTab",
  components: {
    Tabbar,
    TabbarItem,
  }
}
</script>

<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>