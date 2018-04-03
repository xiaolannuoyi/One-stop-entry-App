<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
    <group>
        <cell title="HR账号管理" link="/hr"></cell>
        <cell title="入职者账号管理" link="/hr"></cell>
    </group>
    <!-- footer -->
    <footer-tab></footer-tab>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, XHeader, CellBox } from 'vux'
import footerTab from "./footerTab"
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    CellBox,
    footerTab,
    
  },
  data(){
      return{
          showContent004:false,
          showContent003:false,
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
</style>


