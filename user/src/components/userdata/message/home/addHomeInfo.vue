<template>
  <div>
    <group>
        <x-input title="姓名" v-model="preHomeInfo.name" text-align="right">
            <div slot="label"><span class="req">*</span>姓名</div>
        </x-input>
        <x-input title="与本人关系" v-model="preHomeInfo.Relation" text-align="right">
            <div slot="label"><span class="req">*</span>与本人关系</div>
        </x-input>  
        <x-input title="工作单位" v-model="preHomeInfo.Company" text-align="right">
            <div slot="label"><span class="req">*</span>工作单位</div>
        </x-input>
        <x-input title="联系方式" v-model="preHomeInfo.Contact " is-type="china-mobile" :max="11" text-align="right">
            <div slot="label"><span class="req">*</span>联系方式</div>
        </x-input>

        <x-button type="primary" @click.native="confirm">提交</x-button>
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
            preHomeInfo:{
                name:'',
                Relation:'',
                Company:'',
                Contact:''
            }
        }
    
    },
    computed: {
        ...mapState(['preBaseInfo','UserInfo']),
    },
    methods:{
        confirm(){
             this.$vux.loading.show({
                 text: 'Loading'
            })
            this.preHomeInfo.user=this.UserInfo._id;
            ServiceManager.submitpreHomeInfo(this.preHomeInfo).then(data => {
                console.log(data)
                this.$vux.loading.hide()                
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交成功',
                    type: 'success'
                    });
                    this.$store.commit('addhomeInfo',data.data.result);//返回数据存入store
                    console.log("homeInfo",this.homeInfo)
                    this.$router.replace('/userdata/message/step/homeInfo');
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
