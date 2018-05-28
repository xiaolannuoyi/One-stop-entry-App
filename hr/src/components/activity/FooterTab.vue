<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footer">
      <tabbar>
        <tabbar-item link="/home/main" selected>
          <img slot="icon"  src="../../images/b-home.png">
          <img slot="icon-active"  src="../../images/a-home.png">   
          <span slot="label">主页</span>          
        </tabbar-item>
        <tabbar-item show-dot link="/home/message">
          <img slot="icon" src="../../images/b-offer.png">
          <img slot="icon-active" src="../../images/a-offer.png">
          <span slot="label">消息</span>
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