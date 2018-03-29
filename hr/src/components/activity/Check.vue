<template>
  <div>
    <x-header :left-options="{showBack: false}">审核</x-header>
    
    <footer-tab></footer-tab>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import footerTab from "./footerTab"
export default {
  components: {
    XHeader,
    footerTab
  }
}
</script>
<style>

</style>
