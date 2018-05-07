<template>
  <div >
      <group >
        <cell
        :title="edubg.Education"
        is-link
        :border-intent="false"
        :arrow-direction="show ? 'up' : 'down'"
        @click.native="show = !show"></cell>

        <template v-if="show">
            <div>
                <p>{{edubg.Startdate}}  {{edubg.Enddate}}</p>
                <p>{{edubg.Schoolname}}</p>
                <p>{{edubg.College}}</p>
                <p>{{edubg.Major}}</p>
                <x-button type="warn" mini @click.native="show1 = true">删除</x-button>
                <x-button type="primary"  mini @click.native="editedubgInfo(index)">编辑</x-button>
            </div>
            
        </template>
     </group>
     <!-- confirm -->
     <div v-transfer-dom>
      <confirm v-model="show1"
      title="删除"
      @on-confirm="onConfirm(edubg)">
        <p style="text-align:center;">确定删除这条教育背景么？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell,Confirm,TransferDomDirective as TransferDom } from 'vux'
import { mapState } from 'vuex';

export default {
    name: 'edubg-item',
    props:["edubg","index"],
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
        ...mapState(['edubgInfo']),
    },
    methods:{
        //编辑
        editedubgInfo(index){
            console.log(index);
            
            this.$router.replace("/userdata/message/step/EditEdubgInfo/"+index)
        },
        //删除
        onConfirm(edubg){
            this.$vux.loading.show({
                 text: 'Loading'
            })
            console.log(edubg)
            ServiceManager.delEdubgInfo(edubg).then(data => {
                console.log(data)
                this.$vux.loading.hide()                                                
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '删除成功',
                    type: 'success'
                    });
                    this.$store.commit('setedubgInfo',data.data.result);//返回数据存入store
                    console.log("edubgInfo",this.edubgInfo)
                    this.$router.replace('/userdata/message/step/eduBgInfo');
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
