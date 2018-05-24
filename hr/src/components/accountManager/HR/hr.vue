<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: true}" @on-click-back="back">HR账号管理</x-header>
    <!-- content -->
    <tab :scroll-threshold="5">
      <tab-item selected @click.native="$router.replace('/hr/hrSee')">查看</tab-item>
      <tab-item @click.native="$router.replace('/hr/hrAdd')">添加</tab-item>
    </tab>
    <div>
      
        <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import { XHeader,Tab, TabItem,Swiper, SwiperItem} from 'vux'
import hrSee from "./hrSee"
import hrAdd from "./hrAdd"
export default {
  components: {
    XHeader,Tab,TabItem,Swiper, SwiperItem,
    hrSee,hrAdd
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


