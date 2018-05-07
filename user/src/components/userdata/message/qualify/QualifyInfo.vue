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
import { mapState } from 'vuex';

export default {
    components: {
      Group,XButton,Cell, CellBox,qualifyItem
    },
    data(){
        return{

        }
    
    },
    computed: {
        ...mapState(['qualifyInfo','UserInfo']),
    },
    mounted(){
        this.getqualifyInfo();
    },
    methods:{
        getqualifyInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.UserInfo._id);
             ServiceManager.findqualifyInfo(this.UserInfo._id).then(data => {
                    console.log("yes");
                    this.$store.commit('setqualifyInfo',data.data.result);//返回数据存入store
                    console.log("store",this.qualifyInfo)
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
