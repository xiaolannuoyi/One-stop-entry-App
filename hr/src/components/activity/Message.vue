<template>
  <div>
    <x-header :left-options="{showBack: false}">消息</x-header>
    <panel header="全部" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { XHeader,Panel } from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapGetters} from 'vuex'
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
        ...mapGetters(['baseURL']),
    },
    methods:{
        getData(){
          let check = 1;
          ServiceManager.findcheck(check).then(data => {
          console.log(data)
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

