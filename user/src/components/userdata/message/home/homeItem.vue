<template>
  <div >
      <group >
        <cell
        :title="home.name"
        is-link
        :border-intent="false"
        :arrow-direction="show ? 'up' : 'down'"
        @click.native="show = !show"></cell>
        <template v-if="show">
            <div style="padding-left:10px;">
                <p>关系：{{home.Relation}}</p>
                <p>工作单位：{{home.Company}}</p>
                <p>联系方式：{{home.Contact}}</p>
                <x-button type="warn" mini @click.native="show1 = true">删除</x-button>
                <x-button type="primary"  mini @click.native="edithomeInfo(index)">编辑</x-button>
            </div>
            
        </template>
     </group>
     <!-- confirm -->
     <div v-transfer-dom>
      <confirm v-model="show1"
      title="删除"
      @on-confirm="onConfirm(home)">
        <p style="text-align:center;">确定删除这条家庭成员么？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell,Confirm,TransferDomDirective as TransferDom } from 'vux'
import { mapState } from 'vuex';

export default {
    name: 'home-item',
    props:["home","index"],
    components: {
      Group,XButton,Cell,Confirm
    },
    directives: {
        TransferDom
    },
    data(){
        return{
             show: false,
             show1: false,
        }
    
    },
    computed: {
        ...mapState(['homeInfo']),
    },
    methods:{
        //编辑
        edithomeInfo(index){
            console.log(index);
            this.$router.replace("/userdata/message/step/EdithomeInfo/"+index)
        },
        //删除
        onConfirm(home){
            this.$vux.loading.show({
                 text: 'Loading'
            })
            console.log(home)
            ServiceManager.delHomeInfo(home).then(data => {
                console.log(data)
                this.$vux.loading.hide()                                
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '删除成功',
                    type: 'success'
                    });
                    this.$store.commit('sethomeInfo',data.data.result);//返回数据存入store
                    console.log("homeInfo",this.homeInfo);
                    this.$router.replace('/userdata/message/step/homeInfo');
                } else {
                    this.$vux.toast.show({
                    text: '删除失败，请重试',
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
