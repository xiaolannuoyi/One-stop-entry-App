<template>
  <div>
    <group>
        <datetime  title="起始年月" v-model="preEduBg.Startdate"></datetime>
        <datetime  title="截止年月" v-model="preEduBg.Enddate"></datetime>
        <x-input title="学校" v-model="preEduBg.Schoolname" text-align="right"></x-input>  
        <x-input title="院系" v-model="preEduBg.College" text-align="right"></x-input>  
        <x-input title="专业" v-model="preEduBg.Major" text-align="right"></x-input>  
        <x-input title="学历" v-model="preEduBg.Education" text-align="right"></x-input> 

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
            preEduBg:{
                Startdate:'',
                Enddate:'',
                Schoolname:'',
                College:'',
                Major:'',
                Education:''
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
            this.preEduBg.user = this.$store.state.UserInfo._id;
            ServiceManager.submitEduBgInfo(this.preEduBg).then(data => {
                console.log(data)
                this.$vux.loading.hide()                                
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交成功',
                    type: 'success'
                    });
                    this.$store.state.edubgInfo.push(data.data.result);//返回数据存入store
                    console.log("edubgInfo",this.$store.state.edubgInfo)
                    this.$router.replace('/userdata/message/step/eduBgInfo');
                } else {
                    this.$vux.toast.show({
                    text: '提交失败，请重试',
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
