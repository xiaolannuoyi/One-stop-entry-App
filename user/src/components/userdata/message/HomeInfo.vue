<template>
  <div>
    <group>
        <x-button type="primary" @click.native="confirm">新增</x-button>
    </group>
    
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import { Group,XButton } from 'vux'
import store from '@/store/store.js'

export default {
    store,
    components: {
      Group,XButton
    },
    data(){
        return{
        }
    
    },
    computed: {
        // preBaseInfo() {
        //     console.log(this.$store.state.preBaseInfo);
        //     return this.$store.state.preBaseInfo;
        // },
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
