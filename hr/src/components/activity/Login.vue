<template>
  <div>
    <group title="">
      <x-input title="工号" ref="Account" v-model="formData.Account" placeholder="请输入工号" keyboard="number" :min="6" :required="true" text-align="right"></x-input>
    </group>
    <group title="">
      <x-input title="密码" ref="Password" v-model="formData.Password" placeholder="请输入密码" type="password" :min="6" :required="true" text-align="right"></x-input>
    </group>
    <img :src="src" alt="">
    <x-button type="primary" @click.native="login" :disabled='canGo ||disabled'>登录</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from "vux";
import ServiceManager from "@/services/services-manager";
import store from "@/store/store.js";

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
        Account: "",
        Password: ""
      },
      src: "",
      disabled:true,
    };
  },
  computed:{
    canGo() {
        console.log(this.formData.Account);
        console.log(this.formData.Password);
        
        if(this.formData.Account !=='' && this.formData.Password !=='' && this.$refs.Account.valid && this.$refs.Password.valid){
          console.log("1",this.disabled)
            this.disabled=false;
        }else{
          console.log("2",this.disabled)          
            this.disabled=true;
        }
      },
  },
  methods: {
    login() {
      console.log('111111');
      
      this.$vux.loading.show({
          text: 'Loading'
      })
      ServiceManager.hrLogin(this.formData).then(data => {
        console.log(data);
        this.$vux.loading.hide()
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "登录成功",
            type: "success"
          });
          this.$store.state.HrInfo = data.data.result; //返回数据存入store
          console.log("store", this.$store.state.HrInfo);
          this.$router.push("/home");
        } else {
          this.$vux.toast.show({
            text: "登录失败，请重试",
            type: "warn"
          });
        }
      });
    }
  }
};
</script>

<style>

</style>
