<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: true}" @on-click-back="back">入职者账号管理</x-header>
    <!-- content -->
    <tab :scroll-threshold="5">
      <tab-item selected @click.native="$router.replace('/user/userSee')">查看</tab-item>
      <tab-item @click.native="$router.replace('/user/userAdd')">添加</tab-item>
    </tab>
    <div style="margin-top:44px;">
      
        <router-view></router-view>
      
    </div>
    
  </div>
</template>

<script>
import { XHeader,Tab, TabItem,Swiper, SwiperItem} from 'vux'
import userSee from "./userSee"
import userAdd from "./userAdd"
export default {
  components: {
    XHeader,Tab,TabItem,Swiper, SwiperItem,
    userSee,userAdd
  },
  data(){
      return{
          show:true,
      }
  },
  methods:{
    back(){
      this.$router.replace("/home");
    }
  }
}
</script>
<style>
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
.vux-slider > .vux-swiper{
   min-height: 100vh;
}
</style>


