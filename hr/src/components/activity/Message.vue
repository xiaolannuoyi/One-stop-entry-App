<template>
  <div>
    <x-header :left-options="{showBack: false}">消息</x-header>
    <panel header="全部" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { XHeader,Panel } from 'vux'
import ServiceManager from '@/services/services-manager';

export default {
    name:"hrSee",
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
    methods:{
        getData(){
          let check = 3;
          ServiceManager.findcheck(check).then(data => {
          console.log(data)
          if(data.data.code == 200){
              let result = data.data.result;
              console.log(result);
              
              result.forEach(item => {
                  this.list.push({
                      'src': item.avatar,
                      'title': item.Name,
                      'desc': item.Account+"--"+item.Address,
                      'url': '/hr/hrMsg/'+item._id
                  })
              })
              console.log("list",this.list);
            }
          })
        }
    }
}
</script>

<style>

</style>

