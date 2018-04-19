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
    methods:{
        confirm(){
          this.$router.replace("/userdata/message/step/addEduBgInfo")
        }
    }
}
</script>

<style>

</style>
