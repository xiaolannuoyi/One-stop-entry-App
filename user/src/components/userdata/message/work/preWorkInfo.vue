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
import { mapState } from 'vuex';

export default {
    components: {
      Group,XButton,Cell, CellBox,workItem
    },
    data(){
        return{
             
        }
    
    },
    computed: {
        ...mapState(['workInfo','UserInfo']),
    },
    mounted(){
        this.getworkInfo();
    },
    methods:{
        getworkInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.UserInfo._id);
             ServiceManager.findworkInfo(this.UserInfo._id).then(data => {
                    console.log("yes");
                    let result = data.data.result;
                    result.forEach(element => {
                        if(element['Prophone']!==null){
                        // console.log("elsement.Prophone",element['Prophone'].toString())   
                         element['Prophone'] = element['Prophone'].toString()                         
                        }
                    });
                    this.$store.commit('setworkInfo',result);//返回数据存入store
                    console.log("store",this.workInfo)
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
