<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">填写</x-header>
    <!-- content -->
    <group>
        <cell title="修改密码" link="/userdata/message/changePassword"></cell>
        <cell title="个人信息" link="/userdata/message/step"></cell>
        <cell title="资料上传" link="/userdata/imagefile/fileStep/IDCard"></cell>
    </group>
   </div> 
</template>

<script>
import { XHeader,Group,Cell } from 'vux'
export default {
  components: {
    XHeader,Group,Cell,
  },
  data(){
      return{
      }
  }
}
</script>
<style>

</style>
