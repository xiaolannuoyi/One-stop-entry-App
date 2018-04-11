<template>
  <div>
    <group>
      <x-input title="工号" ref="Account" v-model="hrData.Account" type="number" :required="true"></x-input>    
      <x-input title="姓名"  ref="Name" v-model="hrData.Name" :required="true"></x-input>
      <x-input title="手机号码" ref="Tel" v-model="hrData.Tel" keyboard="number" is-type="china-mobile" :max="11" :required="true"></x-input>
      <popup-picker title="负责区域" :data="hraddresslist" v-model="hrData.Address" value-text-align="right"></popup-picker>
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
          Address: ['北京'],//负责地区
          IsAdmin: '',//是否为管理者 0 :false; 1: true
        },
        hraddresslist:[['北京', '上海', '广州']],
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
        ServiceManager.hrRegist(this.hrData).then(data => {
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