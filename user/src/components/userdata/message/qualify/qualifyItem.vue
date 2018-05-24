<template>
  <div >
      <group >
        <cell
        :title="qualify.Name +'--'+ qualify.Getdate"
        is-link
        :border-intent="false"
        :arrow-direction="show ? 'up' : 'down'"
        @click.native="show = !show"></cell>

        <template v-if="show">
            <div style="padding-left:10px;">
                <x-button type="warn" mini @click.native="show1 = true">删除</x-button>
                <x-button type="primary"  mini @click.native="editqualifyInfo(index)">编辑</x-button>
            </div>
        </template>
     </group>
     <!-- confirm -->
     <div v-transfer-dom>
      <confirm v-model="show1"
      title="删除"
      @on-confirm="onConfirm(qualify)">
        <p style="text-align:center;">确定删除这条资格证书么？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell,Confirm,TransferDomDirective as TransferDom } from 'vux'
import { mapState } from 'vuex';

export default {
    name: 'qualify-item',
    props:["qualify","index"],
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
        ...mapState(['qualifyInfo']),
    },
    methods:{
        //编辑
        editqualifyInfo(index){
            console.log(index);
            this.$router.replace("/userdata/message/step/EditqualifyInfo/"+index)
        },
        //删除
        onConfirm(qualify){
            this.$vux.loading.show({
                 text: 'Loading'
            })
            console.log(qualify)
            ServiceManager.delQualifyInfo(qualify).then(data => {
                console.log(data)
                 this.$vux.loading.hide()
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '删除成功',
                    type: 'success'
                    });
                     this.$store.commit('qualifyInfo',data.data.result);//返回数据存入store
                    console.log("qualifyInfo",this.qualifyInfo)
                    this.$router.replace('/userdata/message/step/QualifyInfo');
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
