<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footer">
      <tabbar>
        <tabbar-item :link="{path:'/home/main', replace: true}" selected>
          <img slot="icon"  src="">
          <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/home/userdata', replace: true}" >
          <img slot="icon" src="">
          <span slot="label">填写</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/home/check', replace: true}">
          <img slot="icon" src="">
          <span slot="label">审核</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/home/company', replace: true}">
          <img slot="icon" src="">
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