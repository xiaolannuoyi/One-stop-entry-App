<template>
  <div>
    <group>
        <datetime  title="获得年月" v-model="preQualifyInfo.Getdate">
            <div slot="title"><span class="req">*</span>获得年月</div>
        </datetime>
        <x-input title="证书名称" v-model="preQualifyInfo.Name" text-align="right">
            <div slot="label"><span class="req">*</span>证书名称</div>
        </x-input> 
        <x-button type="primary" @click.native="confirm" :disabled="cango">提交更改</x-button>
          
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
            requestData:{
                Getdate:'',
                Name:''
            },
            // preQualifyInfo:{}
            // preQualifyInfo:{
            //     Getdate:'',
            //     Name:''
            // }
        }
    
    },
    computed: {
        ...mapState(['qualifyInfo']),
        preQualifyInfo(){
            console.log("llllllll",this.qualifyInfo[this.$route.params.index]);
            if(this.qualifyInfo[this.$route.params.index]!==undefined){
                return this.qualifyInfo[this.$route.params.index];
            }else{
                console.log('------------------');
                return {Getdate:'',Name:''}
            }
        },
        cango(){
            let result = false;
            for(let key in this.requestData){
                this.requestData[key]=this.preQualifyInfo[key]
            }
            for(let key in this.requestData){
                if(this.requestData[key] == '' || this.requestData[key].length == 0){
                    result= true;
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
            ServiceManager.editpreQualifyInfo(this.preQualifyInfo).then(data => {
                console.log(data)
                this.$vux.loading.hide()
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交更改成功',
                    type: 'success'
                    });
                    this.$store.commit('setqualifyInfo',data.data.result);//返回数据存入store
                    this.$router.replace('/userdata/message/step/QualifyInfo');
                } else {
                    this.$vux.toast.show({
                    text: '提交更改失败，请重试',
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
