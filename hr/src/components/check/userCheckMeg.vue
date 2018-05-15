<template>
  <div>
    <x-header :left-options="{showBack: true}">个人信息</x-header>
    <tab :scroll-threshold="5">
      <tab-item selected @click.native="$router.replace(path1)">必填项</tab-item>
      <tab-item @click.native="$router.replace(path2)">非必填项</tab-item>
    </tab>
    <keep-alive>
      <router-view style="margin-bottom:200px;"></router-view>
    </keep-alive>

    <div class="ProblemBack">
        <flexbox >
            <flexbox-item>
              <x-button type="primary"  @click.native="checkback =!checkback">问题反馈</x-button>
            </flexbox-item>
            <flexbox-item>
              <x-button type="primary" :disabled='checkback' @click.native="comfirm">审核通过</x-button>
            </flexbox-item>
        </flexbox>
        <group  v-show="checkback">
          <x-textarea title="问题反馈" :max="200" v-model="backtext"></x-textarea>
          <x-button type="primary" @click.native="comfirmMesg">提交</x-button>
        </group>
    </div>
    
          
  </div>
</template>

<script>
import { XButton,XHeader,Panel,Tab, TabItem, Group ,XTextarea,Flexbox, FlexboxItem,Box} from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapState,mapGetters} from 'vuex'
export default {
  components: {
        XButton,XHeader,Panel,Tab, TabItem ,Group ,XTextarea,Flexbox, FlexboxItem,Box
    },
    mounted() {

    },
    data () {
        return {
          backtext:'',
          checkback:false,
          checkSuccess:false

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
      //审核通过 4
       comfirm(){
          let id = this.$route.params.id;
          let checkState = 3
            ServiceManager.confirmCherk(id,checkState,null).then(data => {
                console.log(data)
                if(data.data.code == 200){

                }else{

                }
            })
        },
        //反馈
        comfirmMesg(){
          let id = this.$route.params.id;
          let checkState = 2
          let checkText = this.backtext
            ServiceManager.confirmCherk(id,checkState,checkText).then(data => {
                console.log(data)
                if(data.data.code == 200){

                }else{

                }
            })
        },
    }
}
</script>

<style>
.ProblemBack{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
