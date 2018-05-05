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
import ServiceManager from "@/services/services-manager";
import store from "@/store/store.js";
import { XHeader,Group,Cell } from 'vux'
import { mapState ,mapGetters} from 'vuex';
export default {
  components: {
    XHeader,Group,Cell,
  },
  data(){
      return{
      }
  },
  mounted(){
    this.getimg();
  },
  computed: {
    ...mapState(['image','UserInfo']),
  },
  methods:{
    getimg(){
      ServiceManager.findImg(this.UserInfo._id).then( data =>{
        console.log("image",data);
        this.$store.commit('setImage',data.data.result);
        console.log("store",this.image)
      })
    }
  }
}
</script>
<style>

</style>
