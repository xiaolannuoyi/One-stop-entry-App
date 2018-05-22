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
import { mapState } from 'vuex'

export default {
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
        ...mapState(['homeInfo','UserInfo']),
    },
    methods:{
        gethomeInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.UserInfo._id);
             ServiceManager.findhomeInfo(this.UserInfo._id).then(data => {
                    console.log("yes");
                    let result = data.data.result;
                    result.forEach(element => {
                        if(element['Contact']!==null){
                        // console.log("elsement.Contact",element['Contact'].toString())   
                         element['Contact'] = element['Contact'].toString()                         
                        }
                    });
                    this.$store.commit('sethomeInfo',result);//返回数据存入store
                    console.log("store",this.homeInfo)
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
