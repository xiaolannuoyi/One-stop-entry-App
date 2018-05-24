<template>
  <div>
    <x-header :left-options="{showBack: false}">消息</x-header>
    <panel header="全部" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { XHeader,Panel } from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapState,mapGetters} from 'vuex'
export default {
    components: {
        XHeader,Panel
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    },
    data () {
        return {
            list: [
            ],
        }
    },
    computed:{
        ...mapState(['HrInfo']),
        ...mapGetters(['baseURL']),
    },
    methods:{
        getData(){
          let check = 1;
          this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.findcheck(check,this.HrInfo.Address).then(data => {
          console.log(data)
          this.$vux.loading.hide()          
          if(data.data.code == 200){
              let result = data.data.result;
              console.log(result);
              result.forEach(item => {
                  this.list.push({
                      'src': this.baseURL + item.avatar,
                      'title': item.Name,
                      'desc': item.Address+"--"+item.Department,
                      'url': '/user/userCheckMeg/'+item._id
                  })
              })
              console.log("list",this.list);
            }else{
                
            }
          })
        }
    }
}
</script>

<style>

</style>

