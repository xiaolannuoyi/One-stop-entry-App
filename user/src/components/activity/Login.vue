<template>
  <div>
    <group title="">
      <x-input title="电话号码" ref="Tel" v-model="formData.Tel" placeholder="请输入电话号码" keyboard="number"></x-input>
    </group>
    <group title="">
      <x-input title="密码" ref="password" v-model="formData.Password" placeholder="请输入密码" type="password" ></x-input>
    </group>
    <x-button type="primary" @click.native="login">primary</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, } from 'vux'
import ServiceManager from '@/services/services-manager';
import store from '@/store/store.js'

export default {
  store,
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      formData: {
        Tel: '18846042481',
        Password: '042481'
      }
    }
  },
  methods:{
      login(){
          ServiceManager.UserLogin(this.formData).then(data => {
          console.log(data)
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '登录成功',
              type: 'success'
            });
            this.$store.state.UserInfo = data.data.result;//返回数据存入store
            console.log("store",this.$store.state.UserInfo)
            this.$router.push('/home');
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
