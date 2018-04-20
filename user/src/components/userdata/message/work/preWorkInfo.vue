<template>
  <div>
     <x-button type="primary" @click.native="add">新增</x-button>      
    <div v-for="(item,i) in workInfo" :key="item.id">
        <work-item :work="item" :index="i"></work-item>
    </div>
    
  </div>
</template>

<script>
import workItem from "./workItem"
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell, CellBox, } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
      Group,XButton,Cell, CellBox,workItem
    },
    data(){
        return{
             
        }
    
    },
    computed: {
        workInfo() {
            console.log(this.$store.state.workInfo);
            return this.$store.state.workInfo;
        },
    },
    mounted(){
        this.getworkInfo();
    },
    methods:{
        getworkInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.$store.state.UserInfo._id);
             ServiceManager.findworkInfo(this.$store.state.UserInfo._id).then(data => {
                    console.log("yes");
                    this.$store.state.workInfo = data.data.result;//返回数据存入store
                    console.log("store",this.$store.state.workInfo)
                    this.$vux.loading.hide()
            });
        },
        add(){
          this.$router.replace("/userdata/message/step/preAddWorkInfo")
        }
    }
}
</script>

<style>

</style>
