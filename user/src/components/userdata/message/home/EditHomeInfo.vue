<template>
  <div>
    <group>
        <x-input title="姓名" v-model="preHomeInfo.name"></x-input>
        <x-input title="与本人关系" v-model="preHomeInfo.Relation"></x-input>  
        <x-input title="工作单位" v-model="preHomeInfo.company"></x-input>
        <x-input title="联系方式" v-model="preHomeInfo.Contact "></x-input>

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
            // preHomeInfo:{
            //     name:'',
            //     Relation:'',
            //     Company:'',
            //     Contact:''
            // }
        }
    
    },
    computed: {
        preHomeInfo() {
            console.log("index",this.$route.params.index)
             console.log("this.$store.state.homeInfo",this.$store.state.homeInfo[this.$route.params.index]);
             return this.$store.state.homeInfo[this.$route.params.index];
        },
    },
    methods:{
        confirm(){
            let preHome= {}
            preHome.name = this.preHomeInfo.name;
            preHome.Relation = this.preHomeInfo.Relation;
            preHome.Company = this.preHomeInfo.Company;
            preHome.Contact = Number(this.preHomeInfo.Contact);
            preHome.user=this.$store.state.UserInfo._id;
            ServiceManager.editpreHomeInfo(preHome).then(data => {
                console.log(data)
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '修改密码成功',
                    type: 'success'
                    });
                    this.$store.state.homeInfo = data.data.result;//返回数据存入store
                    console.log("homeInfo",this.$store.state.homeInfo)
                    this.$router.replace('/userdata/message/step/homeInfo');
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
