<template>
  <div>
    <group>
        <datetime  title="获得年月" v-model="preQualifyInfo.Getdate"></datetime>
        <x-input title="证书名称" v-model="preQualifyInfo.Name" text-align="right"></x-input> 
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
            preQualifyInfo:{}
            // preQualifyInfo:{
            //     Getdate:'',
            //     Name:''
            // }
        }
    
    },
    computed: {
        ...mapState(['qualifyInfo']),
    },
    mounted(){
        this.getdata()
    },
    methods:{
        getdata() {
            console.log("index",this.$route.params.index)
             console.log("this.qualifyInfo",this.qualifyInfo[this.$route.params.index]);
             this.preQualifyInfo = this.qualifyInfo[this.$route.params.index];
        },
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
