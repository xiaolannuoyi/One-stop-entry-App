<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">修改密码</x-header>
    <!-- content -->
    <group>
      <x-input title="旧密码" type="text" placeholder="请输入旧密码" :max="6" ref="oldps" v-model="oldpassword" :equal-with="storeOldpassword"></x-input>
    </group>
    <group>
      <x-input title="新密码" type="text" placeholder="请输入新密码" ref="ps"  v-model="password" :min="6" :max="16"></x-input>
      <x-input title="确认密码" v-model="password2" type="text" ref="ps2" placeholder="请确认新密码" :min="6" :max="16" :equal-with="password"></x-input>
    </group>
    <x-button type="primary" :disabled="disable" @click.native="submit">提交</x-button>
   </div> 
</template>

<script>
import store from "@/store/store.js";
import { XHeader,Group,XInput,XButton} from 'vux'
import {mapState} from 'vuex';
export default {
  store,
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
    storeOldpassword() {
        console.log(this.$store.state.UserInfo.Password);
        return this.$store.state.UserInfo.Password;
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

      }
  }
}
</script>
<style>

</style>
