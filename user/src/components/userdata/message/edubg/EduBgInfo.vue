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
import { mapState } from 'vuex'

export default {
    components: {
      Group,XButton,Cell, CellBox,edubgItem
    },
    data(){
        return{
             
        }
    
    },
    computed: {
        ...mapState(['edubgInfo','UserInfo']),
    },
    mounted(){
        this.getedubgInfo();
    },
    methods:{
         getedubgInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.UserInfo._id);
             ServiceManager.findedubgInfo(this.UserInfo._id).then(data => {
                    console.log("yes");
                    this.$store.commit('setedubgInfo',data.data.result);//返回数据存入store
                    console.log("store",this.edubgInfo)
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
