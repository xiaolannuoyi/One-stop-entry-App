<template>
  <div>
    <group>
        <datetime  title="获得年月" v-model="preQualifyInfo.Getdate"></datetime>
        <x-input title="证书名称" v-model="preQualifyInfo.Name"></x-input> 

        <x-button type="primary" @click.native="confirm">提交</x-button>
          
    </group>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton,XInput,Datetime } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
      Group,XButton,XInput,Datetime
    },
    data(){
        return{
            preQualifyInfo:{
                Getdate:'',
                Name:''
            }
        }
    
    },
    computed: {
        // preBaseInfo() {
        //     console.log(this.$store.state.preBaseInfo);
        //     return this.$store.state.preBaseInfo;
        // },
    },
    methods:{
        confirm(){
            let preQualify= {}
            preQualify.Name=this.preQualifyInfo.Name;
            preQualify.Getdate=new Date(this.preQualifyInfo.Getdate).getTime();
            preQualify.user=this.$store.state.UserInfo._id;
            ServiceManager.submitpreQualifyInfo(preQualify).then(data => {
                console.log(data)
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '修改密码成功',
                    type: 'success'
                    });
                    // this.$store.state.preQualify = data.data.result;//返回数据存入store
                    // console.log("preQualify",this.$store.state.preQualify)
                    // this.$router.replace('/userdata/message/step/QualifyInfo');
                } else {
                    this.$vux.toast.show({
                    text: '修改密码失败，请重试',
                    type: 'success'
                    });
                }
            });
        }
    }
}
</script>

<style>

</style>
