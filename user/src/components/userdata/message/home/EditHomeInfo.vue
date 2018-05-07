<template>
  <div>
    <group>
        <x-input title="姓名" v-model="preHomeInfo.name" text-align="right"></x-input>
        <x-input title="与本人关系" v-model="preHomeInfo.Relation" text-align="right"></x-input>  
        <x-input title="工作单位" v-model="preHomeInfo.Company" text-align="right"></x-input>
        <x-input title="联系方式" v-model="preHomeInfo.Contact " text-align="right"></x-input>

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
            preHomeInfo:{},
            // preHomeInfo:{
            //     name:'',
            //     Relation:'',
            //     Company:'',
            //     Contact:''
            // }
        }
    
    },
    computed: {
        ...mapState(['homeInfo']),
    },
    mounted(){
        this.getdata()
    },
    methods:{
        getdata() {
            console.log("index",this.$route.params.index)
            console.log("this.homeInfo",this.homeInfo[this.$route.params.index]);
            this.preHomeInfo = this.homeInfo[this.$route.params.index];
        },
        confirm(){
             this.$vux.loading.show({
                 text: 'Loading'
            })
            ServiceManager.editpreHomeInfo(this.preHomeInfo).then(data => {
                console.log(data)
                this.$vux.loading.hide()                
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交更改成功',
                    type: 'success'
                    });
                    this.$store.commit('sethomeInfo',data.data.result);//返回数据存入store
                    this.$router.replace('/userdata/message/step/homeInfo');
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
