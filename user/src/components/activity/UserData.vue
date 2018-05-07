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
    <group title="dang">
        <x-button type="primary" @click.native="confirmCherk">发送给HR进行审核</x-button>
    </group>
   </div> 
</template>

<script>
import ServiceManager from "@/services/services-manager";
import { XButton,XHeader,Group,Cell } from 'vux'
import { mapState ,mapGetters} from 'vuex';
export default {
  components: {
    XHeader,Group,Cell,XButton
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
    },
    confirmCherk(){
       ServiceManager.confirmCherk(this.UserInfo._id).then(data => {
        console.log(data);
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "提交成功",
            type: "success"
          });
          this.$store.commit('setofferStateFlag',false);//offer弹窗
          this.$store.commit('setUserInfo',data.data.result);//存store
          this.$router.replace("/home/check");
        } else {
          this.$vux.toast.show({
            text: "提交失败，请重试",
            type: "warn"
          });
        }
      });
    }
  }
}
</script>
<style>

</style>
