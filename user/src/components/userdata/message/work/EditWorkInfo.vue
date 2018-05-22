<template>
  <div>
    <group>
        <x-input title="工作单位" v-model="preWorkInfo.company" text-align="right">
            <div slot="label"><span class="req">*</span>工作单位</div>
        </x-input>
        <datetime  v-model="preWorkInfo.Startdate">
            <div slot="title"><span class="req">*</span>开始日期</div>
        </datetime>
        <datetime  v-model="preWorkInfo.Enddate">
            <div slot="title"><span class="req">*</span>结束日期</div>
        </datetime>
        <x-input title="工作岗位" v-model="preWorkInfo.post" text-align="right">
            <div slot="label"><span class="req">*</span>工作岗位</div>
        </x-input>  
        <x-input title="证明人" v-model="preWorkInfo.Provider" text-align="right"></x-input>  
        <x-input title="证明人岗位" v-model="preWorkInfo.Proname" text-align="right"></x-input>  
        <x-input title="证明人联系方式" v-model="preWorkInfo.Prophone" is-type="china-mobile" ref="Prophone" :max="11" text-align="right"></x-input>  

        <x-button type="primary" :disabled="cango" @click.native="confirm">提交更改</x-button>
          
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
            //preWorkInfo:{}
            // preWorkInfo:{
            //     company:'',
            //     Startdate:'',
            //     Enddate:'',
            //     post:'',
            //     Provider:'',
            //     Proname:'',
            //     Prophone:'',
            // }
            requestData:{
                company:'',
                Startdate:'',
                Enddate:'',
                post:'',
            },
            noData:{
                Provider:'',
                Proname:'',
                Prophone:'',
            }
        }
    
    },
    computed: {
        ...mapState(['workInfo']),
        preWorkInfo(){
            console.log("llllllll",this.workInfo[this.$route.params.index]);
            if(this.workInfo[this.$route.params.index]!==undefined){
                return this.workInfo[this.$route.params.index];
            }else{
                console.log('------------------');
                return {Enddate:"",Proname:"",Prophone:"",Provider:"",Startdate:"",company:"",post:""}
            }
        },
        cango(){
            let result = false;
            for(let key in this.requestData){
                this.requestData[key]=this.preWorkInfo[key]
            }
            for(let key in this.noData){
                this.noData[key] = this.preWorkInfo[key];
            }
            for(let key in this.requestData){
                if(this.requestData[key] == '' || this.requestData[key].length == 0){
                    result= true;
                }

            }
            console.log("this.$refs.Prophone",this.$refs.Prophone);
            
                if(this.$refs.Prophone!==undefined){
                    console.log("111",this.$refs.Prophone.valid);
                    if(this.$refs.Prophone.valid==false){
                        result= true
                    }
                }
            
           return result;
        },
    },
    mounted(){
    },
    methods:{
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
