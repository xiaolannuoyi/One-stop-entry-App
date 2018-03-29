<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
    <group>
        <cell
      title="个人信息"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"></cell>

        <p class="slide" :class="showContent004?'animate':''">
        blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...
        </p>
    </group>
    <group>
        <cell
      title="offer信息"
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"></cell>

        <p class="slide" :class="showContent003?'animate':''">
        blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...
        </p>
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


