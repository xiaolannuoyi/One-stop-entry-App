<template>
  <div>
    <x-header :left-options="{showBack: true}">个人信息</x-header>
    <tab :scroll-threshold="5">
      <tab-item selected @click.native="$router.replace(`/user/userCheckMeg/:${this.userid}/checkmsgMust`)">必填项</tab-item>
      <tab-item @click.native="$router.replace(`/user/userCheckMeg/:${this.userid}/checkmsgNOMust`)">非必填项</tab-item>
    </tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
          
  </div>
</template>

<script>
import { XHeader,Panel,Tab, TabItem } from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapGetters} from 'vuex'
export default {
  components: {
        XHeader,Panel,Tab, TabItem
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    },
    data () {
        return {
        }
    },
    computed:{
        ...mapGetters(['baseURL']),
        userid(){
          return this.$route.params.id
        }
    },
    methods:{
      getData(){
        console.log("id",this.$route.params.id)
        ServiceManager.findusercheckMsg(this.$route.params.id).then(data => {
          console.log(data)
          if(data.data.code == 200){
              let result = data.data.result;
              console.log(result);
            }else{

            }
          })
      }
    }
}
</script>

<style>

</style>
