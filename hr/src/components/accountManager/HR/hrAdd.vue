<template>
  <div>
    <group title="justify" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input title="姓名" placeholder="请输入姓名" v-model="hrData.hrname" ></x-input>
      <x-input title="工号" placeholder="请输入工号" v-model="hrData.hrnum" type="text"></x-input>
      <x-input title="手机号码" placeholder="请输入手机号码" v-model="hrData.hrtel" keyboard="number" is-type="china-mobile" :max="11"></x-input>
      <popup-picker title="负责区域" :data="hraddresslist" v-model="hrData.hraddress" value-text-align="left"></popup-picker>
      <x-switch title="管理员权限" :value-map="['0', '1']" v-model="hrData.isAdmin"></x-switch>
    </group>
    <group>
      <x-button type="primary" @click.native="hrRegist">primary</x-button>
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
          hrname:'',
          hrnum:'',
          hrtel:'',
          hraddress:["北京"],
          isAdmin: 0,
        },
        hraddresslist:[['北京', '上海', '广州']],
      }
    },
    methods:{
      hrRegist(){
        ServiceManager.hrRegist(this.hrData).then(data => {
          // console.log(data)
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '注册成功',
              type: 'success'
            });
          }else{
            this.$vux.toast.show({
              text: '注册失败',
              type: 'warn'
            });
          }
        });
      },
    }
}
  
</script>