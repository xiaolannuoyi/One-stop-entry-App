<template>
  <div>
    <group>
        <datetime  title="获得年月" v-model="preQualifyInfo.Getdate"></datetime>
        <x-input title="证书名称" v-model="preQualifyInfo.Name" text-align="right"></x-input> 

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
    },
    methods:{
        confirm(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            this.preQualifyInfo.user = this.$store.state.UserInfo._id;
            ServiceManager.submitpreQualifyInfo(this.preQualifyInfo).then(data => {
                console.log(data)
                this.$vux.loading.hide()
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '证书提交成功',
                    type: 'success'
                    });
                    this.$store.state.qualifyInfo.push(data.data.result);//返回数据存入store
                    this.$router.replace('/userdata/message/step/QualifyInfo');
                } else {
                    this.$vux.toast.show({
                    text: '证书提交失败，请重试',
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
