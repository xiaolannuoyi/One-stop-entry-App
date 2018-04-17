<template>
  <div>
    <group>
      <cell title="招商银行"></cell>
      <x-input title="账户名" v-model="ZSbankcard.sPfaccount" type="text"></x-input>
      <x-input title="身份证号码" v-model="ZSbankcard.sPfid" type="number"></x-input>
      <x-input title="卡号" v-model="ZSbankcard.sPfcardNum" type="number"></x-input>
      <x-input title="开户行名称" v-model="ZSbankcard.sPfopenban" type="text"></x-input>
      <x-input title="开户城市" v-model="ZSbankcard.sPfopCity" type="text"></x-input>
    </group>
     <x-button type="primary" @click.native="confirm">提交</x-button>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import preSelectorlist from 'static/models/preSelector.js'
import { Group,XInput,XButton,Cell } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
        Group,XInput,XButton,Cell
    },
    data(){
        return{
            ZSbankcard:{
                sPfaccount:'',//账户名
                sPfid:'',//身份证号码
                sPfcardNum:'',//卡号
                sPfopenban:'',//开户行名称
                sPfopCity:''//开户城市
            }
        }
    },
    methods:{
        confirm(){
            let data = {};
            data.sPfaccount = this.ZSbankcard.sPfaccount;//账户名
            data.sPfid = this.ZSbankcard.sPfid;//身份证号码
            data.sPfcardNum = this.ZSbankcard.sPfcardNum;//卡号
            data.sPfopenban = this.ZSbankcard.sPfopenban;//开户行名称
            data.sPfopCity = this.ZSbankcard.sPfopCity;//开户城市
             ServiceManager.submitBankcard(this.$store.state.UserInfo._id,data).then(data  => {
                console.log(data)
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: data.data.result,
                    type: 'success'
                    });
                    // this.$store.state.UserInfo = data.data.result;//返回数据存入store
                    // console.log("store",this.$store.state.UserInfo)
                    // this.$router.replace('/home/userdata');
                } else {
                    this.$vux.toast.show({
                    text : data.data.result,
                    type: 'warning'
                    });
                }
            });
        }
    }
}
</script>

<style>

</style>
