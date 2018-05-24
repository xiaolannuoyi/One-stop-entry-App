<template>
  <div>
    <panel header="全部" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapState} from 'vuex'
export default {
    name:"userSee",
    components: {
        Panel
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
    },
    methods:{
        getData(){
          ServiceManager.findUser({Address:this.HrInfo.Address}).then(data => {
          console.log(data)
          if(data.data.code == 200){
              let result = data.data.result;
              result.forEach(item => {
                  this.list.push({
                      'src': 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                      'title': item.Name,
                      'desc': "电话号码:"+item.Tel,
                      'url': '/user/userMsg/'+item._id
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
