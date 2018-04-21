<template>
  <div>
    <group>
      <cell title="招商银行"></cell>
      <x-input title="账户名" v-model="ZSbankcard.sPfaccount" type="text"  :required="true" text-align="right"></x-input>
      <x-input title="身份证号码" v-model="ZSbankcard.sPfid" type="number" :required="true" text-align="right"></x-input>
      <x-input title="卡号" v-model="ZSbankcard.sPfcardNum" type="number" :required="true" text-align="right"></x-input>
      <x-input title="开户行名称" v-model="ZSbankcard.sPfopenban" type="text" :required="true" text-align="right"></x-input>
      <x-input title="开户城市" v-model="ZSbankcard.sPfopCity" type="text" :required="true" text-align="right"></x-input>
    </group>
     <x-button  v-if="ZSbankcard.user == null" type="primary" @click.native="confirm">提交</x-button>
     <x-button v-else type="primary" @click.native="edit">提交更改</x-button>     
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XInput,XButton,Cell } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
        Group,XInput,XButton,Cell
    },
    data(){
        return{
            // ZSbankcard:{
            //     sPfaccount:'',//账户名
            //     sPfid:'',//身份证号码
            //     sPfcardNum:'',//卡号
            //     sPfopenban:'',//开户行名称
            //     sPfopCity:''//开户城市
            // }
        }
    },
    computed: {
        ZSbankcard() {
            console.log(this.$store.state.bankcard);
            return this.$store.state.bankcard;
        },
    },
    mounted(){
        this.getbankcard();
    },
    methods:{
         getbankcard(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.$store.state.UserInfo._id);
            
             ServiceManager.findbankcard(this.$store.state.UserInfo._id).then(data => {
                this.$vux.loading.hide()                 
                if(data.data.result ==null){
                    console.log("null");
                    return 
                }else{
                    console.log("yes");
                    this.$store.state.bankcard = data.data.result;//返回数据存入store
                    console.log("store",this.$store.state.bankcard)
                }
                
            });
        },
        confirm(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            this.ZSbankcard.user = this.$store.state.UserInfo._id
             ServiceManager.submitBankcard(this.ZSbankcard).then(data  => {
                console.log(data)
                this.$vux.loading.hide()  
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: data.data.msg,
                    type: 'success'
                    });
                    this.$store.state.bankcard = data.data.result;//返回数据存入store
                    console.log("bankcard",this.$store.state.bankcard)
                } else {
                    this.$vux.toast.show({
                    text : data.data.msg,
                    type: 'warn'
                    });
                }
            });
        },
        edit(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            ServiceManager.editBankcard(this.ZSbankcard).then(data  => {
                console.log(data)
                this.$vux.loading.hide() 
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: data.data.msg,
                    type: 'success'
                    });
                    this.$store.state.bankcard = data.data.result;//返回数据存入store
                    console.log("bankcard",this.$store.state.bankcard)
                } else {
                    this.$vux.toast.show({
                    text : data.data.msg,
                    type: 'warn'
                    });
                }
            });
        }
    }
}
</script>

<style>

</style>
