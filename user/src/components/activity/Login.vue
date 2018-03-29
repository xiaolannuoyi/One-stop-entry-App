<template>
  <div>
    <group title="">
      <x-input title="手机号码" ref="account" v-model="account" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" :max="11"></x-input>
    </group>
    <group title="">
      <x-input title="密码" ref="password" v-model="password" placeholder="请输入密码" type="password" :min="6" :max="6"></x-input>
    </group>
    <x-button type="primary" @click.native="login">primary</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      account:"",
      password:"",
    }
  },
  methods:{
      login(){
          this.$router.push('/home');
      }
  },
}
</script>

<style>
</style>
