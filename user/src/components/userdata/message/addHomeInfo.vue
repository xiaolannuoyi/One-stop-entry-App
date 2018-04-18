<template>
  <div>
    <group>
        <x-input title="姓名" v-model="preHomeInfo.name"></x-input>
        <x-input title="与本人关系" v-model="preHomeInfo.Relation"></x-input>  
        <x-input title="工作单位" v-model="preHomeInfo.company"></x-input>
        <x-input title="联系方式" v-model="preHomeInfo.Company "></x-input>

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
            preHomeInfo:{
                name:'',
                Relation:'',
                Company:'',
                Contact:''
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
            let preHome= {}
            preHome.name = this.preHomeInfo.company;
            preHome.Relation = this.preHomeInfo.Relation;
            preHome.Company = this.preHomeInfo.Company;
            preHome.Contact = Number(this.preHomeInfo.Contact);
            preHome.user=this.$store.state.UserInfo._id;
            ServiceManager.submitpreHomeInfo(preHome).then(data => {
                console.log(data)
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '修改密码成功',
                    type: 'success'
                    });
                    this.$store.state.workInfo = data.data.result;//返回数据存入store
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
