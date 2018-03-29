<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">填写</x-header>
    <!-- content -->
    <group>
        <cell title="个人信息" link="/userdata/message/preMsg"></cell>
        <cell title="资料上传" link="/userdata/imagefile/IDCard"></cell>
    </group>
    <!-- footer -->
    <footer-tab></footer-tab>
  </div>
</template>

<script>
import { XHeader,Group,Cell } from 'vux'
import footerTab from "./footerTab"
export default {
  components: {
    XHeader,Group,Cell,
    footerTab
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

</style>
