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
#app{
  padding-top:44px;
}
#app .vux-header {
    position: fixed;
    background-color: #35495e;
    z-index: 100;
    width: 100%;
    top: 0;
}
#app .vux-tab-warp {
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 44px;
}
</style>
