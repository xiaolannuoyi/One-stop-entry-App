<template>
  <div>
    <group title="招商银行">
      <x-input title="账户名" v-model="bankcard.sPfaccount" type="text"   :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>账户名</div>
      </x-input>
      <x-input title="身份证号码" v-model="bankcard.sPfid" type="number" ref='sPfid' :min="18" :max="18" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>身份证号码</div>          
      </x-input>
      <x-input title="卡号" v-model="bankcard.sPfcardNum" type="number" ref='sPfcardNum' :min="16" :max="16" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>卡号</div>          
      </x-input>
      <x-input title="开户行名称" v-model="bankcard.sPfopenban" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户行名称</div>          
      </x-input>
      <x-input title="开户城市" v-model="bankcard.sPfopCity" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户城市</div>          
      </x-input>
    </group>
     <x-button  v-if="bankcard.user == null" :disabled=" disable" type="primary" @click.native="confirm">提交</x-button>
     <x-button v-else type="primary"  :disabled=" disable" @click.native="edit">提交更改</x-button>     
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XInput,XButton,Cell } from 'vux'
import { mapState } from 'vuex';

export default {
    components: {
        Group,XInput,XButton,Cell
    },
    data(){
        return{
            // disable:true,
            // bankcard:{
            //     sPfaccount:'',//账户名
            //     sPfid:'',//身份证号码
            //     sPfcardNum:'',//卡号
            //     sPfopenban:'',//开户行名称
            //     sPfopCity:''//开户城市
            // }
        }
    },
    computed: {
        ...mapState(['bankcard','UserInfo']),
        disable(){
            console.log('dddddd',this.bankcard)
            let data = {
                sPfaccount:'',//账户名
                sPfid:'',//身份证号码
                sPfcardNum:'',//卡号
                sPfopenban:'',//开户行名称
                sPfopCity:''//开户城市
            }
            for(let key in data){
                data[key] = this.bankcard[key]
            }
            for(let key in data){
                if(this.$refs.sPfid!==undefined){
                    console.log("sPfid",this.$refs.sPfid.valid);
                    if(this.$refs.sPfid.valid==false){
                        return true
                    }
                }
                if(this.$refs.sPfcardNum!==undefined){
                    console.log("sPfcardNum",this.$refs.sPfcardNum.valid);
                    if(this.$refs.sPfcardNum.valid==false){
                        return true
                    }
                }
                if(data[key] == ''){
                    return true
                }
            }
             return false
        }
         
    },
    mounted(){
    },
    methods:{
         
        confirm(){
            console.log("111",this.$refs.sPfid.valid);
            console.log("222",this.$refs.sPfcardNum.valid);
                if(!this.$refs.sPfid.valid){
                    this.$vux.toast.show({
                        text: '信息填写有误，请检查',
                        type: 'warn'
                    });
                    return 
                }
                if(!this.$refs.sPfcardNum.valid){
                    this.$vux.toast.show({
                        text: '信息填写有误，请检查',
                        type: 'warn'
                    });
                    return 
                }
            this.$vux.loading.show({
                text: 'Loading'
            })
            this.bankcard.user = this.UserInfo._id
             ServiceManager.submitBankcard(this.bankcard).then(data  => {
                console.log(data)
                this.$vux.loading.hide()  
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: data.data.msg,
                    type: 'success'
                    });
                    this.$store.commit('setbankcard',data.data.result);//返回数据存入store
                    console.log("bankcard",this.bankcard)
                } else {
                    this.$vux.toast.show({
                    text : data.data.msg,
                    type: 'warn'
                    });
                }
            });
        },
        edit(){
            console.log("111",this.$refs.sPfid.valid);
            console.log("222",this.$refs.sPfcardNum.valid);
                if(!this.$refs.sPfid.valid){
                    this.$vux.toast.show({
                        text: '信息填写有误，请检查',
                        type: 'warn'
                    });
                    return 
                }
                if(!this.$refs.sPfcardNum.valid){
                    this.$vux.toast.show({
                        text: '信息填写有误，请检查',
                        type: 'warn'
                    });
                    return 
                }
            this.$vux.loading.show({
                text: 'Loading'
            })
            ServiceManager.editBankcard(this.bankcard).then(data  => {
                console.log(data)
                this.$vux.loading.hide() 
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: data.data.msg,
                    type: 'success'
                    });
                    this.$store.commit('setbankcard',data.data.result);//返回数据存入store
                    console.log("bankcard",this.bankcard)
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
