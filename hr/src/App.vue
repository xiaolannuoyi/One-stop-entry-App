<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.req{
  color: red;
}
.reqwarn{
  font-size: 12px;
  color: red;
}
.vux-step-item-head{
display: block !important;
}
.vux-step-item-main{
  display: block !important;
}
#app .scrollable .vux-tab-ink-bar{
  bottom:0;
}
#app .scrollable{
  padding-bottom: 0;
}
#app button.weui-btn, input.weui-btn{
  margin-top: 10px;
  margin-bottom:10px;
}
 #app .vux-flexbox{
  margin-top: 10px;
}
//tab
#app .vux-tab-container{
  position: fixed;
  top: 44px;
  z-index: 100;
}
#app .vux-header{
  position: fixed;
  top: 0;
  z-index: 100;
  width:100%;
}
</style>
