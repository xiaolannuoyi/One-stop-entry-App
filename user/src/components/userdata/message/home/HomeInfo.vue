<template>
  <div>
     <x-button type="primary" @click.native="add">新增</x-button>      
    <div v-for="(item,i) in homeInfo" :key="item.name">
        <home-item :home="item" :index="i"></home-item>
    </div>
    
  </div>
</template>

<script>
import homeItem from "./homeItem"
import ServiceManager from '@/services/services-manager';
import { Group,XButton,Cell, CellBox, } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
      Group,XButton,Cell, CellBox,homeItem
    },
    data(){
        return{

        }
    
    },
     mounted(){
        this.gethomeInfo();
    },
    computed: {
        homeInfo() {
            console.log(this.$store.state.homeInfo);
            return this.$store.state.homeInfo;
        },
    },
    methods:{
        gethomeInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.$store.state.UserInfo._id);
             ServiceManager.findhomeInfo(this.$store.state.UserInfo._id).then(data => {
                    console.log("yes");
                    this.$store.state.homeInfo = data.data.result;//返回数据存入store
                    console.log("store",this.$store.state.homeInfo)
                    this.$vux.loading.hide()
            });
        },
        add(){
          this.$router.replace("/userdata/message/step/addHomeInfo")
        }
    }
}
</script>

<style>

</style>
