<template>
  <div>
     <x-button type="primary" @click.native="confirm">新增</x-button>      
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
    computed: {
        homeInfo() {
            console.log(this.$store.state.homeInfo);
            return this.$store.state.homeInfo;
        },
    },
    methods:{
        confirm(){
          this.$router.replace("/userdata/message/step/addHomeInfo")
        }
    }
}
</script>

<style>

</style>
