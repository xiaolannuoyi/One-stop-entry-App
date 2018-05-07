<template>
  <div>
    <group title="">
      <x-input title="电话号码" ref="Tel" v-model="formData.Tel" placeholder="请输入电话号码" keyboard="number" :min="11" :max="11" is-type="china-mobile" :required="true" text-align="right"></x-input>
    </group>
    <group title="">
      <x-input title="密码" ref="Password" v-model="formData.Password" placeholder="请输入密码" type="password" :min="6" :required="true" text-align="right"></x-input>
    </group>
    <x-button type="primary" :disabled="canGo||disabled" @click.native="login">登录</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, } from 'vux'
import ServiceManager from '@/services/services-manager';
import { mapState } from 'vuex';

export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      disabled:true,
      formData: {
        Tel: '18846042481',
        Password: ''
      }
    }
  },
  computed:{
      ...mapState(['UserInfo']),
      canGo() {
        console.log(this.formData.Tel);
        console.log(this.formData.Password);
        
        if(this.formData.Tel !=='' && this.formData.Password !=='' && this.$refs.Tel.valid && this.$refs.Password.valid){
          console.log("1",this.disabled)
            this.disabled=false;
        }else{
          console.log("2",this.disabled)          
            this.disabled=true;
        }
      },
    },
  methods:{
      login(){
         this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.UserLogin(this.formData).then(data => {
          console.log(data)
          this.$vux.loading.hide()
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '登录成功',
              type: 'success'
            });
            console.log(data.data.result)
            this.$store.commit('setUserInfo',data.data.result);
            this.$router.replace('/home');
          } else {
            this.$vux.toast.show({
              text: '登录失败，请重试',
              type: 'success'
            });
          }
        });
      }
  },
}
</script>

<style>
</style>
