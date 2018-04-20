<template>
  <div>
     <x-button type="primary" @click.native="confirm">新增</x-button>      
    <div v-for="(item,i) in edubgInfo" :key="item.id">
        <edubg-item :edubg="item" :index="i"></edubg-item>
    </div>
    
  </div>
</template>

<script>
import edubgItem from "./EduBgItem"
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell, CellBox, } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
      Group,XButton,Cell, CellBox,edubgItem
    },
    data(){
        return{
             
        }
    
    },
    computed: {
        edubgInfo() {
            console.log(this.$store.state.edubgInfo);
            return this.$store.state.edubgInfo;
        },
    },
    mounted(){
        this.getedubgInfo();
    },
    methods:{
         getedubgInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.$store.state.UserInfo._id);
             ServiceManager.findedubgInfo(this.$store.state.UserInfo._id).then(data => {
                    console.log("yes");
                    this.$store.state.edubgInfo = data.data.result;//返回数据存入store
                    console.log("store",this.$store.state.edubgInfo)
                    this.$vux.loading.hide()
            });
        },
        confirm(){
          this.$router.replace("/userdata/message/step/addEduBgInfo")
        }
    }
}
</script>

<style>

</style>
