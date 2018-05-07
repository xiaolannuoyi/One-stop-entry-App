<template>
  <div >
      <group >
        <cell
        :title="work.company"
        is-link
        :border-intent="false"
        :arrow-direction="show ? 'up' : 'down'"
        @click.native="show = !show"></cell>

        <template v-if="show">
            <div>
                <p>{{work.Startdate}}  {{work.Enddate}}</p>
                <p>{{work.post}}</p>
                <p>{{work.Provider}} {{work.Proname}} {{work.Prophone}}</p>
                <x-button type="warn" mini @click.native="show1 = true">删除</x-button>
                <x-button type="primary"  mini @click.native="editworkInfo(index)">编辑</x-button>
            </div>
            
        </template>
     </group>
     <!-- confirm -->
     <div v-transfer-dom>
      <confirm v-model="show1"
      title="删除"
      @on-confirm="onConfirm(work)">
        <p style="text-align:center;">确定删除这条工作经历么？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell,Confirm,TransferDomDirective as TransferDom } from 'vux'
import { mapState } from 'vuex';

export default {
    name: 'work-item',
    props:["work","index"],
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
        ...mapState(['workInfo']),
    },
    methods:{
        //编辑
        editworkInfo(index){
            console.log(index);
            
            this.$router.replace("/userdata/message/step/EditWorkInfo/"+index)
        },
        //删除
        onConfirm(work){
            this.$vux.loading.show({
                 text: 'Loading'
            })
            console.log(work)
            ServiceManager.delWorkInfo(work).then(data => {
                console.log(data)
                this.$vux.loading.hide()
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '删除成功',
                    type: 'success'
                    });
                     this.$store.commit('setworkInfo',data.data.result);//返回数据存入store
                    console.log("workInfo",this.workInfo)
                    this.$router.replace('/userdata/message/step/preWorkInfo');
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
