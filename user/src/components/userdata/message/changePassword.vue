<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: true}">修改密码</x-header>
    <!-- content -->
    <group>
      <x-input title="旧密码" type="text" placeholder="请输入旧密码" :max="6" ref="oldps" v-model="oldpassword" :equal-with="storeOldpassword" text-align="right"></x-input>
    </group>
    <group title="密码要大于6位">
      <x-input title="新密码" type="password" placeholder="请输入新密码" ref="ps"  v-model="password" :min="6" :max="16" text-align="right"></x-input>
      <x-input title="确认密码" v-model="password2" type="password" ref="ps2" placeholder="请确认新密码" :min="6" :max="16" :equal-with="password" text-align="right"></x-input>
    </group>
    <x-button type="primary" :disabled="disable" @click.native="submit">提交</x-button>
   </div> 
</template>

<script>
import { mapState } from 'vuex';
import { XHeader,Group,XInput,XButton} from 'vux'
import ServiceManager from '@/services/services-manager';

export default {
  components: {
    XHeader,Group,XInput,XButton
  },
  data(){
      return{
          oldpassword:"",
          password:"",
          password2:""
      }
  },
  watch:{
  },

 computed: {
   ...mapState(['UserInfo']),
    storeOldpassword() {
        console.log(this.UserInfo.Password);
        return this.UserInfo.Password;
    },
     disable(){
        if(this.oldpassword !='' && this.password != ''&&this.password2 != ''&&
            this.$refs.oldps.valid && this.$refs.ps.valid && this.$refs.ps2.valid){
            console.log(11111)
            return false
        }else{
            console.log(2222)
            return true
        }
        }
  },
  methods:{
      submit(){
        this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.ChangePassword(this.UserInfo._id,this.password2).then(data => {
          console.log(data)
          this.$vux.loading.hide()          
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '修改密码成功',
              type: 'success'
            });
            this.$store.commit('setUserInfo',data.data.result);
            console.log("store",this.UserInfo)
            this.$router.replace('/home/userdata');
          } else {
            this.$vux.toast.show({
              text: '修改密码失败，请重试',
              type: 'warn'
            });
          }
        });
      }
  }
}
</script>
<style>

</style>
