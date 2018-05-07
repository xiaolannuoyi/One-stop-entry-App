<template>
  <div>
    <group>
        <datetime  title="起始年月" v-model="preEduBg.Startdate">
            <div slot="title"><span class="req">*</span>起始年月</div>
        </datetime>
        <datetime  title="截止年月" v-model="preEduBg.Enddate">
            <div slot="title"><span class="req">*</span>截止年月</div>
        </datetime>
        <x-input title="学校" v-model="preEduBg.Schoolname" text-align="right">
            <div slot="label"><span class="req">*</span>学校</div>
        </x-input>  
        <x-input title="院系" v-model="preEduBg.College" text-align="right">
            <div slot="label"><span class="req">*</span>院系</div>
        </x-input>  
        <x-input title="专业" v-model="preEduBg.Major" text-align="right">
            <div slot="label"><span class="req">*</span>专业</div></x-input>  
        <x-input title="学历" v-model="preEduBg.Education" text-align="right">
            <div slot="label"><span class="req">*</span>学历</div>
        </x-input> 

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
            preEduBg:{},
            // preEduBg:{
            //     Startdate:'',
            //     Enddate:'',
            //     Schoolname:'',
            //     College:'',
            //     Major:'',
            //     Education:''
            // }
        }
    
    },
    computed: {
        ...mapState(['edubgInfo']),
        
    },
    mounted(){
        this.getdata()
    },
    methods:{
        getdata() {
            console.log("index",this.$route.params.index)
             console.log("this.workInfo",this.edubgInfo[this.$route.params.index]);
             this.preEduBg = this.edubgInfo[this.$route.params.index];
        },
        confirm(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            ServiceManager.editEduBgInfo(this.preEduBg).then(data => {
                console.log(data)
                this.$vux.loading.hide()                
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交更改成功',
                    type: 'success'
                    });
                     this.$store.commit('setedubgInfo',data.data.result);//返回数据存入store
                    console.log("edubgInfo",this.edubgInfo)
                    this.$router.replace('/userdata/message/step/eduBgInfo');
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
