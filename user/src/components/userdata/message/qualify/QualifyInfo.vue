<template>
  <div>
     <x-button type="primary" @click.native="add">新增</x-button>      
    <div v-for="(item,i) in qualifyInfo" :key="item.name">
        <qualify-item :qualify="item" :index="i"></qualify-item>
    </div>
    
  </div>
</template>

<script>
import qualifyItem from "./qualifyItem"
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell, CellBox, } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
      Group,XButton,Cell, CellBox,qualifyItem
    },
    data(){
        return{

        }
    
    },
    computed: {
        qualifyInfo() {
            console.log(this.$store.state.qualifyInfo);
            return this.$store.state.qualifyInfo;
        },
    },
    mounted(){
        this.getqualifyInfo();
    },
    methods:{
        getqualifyInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.$store.state.UserInfo._id);
             ServiceManager.findqualifyInfo(this.$store.state.UserInfo._id).then(data => {
                    console.log("yes");
                    this.$store.state.qualifyInfo = data.data.result;//返回数据存入store
                    console.log("store",this.$store.state.qualifyInfo)
                    this.$vux.loading.hide()
            });
        },
        add(){
          this.$router.replace("/userdata/message/step/addQualifyInfo")
        }
    }
}
</script>

<style>

</style>
