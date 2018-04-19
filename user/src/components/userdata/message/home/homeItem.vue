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
            <div>
                <p>{{home.Relation}}</p>
                <p>{{home.Company}}</p>
                <p>{{home.Contact}}</p>
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
import store from '@/store/store.js'

export default {
    name: 'home-item',
    props:["home","index"],
    store,
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
    },
    methods:{
        //编辑
        edithomeInfo(index){
            console.log(index);
            this.$router.replace("/userdata/message/step/EdithomeInfo/"+index)
        },
        //删除
        onConfirm(home){
            console.log(home)
            ServiceManager.delHomeInfo(home).then(data => {
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
