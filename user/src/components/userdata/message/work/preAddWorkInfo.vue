<template>
  <div>
    <group>
        <x-input title="工作单位" v-model="preWorkInfo.company"></x-input>
        <datetime  title="开始日期" v-model="preWorkInfo.Startdate"></datetime>
        <datetime  title="结束日期" v-model="preWorkInfo.Enddate"></datetime>
        <x-input title="工作岗位" v-model="preWorkInfo.post"></x-input>  
        <x-input title="证明人" v-model="preWorkInfo.Provider"></x-input>  
        <x-input title="证明人岗位" v-model="preWorkInfo.Proname"></x-input>  
        <x-input title="证明人联系方式" v-model="preWorkInfo.Prophone"></x-input>  

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
            preWorkInfo:{
                company:'',
                Startdate:'',
                Enddate:'',
                post:'',
                Provider:'',
                Proname:'',
                Prophone:'',
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
            let prework= {}
            prework.company=this.preWorkInfo.company;
            prework.Startdate=this.preWorkInfo.Startdate;
            prework.Enddate=this.preWorkInfo.Enddate;
            prework.post=this.preWorkInfo.post;
            prework.Provider=this.preWorkInfo.Provider;
            prework.Proname=this.preWorkInfo.Proname;
            prework.Prophone=Number(this.preWorkInfo.Prophone);
            prework.user=this.$store.state.UserInfo._id;
            ServiceManager.submitpreWorkInfo(prework).then(data => {
                console.log(data)
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '修改密码成功',
                    type: 'success'
                    });
                    this.$store.state.workInfo.push(data.data.result);//返回数据存入store
                    console.log("workInfo",this.$store.state.workInfo)
                    this.$router.replace('/userdata/message/step/preWorkInfo');
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
