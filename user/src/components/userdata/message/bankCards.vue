<template>
  <div>
    <group>
      <cell title="招商银行"></cell>
      <x-input title="账户名" v-model="ZSbankcard.sPfaccount" type="text"  :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>账户名</div>
      </x-input>
      <x-input title="身份证号码" v-model="ZSbankcard.sPfid" type="number" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>身份证号码</div>          
      </x-input>
      <x-input title="卡号" v-model="ZSbankcard.sPfcardNum" type="number" :min="16" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>卡号</div>          
      </x-input>
      <x-input title="开户行名称" v-model="ZSbankcard.sPfopenban" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户行名称</div>          
      </x-input>
      <x-input title="开户城市" v-model="ZSbankcard.sPfopCity" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户城市</div>          
      </x-input>
    </group>
     <x-button  v-if="ZSbankcard.user == null" type="primary" @click.native="confirm">提交</x-button>
     <x-button v-else type="primary" @click.native="edit">提交更改</x-button>     
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
        ...mapState(['bankcard','UserInfo']),
        ZSbankcard() {
            console.log(this.bankcard);
            return this.bankcard;
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
            console.log("userid",this.UserInfo._id);
            
             ServiceManager.findbankcard(this.UserInfo._id).then(data => {
                this.$vux.loading.hide()                 
                if(data.data.result ==null){
                    console.log("null");
                    return 
                }else{
                    console.log("yes");
                    this.$store.commit('setbankcard',data.data.result);//返回数据存入store
                    console.log("store",this.bankcard)
                }
                
            });
        },
        confirm(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            this.ZSbankcard.user = this.UserInfo._id
             ServiceManager.submitBankcard(this.ZSbankcard).then(data  => {
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
