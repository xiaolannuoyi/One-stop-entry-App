<template>
  <div>
    <x-header :left-options="{showBack: true}">个人信息</x-header>
    <tab :scroll-threshold="5">
      <tab-item selected @click.native="$router.replace(path1)">必填项</tab-item>
      <tab-item @click.native="$router.replace(path2)">非必填项</tab-item>
    </tab>
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
          
  </div>
</template>

<script>
import { XHeader,Panel,Tab, TabItem } from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapState,mapGetters} from 'vuex'
export default {
  components: {
        XHeader,Panel,Tab, TabItem
    },
    mounted() {

    },
    data () {
        return {
        }
    },
    computed:{
        path1(){
          return '/user/userCheckMeg/:'+this.$route.params.id+'/checkmsgMust'
        },
        path2(){
          return '/user/userCheckMeg/:'+this.$route.params.id+'/checkmsgNOMust'
        }
    },
    methods:{
    }
}
</script>

<style>

</style>
