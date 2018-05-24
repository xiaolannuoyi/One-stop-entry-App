<template>
  <div>
    <group>
      <x-input title="工号" ref="Account" v-model="hrData.Account" type="number" :required="true" text-align="right"></x-input>    
      <x-input title="姓名"  ref="Name" v-model="hrData.Name" :required="true" text-align="right"></x-input>
      <x-input title="手机号码" ref="Tel" v-model="hrData.Tel" keyboard="number" is-type="china-mobile" :max="11" :required="true" text-align="right"></x-input>
      <popup-picker title="负责区域" :data="list.addresslist" v-model="hrData.Address" v :columns="2" value-text-align="right" show-name></popup-picker>
      <x-switch title="管理员权限" :value-map="['0', '1']" v-model="hrData.IsAdmin"></x-switch>
    </group>
    <group>
      <x-button type="primary" :disabled="canGo || btndisable" @click.native="hrRegist">primary</x-button>
    </group>
    
  </div>
</template>

<script>
  import { Group, XInput,PopupPicker,XSwitch,XButton } from 'vux'
  import ServiceManager from '@/services/services-manager';
  import compass from 'static/compass.js';
  export default {
    components: {
      Group, XInput,PopupPicker,XSwitch,XButton
    },
    data () {
      return {
        hrData:{
          Account: '',//工号
          Password:'',//密码，默认为姓名全称
          Name:'',//姓名
          Tel: '',//电话
          Address: [],//负责地区
          IsAdmin: '',//是否为管理者 0 :false; 1: true
        },
        list:compass,
        btndisable: true,
      }
    },
    computed:{
      canGo() {
        if(this.hrData.Account !='' && this.hrData.Name !="" && this.hrData.Tel !=''&&
          this.$refs.Account.valid && this.$refs.Name.valid && this.$refs.Tel.valid){
            this.btndisable=false;
        }else{
            this.btndisable=true;
        }
      },
    },
    methods:{
      hrRegist(){
        this.hrData.Password = this.hrData.Account;
        this.hrData.Address.toString();
        this.$vux.loading.show({
                text: 'Loading'
            })
        ServiceManager.hrRegist(this.hrData).then(data => {
          this.$vux.loading.hide()
          console.log(data)
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '注册成功',
              type: 'success'
            });
            this.$router.replace('/hr');
          }else{
            this.$vux.toast.show({
              text: '该账号已存在',
              type: 'warn'
            });
          }
        });
      },
    }
}
  
</script>