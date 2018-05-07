<template>
  <div>
    <group>
        <x-input title="工作单位" v-model="preWorkInfo.company" text-align="right"></x-input>
        <datetime  title="开始日期" v-model="preWorkInfo.Startdate"></datetime>
        <datetime  title="结束日期" v-model="preWorkInfo.Enddate"></datetime>
        <x-input title="工作岗位" v-model="preWorkInfo.post" text-align="right"></x-input>  
        <x-input title="证明人" v-model="preWorkInfo.Provider" text-align="right"></x-input>  
        <x-input title="证明人岗位" v-model="preWorkInfo.Proname" text-align="right"></x-input>  
        <x-input title="证明人联系方式" v-model="preWorkInfo.Prophone" is-type="china-mobile" :max="11" text-align="right"></x-input>  

        <x-button type="primary" @click.native="confirm">提交更改</x-button>
          
    </group>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton,XInput,Datetime } from 'vux'
import { mapState } from 'vuex';

export default {
    components: {
      Group,XButton,XInput,Datetime
    },
    data(){
        return{
            index:'',
            preWorkInfo:{}
            // preWorkInfo:{
            //     company:'',
            //     Startdate:'',
            //     Enddate:'',
            //     post:'',
            //     Provider:'',
            //     Proname:'',
            //     Prophone:'',
            // }
        }
    
    },
    computed: {
        ...mapState(['workInfo']),
        
    },
    mounted(){
        this.getdata()
    },
    methods:{
        getdata() {
             console.log("index",this.$route.params.index)
             console.log("this.workInfo",this.workInfo[this.$route.params.index]);
             this.preWorkInfo = this.workInfo[this.$route.params.index];
        },
        confirm(){
            this.$vux.loading.show({
                text: 'Loading'
                })
            ServiceManager.editpreWorkInfo(this.preWorkInfo).then(data => {
                console.log(data)
                this.$vux.loading.hide() 
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '修改工作经历成功',
                    type: 'success'
                    });
                    this.$store.commit('setworkInfo',data.data.result);//返回数据存入store
                    console.log("workInfo",this.workInfo)
                    this.$router.replace('/userdata/message/step/preWorkInfo');
                } else {
                    this.$vux.toast.show({
                    text: '修改工作经历失败，请重试',
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
