<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">用户信息</x-header>
    <!-- content -->
    <group>
      <x-input title="工号" :disabled="disabled" v-model="hrData.Account" type="number"></x-input>    
      <x-input title="姓名"  :disabled="disabled" v-model="hrData.Name" ></x-input>
      <x-input title="手机号码" :disabled="disabled" v-model="hrData.Tel" keyboard="number" is-type="china-mobile" :max="11"></x-input>
      <popup-picker title="负责区域" :disabled="disabled" :data="hraddresslist" v-model="hrData.Address" value-text-align="left"></popup-picker>
      <x-switch title="管理员权限" :disabled="disabled" :value-map="['0', '1']" v-model="hrData.IsAdmin"></x-switch>
    </group>
    <flexbox>
        <flexbox-item>
          <x-button type="warn" @click.native="del">删除</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="editd">编辑</x-button>
        </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Group, Cell, XHeader, CellBox, XInput,PopupPicker,XSwitch,XButton,Flexbox, FlexboxItem,} from 'vux'
import ServiceManager from '@/services/services-manager';


export default {
  components: {
    Group,Cell, XHeader,CellBox,XInput,PopupPicker,XSwitch,XButton,Flexbox, FlexboxItem,
  },
  data () {
      return {
        disabled:true,
        hrData:{
          Account: '111',//工号
          Password:'111',//密码，默认为姓名全称
          Name:'111',//姓名
          Tel: '11111',//电话
          Address: ['北京'],//负责地区
          IsAdmin: '1',//是否为管理者 0 :false; 1: true
        },
        hraddresslist:[['北京', '上海', '广州']],
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
         getData(){
          console.log("router",this.$route.params)
          ServiceManager.findHrOne(this.$route.params.id).then(data => {
          console.log("data",data)
          if(data.data.code == 200){
              let result = data.data.result;
              console.log("result",result);
            }
          })
        }
    }
}
</script>
<style>

</style>


